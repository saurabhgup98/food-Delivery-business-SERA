'use client';

import React from 'react';
import { SearchIcon } from '../Icons';

interface PrimarySearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const PrimarySearchBar: React.FC<PrimarySearchBarProps> = ({
  placeholder = 'Search...',
  onSearch,
  className = '',
  value = '',
  onChange
}) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(e.currentTarget.value);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={`relative w-full ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="w-full px-4 py-2 pl-10 bg-white/10 text-white placeholder-white/70 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-sera-yellow focus:border-transparent backdrop-blur-sm transition-all duration-200"
      />
      <SearchIcon className="absolute left-3 top-2.5 w-4 h-4 text-white/70" />
    </div>
  );
};

export default PrimarySearchBar;
