import type { FC } from 'react';
import { clsx } from 'clsx';
import { ProductItemWithRelations } from '@/entities';

interface Props {
  item: ProductItemWithRelations;
  className?: string;
}

export const ProductInfo: FC<Props> = ({ item, className }) => {
  return (
    <div className={clsx('flex flex-col gap-4', className)} data-testid="productInfo">
      <h1 className="text-xl font-semibold">{item.products.name}</h1>
      <div className="text-xl font-bold text-lime-500">{item.price.toLocaleString()} ₽</div>
    </div>
  );
};
