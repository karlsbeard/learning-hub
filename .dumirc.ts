import { defineConfig } from 'dumi';

const repo = 'learning-hub';

export default defineConfig({
  themeConfig: {
    name: 'DJD',
  },
  base: process.env.NODE_ENV === 'production' ?  `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  exportStatic: {},
});
