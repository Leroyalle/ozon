import type { FC } from 'react';
import { CartControls, MediaGallery, ProductInfo } from '../components';
import { clsx } from 'clsx';
import { ProductItemWithRelations } from '../types';
import { Card } from '@heroui/react';

interface Props {
  item: ProductItemWithRelations | undefined;
  className?: string;
}

export const Product: FC<Props> = ({ item, className }) => {
  if (!item) return null;

  return (
    <div className={clsx('container mx-auto px-4 py-8', className)} data-testid="product">
      <Card className="flex flex-col lg:flex-row gap-8 p-6 ">
        <div className="lg:w-1/2">
          <MediaGallery image={item.image} />
        </div>

        <div className="lg:w-1/2 flex flex-col gap-6">
          <div className="flex-grow">
            <ProductInfo item={item} />
          </div>

          <div className="mt-auto">
            <CartControls
              productId={item.id}
              cartItemId={item.cart_items[0]?.id}
              isAddedToCart={!!item.cart_items[0]}
              quantity={item.cart_items[0]?.quantity || 1}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
