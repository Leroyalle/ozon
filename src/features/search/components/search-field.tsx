import { Input } from '@heroui/react';
import { SearchIcon } from 'lucide-react';
import type { FC } from 'react';

interface Props {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  setIsFocused: (isFocused: boolean) => void;
}

export const SearchField: FC<Props> = ({ searchValue, setSearchValue, setIsFocused }) => {
  return (
    <Input
      data-testid="search-field"
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
  );
};
