import path from 'path';
/** @type { import('@storybook/web-components-vite').StorybookConfig } */
export default {
    framework: {
        name: '@storybook/web-components-vite',
        options: {},
    },
    stories: ['../stories/**/*.stories.@(js|ts)'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-links',
        '@storybook/addon-a11y',
        '@whitespace/storybook-addon-html',
    ],
    docs: {
        autodocs: true,
    },
    presets: [
        path.resolve(__dirname, 'presets/wc-vite-preset.js')
    ],
    async viteFinal(config) {
        config.cacheDir = path.join(__dirname, '../.vite-web-components');
        return config;
    },
};

