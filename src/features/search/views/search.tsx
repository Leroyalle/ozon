import { useState, type FC } from 'react';
import { clsx } from 'clsx';
import { Input } from '@heroui/react';
import { SearchIcon } from 'lucide-react';
import { useSearchProducts } from '../hooks';
import { SearchResult } from '../components';

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
        <Input
          classNames={{
            base: 'max-w-full h-10',
            mainWrapper: 'h-full',
            input: 'text-small',
            inputWrapper:
              'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
          value={searchValue}
          onValueChange={setSearchValue}
        />
        <SearchResult searchValue={searchValue} items={products} isFocused={isFocused} />
      </div>
    </>
  );
};
