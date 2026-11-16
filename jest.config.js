/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: 'reports', outputName: 'junit.xml' }],
  ],
  collectCoverageFrom: ['src/**/*.ts'],
  coverageReporters: ['text', 'cobertura'],
};