import type { FC } from 'react';
import { clsx } from 'clsx';

interface Props {
  name: string;
  className?: string;
}

export const CartItemName: FC<Props> = ({ name, className }) => {
  return (
    <div className={clsx('', className)}>
      <span>{name}</span>
    </div>
  );
};
