import { type FC } from 'react';
import { clsx } from 'clsx';
import { Button, Checkbox } from '@heroui/react';
import { Forward } from 'lucide-react';
import { Surface } from '@/shared';
import { useAppSelector } from '@/shared/store/store';
import { CartItemWithRelations } from '@/features/cart/types';

interface Props {
  initialItems: CartItemWithRelations[];
  onSelectAll: (value: boolean) => void;
  className?: string;
}

export const BulkActionsToolbar: FC<Props> = ({ initialItems, onSelectAll, className }) => {
  const items = useAppSelector((state) => state.cartSummarySlice.items);

  return (
    <Surface className={clsx('flex justify-between items-center gap-2', className)}>
      <Checkbox isSelected={items.length === initialItems.length} onValueChange={onSelectAll}>
        Выбрать все
      </Checkbox>
      <Button color="primary" variant="flat" startContent={<Forward />}>
        Поделиться
      </Button>
    </Surface>
  );
};
