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
    <div className={clsx('flex items-center flex-wrap gap-4', className)}>
      {items.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </div>
  );
};
