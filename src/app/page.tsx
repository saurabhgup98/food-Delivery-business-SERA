'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [dbStatus, setDbStatus] = useState<string>('Testing...');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    testDatabaseConnection();
  }, []);

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

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-center mb-8">
        App Created
      </h1>
      
      <div className="text-center">
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
    </main>
  );
}
