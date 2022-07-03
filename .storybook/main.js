const path = require("path");
const { merge } = require("webpack-merge");

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'], 
  webpackFinal: async (config) => {
    return merge(config, {
      resolve: {
        alias: {
          '@styles': path.resolve(__dirname, '../src/styles'),
          '@components': path.resolve(__dirname, '../src/components'),
        },
      },
    });
  },
};
