'use client';

import { useState } from 'react';
import { MenuIcon, XIcon, BellIcon, SearchIcon, UserIcon, LogOutIcon } from '@/components/Icons';
import AuthModals from '@/components/Auth/AuthModals';

interface HeaderProps {
  onSearch: (query: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('dashboard');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogin = () => {
    setAuthMode('login');
    setShowAuthModal(true);
  };

  const handleRegister = () => {
    setAuthMode('register');
    setShowAuthModal(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <header className="bg-dark-800 border-b border-gray-600 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-sera-blue to-sera-pink rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div>
                <h1 className="text-white font-bold text-lg">SERA BUSINESS</h1>
                <p className="text-gray-400 text-xs">ADMIN PANEL</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {[
                { id: 'dashboard', label: 'Dashboard', badge: null },
                { id: 'restaurants', label: 'Restaurants', badge: '12 Pending' },
                { id: 'users', label: 'Users', badge: '5 New' },
                { id: 'payments', label: 'Payments', badge: null }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveNavItem(item.id)}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeNavItem === item.id
                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      : 'text-gray-300 hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 hover:border hover:border-slate-500/30'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span>{item.label}</span>
                    {activeNavItem === item.id && (
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    )}
                    {item.badge && (
                      <span className="bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded-full border border-yellow-500/30">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Search restaurants, users, ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-64 px-4 py-2 pl-10 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-sera-blue/50 focus:ring-2 focus:ring-sera-blue/20"
                />
                                 <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>

              {/* Notifications */}
                             <button className="relative p-2 text-gray-300 hover:text-white transition-colors">
                 <BellIcon className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full text-xs text-white flex items-center justify-center">
                  3
                </span>
              </button>

              {/* Auth Buttons */}
              {!isLoggedIn ? (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleLogin}
                    className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
                  >
                    Login
                  </button>
                  <button
                    onClick={handleRegister}
                    className="px-4 py-2 bg-yellow-500 text-dark-900 font-medium rounded-lg hover:bg-yellow-400 transition-colors"
                  >
                    Register
                  </button>
                </div>
              ) : (
                                 <div className="flex items-center space-x-2">
                   <button className="p-2 text-gray-300 hover:text-white transition-colors">
                     <UserIcon className="w-5 h-5" />
                   </button>
                   <button
                     onClick={handleLogout}
                     className="p-2 text-gray-300 hover:text-white transition-colors"
                   >
                     <LogOutIcon className="w-5 h-5" />
                   </button>
                 </div>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
              >
                                 {showMobileMenu ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {showMobileMenu && (
            <div className="md:hidden py-4 border-t border-gray-600">
              <div className="space-y-2">
                {[
                  { id: 'dashboard', label: 'Dashboard', badge: null },
                  { id: 'restaurants', label: 'Restaurants', badge: '12 Pending' },
                  { id: 'users', label: 'Users', badge: '5 New' },
                  { id: 'payments', label: 'Payments', badge: null }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveNavItem(item.id);
                      setShowMobileMenu(false);
                    }}
                    className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeNavItem === item.id
                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        : 'text-gray-300 hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 hover:border hover:border-slate-500/30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded-full border border-yellow-500/30">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Auth Modal */}
      <AuthModals
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
      />
    </>
  );
}
