import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    // Add this line
    proxy: {
      "/api": "https://recipe-backend-two.vercel.app"  // Adjust this based on your backend
    },
    include: "**/*.jsx",
  })]
})