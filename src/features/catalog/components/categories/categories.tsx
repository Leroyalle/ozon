import type { FC } from 'react';
import { clsx } from 'clsx';
import { Category } from '../../types';

interface Props {
  items: Category[] | undefined;
  className?: string;
}

export const Categories: FC<Props> = ({ items, className }) => {
  if (!items) {
    return null;
  }

  return (
    <div className={clsx('', className)}>
      {items.map((item) => (
        <button key={item.id}>{item.name}</button>
      ))}
    </div>
  );
};
