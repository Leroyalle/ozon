import { AuthPage, CartPage, Feed, ProductPage, Profile } from '@/pages';
import { Layout } from '@/shared';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
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
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
      {
        path: '/product/:id',
        element: <ProductPage />,
      },
    ],
  },
]);
