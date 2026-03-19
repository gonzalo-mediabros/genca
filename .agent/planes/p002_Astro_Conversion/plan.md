# p002: Conversión HTML a Astro (Modular x Capturas)

## 🎯 OBJETIVO

Migrar el contenido estático de `ref/Genca.html` a una página Astro llamada `home.astro`, utilizando las capturas de pantalla de `/ref` como referencia visual 1:1 y el "texto limpio" para la semántica.

## 📝 DESCRIPCIÓN (Narrativa)

El equipo construirá la web por secciones atómicas. El ADN visual se extraerá del Header y Footer originales. Utilizaremos el enfoque de "Píxel-Perfect" comparando cada componente de Astro con su captura `.png` correspondiente. Realizaremos una parada técnica tras completar el Frame (Header/Footer) para asegurar la aprobación de la base visual.

## ✅ TAREAS

### 🏢 FASE 1: Foundations & Framing — [STOP & VALIDATE]

- [x] 1.1 Extraer Design Tokens (Colores, Fuentes) al `global.css` (.src/styles/global.css)
- [x] 1.2 Crear Layout maestro con Meta-tags del original (.src/layouts/Layout.astro)
- [x] 1.3 Implementar Header usando `ref/menu.png` (.src/components/Header.astro)
- [x] 1.4 Implementar Footer usando `ref/footer.png` (.src/components/Footer.astro)
- [x] **Handoff**: Parada para validación visual del Usuario.

### 📜 FASE 2: Home Sections (Módulos 1 al 4)

- [x] 2.1 Maquetar Hero usando `ref/module1 hero.png`
- [x] 2.2 Maquetar sección Servicios usando `ref/module2 nuestros-servicios.png`
- [x] 2.3 Maquetar sección Instalaciones usando `ref/module3 nuestras-instalaciones.png`
- [x] 2.4 Maquetar sección Diferenciales usando `ref/module4 nuestro-diferencial.png`
- [x] 2.5 Maquetar sección Diferenciales usando `ref/module5 contacto.png`

### 📧 FASE 3: Contacto & Final QA

- [x] 3.1 Implementar Formulario de contacto usando `ref/module5 contacto.png` (.src/components/Form.astro)
- [ ] 3.2 Sincronización de Assets (Imágenes extraídas del original)
- [ ] 3.3 Calibración final de Responsive y SEO.
