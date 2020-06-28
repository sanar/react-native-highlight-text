module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: ['<rootDir>/lib/'],
  testMatch: ['**/?(*.)+(test).js'],
  transformIgnorePatterns: ['node_modules/(?!(jest-)?react-native)'],
};
