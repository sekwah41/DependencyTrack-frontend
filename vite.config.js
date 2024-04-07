import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';

export default defineConfig({
  plugins: [
    vue(),
    // Might need to find a replacement or custom solution for CycloneDxWebpackPlugin, check what it does and how it can be replaced or updated
  ],
  build: {
    sourcemap: false,
  },
  base: '/',
  server: {
    proxy: {
      '/api': process.env.VUE_APP_SERVER_URL,
    },
  },
});
