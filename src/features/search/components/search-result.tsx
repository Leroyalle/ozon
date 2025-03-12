import type { FC } from 'react';
import { clsx } from 'clsx';
import { ProductWithItems } from '@/entities';

interface Props {
  items: ProductWithItems[] | undefined;
  isFocused: boolean;
  className?: string;
}

export const SearchResult: FC<Props> = ({ items, isFocused, className }) => {
  if (!isFocused || !items) return;

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
      {items.length === 0 ? (
        'Ничего не найдено'
      ) : (
        <div className="flex flex-col gap-y-1">
          {items.slice(0, 5).map((item) => (
            <span key={item.id}>{item.name}</span>
          ))}
        </div>
      )}
    </div>
  );
};
