import type { FC } from 'react';
import { clsx } from 'clsx';
import { Category } from '../../types';

interface Props {
  items: Category[] | undefined;
  onChange: ({ category }: { category: string }) => void;
  className?: string;
}

export const Categories: FC<Props> = ({ items, onChange, className }) => {
  if (!items) {
    return null;
  }

  return (
    <div className={clsx('flex flex-wrap gap-2', className)}>
      {items.map(({ id, name }) => (
        <button key={id} onClick={() => onChange({ category: id })}>
          {name}
        </button>
      ))}
    </div>
  );
};
