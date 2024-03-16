import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { copy } from 'vite-plugin-copy';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 2
          }
        }
      }
    }),
    copy({
      targets: [
        { src: 'node_modules/axios/dist/axios.min.js', dest: 'public/static/js' },
        { src: 'node_modules/oidc-client/dist/oidc-client.min.js', dest: 'public/static/js' }
      ]
    })
  ],
  resolve: {
    alias: {
      'vue': '@vue/compat'
    },
  },
  server: {
    port: 8080,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_SERVER_URL,
        changeOrigin: true,
        secure: false,
      }
    }
  },
  build: {
    sourcemap: false, // Disable production source maps
  }
});
