import type { FC } from 'react';
import { clsx } from 'clsx';
import { Cart } from '@/features';

interface Props {
  className?: string;
}

export const CartPage: FC<Props> = ({ className }) => {
  return (
    <main className={clsx('', className)}>
      <Cart />
    </main>
  );
};
