import type { FC, ReactNode } from 'react';
import { HeroUIProvider } from '@heroui/system';

interface Props {
  children: ReactNode;
}

export const Providers: FC<Props> = ({ children }) => {
  return <HeroUIProvider>{children}</HeroUIProvider>;
};
