import { MemoryRouter } from 'react-router-dom';
import type { FC, JSX } from 'react';
import { store } from '@/shared/store';
import { Provider } from 'react-redux';

interface Props {
  component: JSX.Element;
  initialRoute?: string;
}

export const TestProviders: FC<Props> = ({ component, initialRoute = '/' }) => {
  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={[initialRoute]}>{component}</MemoryRouter>
    </Provider>
  );
};
