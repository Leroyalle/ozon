import type { FC } from 'react';
import { Button, ButtonProps } from '@heroui/button';
import { Trash } from 'lucide-react';
import { useRemoveFromCartMutation } from '@/features';

interface Props extends ButtonProps {
  productItemId: string;
  cartItemId: string;
  className?: string;
}

export const RemoveFromCartButton: FC<Props> = ({
  productItemId,
  cartItemId,
  className,
  ...props
}) => {
  const [removeFromCart, { isLoading: isLoadingRemove }] = useRemoveFromCartMutation();
  return (
    <Button
      data-testid="removeFromCartButton"
      className={className}
      size="sm"
      onPress={() => removeFromCart({ product_item_id: productItemId, cart_item_id: cartItemId })}
      startContent={<Trash size={20} />}
      isLoading={isLoadingRemove}
      {...props}
    />
  );
};
