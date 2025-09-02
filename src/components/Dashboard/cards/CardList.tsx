import { MetricCard as MetricCardType } from '@/types';
import MetricCard from './MetricCard';

interface CardListProps {
  metrics: MetricCardType[];
}

export default function CardList({ metrics }: CardListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <MetricCard key={index} metric={metric} />
      ))}
    </div>
  );
}
