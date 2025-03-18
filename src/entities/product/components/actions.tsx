import type { FC } from 'react';
import { clsx } from 'clsx';
import { Button } from '@heroui/button';
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

export const Actions: FC<Props> = ({
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

  const onClickDecrement = () => {
    if (quantity <= 1) return;
    decrement({ id: cartItemId, quantity });
  };

  return (
    <div className={clsx('', className)}>
      {!isAddedToCart ? (
        <Button
          onPress={() => addToCart({ product_item_id: productId, quantity: 1 })}
          isLoading={isLoadingAdd}>
          Добавить в корзину
        </Button>
      ) : (
        <div className="flex items-center gap-x-3 select-none">
          <Button onPress={onClickDecrement} isLoading={isLoadingDecrement}>
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
      )}
    </div>
  );
};
