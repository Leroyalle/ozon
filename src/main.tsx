import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Feed } from '@/pages';
import { Layout, Providers } from '@/shared';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <Layout>
        <Feed />
      </Layout>
    </Providers>
  </StrictMode>,
);
