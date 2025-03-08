import type { FC } from 'react';
import { clsx } from 'clsx';
import { Product } from '../../types';
import { ProductItem } from '@/entities';

interface Props {
  items: Product[];
  className?: string;
}

export const ProductList: FC<Props> = ({ items, className }) => {
  return (
    <div className={clsx('', className)}>
      {items.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </div>
  );
};
