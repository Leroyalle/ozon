import type { FC } from 'react';
import { clsx } from 'clsx';
import { useGetCartItemsQuery } from '../api';

interface Props {
  className?: string;
}

export const Cart: FC<Props> = ({ className }) => {
  const { data: cartItems } = useGetCartItemsQuery();
  console.log(cartItems);
  return <div className={clsx('', className)}>Cart</div>;
};
