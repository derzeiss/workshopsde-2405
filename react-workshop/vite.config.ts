/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // make testing functions global so we don't need to import them in every test-file
    globals: true,
    // we don't actually render our components in a browser window (this would be way too slow), instead we'll use jsdom
    environment: 'jsdom',
    // tell vitest where our testing setup is located
    setupFiles: './src/setupTests.ts',
  },
});
