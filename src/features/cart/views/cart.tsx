import type { FC } from 'react';
import { clsx } from 'clsx';
import { useGetCartItemsQuery } from '../api';
import { CartBody, CartHeader } from '../components';

interface Props {
  className?: string;
}

export const Cart: FC<Props> = ({ className }) => {
  const { data: cartItems } = useGetCartItemsQuery();

  if (!cartItems) {
    return null;
  }

  return (
    <div className={clsx('', className)}>
      <CartHeader className="my-8" length={cartItems.length} />
      <CartBody />
    </div>
  );
};
