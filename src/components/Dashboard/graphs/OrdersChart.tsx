import { ChartData } from '@/types';

interface OrdersChartProps {
  data: ChartData;
}

export default function OrdersChart({ data }: OrdersChartProps) {
  return (
    <div className="bg-gradient-to-br from-sera-orange/10 to-sera-pink/10 backdrop-blur-sm border border-sera-orange/20 rounded-xl p-6">
      <h3 className="text-white font-semibold text-lg mb-4">Order Volume</h3>
      
      {/* Mock Chart - Replace with actual chart library */}
      <div className="h-64 bg-gradient-to-t from-sera-orange/20 to-transparent rounded-lg flex items-end justify-between p-4">
        {data.datasets[0].data.map((value, index) => (
          <div
            key={index}
            className="bg-sera-orange rounded-t"
            style={{
              height: `${(value / Math.max(...data.datasets[0].data)) * 100}%`,
              width: '8%',
              minHeight: '4px'
            }}
          />
        ))}
      </div>
      
      <div className="flex justify-between mt-4 text-sm text-gray-400">
        {data.labels.map((label, index) => (
          <span key={index}>{label}</span>
        ))}
      </div>
    </div>
  );
}
