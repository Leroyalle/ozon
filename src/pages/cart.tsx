import type { FC } from 'react'
import { clsx } from 'clsx';

interface Props {
  className?: string;
}

export const Cart: FC<Props> = ({ className }) => {
  return <main className={clsx('', className)}></main>;
};