import { type ReactNode } from 'react';
import clsx from 'clsx';

type BadgeTon = 'neutre' | 'brand' | 'ambre' | 'rouge' | 'vert';

const TONS: Record<BadgeTon, string> = {
  neutre: 'bg-graphite-700 text-white/70',
  brand: 'bg-brand-900 text-brand-200',
  ambre: 'bg-risque-modere/15 text-risque-modere',
  rouge: 'bg-risque-critique/15 text-risque-critique',
  vert: 'bg-risque-faible/15 text-risque-faible',
};

export function Badge({ ton = 'neutre', children }: { ton?: BadgeTon; children: ReactNode }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        TONS[ton],
      )}
    >
      {children}
    </span>
  );
}
