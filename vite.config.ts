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
});
