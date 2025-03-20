import type { FC } from 'react';
import { clsx } from 'clsx';
import { CartItemControls, CartItemDetails, CartItemImage } from '../components';
import {
  useDecrementCartItemQuantityMutation,
  useIncrementCartItemQuantityMutation,
  useRemoveFromCartMutation,
} from '@/features';

interface Props {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  className?: string;
}

export const CartItem: FC<Props> = ({ id, name, price, image, quantity, className }) => {
  const [removeFromCart, { isLoading: isLoadingRemove }] = useRemoveFromCartMutation();
  const [increment, { isLoading: isLoadingIncrement }] = useIncrementCartItemQuantityMutation();
  const [decrement, { isLoading: isLoadingDecrement }] = useDecrementCartItemQuantityMutation();

  return (
    <div className={clsx('grid grid-cols-2 gap-x-4', className)}>
      <div className="flex gap-x-4">
        <CartItemImage image={image} />
        <CartItemDetails
          id={id}
          name={name}
          removeFromCart={removeFromCart}
          isLoadingRemove={isLoadingRemove}
        />
      </div>
      <CartItemControls
        id={id}
        price={price}
        quantity={quantity}
        increment={increment}
        decrement={decrement}
        isLoadingIncrement={isLoadingIncrement}
        isLoadingDecrement={isLoadingDecrement}
      />
    </div>
  );
};
