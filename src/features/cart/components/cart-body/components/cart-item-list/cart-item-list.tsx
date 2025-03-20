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
        <CartItem
          key={item.id}
          id={item.id}
          name={item.product_items.products.name}
          price={item.product_items.price}
          image={item.product_items.image}
          quantity={item.quantity}
        />
      ))}
    </Surface>
  );
};
