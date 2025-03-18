import type { FC } from 'react';
import { clsx } from 'clsx';
import { AddToCartButton, CartItemHandlers } from '../components';
import {
  useAddToCartMutation,
  useDecrementCartItemQuantityMutation,
  useIncrementCartItemQuantityMutation,
  useRemoveFromCartMutation,
} from '@/features';

interface Props {
  productId: string;
  cartItemId: string;
  isAddedToCart: boolean;
  quantity: number;
  className?: string;
}

export const CartControls: FC<Props> = ({
  productId,
  cartItemId,
  isAddedToCart,
  quantity,
  className,
}) => {
  const [addToCart, { isLoading: isLoadingAdd }] = useAddToCartMutation();
  const [removeFromCart, { isLoading: isLoadingRemove }] = useRemoveFromCartMutation();
  const [increment, { isLoading: isLoadingIncrement }] = useIncrementCartItemQuantityMutation();
  const [decrement, { isLoading: isLoadingDecrement }] = useDecrementCartItemQuantityMutation();

  const onClickDecrement = ({ id, quantity }: { id: string; quantity: number }) => {
    if (quantity <= 1) return;
    decrement({ id, quantity });
  };

  return (
    <div className={clsx('', className)}>
      {!isAddedToCart ? (
        <AddToCartButton productId={productId} addToCart={addToCart} isLoadingAdd={isLoadingAdd} />
      ) : (
        <CartItemHandlers
          cartItemId={cartItemId}
          quantity={quantity}
          removeFromCart={removeFromCart}
          increment={increment}
          decrement={onClickDecrement}
          isLoadingRemove={isLoadingRemove}
          isLoadingIncrement={isLoadingIncrement}
          isLoadingDecrement={isLoadingDecrement}
        />
      )}
    </div>
  );
};
