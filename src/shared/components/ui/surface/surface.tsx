import type { FC, ReactNode } from 'react';
import { clsx } from 'clsx';

interface Props {
  children: ReactNode;
  className?: string;
}

export const Surface: FC<Props> = ({ children, className }) => {
  return <div className={clsx('bg-background rounded-xl p-4', className)}>{children}</div>;
};
