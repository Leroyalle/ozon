import type { FC } from 'react';
import { clsx } from 'clsx';
import { RemoveFromCartButton } from '@/shared';
import { Button } from '@heroui/button';
import { CartItemName } from '../components';
import { WandSparkles } from 'lucide-react';

interface Props {
  id: string;
  name: string;
  removeFromCart: (id: string) => void;
  isLoadingRemove: boolean;
  className?: string;
}

export const CartItemDetails: FC<Props> = ({
  id,
  name,
  removeFromCart,
  isLoadingRemove,
  className,
}) => {
  return (
    <div className={clsx('flex flex-col gap-y-2', className)}>
      <CartItemName name={name} />
      <div className="flex items-center gap-x-2">
        <RemoveFromCartButton
          cartItemId={id}
          removeFromCart={removeFromCart}
          isLoadingRemove={isLoadingRemove}
        />
        <Button size="sm" startContent={<WandSparkles size={20} />}>
          Купить
        </Button>
      </div>
    </div>
  );
};
