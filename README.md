# Ark Project V1

Este proyecto es un boilerplate inicial para proyectos React con TypeScript, Storybook, Vitest, ESLint, Prettier y Zustand, configurado para trabajar con React 18.
🧰 Parte del ecosistema de herramientas para acelerar y estandarizar el desarrollo frontend.
Este boilerplate ofrece una base sólida con React 18, TypeScript, Storybook, Vitest, Zustand y Arquitectura Hexagonal, ideal para construir proyectos escalables y mantenibles con foco en productividad y buenas prácticas.

## 🚀 Características
- ✅ React 18 con TypeScript
- 📚 Storybook 8 configurado
- 🧪 Testing con Vitest y Testing Library
- 📐 ESLint y Prettier configurados para un código limpio
- 📂 Arquitectura con barrels y alias
- 📦 Administración de estado con Zustand
- 💅 Estilos con SASS y variables globales
- 🤖 Configuración de Dependabot para actualizaciones semanales
- 📦 Template Repository en GitHub habilitado para clonar rápidamente
- 📊 Uso de Depcheck y npm-check para monitorear dependencias
---

## 📁 Estructura del Proyecto (Arquitectura Hexagonal)

Este proyecto está organizado siguiendo los principios de la **Arquitectura Hexagonal**, con separación clara de capas, responsabilidad única y escalabilidad en mente.

```bash

src/
├── App/                     # Punto de entrada de la app (App.tsx)
├── assets/                 # Archivos estáticos: imágenes, fuentes, etc.
├── config/                 # Configuraciones globales (API, themes, etc.)
├── constants/              # Constantes reutilizables en toda la app
│   └── index.ts
├── core/                   # 💡 Núcleo de la aplicación (dominio + casos de uso)
│   ├── application/        # Casos de uso (reglas de negocio)
│   │   ├── usecases/
│   │   └── index.ts
│   ├── domain/             # Entidades y contratos (interfaces/patrones)
│   │   ├── entities/
│   │   └── repositories/
│   └── index.ts
├── infrastructure/         # 🔌 Adaptadores externos (API, persistencia)
│   ├── api/                # Clientes HTTP, configs de endpoints
│   ├── repositories/       # Implementaciones concretas de los contratos del dominio
│   └── index.ts
├── main.tsx                # Entry point principal (ReactDOM.render)
├── presentation/           # 🎨 Capa de UI (React)
│   ├── components/         # Componentes organizados con Atomic Design
│   │   ├── Atoms/
│   │   ├── Molecules/
│   │   ├── Organisms/
│   │   ├── Buttons/
│   │   └── Card/
│   ├── context/            # Contextos específicos de UI (ej: ModalContext)
│   ├── layouts/            # Layouts de alto nivel para páginas
│   ├── pages/              # Vistas principales que usan los layouts
│   ├── routes/             # Configuración y definición de rutas
│   ├── styles/             # Archivos SCSS y configuración visual global
│   └── viewmodels/         # Hooks que conectan la UI con los casos de uso
├── store/                  # 🧠 Estado global (Context API, Zustand, Redux)
│   ├── Context/            # Contextos globales como Auth, Theme, etc.
│   ├── ZustandStore/       # Stores de Zustand (ej: useUserStore)
│   └── index.ts
├── test/                   # Configuración global de testing (setup, mocks, etc.)
│   └── setup.ts
├── types/                  # Tipos y definiciones TypeScript globales
│   ├── index.d.ts
│   └── index.ts
├── utils/                  # Funciones y hooks utilitarios genéricos
│   ├── hooks/
│   └── index.ts
└── vite-env.d.ts           # Archivo generado por Vite para TS

---
```

