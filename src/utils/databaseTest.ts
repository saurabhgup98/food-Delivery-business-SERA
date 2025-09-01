import { useState, useEffect } from 'react';

export const useDatabaseTest = () => {
  const [dbStatus, setDbStatus] = useState<string>('Testing...');
  const [isLoading, setIsLoading] = useState(true);

  const testDatabaseConnection = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/test-db');
      const data = await response.json();
      
      if (data.success) {
        setDbStatus('✅ Database Connected Successfully!');
      } else {
        setDbStatus('❌ Database Connection Failed');
      }
    } catch (error) {
      setDbStatus('❌ Database Connection Error');
      console.error('Database test error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    testDatabaseConnection();
  }, []);

  return {
    dbStatus,
    isLoading,
    testDatabaseConnection
  };
};

// Database test component (for future use)
export const DatabaseTestComponent = () => {
  const { dbStatus, isLoading, testDatabaseConnection } = useDatabaseTest();

  return (
    <div className="text-center mt-8">
      <h2 className="text-2xl font-semibold mb-4">Database Connection Test</h2>
      <div className="text-lg">
        {isLoading ? (
          <p className="text-blue-500">🔄 Testing connection...</p>
        ) : (
          <p className={dbStatus.includes('✅') ? 'text-green-500' : 'text-red-500'}>
            {dbStatus}
          </p>
        )}
      </div>
      
      <button 
        onClick={testDatabaseConnection}
        disabled={isLoading}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        Test Connection Again
      </button>
    </div>
  );
};
