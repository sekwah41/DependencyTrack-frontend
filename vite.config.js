import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    // Might need to find a replacement or custom solution for CycloneDxWebpackPlugin, check what it does and how it can be replaced or updated
  ],
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'process.env.VITE_APP_I18N_LOCALE': JSON.stringify(process.env.VITE_APP_I18N_LOCALE),
    'process.env.VITE_APP_I18N_FALLBACK_LOCALE': JSON.stringify(process.env.VITE_APP_I18N_FALLBACK_LOCALE),
    'process.env.VITE_APP_SERVER_URL': JSON.stringify(process.env.VITE_APP_SERVER_URL),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      "~font-awesome": path.resolve(__dirname, "node_modules/font-awesome"),
      "~simple-line-icons": path.resolve(__dirname, "node_modules/simple-line-icons"),
      "~@coreui": path.resolve(__dirname, "node_modules/@coreui"),
      "~@bootstrap-vue": path.resolve(__dirname, "node_modules/@bootstrap-vue"),
      "~bootstrap-vue": path.resolve(__dirname, "node_modules/bootstrap-vue"),
      "~vue-easy-pie-chart": path.resolve(__dirname, "node_modules/vue-easy-pie-chart"),
      "~vue-multiselect": path.resolve(__dirname, "node_modules/vue-multiselect"),
    },
  },
});
