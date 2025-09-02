'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  MenuIcon,
  XIcon,
  BellIcon,
  SearchIcon,
  UserIcon,
  LogOutIcon
} from '../Icons';
import AuthModals from '../Auth/AuthModals';

interface HeaderProps {
  onSearch?: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  onSearch 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const profileDropdownRef = useRef<HTMLDivElement>(null);

  // Mock admin user data
  const adminUser = {
    name: 'Admin User',
    email: 'admin@serafood.com',
    role: 'Super Admin'
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    };

    if (isProfileDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileDropdownOpen]);

  const handleSearch = (query: string) => {
    alert(`Search: ${query}`);
    onSearch?.(query);
  };

  const handleLogout = () => {
    alert('Logout clicked!');
    setIsLoggedIn(false);
    setIsProfileDropdownOpen(false);
  };

  const handleProfileOptionClick = () => {
    setIsProfileDropdownOpen(false);
  };

  const handleNotificationsToggle = () => {
    if (!isLoggedIn) {
      setAuthMode('login');
      setShowAuthModal(true);
      return;
    }
    setIsNotificationsOpen(!isNotificationsOpen);
    setIsProfileDropdownOpen(false);
  };

  const handleLogin = () => {
    setAuthMode('login');
    setShowAuthModal(true);
  };

  const handleRegister = () => {
    setAuthMode('register');
    setShowAuthModal(true);
  };

  const handleAuthSuccess = () => {
    setIsLoggedIn(true);
    setShowAuthModal(false);
    // Show profile dropdown after login
    setTimeout(() => {
      setIsProfileDropdownOpen(true);
    }, 500);
  };

  const handleModeChange = (mode: 'login' | 'register') => {
    setAuthMode(mode);
  };

  // Navigation items - removed Settings since it's in profile dropdown
  const navigationItems = [
    { name: 'Dashboard', path: '/dashboard', isActive: false },
    { name: 'Restaurants', path: '/restaurants', isActive: false, badge: '12 Pending' },
    { name: 'Users', path: '/users', isActive: false, badge: '5 New' },
    { name: 'Payments', path: '/payments', isActive: false }
  ];

  const handleNavClick = (itemName: string) => {
    // Handle different navigation items
    switch (itemName) {
      case 'Dashboard':
        alert('Navigating to Dashboard page');
        // Here you would typically use Next.js router to navigate
        // router.push('/dashboard');
        break;
      case 'Restaurants':
        alert('Navigating to Restaurants management page');
        // router.push('/restaurants');
        break;
      case 'Users':
        alert('Navigating to Users management page');
        // router.push('/users');
        break;
      case 'Payments':
        alert('Navigating to Payments management page');
        // router.push('/payments');
        break;
      default:
        alert(`${itemName} clicked!`);
    }
  };

  // Get first letter of user's name for profile circle
  const getUserInitial = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <>
      <header className="relative bg-gradient-to-r from-sera-pink via-sera-orange to-sera-pink shadow-2xl sticky top-0 z-40 overflow-hidden">
        {/* Beautiful background pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-sera-yellow/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-sera-blue/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Subtle mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-sera-pink/80 via-sera-orange/90 to-sera-pink/80"></div>

        <div className="relative max-w-full mx-auto px-4 sm:px-2 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Left Side - Logo, Brand Name, and Navigation */}
            <div className="flex items-center space-x-8">
              {/* Logo and Brand */}
              <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => alert('SERA BUSINESS clicked!')}>
                {/* SERA Logo - Scooter Delivery Icon */}
                <div className="relative">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                    {/* Scooter Icon */}
                    <div className="relative w-6 h-6">
                      {/* Scooter body */}
                      <div className="absolute bottom-0 left-0 w-4 h-2 bg-sera-blue rounded-full"></div>
                      {/* Scooter handle */}
                      <div className="absolute top-0 right-0 w-1 h-3 bg-sera-blue rounded-full"></div>
                      {/* Delivery box */}
                      <div className="absolute bottom-1 right-1 w-2 h-1.5 bg-sera-yellow rounded-sm"></div>
                      {/* Person */}
                      <div className="absolute top-1 left-1 w-1 h-1.5 bg-sera-orange rounded-full"></div>
                    </div>
                  </div>
                  {/* Animated delivery trail */}
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-sera-yellow rounded-full animate-pulse"></div>
                </div>
                
                {/* Brand Name */}
                <div className="hidden sm:block mr-6">
                  <h1 className="text-white font-display font-bold text-xl">
                    <span className="text-white">SERA</span>
                    <span className="text-sera-yellow"> BUSINESS</span>
                  </h1>
                  <p className="text-xs text-white/80 font-medium">ADMIN PANEL</p>
                </div>
              </div>

              {/* Desktop Navigation - Original styling */}
              <nav className="hidden md:flex items-center space-x-1">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.name)}
                    className={`relative px-3 py-1 text-white font-semibold transition-all duration-500 hover:text-sera-yellow group overflow-hidden ${item.isActive ? 'text-sera-yellow' : 'text-white/95'}`}
                  >
                    <span className="relative z-10 flex items-center">
                      {item.name}
                      {item.badge && (
                        <div className="ml-2 flex flex-col items-center">
                          <span className="text-xs font-bold bg-sera-yellow text-dark-900 px-1 rounded">
                            {item.badge.split(' ')[0]}
                          </span>
                          <span className="text-xs font-bold bg-sera-yellow text-dark-900 px-1 rounded -mt-0.5">
                            {item.badge.split(' ')[1]}
                          </span>
                        </div>
                      )}
                      {item.isActive && (
                        <div className="ml-2 w-2 h-2 bg-sera-yellow rounded-full animate-pulse"></div>
                      )}
                    </span>
                    {/* Glowing background effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-sera-yellow/20 to-sera-orange/20 rounded-lg transform transition-all duration-500 ${item.isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100'}`}></div>
                    {/* Animated border */}
                    <div className={`absolute inset-0 border-2 border-sera-yellow rounded-lg transform transition-all duration-500 ${item.isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100'}`}></div>
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-all duration-700 -translate-x-full group-hover:translate-x-full"></div>
                  </button>
                ))}
              </nav>
            </div>

            {/* Right Side - Search Bar and Actions */}
            <div className="flex items-center space-x-12">
              {/* Search Bar - Original styling */}
              <div className="hidden lg:flex w-68">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search restaurants, users, orders..."
                    className="w-full px-4 py-2 pl-10 bg-white/10 text-white placeholder-white/70 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-sera-yellow focus:border-transparent backdrop-blur-sm"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSearch((e.target as HTMLInputElement).value);
                      }
                    }}
                  />
                  <SearchIcon className="absolute left-3 top-2.5 w-4 h-4 text-white/70" />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2">
                {/* Notifications - Original styling */}
                <div className="relative">
                  <button 
                    onClick={handleNotificationsToggle}
                    className="relative p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-200 hover:scale-105"
                  >
                    <BellIcon className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-sera-yellow rounded-full text-xs flex items-center justify-center text-dark-900 font-bold">
                      3
                    </span>
                  </button>
                  
                  {/* Notifications Dropdown - Fixed z-index */}
                  {isNotificationsOpen && (
                    <div className="absolute right-0 mt-3 w-80 bg-dark-800 rounded-xl shadow-2xl border border-dark-600 z-[9999]">
                      <div className="p-4 border-b border-dark-600">
                        <h3 className="text-white font-semibold">Notifications</h3>
                      </div>
                      <div className="p-2">
                        <div className="p-3 text-gray-300 hover:bg-dark-700 rounded-lg cursor-pointer transition-all duration-200" onClick={() => alert('Notification 1 clicked!')}>
                          <p className="text-sm">12 restaurants pending approval</p>
                          <p className="text-xs text-gray-500">2 minutes ago</p>
                        </div>
                        <div className="p-3 text-gray-300 hover:bg-dark-700 rounded-lg cursor-pointer transition-all duration-200" onClick={() => alert('Notification 2 clicked!')}>
                          <p className="text-sm">5 new user registrations</p>
                          <p className="text-xs text-gray-500">5 minutes ago</p>
                        </div>
                        <div className="p-3 text-gray-300 hover:bg-dark-700 rounded-lg cursor-pointer transition-all duration-200" onClick={() => alert('Notification 3 clicked!')}>
                          <p className="text-sm">System maintenance scheduled</p>
                          <p className="text-xs text-gray-500">1 hour ago</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Auth Buttons or Profile */}
                {!isLoggedIn ? (
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={handleLogin}
                      className="px-3 py-1.5 text-white hover:bg-white/10 rounded-lg transition-all duration-200 hover:scale-105 font-medium text-sm border border-white/20 hover:border-white/40 backdrop-blur-sm"
                    >
                      Login
                    </button>
                    <button 
                      onClick={handleRegister}
                      className="px-3 py-1.5 bg-sera-yellow text-dark-900 hover:bg-sera-yellow/90 rounded-lg transition-all duration-200 hover:scale-105 font-medium text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      Register
                    </button>
                  </div>
                ) : (
                  /* Admin Profile - Fixed styling */
                  <div className="relative group">
                    <button 
                      className="flex items-center space-x-2 p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-200 hover:scale-105"
                      onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                    >
                      {/* User Profile Circle with First Letter */}
                      <div className="w-8 h-8 bg-gradient-to-br from-white/30 to-white/10 rounded-full flex items-center justify-center border-2 border-white/40 hover:border-white/60 transition-all duration-200 shadow-lg hover:shadow-xl">
                        <span className="text-white font-bold text-sm">
                          {getUserInitial(adminUser.name)}
                        </span>
                      </div>
                      <span className="hidden sm:block text-sm font-medium">{adminUser.name}</span>
                    </button>
                    
                    {/* Dropdown Menu - Fixed z-index and visibility */}
                    {isProfileDropdownOpen && (
                      <div 
                        className="absolute right-0 mt-3 w-64 bg-dark-800 rounded-xl shadow-2xl border border-dark-600 z-[9999]"
                        ref={profileDropdownRef}
                      >
                        {/* User Info Header */}
                        <div className="p-4 border-b border-dark-600 bg-dark-700 rounded-t-xl">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-sera-blue to-sera-blue/80 rounded-full flex items-center justify-center border-2 border-sera-blue/30 shadow-lg">
                              <span className="text-white font-bold text-lg">
                                {getUserInitial(adminUser.name)}
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-white font-semibold text-sm truncate">{adminUser.name}</p>
                              <p className="text-gray-400 text-xs truncate">{adminUser.email}</p>
                              <div className="flex items-center mt-1">
                                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                                <span className="text-green-400 text-xs font-medium">{adminUser.role}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Menu Items */}
                        <div className="p-2">
                          <button 
                            onClick={() => { alert('Profile clicked!'); handleProfileOptionClick(); }}
                            className="flex items-center space-x-3 px-3 py-2.5 text-gray-300 hover:bg-dark-700 hover:text-white rounded-lg transition-all duration-200 group/item w-full text-left"
                          >
                            <div className="w-5 h-5 bg-gradient-to-br from-sera-blue to-sera-blue/80 rounded-full flex items-center justify-center">
                              <UserIcon className="w-3 h-3 text-white" />
                            </div>
                            <span className="font-medium">Profile</span>
                          </button>
                          
                          <button 
                            onClick={() => { alert('Settings clicked!'); handleProfileOptionClick(); }}
                            className="flex items-center space-x-3 px-3 py-2.5 text-gray-300 hover:bg-dark-700 hover:text-white rounded-lg transition-all duration-200 group/item w-full text-left"
                          >
                            <div className="w-5 h-5 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <span className="font-medium">Settings</span>
                          </button>
                        </div>

                        {/* Logout Section */}
                        <div className="p-2 border-t border-dark-600 bg-dark-700 rounded-b-xl">
                          <button 
                            onClick={handleLogout}
                            className="flex items-center space-x-3 px-3 py-2.5 text-red-400 hover:bg-red-500/20 hover:text-red-300 rounded-lg transition-all duration-200 w-full group/item"
                          >
                            <div className="w-5 h-5 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                              <LogOutIcon className="w-3 h-3 text-white" />
                            </div>
                            <span className="font-medium">Logout</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  {isMobileMenuOpen ? (
                    <XIcon className="w-5 h-5" />
                  ) : (
                    <MenuIcon className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="lg:hidden pb-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search restaurants, users, orders..."
                className="w-full px-4 py-2 pl-10 bg-white/10 text-white placeholder-white/70 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-sera-yellow focus:border-transparent backdrop-blur-sm"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch((e.target as HTMLInputElement).value);
                  }
                }}
              />
              <SearchIcon className="absolute left-3 top-2.5 w-4 h-4 text-white/70" />
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-white/20 bg-gradient-to-r from-sera-pink to-sera-orange -mx-4 sm:-mx-2 lg:-mx-12 px-4 sm:px-2 lg:px-12">
              <nav className="flex flex-col space-y-1 pt-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => { handleNavClick(item.name); setIsMobileMenuOpen(false); }}
                    className={`flex items-center space-x-3 px-4 py-3 text-white font-medium transition-all duration-300 hover:bg-white/10 rounded-lg group ${item.isActive ? 'bg-sera-yellow/20 text-sera-yellow' : 'text-white/90'}`}
                  >
                    <div className={`w-6 h-6 flex items-center justify-center rounded-lg transition-all duration-300 ${item.isActive ? 'bg-sera-yellow text-dark-900' : 'bg-white/10 text-white group-hover:bg-sera-yellow group-hover:text-dark-900'}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <span className="flex-1 text-left">{item.name}</span>
                    {item.badge && (
                      <div className="flex flex-col items-center">
                        <span className="text-xs font-bold bg-sera-yellow text-dark-900 px-1 rounded">
                          {item.badge.split(' ')[0]}
                        </span>
                        <span className="text-xs font-bold bg-sera-yellow text-dark-900 px-1 rounded -mt-0.5">
                          {item.badge.split(' ')[1]}
                        </span>
                      </div>
                    )}
                    {item.isActive && (
                      <div className="w-2 h-2 bg-sera-yellow rounded-full animate-pulse"></div>
                    )}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Auth Modals */}
      <AuthModals
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
        onModeChange={handleModeChange}
        onSuccess={handleAuthSuccess}
      />
    </>
  );
};

export default Header;
