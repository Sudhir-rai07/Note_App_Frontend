import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    // "import.meta.env.VITE_SERVER" : JSON.stringify("https://noteapp-backend-2wsd.onrender.com")
  }
  
})
