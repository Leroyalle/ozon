import type { FC } from 'react';
import { clsx } from 'clsx';
import { AddToCartButton, CartItemHandlers } from '../components';

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
  // const onClickDecrement = ({
  //   cart_item_id,
  //   quantity,
  // }: {
  //   cart_item_id: string;
  //   quantity: number;
  // }) => {
  //   if (quantity <= 1) return;
  //   decrement({ cart_item_id, product_item_id: productId, quantity });
  // };

  return (
    <div className={clsx('', className)} data-testid="cartControls">
      {!isAddedToCart ? (
        <AddToCartButton productId={productId} />
      ) : (
        <CartItemHandlers productItemId={productId} cartItemId={cartItemId} quantity={quantity} />
      )}
    </div>
  );
};
