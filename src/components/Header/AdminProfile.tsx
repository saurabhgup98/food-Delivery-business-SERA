'use client';

import React, { useState, useEffect, useRef } from 'react';
import { UserIcon, LogOutIcon } from '../Icons';

interface AdminProfileProps {
  adminUser: {
    name: string;
    email: string;
    role: string;
  };
  onLogout: () => void;
}

const AdminProfile: React.FC<AdminProfileProps> = ({
  adminUser,
  onLogout
}) => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef<HTMLDivElement>(null);

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

  const handleProfileToggle = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleProfileOptionClick = () => {
    setIsProfileDropdownOpen(false);
  };

  const handleLogout = () => {
    onLogout();
    setIsProfileDropdownOpen(false);
  };

  // Get first letter of user's name for profile circle
  const getUserInitial = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <div className="relative group">
      <button 
        className="flex items-center space-x-2 p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-200 hover:scale-105"
        onClick={handleProfileToggle}
      >
        {/* User Profile Circle with First Letter */}
        <div className="w-8 h-8 bg-gradient-to-br from-white/30 to-white/10 rounded-full flex items-center justify-center border-2 border-white/40 hover:border-white/60 transition-all duration-200 shadow-lg hover:shadow-xl">
          <span className="text-white font-bold text-sm">
            {getUserInitial(adminUser.name)}
          </span>
        </div>
        <span className="hidden sm:block text-sm font-medium">{adminUser.name}</span>
      </button>
      
      {/* Dropdown Menu */}
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
  );
};

export default AdminProfile;
