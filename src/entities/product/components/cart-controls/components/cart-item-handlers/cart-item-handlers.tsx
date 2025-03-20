import type { FC } from 'react';
import { clsx } from 'clsx';
import { CartQuantityControl, RemoveFromCartButton } from '@/shared';

interface Props {
  productItemId: string;
  cartItemId: string;
  quantity: number;
  className?: string;
}

export const CartItemHandlers: FC<Props> = ({ productItemId, cartItemId, quantity, className }) => {
  return (
    <div
      className={clsx('flex items-center gap-x-3 select-none', className)}
      data-testid="cartItemHandlers">
      <CartQuantityControl
        productItemId={productItemId}
        cartItemId={cartItemId}
        quantity={quantity}
      />
      <RemoveFromCartButton productItemId={productItemId} cartItemId={cartItemId} />
    </div>
  );
};
