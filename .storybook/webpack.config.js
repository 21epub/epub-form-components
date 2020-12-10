const path = require('path');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.watch = true
  config.module.rules.push(
    {
      test: /\.(css|less)$/,
      exclude: /node_modules/,
      loaders: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
            modules: {
              mode: 'local',
              // localIdentName: '[sha1:hash:hex:4]',
              localIdentContext: path.resolve(__dirname, 'src'),
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              localIdentHashPrefix: 'custom'
            }
          }
        },
        // {
        //   loader: require.resolve('less-loader'), // compiles Less to LESS
        //   options: {
        //     importLoaders: 2,
        //     modules: true,
        //     javascriptEnabled: true,
        //     getLocalIdent: getCSSModuleLocalIdent,
        //   },
        // },
      ],
    },
  )

  // Return the altered config
  return config
}


// config.module.rules.push({
//   test: /\.(css|less)$/,
//   exclude: /node_modules/,
//   loaders: [
//     require.resolve('babel-loader'),
//     require.resolve('style-loader'),
//     require.resolve('css-loader'),
//     {
//       loader: require.resolve('less-loader'), // compiles Less to LESS
//       options: {
//         importLoaders: 2,
//         modules: true,
//         javascriptEnabled: true,
//         getLocalIdent: getCSSModuleLocalIdent,
//       },
//     },
//   ],
// })