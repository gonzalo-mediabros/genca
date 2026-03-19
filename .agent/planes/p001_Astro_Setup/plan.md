# Astro + GitHub Pages: Master Blueprint

Guía técnica para el despliegue de proyectos Astro, desde la inicialización con pnpm hasta el dominio personalizado.

---

## ✅ INDICE DE CONTROL (Checklist)

1. **[FASE 1] El Despegue (URL Temporal)**
   - [x] 1.1 Clonar repo con SSH Key: `git clone git@github.com-mediabros:gonzalo-mediabros/[REPO].git`
   - [x] 1.2 Ejecutar `pnpm create astro@latest .`
   - [x] 1.3 Instalar dependencias base con `pnpm install`.
   - [x] 1.4 Instalar `gh-pages` como dependencia de desarrollo.
   - [x] 1.5 Configurar scripts de deploy en `package.json`.
   - [x] 1.6 Configurar `astro.config.mjs` (Site, Base y Assets).
   - [x] 1.7 Configurar `.gitignore`
   -

2. **[FASE 2] Importación de imágenes**
   - [ ] 2.1 Implementar imágenes usando `import.meta.env.BASE_URL` para evitar rutas rotas.
   - [ ] **SEO**: Títulos y Metas correctas en cada página.
   - [ ] **GTM**: GTM midiendo y disparando eventos.

3. **[FASE 3] FORM (Usebasin)**
   - [ ] 3.1 Configurar `.env.local` con `PUBLIC_SCRIPT_URL` de Usebasin.
   - [ ] 3.2 Crear formulario con campo oculto `_gotcha`.
   - [ ] 3.3 Validar que el botón de éxito solo se active si el servidor responde `ok`.

4. **[FASE 4] Lanzamiento (Custom Domain)**
   - [ ] 4.1 Cambiar `DEPLOY_PATH` a "/" en el config.
   - [ ] 4.2 Crear archivo `public/CNAME` con el dominio final.
   - [ ] 4.3 Cargar registros A (IPs de GitHub) y CNAME en el panel de DNS.
   - [ ] 4.4 Activar "Enforce HTTPS" en Settings -> Pages.

---

## ℹ️ INSTRUCCIONES PASO A PASO

### 1. FASE 1: El Despegue (URL Temporal)

**1.1 Clonación:**
git clone git@github.com-mediabros:gonzalo-mediabros/[REPO].git

**1.2 Setup Inicial:**
pnpm create astro@latest .

**1.3 Instalar dependencias:**
pnpm install

**1.4 Instalación de Herramientas de Deploy:**
pnpm add -D gh-pages

**1.5 Scripts en package.json:**
Agregar en la sección de "scripts":
"deploy": "astro build && gh-pages -d dist"

**1.6 Configuración Maestra (astro.config.mjs):**
import { defineConfig } from "astro/config";
import astroIcon from 'astro-icon'

/\*

- DEPLOY GITHUB PAGES DOMINIO TEMPORAL
  \*/
  let DEPLOY_DOMAIN = "https://gonzalo-mediabros.github.io";
  let DEPLOY_PATH = "/[NOMBRE-REPO]/";

/_ ⚠️ DESCOMENTAR Y COMPLETAR SI DEPLOY ES UN CUSTOM DOMAIN ⚠️ _/
// DEPLOY_DOMAIN = "[DOMINIO]";
// DEPLOY_PATH = "/";

export default defineConfig({
site: DEPLOY_DOMAIN,
base: DEPLOY_PATH,
integrations: [astroIcon()],
build: {
assets: "assets", // Renombra '\_astro' a 'assets' para evitar q Github Pages ignore la carpeta.
},
});

**1.7 Configurar .gitignore:**
node_modules
dist
.vercel
env\*

---

### 2. FASE 2: Importación de imágenes

**2.1 Manejo de Imágenes (Rutas Dinámicas):**
Para que las imágenes carguen tanto en el subdirectorio de GitHub como en el dominio raíz, concatenar siempre la base del entorno:

src={import.meta.env.BASE_URL + "[IMAGEN.JPG]"}

---

### 3. FASE 3: FORM (Usebasin)

**3.1 Configuración de Variables:**
Crear archivo `.env.local` con: `PUBLIC_SCRIPT_URL=[TU_URL_DE_USEBASIN]`

**3.2 Protección Anti-Spam:**
Incluir el campo honey-pot dentro del formulario:
&lt;input type="checkbox" name="\_gotcha" style="display:none" tabindex="-1" /&gt;

**3.3 Lógica de Envío:**
Utilizar `fetch` hacia la URL de Usebasin. El estado de "Enviado con éxito" solo debe mostrarse si `response.ok` devuelve true.

---

### 4. FASE 4: Lanzamiento (Custom Domain)

**4.1 Ajuste de Configuración:**
En `astro.config.mjs`, comentar el bloque de dominio temporal y activar el bloque de Custom Domain:
DEPLOY_DOMAIN = "https://www.cliente.com";
DEPLOY_PATH = "/";

**4.2 Archivo CNAME:**
Crear el archivo `public/CNAME` que contenga solo el dominio: `www.cliente.com`

**4.3 Registros DNS:**

| Tipo  | Host | Valor                       |
| :---- | :--- | :-------------------------- |
| A     | @    | 185.199.108.153             |
| A     | @    | 185.199.109.153             |
| A     | @    | 185.199.110.153             |
| A     | @    | 185.199.111.153             |
| CNAME | www  | gonzalo-mediabros.github.io |

**4.4 Verificación en GitHub:**
En **Settings** -> **Pages**, confirmar que el dominio fue detectado correctamente y activar la casilla **Enforce HTTPS**.

---
