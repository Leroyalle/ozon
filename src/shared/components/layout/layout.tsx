import { FC } from 'react';
import { Container } from '../ui/container';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '@/widgets';

export const Layout: FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <Container className="my-4 flex-1">
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};
