const dependencies = [
  'react',
  'react-dom',
  'next',
  'styled-components',
  'next-images'
];

const devDependencies = [
  '@testing-library/jest-dom',
  '@testing-library/react',
  '@testing-library/user-event',
  '@types/jest',
  '@types/node',
  '@types/react',
  '@types/styled-components',
  '@typescript-eslint/eslint-plugin@latest',
  '@typescript-eslint/parser@latest',
  'babel-jest',
  'babel-plugin-inline-react-svg',
  'eslint@>=6.2.2',
  'eslint-config-prettier',
  'eslint-config-standard@latest',
  'eslint-plugin-import@>=2.18.0',
  'eslint-plugin-node@>=9.1.0',
  'eslint-plugin-prettier',
  'eslint-plugin-promise@>=4.2.1',
  'eslint-plugin-react@latest',
  'eslint-plugin-standard@>=4.0.0',
  'jest',
  'prettier',
  'typescript'
];

const ciDependencies = [
  'husky@^3.1.0',
  'lint-staged',
  '@commitlint/cli',
  '@commitlint/config-conventional',
  'commitizen',
  'cz-conventional-changelog'
];

export { dependencies, devDependencies, ciDependencies };
