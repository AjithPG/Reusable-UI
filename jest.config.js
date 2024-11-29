/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: 'jsdom',
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
    '^.+\\.tsx?$': 'babel-jest',  // For TypeScript files
    '^.+\\.js$': 'babel-jest',    // For JS files with JSX
  },
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',  // Mock CSS imports
  },
};