import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';

process.env.TZ = 'America/Denver';

export default defineConfig({
  // @ts-ignore idk what is happening here the types are wrong somehow
  plugins: [react()],
  resolve: {
    alias: {
      'build-utils': path.resolve(__dirname, './build-utils'),
      src: path.resolve(__dirname, './src'),
      svgReact: path.resolve(__dirname, './svgReact'),
      'test-utils': path.resolve(__dirname, './test-utils'),
    },
  },
  test: {
    environment: 'jsdom',
    exclude: [
      '**/node_modules/**',
      '**/__stories__/storyshots',
      '**/storyshots.test.ts',
      '**/dist',
    ],
    globals: true,
    include: ['**/*.test.ts'],
    setupFiles: ['dotenv/config', 'test-utils/setup.ts'],
    snapshotFormat: {
      escapeString: false,
    },
  },
});
