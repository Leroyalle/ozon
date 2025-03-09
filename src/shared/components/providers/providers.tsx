import type { FC, ReactNode } from 'react';
import { HeroUIProvider } from '@heroui/system';
import { Provider } from 'react-redux';
import { store } from '@/shared';

interface Props {
  children: ReactNode;
}

export const Providers: FC<Props> = ({ children }) => {
  return (
    <Provider store={store}>
      <HeroUIProvider>{children}</HeroUIProvider>
    </Provider>
  );
};
