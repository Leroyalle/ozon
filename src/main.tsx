import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Feed } from '@/pages';
import { Providers } from '@/shared';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <Feed />
    </Providers>
  </StrictMode>,
);
