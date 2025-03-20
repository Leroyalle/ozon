import type { FC } from 'react';
import { CartControls, MediaGallery, ProductInfo } from '../components';
import { clsx } from 'clsx';
import { ProductItemWithRelations } from '../types';

interface Props {
  item: ProductItemWithRelations | undefined;
  className?: string;
}

export const Product: FC<Props> = ({ item, className }) => {
  if (!item) return null;

  return (
    <div className={clsx('', className)} data-testid="product">
      <div className="flex gap-x-3">
        <MediaGallery image={item.image} />
        <ProductInfo item={item} />
        <CartControls
          productId={item.id}
          cartItemId={item.cart_items[0]?.id}
          isAddedToCart={!!item.cart_items[0]}
          quantity={item.cart_items[0]?.quantity || 1}
        />
      </div>
    </div>
  );
};
