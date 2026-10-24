# Seguidilla Food Truck – Menú en línea

Menú digital y pedidos por WhatsApp para **Seguidilla Food Truck**. Sitio estático (HTML + CSS + JavaScript), sin build.

## Estructura

```
├── index.html          # Estructura de la página
├── css/styles.css      # Estilos
├── js/
│   ├── images.js       # Mapa de imágenes (clave → ruta en assets/img)
│   └── app.js          # Lógica: menú, carrito, panel admin, Supabase
├── assets/img/         # Logo y fotos de los productos
└── .nojekyll           # Evita procesamiento de Jekyll en GitHub Pages
```

## Publicar en GitHub Pages

1. Sube el contenido de esta carpeta a la raíz de un repositorio.
2. En **Settings → Pages**, elige la rama `main` y la carpeta `/ (root)`.
3. Tu sitio quedará en `https://TU_USUARIO.github.io/NOMBRE_REPO/`.

## Probar en local

Abre `index.html` en el navegador, o levanta un servidor:

```bash
python3 -m http.server 8000
```

## Panel de administración

El pie de página tiene un botón **🔒 Admin**. Los cambios se guardan en Supabase y se ven para todos.
El botón de exportar descarga un `app.js` actualizado (solo funciona con el sitio publicado o en un servidor local): reemplaza `js/app.js` en el repositorio con ese archivo.

## Notas

- La clave `SB_KEY` en `js/app.js` es la clave pública (*anon*) de Supabase; es normal que esté en el frontend. La seguridad depende de las políticas RLS de tu proyecto Supabase.
- Las imágenes subidas desde el panel admin se guardan en el bucket `menu-images` de Supabase.
