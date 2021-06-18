module.exports = {
  stories: ['../src/components/**/*.stories.@(tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false
      }
    }
  }
}
