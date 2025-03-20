import type { FC } from 'react';
import { clsx } from 'clsx';
import { Button } from '@heroui/button';
import {
  useDecrementCartItemQuantityMutation,
  useIncrementCartItemQuantityMutation,
} from '@/features';

interface Props {
  productItemId: string;
  cartItemId: string;
  quantity: number;
  className?: string;
}

export const CartQuantityControl: FC<Props> = ({
  productItemId,
  cartItemId,
  quantity,
  className,
}) => {
  const [increment, { isLoading: isLoadingIncrement }] = useIncrementCartItemQuantityMutation();
  const [decrement, { isLoading: isLoadingDecrement }] = useDecrementCartItemQuantityMutation();

  return (
    <div className={clsx('flex items-center gap-x-3 select-none', className)}>
      <Button
        data-testid="decrementButton"
        onPress={() =>
          decrement({ cart_item_id: cartItemId, product_item_id: productItemId, quantity })
        }
        disabled={quantity <= 1}
        color={quantity <= 1 ? 'default' : 'primary'}
        isLoading={isLoadingDecrement}>
        -
      </Button>
      <p className="select-none">{quantity}</p>
      <Button
        data-testid="incrementButton"
        color="primary"
        onPress={() =>
          increment({ cart_item_id: cartItemId, product_item_id: productItemId, quantity })
        }
        isLoading={isLoadingIncrement}>
        +
      </Button>
    </div>
  );
};
