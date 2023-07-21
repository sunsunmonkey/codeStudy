import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import postcssPresetEnv from 'postcss-preset-env';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
// https://vitejs.dev/config/
export default defineConfig({
	css: {
		postcss: {
			plugins: [postcssPresetEnv(), tailwindcss(), autoprefixer()]
		},
		preprocessorOptions: {
			less: {
				math: 'always'
			}
		}
	},
	plugins: [react()]
});
