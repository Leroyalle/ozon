import type { FC } from 'react';
import { Button, ButtonProps } from '@heroui/button';
import { Trash } from 'lucide-react';

interface Props extends ButtonProps {
  cartItemId: string;
  removeFromCart: (id: string) => void;
  isLoadingRemove: boolean;
  className?: string;
}

export const RemoveFromCartButton: FC<Props> = ({
  cartItemId,
  removeFromCart,
  isLoadingRemove,
  className,
  ...props
}) => {
  return (
    <Button
      data-testid="removeFromCartButton"
      className={className}
      size="sm"
      onPress={() => removeFromCart(cartItemId)}
      startContent={<Trash size={20} />}
      isLoading={isLoadingRemove}
      {...props}
    />
  );
};
