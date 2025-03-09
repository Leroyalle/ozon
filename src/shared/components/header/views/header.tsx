import type { FC } from 'react';
import { Logo } from '../components';
import { Navbar, NavbarBrand, NavbarContent, Input } from '@heroui/react';
import { SearchIcon } from 'lucide-react';
interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  return (
    <Navbar className={className} isBordered shouldHideOnScroll maxWidth="xl">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: 'max-w-full h-10',
            mainWrapper: 'h-full',
            input: 'text-small',
            inputWrapper:
              'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
      </NavbarContent>
    </Navbar>
  );
};
