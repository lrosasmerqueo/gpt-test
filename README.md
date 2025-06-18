# Mini X Clone

Esta es una web sencilla en Vue 3 que muestra tweets de un usuario usando la API de X (Twitter).

## Configuración

1. Abre `web-app/main.js` y reemplaza `YOUR_TWITTER_BEARER_TOKEN` por tu token de acceso.
2. (Opcional) Cambia el `userId` por el ID del usuario cuyos tweets quieras mostrar.
3. Sirve la carpeta `web-app` con cualquier servidor estático. Por ejemplo:

```bash
npx serve web-app
```

## Notas

Esta implementación es muy básica y solo pretende mostrar cómo consumir la API de X desde Vue. Es posible que necesites gestionar CORS o realizar llamadas desde un backend propio.
