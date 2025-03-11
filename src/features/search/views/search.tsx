import { useState, type FC } from 'react';
import { clsx } from 'clsx';
import { useSearchProducts } from '../hooks';
import { SearchField, SearchResult } from '../components';

interface Props {
  className?: string;
}

export const Search: FC<Props> = ({ className }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { data: products } = useSearchProducts(searchValue);

  return (
    <>
      <div
        className={clsx(
          'flex rounded-2xl flex-1 justify-between h-11',
          'static lg:relative',
          className,
        )}>
        <SearchField
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setIsFocused={setIsFocused}
        />
        <SearchResult items={products} isFocused={isFocused} />
      </div>
    </>
  );
};
