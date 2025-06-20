import React from 'react';
import { Home, BarChart3, Map, Building2, FileText, Users, Settings, HelpCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home, current: true },
  { name: 'Análises', href: '/analytics', icon: BarChart3, current: false },
  { name: 'Mapa', href: '/map', icon: Map, current: false },
  { name: 'Propriedades', href: '/properties', icon: Building2, current: false },
  { name: 'Relatórios', href: '/reports', icon: FileText, current: false },
  { name: 'Usuários', href: '/users', icon: Users, current: false },
  { name: 'Configurações', href: '/settings', icon: Settings, current: false },
  { name: 'Suporte', href: '/support', icon: HelpCircle, current: false },
];

export default function Sidebar({ currentPath = '/' }) {
  return (
    <div className="flex h-full w-64 flex-col bg-sidebar">
      {/* Logo */}
      <div className="flex h-16 shrink-0 items-center px-6 border-b border-sidebar-border">
        <img
          className="h-8 w-auto"
          src="/src/assets/intelagro-logo-official.jpeg"
          alt="IntelAgro"
        />
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col px-4 py-6">
        <ul role="list" className="flex flex-1 flex-col gap-y-2">
          {navigation.map((item) => {
            const isActive = currentPath === item.href;
            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={cn(
                    isActive
                      ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                    'group flex gap-x-3 rounded-md p-3 text-sm font-medium transition-colors'
                  )}
                >
                  <item.icon
                    className={cn(
                      isActive ? 'text-sidebar-accent-foreground' : 'text-sidebar-foreground',
                      'h-5 w-5 shrink-0'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

