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
  if (items.length === 0) {
    return (
      <Surface className={clsx('', className)} data-testid="emptyCartList">
        Корзина пуста. Добавьте товары чтобы переходить к оформлению.
      </Surface>
    );
  }

  return (
    <Surface className={clsx('flex flex-col gap-y-4', className)} data-testid="cartItemList">
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </Surface>
  );
};
