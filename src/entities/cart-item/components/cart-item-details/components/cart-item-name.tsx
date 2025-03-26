import type { FC } from 'react';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

interface Props {
  productItemId: string;
  name: string;
  className?: string;
}

export const CartItemName: FC<Props> = ({ productItemId, name, className }) => {
  return (
    <Link to={`/product/${productItemId}`} className={clsx('', className)}>
      <span>{name}</span>
    </Link>
  );
};
