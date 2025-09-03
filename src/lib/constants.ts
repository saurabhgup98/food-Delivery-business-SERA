// App Configuration
export const APP_CONFIG = {
  name: 'SERA Business',
  description: 'Admin panel for SERA Food Delivery platform',
  version: '1.0.0',
} as const;

// Navigation Configuration
export const NAVIGATION_ITEMS = [
  { name: 'Dashboard', path: '/dashboard', isActive: false },
  { name: 'Restaurants', path: '/restaurants', isActive: false, badge: '12 Pending' },
  { name: 'Users', path: '/users', isActive: false, badge: '5 New' },
  { name: 'Payments', path: '/payments', isActive: false }
] as const;

// API Configuration
export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
} as const;

// Theme Configuration
export const THEME_CONFIG = {
  colors: {
    primary: {
      pink: '#ff6b6b',
      orange: '#ff8e3c',
      yellow: '#ffd93d',
      blue: '#4ecdc4',
    },
    dark: {
      900: '#0f0f23',
      800: '#1a1a2e',
      700: '#16213e',
      600: '#0f3460',
      500: '#1e3a8a',
      400: '#3b82f6',
      300: '#60a5fa',
    }
  }
} as const;

// Breakpoints
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
