/**
 * Created by Jaron Long on 2019/10/21
 */
const fs = require('fs')
const path = require('path')
const flattenDeep = require('lodash/flattenDeep')

import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import typescript from 'rollup-plugin-typescript2'
import json from 'rollup-plugin-json'
import { terser } from 'rollup-plugin-terser'
import analyze from 'rollup-plugin-analyzer'
import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
// import pxtorem from 'postcss-pxtorem'
import assets from 'postcss-assets'
import inlineSvg from 'postcss-inline-svg'
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import cssnano from 'cssnano'
// import pkg from './package.json'
import babel from 'rollup-plugin-babel';
import alias from 'rollup-plugin-alias'; // 路径别名
import css from 'rollup-plugin-css-chunks'; // 分包

const libraryName = 'HelperGdpComponents'

function entry(input, output) {
  return {
    input,
    output,
    watch: {
      include: 'src/**'
    },
    strict: true,
    plugins: [
      // Allow json resolution
      json(),
      peerDepsExternal(),
      alias({
        resolve: ['.ts', '.js', '.vue', '.styl'],
        entries: [
          {
            find: '@',
            replacement: __dirname + '/src'
          }
        ]
      }),
      // Compile TypeScript files
      typescript({
        tsconfig: './tsconfig.json',
        verbosity: 2,
        tsconfigDefaults: {
          extendedDiagnostics: process.env.NODE_ENV === 'production'
        },
        useTsconfigDeclarationDir: true,
        objectHashIgnoreUnknownHack: true,
        clean: process.env.NODE_ENV === 'production'
      }),
      babel({
        exclude: 'node_modules/**',
        // runtimeHelpers: true,
        plugins: [
          ["import", {
            "libraryName": "vant",
            "libraryDirectory": "es",
            "style": true
          }, 'vant']
        ],
      }),
      // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
      commonjs(),
      // Allow node_modules resolution, so you can use 'external' to control
      // which external modules to include in the bundle
      // https://github.com/rollup/rollup-plugin-node-resolve#usage
      resolve(),
      css({
        // just consume the CSS files
        ignore: false,
        // generate sourcemap
        sourcemap: process.env.NODE_ENV !== 'production',
        // inject `@import` directives
        injectImports: true,
        // name pattern for emitted secondary chunks
        chunkFileNames: 'chunk-[hash].css',
        // name pattern for emitted entry chunks
        entryFileNames: '[name].css'
      }),
      vue({ css: false }),
      postcss({
        extract: false,
        exec: true,
        plugins: [
          inlineSvg(),
          assets({
            relative: true
          }),
          // pxtorem({
          //   rootValue: 100,
          //   propList: ['*position*', 'margin*', 'padding*', '*width', '*height', 'background*']
          // }),
          cssnano({
            preset: ['default', {
              svgo: {
                plugins: [{
                  removeDimensions: true
                }]
              }
            }]
          }),
        ],
        sourceMap: process.env.NODE_ENV !== 'production'
      }),
      // Resolve source maps to the original source
      sourceMaps()
    ].concat(process.env.NODE_ENV === 'production'
      ? [
        // Minify
        terser(),
        analyze({
          summaryOnly: true
        })
      ]
      : [])
  }
}

// 移除数组指定元素
function removeArrayElement(sourceArr, key) {
  if (!sourceArr || !(sourceArr instanceof Array) || !key || typeof key !== 'string') return sourceArr
  const source = JSON.parse(JSON.stringify(sourceArr))
  const index = source.indexOf(key)
  if (index !== -1) {
    source.splice(index, 1)
  }
  return source
}

let entryArr = fs.readdirSync(path.join(__dirname, 'src'))
// 排除非入口路径
entryArr = removeArrayElement(entryArr, 'main.ts')
entryArr = removeArrayElement(entryArr, 'assets')
entryArr = removeArrayElement(entryArr, 'mixins')
entryArr = removeArrayElement(entryArr, 'interface')

// 生成所有入口
let allEntry = []
allEntry = entryArr && entryArr.map(item => {
  let dir = fs.readdirSync(path.join(__dirname, 'src', item))
  dir = removeArrayElement(dir, 'index.ts')
  dir = dir.map(el => path.join(__dirname, 'src', item, el, el + '.ts'))
  return dir
}) || []
allEntry.push('src/main.ts')
allEntry = flattenDeep(allEntry)

export default [
  entry(allEntry, [
    {
      dir: 'lib',
      name: libraryName,
      format: 'es',
      globals: {
        vue: 'vue'
      },
      chunkFileNames: 'bundle/chunk.[format].[hash].js',
      entryFileNames: '[name].js',
      sourcemap: process.env.NODE_ENV !== 'production'
    },
    // { file: pkg.module, format: 'es', sourcemap: process.env.NODE_ENV !== 'production' }
  ])
]

