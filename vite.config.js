import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  alias:{
    "@": path.resolve(__dirname, "./src"), // cada vez que pongamos el @ , se digirira al src
    "@features": path.resolve(__dirname, "./src/feature/"),
  }
})
