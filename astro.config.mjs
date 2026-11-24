import { defineConfig } from 'astro/config';

export default defineConfig({
  // Sustituye USUARIO por tu usuario de GitHub en la fase de preparación del despliegue.
  site: 'https://USUARIO.github.io/mf0493-3-plantilla/',
  // Para publicar en GitHub Pages con este nombre de repositorio, añadir:
  // base: '/mf0493-3-plantilla',
  trailingSlash: 'always',
});
