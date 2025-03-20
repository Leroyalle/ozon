import type { FC } from 'react';
import { clsx } from 'clsx';

interface Props {
  price: number;
  className?: string;
}

export const CartItemPrice: FC<Props> = ({ price, className }) => {
  return (
    <div className={clsx('', className)}>
      <span>{price} &#8381;</span>
    </div>
  );
};
