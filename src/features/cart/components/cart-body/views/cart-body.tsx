import { type FC } from 'react';
import { clsx } from 'clsx';
import { BulkActionsToolbar, CartItemList } from '../components';
import { CartItemWithRelations } from '@/features';

interface Props {
  items: CartItemWithRelations[];
  className?: string;
}

export const CartBody: FC<Props> = ({ items, className }) => {
  return (
    <div className={clsx('', className)}>
      <div className="flex flex-col gap-y-4">
        <BulkActionsToolbar initialItems={items} />
        <CartItemList items={items} />
      </div>
    </div>
  );
};
