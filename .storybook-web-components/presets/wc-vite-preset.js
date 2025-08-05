import webComponentsVite from '@storybook/web-components-vite';
import wcViteConfig from '../../vite.config.web.js';

export default {
    name: '@storybook/web-components-vite',
    async config(config, options) {
        const merged = await webComponentsVite.config(config, options);
        return {
            ...merged,
            ...wcViteConfig,
        };
    },
};
