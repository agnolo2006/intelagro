import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

export default function MetricCard({ title, value, unit, trend, color = 'green' }) {
  const colorClasses = {
    green: 'from-green-600 to-green-700',
    yellow: 'from-yellow-500 to-yellow-600',
    blue: 'from-blue-600 to-blue-700',
  };

  return (
    <Card className={`bg-gradient-to-br ${colorClasses[color]} text-white border-0 shadow-lg`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-white/90">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold">{value}</span>
          {unit && <span className="text-sm text-white/80">{unit}</span>}
        </div>
        {trend && (
          <p className="text-xs text-white/80 mt-1">
            {trend}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

