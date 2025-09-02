import mongoose from 'mongoose';

let isConnected = false;
let currentURI = '';

export const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.NODE_ENV === 'production' 
      ? process.env.MONGODB_URI_PROD 
      : process.env.MONGODB_URI;

    if (!mongoURI) {
      throw new Error('MongoDB URI is not defined in environment variables');
    }

    // If already connected with the same URI, return
    if (isConnected && currentURI === mongoURI) {
      console.log('✅ MongoDB already connected');
      return;
    }

    // If connected with different URI, disconnect first
    if (isConnected && currentURI !== mongoURI) {
      console.log('🔄 Disconnecting from previous connection...');
      await mongoose.disconnect();
      isConnected = false;
    }

    // Connect to database
    const conn = await mongoose.connect(mongoURI, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      bufferCommands: false,
    });

    isConnected = true;
    currentURI = mongoURI;
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    
    // Handle connection events
    mongoose.connection.on('error', (err) => {
      console.error('❌ MongoDB connection error:', err);
      isConnected = false;
    });

    mongoose.connection.on('disconnected', () => {
      console.log('⚠️ MongoDB disconnected');
      isConnected = false;
    });

    mongoose.connection.on('reconnected', () => {
      console.log('🔄 MongoDB reconnected');
      isConnected = true;
    });

  } catch (error) {
    console.error('❌ Database connection failed:', error);
    isConnected = false;
    throw error;
  }
};

export const disconnectDB = async (): Promise<void> => {
  try {
    await mongoose.disconnect();
    isConnected = false;
    currentURI = '';
    console.log('✅ MongoDB disconnected');
  } catch (error) {
    console.error('❌ Error disconnecting from MongoDB:', error);
  }
};

export const getConnectionStatus = (): boolean => {
  return isConnected;
};
