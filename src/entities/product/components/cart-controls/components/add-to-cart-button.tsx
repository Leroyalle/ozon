import type { FC } from 'react';
import { Button } from '@heroui/button';

interface Props {
  productId: string;
  addToCart: ({ product_item_id, quantity }: { product_item_id: string; quantity: number }) => void;
  isLoadingAdd: boolean;
  className?: string;
}

export const AddToCartButton: FC<Props> = ({ productId, addToCart, isLoadingAdd, className }) => {
  console.log('IS LOADING', isLoadingAdd);

  console.log('PRODUCT ID', productId);
  return (
    <Button
      data-testid="addToCartButton"
      className={className}
      disabled={isLoadingAdd}
      onPress={() => addToCart({ product_item_id: productId, quantity: 1 })}
      isDisabled={isLoadingAdd}>
      Добавить в корзину
    </Button>
  );
};
