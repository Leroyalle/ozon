import type { FC, ReactNode } from 'react';
import { HeroUIProvider, ToastProvider } from '@heroui/react';
import { Provider } from 'react-redux';
import { store } from '@/shared/store/store';

interface Props {
  children: ReactNode;
}

export const Providers: FC<Props> = ({ children }) => {
  return (
    <Provider store={store}>
      <HeroUIProvider>
        <ToastProvider />
        {children}
      </HeroUIProvider>
    </Provider>
  );
};
