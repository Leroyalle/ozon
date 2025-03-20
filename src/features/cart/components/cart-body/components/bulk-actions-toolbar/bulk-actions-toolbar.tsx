import type { FC } from 'react';
import { clsx } from 'clsx';
import { Button, Checkbox } from '@heroui/react';
import { Forward } from 'lucide-react';

interface Props {
  isSelected: boolean;
  setIsSelected: (value: boolean) => void;
  className?: string;
}

export const BulkActionsToolbar: FC<Props> = ({ isSelected, setIsSelected, className }) => {
  return (
    <div className={clsx('flex justify-between items-center gap-2', className)}>
      <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
        Выбрать все
      </Checkbox>
      <Button color="primary" variant="flat" startContent={<Forward />}>
        Поделиться
      </Button>
    </div>
  );
};
