// Header configuration data for consistent styling and content across the app

export interface NavigationItem {
  name: string;
  path: string;
  isActive: boolean;
  badge?: string;
}

export interface HeaderData {
  navigationItems: NavigationItem[];
  brandName: string;
  brandSubtitle: string;
  searchPlaceholder: string;
  notificationCount: number;
  adminUser: {
    name: string;
    email: string;
    role: string;
  };
}

export const headerData: HeaderData = {
  navigationItems: [
    { name: 'Dashboard', path: '/dashboard', isActive: false },
    { name: 'Restaurants', path: '/restaurants', isActive: false, badge: '12 Pending' },
    { name: 'Users', path: '/users', isActive: false, badge: '5 New' },
    { name: 'Payments', path: '/payments', isActive: false }
  ],
  
  brandName: 'SERA BUSINESS',
  brandSubtitle: 'ADMIN PANEL',
  searchPlaceholder: 'Search restaurants, users, orders...',
  notificationCount: 3,
  
  adminUser: {
    name: 'Admin User',
    email: 'admin@serafood.com',
    role: 'Super Admin'
  }
};
