import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '../layout';
import { AuthPage, Feed } from '@/pages';

export const AppRouter: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Feed />,
        },
        {
          path: '/auth',
          element: <AuthPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
