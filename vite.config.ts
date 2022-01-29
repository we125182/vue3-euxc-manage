import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import AutoImport from 'unplugin-auto-import/vite';

import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/var.scss" as *;`,
      },
    },
  },
  server: {
    proxy: {
      '/admin/api': {
        target: 'https://test-tencent.ylzpay.com',
        changeOrigin: true,
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyRes) => {
            const { method, protocol, path, host } = proxyRes;
            console.log(`[PROXY ${method}]: ${protocol}//${host}${path}`);
          });
        },
      },
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      dts: './types/auto-imports.d.ts',
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
      ],
      imports: [
        'vue',
        'vue-router',
        {
          '@vueuse/core': [],
        },
      ],
      resolvers: [ElementPlusResolver()],
      eslintrc: {
        enabled: true,
        filepath: './types/eslint-auto-imports.json',
      },
    }),
    Components({
      dts: './types/components.d.ts',
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(__dirname, './src/assets/icons')],
      symbolId: 'icon-[name]',
    }),
  ],
  build: {
    target: 'es5',
    minify: 'terser',
  },
  envDir: './env',
});
