import { type HTMLAttributes } from 'react';
import clsx from 'clsx';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        'rounded-xl border border-graphite-700 bg-graphite-800 p-5',
        className,
      )}
      {...props}
    />
  );
}
