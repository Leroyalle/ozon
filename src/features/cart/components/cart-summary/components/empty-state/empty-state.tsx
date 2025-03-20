import type { FC } from 'react';
import { clsx } from 'clsx';
import { Surface } from '@/shared';
import { Info } from 'lucide-react';

interface Props {
  className?: string;
}

export const EmptyState: FC<Props> = ({ className }) => {
  return (
    <Surface className={clsx('bg-content3 flex gap-x-2 items-center', className)}>
      <Info size={20} /> Выберите товары, чтобы перейти к оформлению заказа
    </Surface>
  );
};
