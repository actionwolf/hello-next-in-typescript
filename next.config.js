const withPlugins = require('next-compose-plugins');
const withTypescript = require('@zeit/next-typescript');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

// module.exports = {
//   webpack: (config, { dev }) => {
//     return config;
//   }
// };

module.exports = {
  webpack: (config, { buildId, dev, isServer }) => {
    // if (config.resolve.plugins) {
    //   config.resolve.plugins.push(new TsconfigPathsPlugin());
    // } else {
    //   config.resolve.plugins = [new TsconfigPathsPlugin()];
    // }

    config.resolve.plugins = [new TsconfigPathsPlugin()];

    return config;
  },
};
