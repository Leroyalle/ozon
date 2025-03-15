import { AuthPage, Feed } from '@/pages';
import { Layout } from '@/shared';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import type { FC } from 'react';

export const RouterMemory: FC<{ initialRoute?: string }> = ({ initialRoute = '/' }) => {
  return (
    <MemoryRouter initialEntries={[initialRoute]}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Feed />} />
          <Route path="auth" element={<AuthPage />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
};
