import type { FC } from 'react';
import { Logo } from '../components';
import { Navbar, NavbarBrand, NavbarContent } from '@heroui/react';
import { Search } from '@/features';
interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  return (
    <Navbar className={className} isBordered shouldHideOnScroll maxWidth="2xl">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Logo />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent as="div" className="items-center" justify="end">
        <Search />
      </NavbarContent>
    </Navbar>
  );
};
