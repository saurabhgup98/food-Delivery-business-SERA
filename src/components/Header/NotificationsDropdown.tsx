'use client';

import React, { useState } from 'react';
import { BellIcon } from '../Icons';

interface NotificationsDropdownProps {
  notificationCount: number;
  isLoggedIn: boolean;
  onAuthRequired: () => void;
}

const NotificationsDropdown: React.FC<NotificationsDropdownProps> = ({
  notificationCount,
  isLoggedIn,
  onAuthRequired
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNotificationsToggle = () => {
    if (!isLoggedIn) {
      onAuthRequired();
      return;
    }
    setIsOpen(!isOpen);
  };

  const handleNotificationClick = (notificationId: string) => {
    alert(`Notification ${notificationId} clicked!`);
    // Here you would typically navigate to the relevant page or open a modal
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button 
        onClick={handleNotificationsToggle}
        className="relative p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-200 hover:scale-105"
      >
        <BellIcon className="w-5 h-5" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-sera-yellow rounded-full text-xs flex items-center justify-center text-dark-900 font-bold">
          {notificationCount}
        </span>
      </button>
      
      {/* Notifications Dropdown */}
      {isOpen && (
        <div 
          className="absolute right-0 top-full mt-3 w-80 bg-dark-800 rounded-xl shadow-2xl border border-dark-600 z-[99999]"
          style={{
            zIndex: 99999
          }}
        >
          <div className="p-4 border-b border-dark-600">
            <h3 className="text-white font-semibold">Notifications</h3>
          </div>
          <div className="p-2">
            <div 
              className="p-3 text-gray-300 hover:bg-dark-700 rounded-lg cursor-pointer transition-all duration-200" 
              onClick={() => handleNotificationClick('restaurants-pending')}
            >
              <p className="text-sm">12 restaurants pending approval</p>
              <p className="text-xs text-gray-500">2 minutes ago</p>
            </div>
            <div 
              className="p-3 text-gray-300 hover:bg-dark-700 rounded-lg cursor-pointer transition-all duration-200" 
              onClick={() => handleNotificationClick('new-users')}
            >
              <p className="text-sm">5 new user registrations</p>
              <p className="text-xs text-gray-500">5 minutes ago</p>
            </div>
            <div 
              className="p-3 text-gray-300 hover:bg-dark-700 rounded-lg cursor-pointer transition-all duration-200" 
              onClick={() => handleNotificationClick('maintenance')}
            >
              <p className="text-sm">System maintenance scheduled</p>
              <p className="text-xs text-gray-500">1 hour ago</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationsDropdown;
