import { useState, type FC } from 'react';
import { clsx } from 'clsx';
import { BulkActionsToolbar } from '../components';

interface Props {
  className?: string;
}

export const CartBody: FC<Props> = ({ className }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className={clsx('', className)}>
      <div>
        <BulkActionsToolbar isSelected={isSelected} setIsSelected={setIsSelected} />
      </div>
    </div>
  );
};
