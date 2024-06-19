// babel.config.js
module.exports = function (api) {
  api.cache(true);

  const presets = [
    'next/babel', // Preset for Next.js
    ['@babel/preset-env', { modules: 'auto' }], // Automatically detect and handle module formats
    '@babel/preset-react' // Preset for React JSX
  ];

  const plugins = [
    '@babel/plugin-transform-runtime', // Plugin for async/await and other runtime features
    // Add any other necessary plugins
  ];

  return {
    presets,
    plugins
  };
};
