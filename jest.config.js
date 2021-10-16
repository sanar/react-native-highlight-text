module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: ['<rootDir>/lib/'],
  testMatch: ['**/?(*.)+(test).js'],
  transformIgnorePatterns: ['node_modules/(?!(jest-)?react-native)'],
};
