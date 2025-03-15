import { FC } from 'react';
import { Container } from '../container';
import { Outlet } from 'react-router-dom';
import { Header } from '@/widgets';

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
