import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

import { lib, plugins } from './vite.lib'

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [
    react(),
    ...plugins

  ],
  build: {
    lib,
    rollupOptions: {
      external: ['react', '@nhost/react'],
      output: {
        globals: {
          react: 'react',
          '@nhost/react': '@nhost/react'
        }
      }
    }
  }
})
