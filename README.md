# CONALEC - Validación provisional de credencial

Página pública provisional para Vercel mientras se implementa la validación real por TokenQR.

## Rutas

- `/v/demo`
- `/v/{TokenQR}`
- `/api/validar/{TokenQR}`

## Instalación local

```bash
npm install
npm run dev
```

Abrir:

```text
http://localhost:3000/v/demo
```

## Deploy en Vercel

1. Subir este proyecto a GitHub.
2. Importar el repositorio en Vercel.
3. Deploy.
4. Configurar dominio personalizado, por ejemplo: `validacion.conalec.com`.
5. Crear QR con la URL: `https://validacion.conalec.com/v/{TokenQR}`.

## Seguridad

Esta versión es provisional. No consulta SharePoint y no muestra datos personales.
La validación real debe realizarse server-side usando Microsoft Graph y permisos restringidos.
