import type { FC } from 'react';
import { clsx } from 'clsx';
import { ProductItem, ProductItemWithProduct } from '@/entities';

interface Props {
  items: ProductItemWithProduct[] | undefined;
  className?: string;
}

export const ProductList: FC<Props> = ({ items, className }) => {
  if (!items) {
    return null;
  }

  return (
    <div className={clsx('flex items-center flex-wrap gap-4', className)} data-testid="productList">
      {items.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </div>
  );
};
