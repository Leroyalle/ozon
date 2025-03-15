import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router-paths';

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};
