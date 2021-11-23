import { defineConfig } from 'dumi';

  
export default defineConfig({
  base: '/fbm-ui',
  publicPath: '/fbm-ui/',
  title: 'fbm',
  favicon: 'https://avatars.githubusercontent.com/u/91235154?s=50&v=4',
  logo: 'https://avatars.githubusercontent.com/u/91235154?s=200&v=4',
  outputPath: 'docs-dist',
  mode: 'site',
  resolve: {
    includes: ['docs', 'src/components'],
  },
  // more config: https://d.umijs.org/config
});
