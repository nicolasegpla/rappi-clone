import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/_variables.scss" as *;
          @use "@/styles/_mixins.scss" as *;
          @use "@/styles/_reset.scss" as *;
        `,
      },
    },
  },
  server: {
    port: 3000
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    exclude: [...configDefaults.exclude, 'node_modules'],
    browser: {
      enabled: true,
      provider: 'playwright',  // 🔥 Cambié 'preview' a 'playwright'
      name: 'chromium',         // Alternativamente: 'firefox' o 'webkit'
      headless: true,           // Cambia a false si querés ver el navegador abierto al correr tests
    },
  },
});
