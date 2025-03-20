import type { FC } from 'react';
import { clsx } from 'clsx';
import { CartItemControls, CartItemDetails, CartItemImage } from '../components';
import {
  CartItemWithRelations,
  useDecrementCartItemQuantityMutation,
  useIncrementCartItemQuantityMutation,
  useRemoveFromCartMutation,
} from '@/features';

interface Props {
  item: CartItemWithRelations;
  className?: string;
}

export const CartItem: FC<Props> = ({ item, className }) => {
  const [removeFromCart, { isLoading: isLoadingRemove }] = useRemoveFromCartMutation();
  const [increment, { isLoading: isLoadingIncrement }] = useIncrementCartItemQuantityMutation();
  const [decrement, { isLoading: isLoadingDecrement }] = useDecrementCartItemQuantityMutation();

  return (
    <div className={clsx('grid grid-cols-2 gap-x-4', className)}>
      <div className="flex gap-x-4">
        <CartItemImage item={item} />
        <CartItemDetails
          id={item.id}
          name={item.product_items.products.name}
          removeFromCart={removeFromCart}
          isLoadingRemove={isLoadingRemove}
        />
      </div>
      <CartItemControls
        id={item.id}
        price={item.product_items.price}
        quantity={item.quantity}
        increment={increment}
        decrement={decrement}
        isLoadingIncrement={isLoadingIncrement}
        isLoadingDecrement={isLoadingDecrement}
      />
    </div>
  );
};
