import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
const root = path.resolve(__dirname)


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve :{
    extensions: [".css",".js",".ts"],
    alias: [
      {
        find: '@',
        replacement: path.resolve(root, 'src')
      }
    ]
  },
  server: {
    open: true
  }
})
