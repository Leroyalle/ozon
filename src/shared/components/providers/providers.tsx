import type { FC, ReactNode } from 'react';
import { HeroUIProvider } from '@heroui/react';
import { Provider } from 'react-redux';
import { store } from '@/shared/store/store';

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
