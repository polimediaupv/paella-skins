// vite.config.js
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default {
  build: {
    chunkSizeWarningLimit: 2*1024
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: '../skins/*',
          dest: 'skins'
        }
      ]
    })
  ]
}