import type { FC } from 'react';
import { clsx } from 'clsx';
import { Button } from '@heroui/button';
import { CartQuantityControl, RemoveFromCartButton } from '@/shared';
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
        <div className="max-w-[100px]">
          <img src={image} alt="" className="w-full" />
        </div>
        <div className="flex flex-col gap-y-2">
          <div>{name}</div>
          <div className="flex items-center gap-x-2">
            <RemoveFromCartButton
              cartItemId={id}
              removeFromCart={removeFromCart}
              isLoadingRemove={isLoadingRemove}
            />
            <Button size="sm">Купить</Button>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div>{price} &#8381;</div>
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
    </div>
  );
};
