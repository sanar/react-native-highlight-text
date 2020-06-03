module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/?(*.)+(test).js'],
  transformIgnorePatterns: ['node_modules/(?!(jest-)?react-native)'],
};
