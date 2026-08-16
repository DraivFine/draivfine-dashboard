'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  Route,
  MapPinned,
  AlertTriangle,
  CreditCard,
  Settings,
} from 'lucide-react';
import clsx from 'clsx';

const LIENS = [
  { href: '/', label: "Vue d'ensemble", icon: LayoutDashboard },
  { href: '/conducteurs', label: 'Conducteurs', icon: Users },
  { href: '/trajets', label: 'Trajets', icon: Route },
  { href: '/carte', label: 'Carte en direct', icon: MapPinned },
  { href: '/alertes', label: 'Alertes', icon: AlertTriangle },
  { href: '/abonnements', label: 'Abonnements', icon: CreditCard },
  { href: '/parametres', label: 'Paramètres', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-60 shrink-0 flex-col border-r border-graphite-700 bg-graphite-900">
      <div className="flex items-center gap-2 px-5 py-6">
        <div className="h-2.5 w-2.5 rounded-full bg-brand-500" />
        <span className="font-display text-[15px] font-semibold tracking-tight text-white">
          MotoSafe
        </span>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {LIENS.map(({ href, label, icon: Icon }) => {
          const actif = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                actif
                  ? 'bg-brand-900 text-brand-200'
                  : 'text-white/60 hover:bg-graphite-800 hover:text-white',
              )}
            >
              <Icon size={17} strokeWidth={1.75} />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="px-5 py-4 text-[11px] text-white/30">MotoSafe Dashboard · v0.1</div>
    </aside>
  );
}
