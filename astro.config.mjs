import { defineConfig } from "astro/config";
//

// DEPLOY GITHUB PAGES DOMINIO TEMPORAL
//
  let DEPLOY_DOMAIN = "https://gonzalo-mediabros.github.io";
  let DEPLOY_PATH = "/genca/";

// ⚠️ DESCOMENTAR Y COMPLETAR SI DEPLOY ES UN CUSTOM DOMAIN ⚠️
// DEPLOY_DOMAIN = "[DOMINIO]";
// DEPLOY_PATH = "/";

export default defineConfig({
  site: DEPLOY_DOMAIN,
  base: DEPLOY_PATH,
  build: {
    assets: "assets", // Renombra '\_astro' a 'assets' para evitar q Github Pages ignore la carpeta.
  },
  vite: {
    css: {
      modules: {
        localsConvention: "camelCase",
      },
    },
  },
});