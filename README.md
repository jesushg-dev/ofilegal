# OFILEGAL

Sitio profesional de Isaí Alexander Zeledón, Abogado y Notario Público. Next.js (App Router), TypeScript, ESLint y Tailwind.

## Desarrollo

```bash
cp .env.example .env.local
pnpm install
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000). El panel de edición está en [http://localhost:3000/admin](http://localhost:3000/admin).

Scripts:

- `pnpm dev` — servidor de desarrollo
- `pnpm build` — compilación de producción
- `pnpm lint` / `pnpm lint:fix` — ESLint

## Cómo editar (fotos y artículos)

1. Copie `.env.example` a `.env.local` y defina `ADMIN_PASSWORD`.
2. Entre a `/admin` con esa clave.
3. **Fotos:** suba imágenes en `/admin/fotos`. Quedan en `public/uploads`.
4. **Artículos:** cree o edite en `/admin/articulos` (borrador, próximamente o publicado).
5. **Sitio:** en `/admin/sitio` elija la foto de perfil y actualice teléfono, correo y dirección.

El contenido público se lee desde `content/site.json`, `content/articles.json` y `content/media.json`. Esa capa (`ContentStore`) está pensada para reemplazarse luego por una base de datos y almacenamiento de archivos (por ejemplo Blob) sin rehacer las páginas.

En un despliegue serverless, los archivos JSON y las subidas locales no persisten; use este panel en local o cambie el almacén antes de producción.

## Notas

La foto oficial del HTML original (`image_2cef80.jpg`) no estaba junto al archivo. Suba el retrato desde `/admin/fotos` y asígnelo en `/admin/sitio`.
