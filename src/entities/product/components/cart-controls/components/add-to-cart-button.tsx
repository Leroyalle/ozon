import type { FC } from 'react';
import { Button } from '@heroui/button';

interface Props {
  productId: string;
  addToCart: ({ product_item_id, quantity }: { product_item_id: string; quantity: number }) => void;
  isLoadingAdd: boolean;
  className?: string;
}

export const AddToCartButton: FC<Props> = ({ productId, addToCart, isLoadingAdd, className }) => {
  return (
    <Button
      className={className}
      onPress={() => addToCart({ product_item_id: productId, quantity: 1 })}
      isLoading={isLoadingAdd}>
      Добавить в корзину
    </Button>
  );
};
