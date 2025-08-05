import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { patchCssModules } from 'vite-css-modules';

export default defineConfig({
  plugins: [
    patchCssModules(),
  ],
  css: {
    modules: {
      scopeBehaviour: 'global',
      exportGlobals: true,
    },
    preprocessorOptions: {
      scss: {
        loadPaths: ['scss'],
        includePaths: ['scss'],
        modules: true,
      },
    },
  },
});
