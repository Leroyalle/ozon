import type { FC } from 'react';
import { clsx } from 'clsx';
import { Checkbox } from '@heroui/react';

import { CartItemWithRelations, useToggleCartItemSelectionMutation } from '@/features';
import { Link } from 'react-router-dom';

interface Props {
  item: CartItemWithRelations;
  className?: string;
}

export const CartItemImage: FC<Props> = ({ item, className }) => {
  const [toggleCartItemSelection] = useToggleCartItemSelectionMutation();

  return (
    <Link
      to={`/product/${item.product_item_id}`}
      className={clsx('max-w-[90px] rounded-xl overflow-hidden relative', className)}>
      <Checkbox
        className="absolute top-1 left-1"
        isSelected={item.isSelected}
        onValueChange={() =>
          toggleCartItemSelection({ isSelected: !item.isSelected, cart_item_id: item.id })
        }
      />
      <img src={item.product_items.image} alt="" className="w-full aspect-[1/1.2] object-cover" />
    </Link>
  );
};
