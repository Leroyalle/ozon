import type { FC } from 'react';
import { clsx } from 'clsx';
import { CartItemControls, CartItemDetails, CartItemImage } from '../components';
import { CartItemWithRelations } from '@/features';

interface Props {
  item: CartItemWithRelations;
  className?: string;
}

export const CartItem: FC<Props> = ({ item, className }) => {
  return (
    <div className={clsx('grid grid-cols-2 gap-x-4', className)}>
      <div className="flex gap-x-4">
        <CartItemImage item={item} />
        <CartItemDetails
          productItemId={item.product_item_id}
          id={item.id}
          name={item.product_items.products.name}
        />
      </div>
      <CartItemControls
        productItemId={item.product_item_id}
        id={item.id}
        price={item.product_items.price}
        quantity={item.quantity}
      />
    </div>
  );
};
