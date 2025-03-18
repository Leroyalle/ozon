import type { FC } from 'react';
import { clsx } from 'clsx';

interface Props {
  className?: string;
}

export const Cart: FC<Props> = ({ className }) => {
  return <div className={clsx('', className)}>Cart</div>;
};
