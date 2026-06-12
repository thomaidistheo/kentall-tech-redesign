import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  // svgr enables `import { ReactComponent as X } from './icon.svg?react'`
  plugins: [svgr(), react()],
  build: {
    // Keep the CRA output directory so Netlify's publish dir stays "build".
    outDir: 'build',
  },
})
