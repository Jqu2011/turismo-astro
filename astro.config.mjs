import { defineConfig } from 'astro/config';

export default defineConfig({
  // En local no hace falta tocar nada.
  // Antes de publicar, sustituye USUARIO y NOMBRE_REPO por tus datos:
  site: 'https://jqu2011.github.io/turismo-astro/',
  // Descomenta esta línea con el nombre de tu repositorio
  // (usa '/' si tu repositorio se llama USUARIO.github.io):
  base: '/',
  trailingSlash: 'always',
});
