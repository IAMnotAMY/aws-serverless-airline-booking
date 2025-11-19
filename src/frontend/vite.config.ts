import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar({
      sassVariables: 'src/css/quasar.variables.scss'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'src': fileURLToPath(new URL('./src', import.meta.url)),
      'components': fileURLToPath(new URL('./src/components', import.meta.url)),
      'layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
      'pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      'assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      'boot': fileURLToPath(new URL('./src/boot', import.meta.url)),
      'stores': fileURLToPath(new URL('./src/stores', import.meta.url))
    }
  },
  server: {
    port: 9000,
    open: true
  },
  build: {
    target: 'esnext',
    minify: 'esbuild'
  }
})