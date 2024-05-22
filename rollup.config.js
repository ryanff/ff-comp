// import path from "path";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
// import eslint from "@rollup/plugin-eslint";
// import terser from '@rollup/plugin-terser';
import json from "@rollup/plugin-json";
import babel from "@rollup/plugin-babel";
import "@babel/plugin-transform-runtime";
import postcss from 'rollup-plugin-postcss';
// import vuePlugin from 'rollup-plugin-vue'
// import { string } from 'rollup-plugin-string';




import pkg from "./package.json" assert { type: "json" };

const isProd = process.env.NODE_ENV === "production";

const paths = {
  input: {
    button: "./packages/f_button/src/index.tsx",
  },
  output: {
    dir: './dist',
  },
};

/**
 * plugins 需要注意引用顺序
 */
const plugins = [
    // vuePlugin(),
  // 可使用 `import {module} from './file'` 替换 `import {module} from './file/index.js`
  resolve(),
  // 使得 rollup 支持 commonjs 规范，识别 commonjs 规范的依赖
  commonjs(),
  typescript({
    clean: true,
  }),
  // 验证导入的文件
  //   eslint({
  //     throwOnError: true, // lint 结果有错误将会抛出异常
  //     throwOnWarning: true,
  //     include: ['packages/*/src/**/*.ts','packages/*/src/**/*.tsx'],
  //     exclude: ['node_modules/**', 'dist/**', '*.js'],
  //   }),
  postcss({
    extract: false, // 将 CSS 提取为单独的文件
    minimize: true, // 压缩 CSS
    modules: true, // 启用 CSS 模块化
  }),
  
  json(),
  // babel
  babel({
    babelHelpers: "runtime",
    presets: ["@babel/preset-env", "@vue/babel-preset-jsx"],
    extensions: [".js", ".jsx", ".ts", ".tsx", ".scss"],
    exclude: "**/node_modules/**",
    plugins: [
      [
        "@babel/plugin-transform-runtime",
        {
          corejs: 3,
          helpers: true,
          regenerator: true,
          useESModules: false,
        },
      ],
    ],
  }),

  // 配合 commnjs 解析第三方模块
  // resolve({
  //   // 将自定义选项传递给解析插件
  //   customResolveOptions: {
  //     moduleDirectory: 'node_modules',
  //   },
  // }),
  
];

/**
 * rollup 配置项
 */
export default [
  {
    input: paths.input,
    output: [
      // 输出 commonjs 规范的代码
      {
        dir: 'dist',
        // file: path.join(paths.output.dir, "index.cjs.js"),
        format: "iife",
        entryFileNames: 'index.iife.js',
        name: 'f_component',
        sourcemap: !isProd,
        globals: {
            vue: 'Vue',
        }
      },
      // 输出 es 规范的代码
      {
        dir: 'dist',
        // file: path.join(paths.output.dir, "index.esm.js"),
        format: "es",
        entryFileNames: 'index.esm.js',
        name: pkg.name,
        sourcemap: !isProd,
        globals: {
            vue: 'Vue',
        }
      },
    ],
    external: ['vue'], // 指出应将哪些模块视为外部模块，如 Peer dependencies 中的依赖
    plugins,
  },
];
