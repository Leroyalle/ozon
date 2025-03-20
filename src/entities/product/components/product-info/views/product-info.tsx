import type { FC } from 'react';
import { clsx } from 'clsx';
import { ProductItemWithRelations } from '@/entities';

interface Props {
  item: ProductItemWithRelations;
  className?: string;
}

export const ProductInfo: FC<Props> = ({ item, className }) => {
  return (
    <div className={clsx('', className)} data-testid="productInfo">
      {item.products.name}
    </div>
  );
};
