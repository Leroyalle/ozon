import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config';
import path from 'path';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      setupFiles: './tests/setup.ts',
      globals: true,
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      exclude: ['**/node_modules/**', '**/dist/**', '**/e2e/**', '.idea', '.git', '.cache'],
    },
  }),
);
