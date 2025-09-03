'use client';

import { useEffect, useRef, useState } from 'react';
import { Dashboard } from '@/components/Dashboard';
import { mockDashboardData } from '@/data/dashboardData';

export default function Home() {
  const [isSticky, setIsSticky] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current && introRef.current) {
        const scrollTop = scrollContainerRef.current.scrollTop;
        const introHeight = introRef.current.offsetHeight;
        const headerHeight = 80; // Approximate header height
        
        // Check if dashboard intro has scrolled behind the header
        // Add some buffer to ensure it's fully behind
        if (scrollTop > introHeight + 20) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="h-[calc(100vh-80px)] overflow-y-auto">      
      {/* Scrollable Content Area */}
      <div ref={scrollContainerRef} className="h-full overflow-y-auto custom-scrollbar">
        <main className="p-3 sm:p-4 md:p-6">
          {/* Enhanced Ultra Compact Dashboard Introduction Section */}
          <div ref={introRef} className="mb-3 sm:mb-4">
            <div className="relative bg-gradient-to-br from-dark-900/95 via-dark-800/90 to-dark-700/85 border border-sera-blue/30 rounded-xl p-3 backdrop-blur-sm shadow-xl shadow-sera-blue/10 overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-sera-blue/5 via-transparent to-sera-pink/5 animate-pulse"></div>
              <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-sera-blue/10 to-transparent rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-tr from-sera-pink/10 to-transparent rounded-full blur-xl"></div>
              
              <div className="relative flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                {/* Enhanced Icon */}
                <div className="w-8 h-8 bg-gradient-to-br from-sera-blue/40 to-sera-blue/20 rounded-lg flex items-center justify-center shadow-lg border border-sera-blue/40 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-sera-blue/20 to-transparent animate-pulse"></div>
                  <span className="text-sera-blue text-sm relative z-10 drop-shadow-sm">📊</span>
                </div>
                
                <div className="flex-1">
                  <h1 className="text-base sm:text-lg font-bold text-white drop-shadow-sm tracking-wide">
                    SERA Business Dashboard
                  </h1>
                  <p className="text-gray-400 text-xs tracking-wide">
                    Admin panel for SERA Food Delivery platform
                  </p>
                </div>
                
                <div className="flex items-center space-x-2 sm:space-x-3">
                  {/* Enhanced Online Status */}
                  <div className="flex items-center space-x-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-2 py-1 backdrop-blur-sm">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-sm shadow-emerald-400/50"></div>
                    <span className="text-emerald-400 text-xs font-medium tracking-wide">Online</span>
                  </div>
                  
                  {/* Enhanced Live Status */}
                  <div className="flex items-center space-x-1 bg-sera-blue/10 border border-sera-blue/30 rounded-full px-2 py-1 backdrop-blur-sm">
                    <div className="w-3 h-3 bg-sera-blue rounded-full animate-pulse shadow-sm shadow-sera-blue/50"></div>
                    <span className="text-sera-blue text-xs font-medium tracking-wide">Live</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard with Sticky Behavior */}
          <div className={isSticky ? 'relative' : ''}>
            {/* Modular Dashboard Component */}
            <Dashboard data={mockDashboardData} isSticky={isSticky} />
          </div>
        </main>
      </div>
    </div>
  );
}
