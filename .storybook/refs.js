/**
 * @fileoverview StorybookRefs content generated according to destination environment
 */

/**
 * StorybookRefs content for one Storybook instance
 * @typedef {Object} StorybookReferences
 * @property {string} title - Title of the Storybook instance
 * @property {string} local - Local URL with port for the Storybook instance
 * @property {string} ghpages - GitHub Pages path for the Storybook instance
 */

/**
 * StorybookRefs content for all Storybook instances
 * @typedef {Object.<string, StorybookReferences>} StorybookRefs
 */
export const references = {
    "child_react": {
        "title": "React Components",
        "local": "http://localhost:6001",
        //"ghpages": "/storydocker-examples/astro-framework-multiple/react",
        //"chromatic": "https://645cf8cc6c66c97beb256bf6-aotbylwlaj.chromatic.com"
    },
    "child_web": {
        "title": "Web Components",
        "local": "http://localhost:6002",
        //"ghpages": "/storydocker-examples/astro-framework-multiple/svelte",
        //"chromatic": "https://64ad7443637336c6b8b81971-wygblehcro.chromatic.com"
    }
};



/**
 * Generates a Storybook ref (`{ title: string; url: string }`) for each child storybook.
 *  `url` is chosen based on destination environment
 * @returns {Object.<string, import('@storybook/core-common').StorybookRefs>}
 */
export const refs = (config, { configType }) => {
    let urlKey = 'local';
    //if (configType === 'DEVELOPMENT') {
    //    urlKey = 'local';
    //}
    //if (process.env.DEPLOY_DEST === 'chromatic') {
    //    urlKey = 'chromatic';
    //}
    const newRefs = {};
    for (const [key, value] of Object.entries(references)) {
        newRefs[key] = {
            title: value.title,
            url: value[urlKey],
        }
    }
    return newRefs;
};