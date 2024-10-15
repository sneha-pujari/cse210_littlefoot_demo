import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/littlefoot.ts', // Your entry point
  output: {
    file: 'dist/bundle.js', // Your output bundle
    format: 'iife', // Immediately-invoked function expression — suitable for <script> tags
    name: 'littlefootDemo' // This is the name of your global variable
  },
  plugins: [
    resolve(), // Allows Rollup to find dependencies in node_modules
    commonjs(), // Converts CommonJS modules to ES6
    typescript(), // If you're using TypeScript
    postcss(), // For processing CSS
    terser() // Minifies the bundle
  ],
  external: ['littlefoot'] // Declares littlefoot as an external dependency
};