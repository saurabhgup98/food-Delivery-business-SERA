export interface MetricCard {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon?: string;
}

export interface ActivityItem {
  id: string;
  type: 'order' | 'user' | 'system';
  title: string;
  description: string;
  time: string;
  status?: 'completed' | 'pending' | 'failed';
}

export interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  color: string;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

export interface DashboardData {
  metrics: MetricCard[];
  activities: ActivityItem[];
  quickActions: QuickAction[];
  revenueChart: ChartData;
  ordersChart: ChartData;
}
