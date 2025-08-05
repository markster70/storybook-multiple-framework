import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    cacheDir: '.vite-wc',
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'components'),
        },
    },
});
