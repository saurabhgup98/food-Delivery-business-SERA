import { MetricCard as MetricCardType } from '@/types';

interface MetricCardProps {
  metric: MetricCardType;
}

export default function MetricCard({ metric }: MetricCardProps) {
  const getChangeColor = (changeType: string) => {
    switch (changeType) {
      case 'positive':
        return 'text-green-400';
      case 'negative':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getChangeIcon = (changeType: string) => {
    switch (changeType) {
      case 'positive':
        return '↗';
      case 'negative':
        return '↘';
      default:
        return '→';
    }
  };

  return (
    <div className="bg-gradient-to-br from-sera-pink/10 to-sera-orange/10 backdrop-blur-sm border border-sera-pink/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-300 text-sm font-medium">{metric.title}</h3>
        {metric.icon && (
          <div className="w-8 h-8 bg-sera-pink/20 rounded-lg flex items-center justify-center">
            <span className="text-sera-pink text-lg">{metric.icon}</span>
          </div>
        )}
      </div>
      
      <div className="flex items-end justify-between">
        <div>
          <p className="text-2xl font-bold text-white mb-1">{metric.value}</p>
          <div className={`flex items-center text-sm ${getChangeColor(metric.changeType)}`}>
            <span className="mr-1">{getChangeIcon(metric.changeType)}</span>
            <span>{metric.change}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
