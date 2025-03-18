import type { FC } from 'react';
import { Actions, MediaGallery, ProductInfo } from '../components';
import { ProductWithItems } from '@/entities';
import { clsx } from 'clsx';

interface Props {
  item: ProductWithItems | undefined;
  className?: string;
}

export const Product: FC<Props> = ({ item, className }) => {
  if (!item) return null;

  return (
    <div className={clsx('', className)}>
      <div className="flex gap-x-3">
        <MediaGallery items={item.product_items} />
        <ProductInfo item={item} />
        <Actions productId={item.product_items[0].id} />
      </div>
    </div>
  );
};
