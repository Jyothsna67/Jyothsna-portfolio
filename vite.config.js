import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.VITE_APP_EMAILJS_SERVICE_ID': JSON.stringify(env.VITE_APP_EMAILJS_SERVICE_ID),
      'process.env.VITE_APP_EMAILJS_TEMPLATE_ID': JSON.stringify(env.VITE_APP_EMAILJS_TEMPLATE_ID),
      'process.env.VITE_APP_EMAILJS_PUBLIC_KEY': JSON.stringify(env.VITE_APP_EMAILJS_PUBLIC_KEY)
    },
    plugins: [react()],
    assetsInclude: ['**/*.glb']

  }
})
