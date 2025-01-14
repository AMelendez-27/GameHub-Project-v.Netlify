import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Asegúrate de usar "/" para desplegar en Netlify en el dominio raíz.
  build: {
    outDir: 'dist', // Carpeta de salida
  },
});
