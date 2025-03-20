import { type FC } from 'react';
import { clsx } from 'clsx';
import { BulkActionsToolbar, CartItemList } from '../components';
import { CartItemWithRelations } from '@/features';
import { useSelectItems } from '@/features/cart/hooks';

interface Props {
  items: CartItemWithRelations[];
  className?: string;
}

export const CartBody: FC<Props> = ({ items, className }) => {
  const { onSelectAll } = useSelectItems(items);

  return (
    <div className={clsx('', className)}>
      <div className="flex flex-col gap-y-4">
        <BulkActionsToolbar initialItems={items} onSelectAll={onSelectAll} />
        <CartItemList items={items} />
      </div>
    </div>
  );
};
