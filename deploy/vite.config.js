// vite.config.js
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default {
  base: "./",
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