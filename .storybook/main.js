const path = require('path');

module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    // Make whatever fine-grained changes you need
    config.module.rules.push(
      {
        test: /\.(less)$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(eot|ttf|TTF|woff|woff2|svg|png|jpg|gif)$/i,
        use: ['url-loader'],
      }
    ); // Return the altered config
    return config;
  },
  features: {
    postcss: false,
  },
  core: {
    builder: 'webpack5',
  },
};
