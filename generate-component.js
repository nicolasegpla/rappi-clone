import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 🔥 Configuración necesaria para que __dirname funcione en ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔥 Función Principal
function generateComponent(name, targetPath) {
    const componentName = name.charAt(0).toUpperCase() + name.slice(1);
    const componentDir = path.join(targetPath, componentName); // Genera la ruta en base al path proporcionado
    const scssFileName = `${name.toLowerCase()}.scss`;

    // Crear directorio si no existe
    if (!fs.existsSync(componentDir)) {
        fs.mkdirSync(componentDir, { recursive: true });
    }

    // 🔥 Generar Componente React (.tsx)
    const componentContent = `import React from 'react';
import './${scssFileName}';

type ${componentName}Props = {
    title: string;
};

const ${componentName}: React.FC<${componentName}Props> = ({ title }) => {
    return (
        <div className="${name.toLowerCase()}">
            <h1>{title}</h1>
        </div>
    );
};

export default ${componentName};
`;

    fs.writeFileSync(path.join(componentDir, `${componentName}.tsx`), componentContent);
    console.log(`✅ Componente ${componentName}.tsx creado en ${componentDir}`);

    // 🔥 Generar Archivo SCSS
    const scssContent = `.${name.toLowerCase()} {
    display: flex;
    align-items: center;
    justify-content: center;
}
`;

    fs.writeFileSync(path.join(componentDir, scssFileName), scssContent);
    console.log(`✅ Archivo ${scssFileName} creado en ${componentDir}`);

    // 🔥 Generar Archivo Storybook (.stories.tsx)
    const storyContent = `import type { Meta, StoryObj } from '@storybook/react';
import ${componentName} from './${componentName}';

const meta: Meta<typeof ${componentName}> = {
    title: 'Components/${componentName}',
    component: ${componentName},
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ${componentName}>;

export const Default: Story = {
    args: {
        title: 'My ${componentName}',
    },
};
`;

    fs.writeFileSync(path.join(componentDir, `${componentName}.stories.tsx`), storyContent);
    console.log(`✅ Archivo ${componentName}.stories.tsx creado en ${componentDir}`);
}

// 🔥 Llamar a la función con los argumentos proporcionados
const componentName = process.argv[2];
const targetPath = process.argv[3] || path.join(__dirname, 'src', 'components'); // Usa src/components por defecto

if (!componentName) {
    console.error("❌ Por favor, proporcioná un nombre para el componente.");
    process.exit(1);
}

generateComponent(componentName, targetPath);
