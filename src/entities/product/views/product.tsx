import type { FC } from 'react';
import { CartControls, MediaGallery, ProductInfo } from '../components';
import { clsx } from 'clsx';
import { ProductWithRelations } from '../types';

interface Props {
  item: ProductWithRelations | undefined;
  className?: string;
}

export const Product: FC<Props> = ({ item, className }) => {
  if (!item) return null;

  const hasItems = item.product_items[0].cart_items.length > 0;

  return (
    <div className={clsx('', className)} data-testid="product">
      <div className="flex gap-x-3">
        <MediaGallery items={item.product_items} />
        <ProductInfo item={item} />
        <CartControls
          productId={item.product_items[0].id}
          cartItemId={hasItems ? item.product_items[0].cart_items[0].id : ''}
          isAddedToCart={hasItems && hasItems}
          quantity={hasItems ? item.product_items[0].cart_items[0].quantity : 1}
        />
      </div>
    </div>
  );
};
