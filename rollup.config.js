import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import scss from 'rollup-plugin-postcss';
import {terser} from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';

export default [
    {
        input: './src/index.js',
        output: [
            {
                file: 'storybook-static/index.js',
                format: 'cjs',
            },
            {
                file: 'storybook-static/index.es.js',
                format: 'es',
                exports: 'named',
            }
        ],
        plugins: [
            scss({
                name: 'output.css',
                sourceMap: true,
                failOnError: true,
                outputStyle: 'compressed',
              }),
            babel({
               exclude: 'node_modules/**',
               presets: ['@babel/preset-react'] 
            }),
            external(),
            resolve(),
            commonjs(),
            terser()
        ]
    }
]