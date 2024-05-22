import { defineConfig } from 'vite';
import * as compiler from '@vue/compiler-sfc';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from "vite-plugin-dts";

import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
        compiler,
      }),
      vueJsx(),
    cssInjectedByJsPlugin({ relativeCSSInjection: true }),
    dts({
      entryRoot: "./src",
      outDir: ["./dist"],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsconfigPath: "./tsconfig.json",
      cleanVueFileName: true
    })
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
        index: resolve(__dirname, 'src/index.ts'),
      },
      fileName: 'index',
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
