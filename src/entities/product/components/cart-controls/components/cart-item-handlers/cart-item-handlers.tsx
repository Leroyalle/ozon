import type { FC } from 'react';
import { clsx } from 'clsx';
import { CartQuantityControl, RemoveFromCartButton } from '@/shared';

interface Props {
  cartItemId: string;
  quantity: number;
  removeFromCart: (id: string) => void;
  increment: ({ id, quantity }: { id: string; quantity: number }) => void;
  decrement: ({ id, quantity }: { id: string; quantity: number }) => void;
  isLoadingRemove: boolean;
  isLoadingIncrement: boolean;
  isLoadingDecrement: boolean;
  className?: string;
}

export const CartItemHandlers: FC<Props> = ({
  cartItemId,
  quantity,
  removeFromCart,
  increment,
  decrement,
  isLoadingRemove,
  isLoadingIncrement,
  isLoadingDecrement,
  className,
}) => {
  return (
    <div
      className={clsx('flex items-center gap-x-3 select-none', className)}
      data-testid="cartItemHandlers">
      <CartQuantityControl
        cartItemId={cartItemId}
        quantity={quantity}
        increment={increment}
        decrement={decrement}
        isLoadingIncrement={isLoadingIncrement}
        isLoadingDecrement={isLoadingDecrement}
      />
      <RemoveFromCartButton
        cartItemId={cartItemId}
        removeFromCart={removeFromCart}
        isLoadingRemove={isLoadingRemove}
      />
    </div>
  );
};
