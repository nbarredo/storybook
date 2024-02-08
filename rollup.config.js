import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postscss from 'rollup-plugin-postcss';
import {terser} from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import pkg from "./package.json";
import image from '@rollup/plugin-image';


export default [
    {
        input: 'src/index.js',
        output: [
            {
                file: pkg.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: pkg.module,
                format: 'esm',
                sourcemap: true,                
            }
        ],
        plugins: [
            postscss(),
            babel({
               exclude: 'node_modules/**',
               presets: ['@babel/preset-react'] 
            }),
            peerDepsExternal(),
            resolve(),
            commonjs(),
            terser(),
            image()
        ]
    }
]


