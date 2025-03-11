import type { FC } from 'react';
import { clsx } from 'clsx';
import { ProductItem, ProductWithItems } from '@/entities';

interface Props {
  items: ProductWithItems[] | undefined;
  className?: string;
}

export const ProductList: FC<Props> = ({ items, className }) => {
  if (!items) {
    return null;
  }

  return (
    <div className={clsx('', className)}>
      {items.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </div>
  );
};
