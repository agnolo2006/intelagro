import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const alerts = [
  {
    id: 1,
    type: 'warning',
    title: 'Baixo nível de Nitrogênio',
    description: 'Talhão A3 - Recomenda-se aplicação de fertilizante',
    time: '2 horas atrás',
    icon: AlertTriangle,
    color: 'text-yellow-600 bg-yellow-50',
  },
  {
    id: 2,
    type: 'success',
    title: 'pH ideal alcançado',
    description: 'Talhão B1 - Condições ótimas para plantio',
    time: '4 horas atrás',
    icon: CheckCircle,
    color: 'text-green-600 bg-green-50',
  },
  {
    id: 3,
    type: 'info',
    title: 'Análise programada',
    description: 'Talhão C2 - Coleta de dados agendada para amanhã',
    time: '6 horas atrás',
    icon: Clock,
    color: 'text-blue-600 bg-blue-50',
  },
];

export default function AlertsPanel() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Alertas Recentes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => {
            const Icon = alert.icon;
            return (
              <div key={alert.id} className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <div className={`p-2 rounded-full ${alert.color}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{alert.title}</p>
                  <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
                  <p className="text-xs text-gray-400 mt-2">{alert.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

