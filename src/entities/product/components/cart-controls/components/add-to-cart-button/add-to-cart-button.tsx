import type { FC } from 'react';
import { Button } from '@heroui/button';
import { useAddToCartMutation } from '@/features';

interface Props {
  productId: string;
  className?: string;
}

export const AddToCartButton: FC<Props> = ({ productId, className }) => {
  const [addToCart, { isLoading: isLoadingAdd }] = useAddToCartMutation();

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
