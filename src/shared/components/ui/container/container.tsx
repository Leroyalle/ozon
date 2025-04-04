import type { FC, ReactNode } from 'react';
import { clsx } from 'clsx';

interface Props {
  children: ReactNode;
  className?: string;
}

export const Container: FC<Props> = ({ children, className }) => {
  return <div className={clsx('max-w-[1534px] mx-auto px-6 w-full', className)}>{children}</div>;
};
