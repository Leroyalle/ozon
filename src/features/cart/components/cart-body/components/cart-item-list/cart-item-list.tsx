import type { FC } from 'react';
import { clsx } from 'clsx';
import { CartItemWithRelations } from '@/features';
import { CartItem } from '@/entities';
import { Surface } from '@/shared';

interface Props {
  items: CartItemWithRelations[];
  className?: string;
}

export const CartItemList: FC<Props> = ({ items, className }) => {
  return (
    <Surface className={clsx('', className)}>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </Surface>
  );
};
