import type { FC } from 'react';
import { clsx } from 'clsx';

interface Props {
  className?: string;
}

export const User: FC<Props> = ({ className }) => {
  return <div className={clsx('', className)}>User</div>;
};
