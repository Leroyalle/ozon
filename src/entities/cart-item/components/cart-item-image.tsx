import type { FC } from 'react';
import { clsx } from 'clsx';
import { Checkbox } from '@heroui/react';
import { useAppDispatch, useAppSelector } from '@/shared/store/store';
import { toggleItem, CartItemWithRelations } from '@/features';

interface Props {
  item: CartItemWithRelations;
  className?: string;
}

export const CartItemImage: FC<Props> = ({ item, className }) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cartSummarySlice.items);

  const onSelect = () => {
    dispatch(toggleItem(item));
  };

  return (
    <div className={clsx('max-w-[90px] rounded-xl overflow-hidden relative', className)}>
      <Checkbox
        className="absolute top-1 left-1"
        isSelected={items.some((i) => i.id === item.id)}
        onValueChange={onSelect}
      />
      <img src={item.product_items.image} alt="" className="w-full aspect-[1/1.2] object-cover" />
    </div>
  );
};
