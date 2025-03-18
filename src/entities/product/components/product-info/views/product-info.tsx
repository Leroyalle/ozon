import type { FC } from 'react';
import { clsx } from 'clsx';
import { ProductWithItems } from '@/entities';

interface Props {
  item: ProductWithItems;
  className?: string;
}

export const ProductInfo: FC<Props> = ({ item, className }) => {
  return (
    <div className={clsx('', className)} data-testid="productInfo">
      {item.name}
    </div>
  );
};
