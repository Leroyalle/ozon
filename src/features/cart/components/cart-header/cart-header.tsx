import type { FC } from 'react';
import { clsx } from 'clsx';

interface Props {
  length: number;
  className?: string;
}

export const CartHeader: FC<Props> = ({ length, className }) => {
  return (
    <div className={clsx('flex', className)} data-testid="cartHeader">
      <h2 className="text-3xl font-semibold">Корзина</h2>
      <sup className="text-sm font-medium text-foreground/60">{length}</sup>
    </div>
  );
};
