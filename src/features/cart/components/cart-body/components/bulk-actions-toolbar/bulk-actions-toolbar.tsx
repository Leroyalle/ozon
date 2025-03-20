import { type FC } from 'react';
import { clsx } from 'clsx';
import { Button, Checkbox } from '@heroui/react';
import { Forward } from 'lucide-react';
import { Surface } from '@/shared';
import { CartItemWithRelations } from '@/features/cart/types';
import { useToggleCartItemSelectionMutation } from '@/features';

interface Props {
  initialItems: CartItemWithRelations[];

  className?: string;
}

export const BulkActionsToolbar: FC<Props> = ({ initialItems, className }) => {
  const selectedItems = initialItems.filter((item) => item.isSelected);
  const [toggleCartItemSelection] = useToggleCartItemSelectionMutation();
  const isSelected = selectedItems.length === initialItems.length;

  if (initialItems.length === 0) {
    return null;
  }

  return (
    <Surface
      className={clsx('flex justify-between items-center gap-2', className)}
      data-testid="bulkActionsToolbar">
      <Checkbox
        isSelected={isSelected}
        onValueChange={() => toggleCartItemSelection({ isSelected: !isSelected })}
        data-testid="selectAllCheckbox">
        Выбрать все
      </Checkbox>
      <Button color="primary" variant="flat" startContent={<Forward />}>
        Поделиться
      </Button>
    </Surface>
  );
};
