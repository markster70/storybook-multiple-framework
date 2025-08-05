import path from 'path';

/** @type { import('@storybook/react-vite').StorybookConfig } */
export default {
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    stories: [
        '../stories/**/*.stories.@(jsx|tsx|mdx)',
    ],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
        '@storybook/addon-interactions',
        '@whitespace/storybook-addon-html'
    ],
    presets: [
        path.resolve(__dirname, 'presets/react-vite-preset.js')
    ],
    async viteFinal(config) {
        config.cacheDir = path.join(__dirname, '../.vite-react');
        return config;
    },
};

