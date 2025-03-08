import type { FC } from 'react';
import { clsx } from 'clsx';
import { Product } from '../../features/catalog/types';

interface Props {
  item: Product;
  className?: string;
}

export const ProductItem: FC<Props> = ({ item, className }) => {
  return <div className={clsx('', className)}>{item.name}</div>;
};
