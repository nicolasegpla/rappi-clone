import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineWorkspace } from 'vitest/config';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineWorkspace([
  'vite.config.ts',
  {
    extends: 'vite.config.ts',
    test: {
      name: 'storybook',
      browser: {
        enabled: true,
        provider: 'playwright', // 🔥 Asegúrate de que sea 'playwright' y no 'preview'
        instances: [
          { browser: 'chromium' },
          { browser: 'firefox' },
          { browser: 'webkit' },
        ],
      },
      setupFiles: [path.join(dirname, '.storybook/vitest.setup.ts')],
      include: ['src/**/*.test.tsx', 'src/**/*.spec.tsx'], // 🔥 Patrón correcto para tus archivos de prueba
    },
  },
]);
