module.exports = {
    webpack: (config) => {
      config.resolve.alias['react-native$'] = 'react-native-web';
      return config;
    },
  };
  