import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'

export default {
  entry: './assets/js/main.js',
  dest: './dist/assets/js/main.js',
  format: 'iife', //also available 'es', 'cjs'. using 'iife' for browser convenience.
  plugins: [
    babel({
      // exclude: './node_modules/**',
    }),
    resolve({
      jsnext: true,
      main: true
    }),
    // uglify()
  ]
}
