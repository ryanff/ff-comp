import { defineConfig } from 'vite';
import * as compiler from '@vue/compiler-sfc';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
        compiler,
      }),
      vueJsx(),
    cssInjectedByJsPlugin({ relativeCSSInjection: true }),
  ],
  optimizeDeps: {
    // exclude: ['vue-demi'],
  },
  css: {
    modules: {
      // generateScopedName: '[name]_[local]_[hash:8]',
      localsConvention: 'camelCaseOnly',
    }
  },
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.tsx'),
      },
      name: 'f_component',
      formats: ['es'],
    },
    outDir: `dist/`,
    cssCodeSplit: true,
    rollupOptions: {
      external: [
        'vue',
      ],
      output: {
        extend: true,
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
