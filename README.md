# Proyecto de Precualificación

Aplicación React + Vite para gestionar la precualificación de leads. El proyecto quedó limpio y listo para subirse a GitHub y desplegarse en Vercel.

## Requisitos

- Node.js 18 o superior
- npm

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
```

## Variables de entorno

Crea un archivo `.env` a partir de `.env.example` si vas a correr el proyecto localmente.

Variables usadas por la app:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_PROJECT_ID`

## Subir a GitHub

```bash
git init
git branch -M main
git add .
git commit -m "Initial commit"
git remote add origin TU_URL_DE_GITHUB
git push -u origin main
```

## Despliegue en Vercel

1. Importa el repositorio desde GitHub en Vercel.
2. Framework Preset: `Vite`
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Agrega en Vercel las mismas variables del archivo `.env.example`.

## Notas

- Se eliminaron referencias de Git/workspace generadas por Lovable.
- Se agrego `vercel.json` para que las rutas del SPA funcionen correctamente en Vercel.
- El proyecto compila correctamente con `npm run build`.
