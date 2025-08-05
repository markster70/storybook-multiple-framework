import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    cacheDir: '.vite-react',
    plugins: [react()],
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'components'),
        },
    },
});
