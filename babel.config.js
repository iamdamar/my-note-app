module.exports = function (api) {
  api.cache(true);

  const presets = [
    'next/babel', // Preset for Next.js
    '@babel/preset-env', // Preset for latest JavaScript features
    '@babel/preset-react' // Preset for React JSX
  ];

  const plugins = [
    // Any additional plugins you may need
  ];

  return {
    presets,
    plugins
  };
};
