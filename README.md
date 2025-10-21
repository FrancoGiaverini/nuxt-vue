# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


Investigación Teórica

Librerías UI para Vue/Nuxt

Vuetify
Características:
- Basado en Material Design.  
- Componentes listos para usar: tarjetas, botones, grids, menús, etc.  
- Compatible con TypeScript y Nuxt 3.  

Ventajas:
- Interfaz moderna y responsiva lista para producción.  
- Gran documentación y comunidad activa.  
- Facilita la creación de layouts.  

Desventajas:
- Tamaño del bundle puede ser grande si se usan muchos componentes.  
- Curva de aprendizaje .

BootstrapVue
Características:
- Implementación de Bootstrap 5 para Vue.  
- Componentes UI y utilidades de diseño (grids, botones, formularios).  

Ventajas:
- Muy fácil de usar para prototipos rápidos.  
- Buen soporte de navegadores.  

Desventajas:
- Menos componentes avanzados comparado con Vuetify.  
- Personalización limitada sin tocar CSS adicional.

 Buefy
Características:
- Basado en Bulma CSS.  
- Componentes ligeros y responsivos para Vue.  

Ventajas:
- Muy ligero y fácil de integrar.  
- Buen rendimiento en aplicaciones simples.  

Desventajas:*
- Menos componentes y funcionalidades que Vuetify o BootstrapVue.  
- Documentación más limitada.

---

 SSR (Server Side Rendering) vs CSR (Client Side Rendering)

 Server Side Rendering (SSR)
Qué es:
- El servidor genera HTML completo y lo envía al cliente.

Cómo funciona:
1. El cliente solicita una página.  
2. El servidor genera el HTML con los datos necesarios.  
3. El navegador recibe y muestra la página lista para usar.

Ventajas:
- Mejor SEO ya que los motores de búsqueda reciben HTML completo.  
- Tiempo de carga inicial más rápido para el usuario.  

Desventajas:
- Mayor carga en el servidor.  
- Desarrollo más complejo que CSR.

 Client Side Rendering (CSR)
Qué es:
- El navegador genera el contenido usando JavaScript.  

Cómo funciona:
1. El cliente recibe un HTML básico y scripts.  
2. El navegador ejecuta JavaScript para renderizar la página completa.

Ventajas:
- Menor carga en el servidor.  
- Experiencia de navegación fluida después de la carga inicial.

Desventajas:
- SEO menos eficiente sin pre-rendering.  
- Tiempo de carga inicial puede ser mayor si hay muchos scripts.
