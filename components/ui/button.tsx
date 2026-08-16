import { type ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variante?: 'primaire' | 'discret';
}

export function Button({ variante = 'primaire', className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500',
        variante === 'primaire' && 'bg-brand-500 text-white hover:bg-brand-700',
        variante === 'discret' && 'bg-transparent text-white/70 hover:bg-graphite-700',
        className,
      )}
      {...props}
    />
  );
}
