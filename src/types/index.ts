// Core types
export * from './dashboard';

// Component prop types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Layout types
export interface LayoutProps extends BaseComponentProps {
  showHeader?: boolean;
  showSidebar?: boolean;
}

// Navigation types
export interface NavigationItem {
  name: string;
  path: string;
  isActive: boolean;
  badge?: string;
  icon?: string;
}

// User types
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

// API response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
