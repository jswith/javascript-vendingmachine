module.exports = {
  moduleFileExtensions: ['js', 'ts'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  testMatch: ['<rootDir>/**/*.test.(js|ts)'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
