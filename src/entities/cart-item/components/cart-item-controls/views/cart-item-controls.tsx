import type { FC } from 'react';
import { clsx } from 'clsx';
import { CartQuantityControl } from '@/shared';
import { CartItemPrice } from '../components';

interface Props {
  price: number;
  id: string;
  quantity: number;
  decrement: ({ id, quantity }: { id: string; quantity: number }) => void;
  increment: ({ id, quantity }: { id: string; quantity: number }) => void;
  isLoadingDecrement: boolean;
  isLoadingIncrement: boolean;
  className?: string;
}

export const CartItemControls: FC<Props> = ({
  price,
  id,
  quantity,
  decrement,
  increment,
  isLoadingDecrement,
  isLoadingIncrement,
  className,
}) => {
  return (
    <div className={clsx('flex justify-between', className)}>
      <CartItemPrice price={price} />
      <div>
        <CartQuantityControl
          cartItemId={id}
          quantity={quantity}
          increment={increment}
          decrement={decrement}
          isLoadingIncrement={isLoadingIncrement}
          isLoadingDecrement={isLoadingDecrement}
        />
      </div>
    </div>
  );
};
