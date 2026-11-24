// Número internacional sin + ni espacios.
export const sitio = {
  "name": "Explora España",
  "description": "Descubre ciudades, cultura y paisajes de España con ideas para organizar tus viajes.",
  "hero": "Descubre lugares, vive experiencias",
  "section": "Destinos",
  "about": "Somos un blog turístico ficticio creado para compartir ideas de viaje por España.",
  "mission": "Inspirar viajes responsables y facilitar su planificación.",
  "vision": "Acercar el patrimonio cultural y natural de España a todos los viajeros.",
  "whatsapp": "",
  "items": [
    {
      "title": "Madrid",
      "description": "Ideas para recorrer el centro y disfrutar de sus parques.",
      "image": "foto-1.svg"
    },
    {
      "title": "Barcelona",
      "description": "Arquitectura, barrios históricos y paseos junto al mar.",
      "image": "foto-2.svg"
    },
    {
      "title": "Granada",
      "description": "Un recorrido por el patrimonio y los barrios granadinos.",
      "image": "foto-3.svg"
    }
  ],
  "posts": [
    {
      "slug": "madrid-fin-de-semana",
      "title": "Descubre Madrid en un fin de semana",
      "description": "Ideas para recorrer el centro y disfrutar de sus parques.",
      "image": "foto-1.svg"
    },
    {
      "slug": "visitar-barcelona",
      "title": "Qué visitar en Barcelona",
      "description": "Arquitectura, barrios históricos y paseos junto al mar.",
      "image": "foto-2.svg"
    },
    {
      "slug": "granada-historia",
      "title": "Granada: historia, cultura y tradición",
      "description": "Un recorrido por el patrimonio y los barrios granadinos.",
      "image": "foto-3.svg"
    }
  ]
};

// Conserva las rutas correctas en localhost y GitHub Pages.
export const url = (ruta = "") => `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${ruta.replace(/^\//, "")}`;
