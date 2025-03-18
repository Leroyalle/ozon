import type { FC } from 'react';
import { clsx } from 'clsx';
import { Button } from '@heroui/button';
import { useAddToCartMutation } from '@/features';

interface Props {
  productId: string;
  className?: string;
}

export const Actions: FC<Props> = ({ productId, className }) => {
  const [addToCart] = useAddToCartMutation();
  return (
    <div className={clsx('', className)}>
      <Button onPress={() => addToCart({ product_item_id: productId })}>Добавить в корзину</Button>
    </div>
  );
};
