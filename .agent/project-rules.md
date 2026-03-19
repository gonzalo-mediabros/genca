# 🛠️ REGLAS DEL PROYECTO (Antigravity OS v2.4)

Este archivo define las restricciones tácticas para los especialistas.

## ⚖️ REGLAS GLOBALES (Innegociables)

- **PLANIFICACIÓN OBLIGATORIA**: Jamás editar código fuente sin un plan en `.agent/planes/[ID]_
[Nombre]/plan.md` aprobado.
- **Nunca usar CSS inline**. Nunca.
- **Nunca usar tailwind**. Nunca.
- **ESTÉTICA PREMIUM**: El diseño no es negociable. Usar HSL, fuentes modernas y micro-animaciones.
- **COMUNICACIÓN INTERNA**: Los especialistas deben registrar lecciones técnicas en `.agent/project-lessons.md`.

## 🏗️ INGENIERO / ARQUITECTO

- **MODULARIDAD**: Separar lógica de negocio de la presentación.
- **ASTRO CONFIG**: Mantener `base` y `assets` sincronizados según la fase de deploy.

## 🎨 MAQUETADOR / DISEÑADOR

- **THEMING**: Uso estricto de variables CSS en `:root`.
- **IMÁGENES**: Usar siempre `import.meta.env.BASE_URL` para prefijar rutas de imágenes en Astro.
- **SANDBOX**: El diseñador solo opera en su carpeta de plan aislada.
