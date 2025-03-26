import type { FC } from 'react';
import { clsx } from 'clsx';
import { Category } from '../../types';
import { Skeleton } from '@heroui/react';
import { getSkeletonCategoryWidth } from '../../lib';

interface Props {
  items: Category[] | undefined;
  isLoading: boolean;
  onChange: ({ category }: { category: string }) => void;
  className?: string;
}

export const Categories: FC<Props> = ({ items, isLoading, onChange, className }) => {
  if (isLoading) {
    return (
      <div className={clsx('flex flex-wrap gap-2', className)}>
        {[...Array(10)].map((_, i) => (
          <Skeleton key={i} className={`${getSkeletonCategoryWidth()} h-3 rounded-xl`} />
        ))}
      </div>
    );
  }

  if (!items) {
    return null;
  }

  return (
    <div className={clsx('flex flex-wrap gap-2', className)} data-testid="categories">
      {items.map(({ id, name }) => (
        <button
          className="text-xs"
          data-testid="category"
          key={id}
          onClick={() => onChange({ category: id })}>
          {name}
        </button>
      ))}
    </div>
  );
};
