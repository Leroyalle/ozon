import type { FC, ReactNode } from 'react';
import { clsx } from 'clsx';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const Surface: FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={clsx('bg-background rounded-xl p-4', className)} {...props}>
      {children}
    </div>
  );
};
