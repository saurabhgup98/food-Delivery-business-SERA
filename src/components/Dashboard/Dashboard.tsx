import { DashboardData } from '@/types';
import { LeftSection, MiddleSection, RightSection } from './sections';

interface DashboardProps {
  data: DashboardData;
  isSticky?: boolean;
}

export default function Dashboard({ data, isSticky = false }: DashboardProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left Section - Becomes sticky when intro scrolls behind header */}
      <div className={`lg:col-span-3 ${isSticky ? 'lg:sticky lg:top-6 lg:h-fit' : ''}`}>
        <LeftSection activities={data.activities} />
      </div>
      
      {/* Middle Section - Continues to scroll */}
      <div className="lg:col-span-6">
        <MiddleSection 
          metrics={data.metrics}
          revenueChart={data.revenueChart}
          ordersChart={data.ordersChart}
        />
      </div>
      
      {/* Right Section - Becomes sticky when intro scrolls behind header */}
      <div className={`lg:col-span-3 ${isSticky ? 'lg:sticky lg:top-6 lg:h-fit' : ''}`}>
        <RightSection quickActions={data.quickActions} />
      </div>
    </div>
  );
}
