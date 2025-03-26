import type { FC } from 'react';
import { clsx } from 'clsx';
import { ProductItem, ProductItemWithProduct } from '@/entities';
import { Skeleton } from '@heroui/react';

interface Props {
  items: ProductItemWithProduct[] | undefined;
  isLoading: boolean;
  className?: string;
}

export const ProductList: FC<Props> = ({ items, isLoading, className }) => {
  if (isLoading) {
    return (
      <div className={clsx('flex items-center flex-wrap gap-4', className)}>
        {[...Array(20)].map((_, i) => (
          <Skeleton key={i} className="w-40 h-[184px] rounded-xl" />
        ))}
      </div>
    );
  }

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
