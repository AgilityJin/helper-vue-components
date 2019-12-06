/**
 * Created by Jaron Long on 2019/10/21
 */
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
import pkg from './package.json'

const libraryName = 'HelperGdpComponents'

function entry(input, output) {
  return {
    input,
    output,
    watch: {
      include: 'src/**'
    },
    plugins: [
      // Allow json resolution
      json(),
      peerDepsExternal(),
      // Compile TypeScript files
      typescript({
        verbosity: 2,
        tsconfigDefaults: {
          extendedDiagnostics: process.env.NODE_ENV === 'production'
        },
        useTsconfigDeclarationDir: true,
        objectHashIgnoreUnknownHack: true,
        clean: process.env.NODE_ENV === 'production'
      }),
      // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
      commonjs(),
      // Allow node_modules resolution, so you can use 'external' to control
      // which external modules to include in the bundle
      // https://github.com/rollup/rollup-plugin-node-resolve#usage
      resolve(),
      vue({ css: false }),
      postcss({
        extract: 'dist/helper-gdp-components.css',
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
          })
        ]
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

export default [
  entry('src/main.ts', [
    { file: pkg.main, name: libraryName, format: 'cjs', sourcemap: process.env.NODE_ENV !== 'production' },
    { file: pkg.module, format: 'es', sourcemap: process.env.NODE_ENV !== 'production' }
  ])
]

