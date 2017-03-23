import babel from 'rollup-plugin-babel' // "using Babel to transpile your ES6/7 code and Rollup to generate a standalone bundle", "Babel will respect .babelrc files"
import resolve from 'rollup-plugin-node-resolve' // "Locate modules using the Node resolution algorithm, for using third party modules in node_modules"
import commonjs from 'rollup-plugin-commonjs' //"Convert CommonJS modules to ES6, so they can be included in a Rollup bundle"
  //not all libraries are es6 just yet
// import uglify from 'rollup-plugin-uglify'

export default {
  entry: './assets/js/main.js',
  dest: './dist/assets/js/main.js',
  format: 'iife', //also available 'es', 'cjs'. using 'iife' for browser convenience.
  plugins: [
    babel({
      exclude: 'node_modules/**' // "Ideally, you should only be transforming your own source code", not external dependencies
    }),
    resolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      include: 'node_modules/**',
    })
    // uglify()
  ]
}
