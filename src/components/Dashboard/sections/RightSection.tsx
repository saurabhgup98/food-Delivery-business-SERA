import { QuickAction } from '@/types';

interface RightSectionProps {
  quickActions: QuickAction[];
}

export default function RightSection({ quickActions }: RightSectionProps) {
  return (
    <div className="lg:col-span-3">
      <div className="bg-gradient-to-br from-sera-pink/10 to-sera-orange/10 backdrop-blur-sm border border-sera-pink/20 rounded-xl p-6 h-full">
        <h2 className="text-white font-semibold text-xl mb-6">Quick Actions</h2>
        
        <div className="space-y-4">
          {quickActions.map((action) => (
            <button
              key={action.id}
              className="w-full p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 text-left group"
              onClick={() => console.log(`Navigate to: ${action.href}`)}
            >
              <div className="flex items-center space-x-3">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                  style={{ backgroundColor: `${action.color}20` }}
                >
                  {action.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-medium text-sm group-hover:text-sera-pink transition-colors">
                    {action.title}
                  </h4>
                  <p className="text-gray-400 text-xs mt-1">{action.description}</p>
                </div>
                <div className="text-gray-500 group-hover:text-sera-pink transition-colors">
                  →
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
