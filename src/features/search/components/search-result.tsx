import type { FC } from 'react';
import { clsx } from 'clsx';
import { ProductItemWithProduct } from '@/entities';
import { Link } from 'react-router-dom';

interface Props {
  items: ProductItemWithProduct[] | undefined;
  isFocused: boolean;
  setIsFocused: (isFocused: boolean) => void;
  className?: string;
}

export const SearchResult: FC<Props> = ({ items, isFocused, setIsFocused, className }) => {
  if (!isFocused || !items) return null;

  return (
    <div
      data-testid="results"
      className={clsx(
        'absolute w-[90%] lg:w-full bg-white rounded-xl',
        'shadow-lg border border-gray-100',
        'transition-all duration-200 transform',
        'top-14 left-1/2 -translate-x-1/2',
        'opacity-0 scale-95',
        isFocused && 'opacity-100 scale-100 top-12 z-50',
        className,
      )}>
      {items.length === 0 ? (
        <div className="p-4 text-gray-500 text-center">Ничего не найдено</div>
      ) : (
        <div className="max-h-[60vh] overflow-y-auto">
          {items.slice(0, 5).map((item) => (
            <Link
              to={`/product/${item.id}`}
              key={item.id}
              onClick={() => setIsFocused(false)}
              className="block hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3 p-3">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.products.name}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-gray-900 truncate">{item.products.name}</p>
                  <p className="text-lime-600 font-medium">{item.price.toLocaleString()} ₽</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
