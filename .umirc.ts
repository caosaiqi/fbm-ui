import { defineConfig } from 'dumi';

  
export default defineConfig({
  base: '/fbm-ui',
  // publicPath: '/fbm-ui/',
  title: 'fbm-ui',
  favicon: 'https://avatars.githubusercontent.com/u/91235154?s=50&v=4',
  logo: 'https://avatars.githubusercontent.com/u/91235154?s=200&v=4',
  outputPath: 'docs-dist',
  mode: 'site',
  resolve: {
    includes: ['docs', 'src/components'],
  },
  proxy: {
    "/v2": { // 标识需要进行转换的请求的url
     "target": "https://www.mocky.io/v2/5cc8019d300000980a055e76", // 服务端域名
     "changeOrigin": true, // 允许域名进行转换
     "pathRewrite": { "^/v2": ''}  // 将请求url里的ci去掉
    }
  }
  // more config: https://d.umijs.org/config
});
