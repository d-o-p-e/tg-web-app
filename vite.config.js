import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: true,
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
    mkcert(),
  ],

  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
