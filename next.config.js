// next.config.js
const { withExpo } = require('@expo/next-adapter');
const { resolve } = require('path');

module.exports = withExpo({
  projectRoot: __dirname,
  webpack: (config) => {
    // Ensure crypto-browserify is resolved properly
    config.resolve.fallback = {
      ...config.resolve.fallback,
      crypto: require.resolve('crypto-browserify'),
    };

    return config;
  },
});
