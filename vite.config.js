import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        features: resolve(__dirname, 'features.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        download: resolve(__dirname, 'download.html'),
        help_center: resolve(__dirname, 'help_center.html'),
        web_app: resolve(__dirname, 'web_app.html'),
      },
    },
  },
});
