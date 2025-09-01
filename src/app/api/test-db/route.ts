import { NextResponse } from 'next/server';
import { connectDB, getConnectionStatus } from '@/lib/database';

export async function GET() {
  try {
    // Connect to database
    await connectDB();
    
    const isConnected = getConnectionStatus();
    
    if (isConnected) {
      return NextResponse.json({
        success: true,
        message: 'Database connection successful!',
        status: 'connected',
        timestamp: new Date().toISOString()
      });
    } else {
      return NextResponse.json({
        success: false,
        message: 'Database connection failed',
        status: 'disconnected',
        timestamp: new Date().toISOString()
      }, { status: 500 });
    }
  } catch (error: unknown) {
    console.error('Database test error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({
      success: false,
      message: 'Database connection error',
      error: errorMessage,
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}
