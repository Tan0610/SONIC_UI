import React from 'react';
import { LucideIcon } from 'lucide-react';

type StatCardProps = {
  value: string | number;
  label: string;
  icon?: LucideIcon;
  gradient?: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
}

export const StatCard = ({ value, label, icon: Icon, gradient, trend }: StatCardProps) => {
  return (
    <div className={`p-6 rounded-xl ${gradient || 'bg-[var(--card-background)]'} border border-[var(--border-color)] transition-all hover:scale-105`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          {Icon && (
            <div className="p-2 bg-white/10 rounded-lg">
              <Icon className="w-5 h-5 text-white" />
            </div>
          )}
          <span className="text-sm font-medium text-white/80">{label}</span>
        </div>
        {trend && (
          <div className={`text-xs px-2 py-1 rounded-full ${
            trend.isPositive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
          }`}>
            {trend.isPositive ? '+' : ''}{trend.value}
          </div>
        )}
      </div>
      <div className="text-2xl font-bold text-white">{value}</div>
    </div>
  );
};