import type { FC } from 'react';
import { clsx } from 'clsx';

interface Props {
  className?: string;
}

export const Logo: FC<Props> = ({ className }) => {
  return <h1 className={clsx('uppercase text-3xl text-blue-500 font-bold', className)}>ozon</h1>;
};