## 📂 Alias configurados
Los alias están configurados en `vite.config.ts`.
```typescript
resolve: {
  alias: {
    '@': path.resolve(__dirname, './src')
  }
}
Ahora podés importar archivos así:
```typescript
import { App } from '@/App';
import { Button } from '@/components/Atoms';
```

## 🔥 Principios de esta estructura

- Separación de capas: core, infrastructure, presentation.
- Independencia del framework: el núcleo (core/) no depende de React ni de librerías externas.
- Inversión de dependencias: los adaptadores (infrastructure/) implementan interfaces del dominio (core/domain).
- UI desacoplada: la capa de presentación consume casos de uso a través de viewmodels, sin lógica de negocio directa.

## 📌 Notas importantes
- Este proyecto está preparado para React 18. Si querés actualizar a React 19, asegurate de actualizar tus dependencias y configuraciones necesarias.
- Siempre corré `bun install`, `npm install` o `yarn install` después de clonar o copiar este proyecto.

---

## 📦 package.json

Este proyecto cuenta con una configuración robusta orientada al desarrollo frontend moderno en React, con soporte para TypeScript, Storybook, Vitest, ESLint, y Zustand, todo integrado con **Vite** como bundler.

### 🧩 Información general

| Campo         | Valor                |
|---------------|----------------------|
| `name`        | ark-project-v1       |
| `version`     | 0.0.0                |
| `type`        | module               |
| `private`     | true                 |
| `description` | Boilerplate base con arquitectura hexagonal, soporte para testing, documentación y ESLint. |
| `license`     | ISC                  |

---

### 🔧 Scripts disponibles

| Script            | Descripción                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| `dev`             | Inicia la app en modo desarrollo con Vite.                                 |
| `build`           | Compila con TypeScript y genera el build con Vite.                         |
| `preview`         | Muestra una vista previa del build en local.                               |
| `lint`            | Ejecuta ESLint sobre todo el proyecto.                                     |
| `test`            | Corre los tests con Vitest.                                                |
| `test:ui`         | Ejecuta la interfaz interactiva de tests de Vitest.                        |
| `coverage`        | Genera un reporte de cobertura con Vitest.                                 |
| `storybook`       | Levanta Storybook en el puerto 6006.                                       |
| `build-storybook` | Genera el build estático de Storybook.                                     |
| `depcheck`        | Revisa dependencias no usadas.                                              |
| `check`           | Usa `npm-check` para verificar paquetes desactualizados.                   |

---

### 📦 Dependencias clave

| Paquete             | Propósito                                         |
|---------------------|---------------------------------------------------|
| `react` / `react-dom` | Core de la app en React 18                     |
| `zustand`           | Gestión de estado sencilla y escalable           |
| `sass`              | Soporte para estilos con SCSS                    |
| `@storybook/*`      | Ecosistema de Storybook 8 para documentación de UI |
| `vite`              | Bundler ultra rápido para desarrollo moderno     |

---

### 🧪 DevDependencies destacadas

| Paquete                   | Uso principal                         |
|---------------------------|---------------------------------------|
| `vitest`                  | Testing unitario                      |
| `@vitest/ui`              | UI de tests en modo dev               |
| `@playwright/test`        | Testing E2E                           |
| `@testing-library/react`  | Testing de componentes React          |
| `eslint` + plugins        | Linter con soporte para React y Storybook |
| `typescript`              | Tipado estático                       |
| `depcheck` / `npm-check`  | Mantenimiento de dependencias         |

---

### ✅ Linter configurado

```json
"eslintConfig": {
  "extends": ["plugin:storybook/recommended"]
}
```
---

## 🧭 Convenciones de Código

- Tipado estricto con TypeScript (`strict: true` en `tsconfig`).
- Estructura basada en Arquitectura Hexagonal + Atomic Design + Metodologia BEM.
- Nombres de archivos y carpetas en `camelCase` (excepto componentes React: `PascalCase`).
- Todos los componentes y hooks deben tener:
  - Test unitario (`.test.tsx`)
  - Storybook (`.stories.tsx`) si aplica
- Se utiliza ESLint + Prettier para formato y reglas.
---

## 📦 Instalación

### Clonar el Repositorio
```bash
$ git clone https://github.com/nicolasegpla/arquitecture_v1.git
```

### Entrar al directorio del proyecto
```bash
$ cd YOUR_REPO_NAME
```

### Instalar dependencias
Si estás usando Bun (recomendado por rapidez):
```bash
$ bun install
```

O con npm o yarn:
```bash
$ npm install
# o
$ yarn install
```

---

## 🚀 Correr el Proyecto

### Desarrollo
```bash
$ bun run dev  # O npm run dev / yarn dev
```

### Storybook
```bash
$ bun run storybook  # O npm run storybook / yarn storybook
```

### Build de Producción
```bash
$ bun run build  # O npm run build / yarn build
```

### Previsualizar el Build
```bash
$ bun run preview  # O npm run preview / yarn preview
```

---

## 🧪 Testing

### Ejecutar pruebas
```bash
$ bun run test  # O npm run test / yarn test
```

### Ejecutar pruebas con UI interactiva
```bash
$ bun run test:ui  # O npm run test:ui / yarn test:ui
```

### Ejecutar pruebas con coverage
```bash
$ bun run coverage  # O npm run coverage / yarn coverage
```

---

## 🔥 ¿Querés usar este boilerplate para un nuevo proyecto?
1. Cloná este proyecto:
```bash
git clone https://github.com/nicolasegpla/arquitecture_v1.git nuevo-proyecto
```

2. Borrá el historial git:
```bash
rm -rf .git
```

3. Iniciá un nuevo repositorio:
```bash
git init
```

4. Hacé un nuevo commit inicial y conectá tu repositorio remoto.

## 🔥 ¿Querés usar este boilerplate para un nuevo proyecto usando GitHub Template?

1. Hacé clic en el botón verde que dice "Use this template" en el repositorio de GitHub: Ark Project V1

2. Poné un nombre a tu nuevo repositorio y clickeá en "Create repository from template".
   
3. Clonar tu nuevo repositorio a tu máquina local
```bash
git clone https://github.com/nuevo/repo.git
```
4. Entrar al directorio del proyecto
```bash
cd tu-nuevo-proyecto
```
### Entrar al directorio del proyecto
```bash
$ cd YOUR_REPO_NAME
```

### Instalar dependencias
Si estás usando Bun (recomendado por rapidez):
```bash
$ bun install
```

O con npm o yarn:
```bash
$ npm install
# o
$ yarn install
```
---

## 📄 Licencia
Este proyecto está bajo la licencia MIT.


