import type { FC } from 'react';
import { clsx } from 'clsx';
import { Checkbox } from '@heroui/react';

interface Props {
  className?: string;
}

export const RememberMeOption: FC<Props> = ({ className }) => {
  return (
    <div className={clsx('flex py-2 px-1 justify-between', className)}>
      <Checkbox
        classNames={{
          label: 'text-small',
        }}>
        Запомнить меня
      </Checkbox>
    </div>
  );
};
