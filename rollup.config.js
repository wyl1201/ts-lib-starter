import { defineConfig } from 'rollup'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import pkg from './package.json' assert { type: 'json' }

export default defineConfig([
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.module,
        format: 'esm'
      },
      {
        file: pkg.main,
        format: 'cjs'
      },
      {
        file: pkg.browser,
        format: 'umd',
        name: pkg.name
      }
    ],
    plugins: [esbuild({ minify: true })]
  },
  {
    input: 'src/index.ts',
    plugins: [dts()],
    output: {
      file: pkg.types
    }
  }
])
