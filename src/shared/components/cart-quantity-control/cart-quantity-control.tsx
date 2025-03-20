import type { FC } from 'react';
import { clsx } from 'clsx';
import { Button } from '@heroui/button';

interface Props {
  cartItemId: string;
  quantity: number;
  decrement: ({ id, quantity }: { id: string; quantity: number }) => void;
  increment: ({ id, quantity }: { id: string; quantity: number }) => void;
  isLoadingDecrement: boolean;
  isLoadingIncrement: boolean;
  className?: string;
}

export const CartQuantityControl: FC<Props> = ({
  cartItemId,
  quantity,
  decrement,
  increment,
  isLoadingDecrement,
  isLoadingIncrement,
  className,
}) => {
  return (
    <div className={clsx('flex items-center gap-x-3 select-none', className)}>
      <Button
        data-testid="decrementButton"
        onPress={() => decrement({ id: cartItemId, quantity })}
        disabled={quantity <= 1}
        color={quantity <= 1 ? 'default' : 'primary'}
        isLoading={isLoadingDecrement}>
        -
      </Button>
      <p className="select-none">{quantity}</p>
      <Button
        data-testid="incrementButton"
        color="primary"
        onPress={() => increment({ id: cartItemId, quantity })}
        isLoading={isLoadingIncrement}>
        +
      </Button>
    </div>
  );
};
