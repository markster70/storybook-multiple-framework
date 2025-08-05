import path from 'path';
import { refs } from "./refs.js";
/** @type { import('@storybook/html-vite').StorybookConfig } */
export default {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: [
    "../Home.mdx",
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    '@whitespace/storybook-addon-html'
  ],
  refs,
  async viteFinal(config, options) {
    // Ensures that the cache directory is inside the project directory
    config.cacheDir = path.join(__dirname, '../.vite-composition')
    return config;
  },
};

