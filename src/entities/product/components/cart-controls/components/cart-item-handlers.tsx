import type { FC } from 'react';
import { clsx } from 'clsx';
import { Button } from '@heroui/button';

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
    <div className={clsx('flex items-center gap-x-3 select-none', className)}>
      <Button
        onPress={() => decrement({ id: cartItemId, quantity })}
        isLoading={isLoadingDecrement}>
        -
      </Button>
      <p className="select-none">{quantity}</p>
      <Button
        onPress={() => increment({ id: cartItemId, quantity })}
        isLoading={isLoadingIncrement}>
        +
      </Button>
      <Button onPress={() => removeFromCart(cartItemId)} isLoading={isLoadingRemove}>
        Удалить
      </Button>
    </div>
  );
};
