import reactVite from '@storybook/react-vite';
import reactViteConfig from '../../vite.config.react.js';

export default {
    name: '@storybook/react-vite',
    async config(config, options) {
        const merged = await reactVite.config(config, options);
        return {
            ...merged,
            ...reactViteConfig,
        };
    },
};
