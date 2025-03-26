import type { FC } from 'react';
import { clsx } from 'clsx';
import { RemoveFromCartButton } from '@/shared';
import { Button } from '@heroui/button';
import { CartItemName } from '../components';
import { WandSparkles } from 'lucide-react';

interface Props {
  productItemId: string;
  id: string;
  name: string;
  className?: string;
}

export const CartItemDetails: FC<Props> = ({ productItemId, id, name, className }) => {
  return (
    <div className={clsx('flex flex-col gap-y-2', className)}>
      <CartItemName productItemId={productItemId} name={name} />
      <div className="flex items-center gap-x-2">
        <RemoveFromCartButton productItemId={productItemId} cartItemId={id} />
        <Button size="sm" startContent={<WandSparkles size={20} />}>
          Купить
        </Button>
      </div>
    </div>
  );
};
