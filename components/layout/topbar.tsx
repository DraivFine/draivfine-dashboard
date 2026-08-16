'use client';

import { LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';

export function Topbar({ titre }: { titre: string }) {
  const { utilisateur, deconnexion } = useAuth();

  return (
    <header className="flex h-16 items-center justify-between border-b border-graphite-700 px-6">
      <h1 className="font-display text-lg font-medium text-white">{titre}</h1>
      <div className="flex items-center gap-4">
        {utilisateur && <span className="text-sm text-white/60">{utilisateur.nom}</span>}
        <button
          onClick={deconnexion}
          className="flex items-center gap-1.5 text-sm text-white/40 hover:text-white/80"
        >
          <LogOut size={15} />
          Déconnexion
        </button>
      </div>
    </header>
  );
}
