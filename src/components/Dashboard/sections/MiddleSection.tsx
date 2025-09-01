import { MetricCard as MetricCardType, ChartData } from '@/types';
import { CardList } from '../cards';
import { RevenueChart, OrdersChart } from '../graphs';

interface MiddleSectionProps {
  metrics: MetricCardType[];
  revenueChart: ChartData;
  ordersChart: ChartData;
}

export default function MiddleSection({ metrics, revenueChart, ordersChart }: MiddleSectionProps) {
  return (
    <div className="space-y-6 pb-6">
      {/* Metrics Cards - 2 per row */}
      <CardList metrics={metrics} />
      
      {/* Charts - 1 per row */}
      <div className="space-y-6">
        <RevenueChart data={revenueChart} />
        <OrdersChart data={ordersChart} />
      </div>
    </div>
  );
}
