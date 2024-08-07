import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

/*
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
})
*/

export default defineConfig({
  plugins: [preact()],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import { h, Fragment } from 'preact'`
  }
});