import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/Shopping-Cart-App-using-Context-Api-and-UseReducer-Hook/",
  plugins: [react()],
  build: {
    sourcemap: false,  // Enable source maps
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
})
