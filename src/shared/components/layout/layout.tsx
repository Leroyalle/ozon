import { FC } from 'react';
import { Container } from '../container';
import { Header } from '../../../widgets/header';
import { Outlet } from 'react-router-dom';

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
