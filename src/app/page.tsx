'use client';

import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-sera-yellow">SERA Business</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Empowering Restaurant Owners with Smart Management Solutions
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/login" 
              className="px-8 py-3 bg-sera-yellow text-dark-900 font-semibold rounded-lg hover:bg-sera-yellow/90 transition-all duration-200"
            >
              Login
            </Link>
            <Link 
              href="/register" 
              className="px-8 py-3 border-2 border-sera-yellow text-sera-yellow font-semibold rounded-lg hover:bg-sera-yellow hover:text-dark-900 transition-all duration-200"
            >
              Register
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose SERA?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-sera-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Easy Management</h3>
              <p className="text-gray-400">Manage orders, menus, and staff effortlessly</p>
                </div>
                
            {/* Feature 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-sera-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Analytics</h3>
              <p className="text-gray-400">Track performance and growth insights</p>
                </div>
                
            {/* Feature 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-sera-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Payments</h3>
              <p className="text-gray-400">Secure and fast payment processing</p>
                  </div>
                  
            {/* Feature 4 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-sera-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Delivery</h3>
              <p className="text-gray-400">Seamless delivery integration</p>
                  </div>
                </div>
              </div>
      </section>

      {/* Admin Access Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Admin Portal Access
          </h2>
          <p className="text-gray-300 mb-8">
            Already have an account? Access your dashboard to manage restaurants, users, and payments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/dashboard" 
              className="px-6 py-3 bg-sera-blue text-white font-semibold rounded-lg hover:bg-sera-blue/90 transition-all duration-200"
            >
              Go to Dashboard
            </Link>
            <Link 
              href="/login" 
              className="px-6 py-3 border border-sera-blue text-sera-blue font-semibold rounded-lg hover:bg-sera-blue hover:text-white transition-all duration-200"
            >
              Admin Login
            </Link>
            </div>
          </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-dark-700">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 SERA Business. All rights reserved.
          </p>
          </div>
      </footer>
    </div>
  );
}
