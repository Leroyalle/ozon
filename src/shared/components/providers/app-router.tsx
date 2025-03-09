import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '../layout';
import { Feed } from '@/pages';

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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
