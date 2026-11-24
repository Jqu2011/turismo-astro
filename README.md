# Plantilla MF0493_3

Proyecto Astro base para la prueba práctica. **No hace falta hacer fork**: clona directamente este repositorio.

```bash
git clone https://github.com/canodelacuadra/mf0493-3-plantilla.git
cd mf0493-3-plantilla
npm install
npm run dev
```

La web se abre en `http://localhost:4321`.

## Qué contiene

- `src/layouts/BaseLayout.astro`: cabecera, menú de navegación, pie y etiquetas SEO (`title`, `description`).
- `src/pages/index.astro`: página de inicio.
- `src/pages/servicios.astro`: página de información.
- `src/pages/blog/articulo-1.astro` y `articulo-2.astro`: los dos artículos del blog.
- `src/styles/global.css`: estilos básicos.
- `public/images/ejemplo.svg`: imagen de ejemplo (sustitúyela por una de tu temática).
- `.github/workflows/deploy.yml`: configuración de GitHub Actions, preparada pero **no ejecutada** durante la prueba.

Busca los comentarios `TODO:` y sustitúyelos por tus propios contenidos.

## Entrega

La ficha se entrega firmada en papel. Como material adjunto se entrega la carpeta del proyecto (en memoria o comprimida). Si la comprimes, incluye la carpeta oculta `.git`, que contiene tus commits.
