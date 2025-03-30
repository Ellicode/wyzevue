import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/index.ts'),
      name: 'WyzeVue',
      fileName: (format) => `wyzevue.${format}.js`,
    },
    rollupOptions: {
      // External dependencies that shouldn't be bundled
      external: ['vue'],
      output: {
        // Global variables to use in UMD build
        globals: {
          vue: 'Vue',
        },
        // Provide proper CSS extraction
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) return 'style.css'
          return assetInfo.name || '[name][extname]'
        },
      },
    },
    // Generate sourcemaps for better debugging
    sourcemap: true,
    // Minify output for production
    minify: 'terser',
  },
})
