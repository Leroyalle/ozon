import type { FC } from 'react';
import { clsx } from 'clsx';
import { CartQuantityControl } from '@/shared';
import { CartItemPrice } from '../components';

interface Props {
  productItemId: string;
  price: number;
  id: string;
  quantity: number;
  className?: string;
}

export const CartItemControls: FC<Props> = ({ productItemId, price, id, quantity, className }) => {
  return (
    <div className={clsx('flex justify-between', className)}>
      <CartItemPrice price={price} />
      <div>
        <CartQuantityControl productItemId={productItemId} cartItemId={id} quantity={quantity} />
      </div>
    </div>
  );
};
