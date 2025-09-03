'use client';

import React from 'react';
import { NavigationItem } from './headerData';

interface PrimaryHorizontalNavbarProps {
  navigationItems: NavigationItem[];
  onNavClick: (itemName: string) => void;
}

const PrimaryHorizontalNavbar: React.FC<PrimaryHorizontalNavbarProps> = ({
  navigationItems,
  onNavClick
}) => {
  return (
    <nav className="hidden md:flex items-center space-x-1">
      {navigationItems.map((item) => (
        <button
          key={item.name}
          onClick={() => onNavClick(item.name)}
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
  );
};

export default PrimaryHorizontalNavbar;
