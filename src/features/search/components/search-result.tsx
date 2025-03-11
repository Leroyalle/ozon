import type { FC } from 'react';
import { clsx } from 'clsx';
import { ProductWithItems } from '@/entities';

interface Props {
  searchValue: string;
  items: ProductWithItems[] | undefined;
  isFocused: boolean;
  className?: string;
}

export const SearchResult: FC<Props> = ({ searchValue, items, isFocused, className }) => {
  if (!searchValue || !isFocused) return;
  if (!items || items.length === 0) return;

  return (
    <div
      data-testid="results"
      className={clsx(
        'text-white absolute w-[90%] lg:w-full bg-black rounded-xl shadow-md transition-all duration-200 opacity-0',
        'top-14 left-1/2 -translate-x-1/2',
        isFocused && 'opacity-100 top-12 z-50',
        'flex flex-col p-3',
        className,
      )}>
      {items?.map((item) => item.name)}
    </div>
  );
};
