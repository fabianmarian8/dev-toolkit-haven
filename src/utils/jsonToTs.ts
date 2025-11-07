// dev-toolkit-haven/src/utils/jsonToTs.ts

/**
 * Simulácia funkcie pre konverziu JSON objektu na TypeScript Interface.
 * V reálnej aplikácii by sa použila knižnica ako 'json-to-ts'.
 *
 * @param jsonString Vstupný JSON reťazec
 * @returns TypeScript Interface reťazec
 */
export function jsonToTsInterface(jsonString: string): string {
    try {
        const obj = JSON.parse(jsonString);
        let tsInterface = 'interface RootInterface {\n';

        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                const value = obj[key];
                let type = typeof value;

                if (Array.isArray(value)) {
                    type = 'Array<any>'; // Zjednodušená simulácia
                    if (value.length > 0) {
                        const firstItemType = typeof value[0];
                        if (firstItemType === 'object' && value[0] !== null) {
                            type = 'Array<ItemInterface>';
                            // V reálnom kóde by sa tu rekurzívne generovalo ItemInterface
                        } else {
                            type = \`Array<\${firstItemType}>\`;
                        }
                    }
                } else if (type === 'object' && value !== null) {
                    type = 'any'; // Zjednodušená simulácia
                    // V reálnom kóde by sa tu rekurzívne generovalo sub-interface
                } else if (type === 'string') {
                    type = 'string';
                } else if (type === 'number') {
                    type = 'number';
                } else if (type === 'boolean') {
                    type = 'boolean';
                }

                tsInterface += \`  \${key}: \${type};\n\`;
            }
        }

        tsInterface += '}\n';
        return tsInterface;

    } catch (e) {
        return '// Chyba: Neplatný JSON vstup pre konverziu na TypeScript Interface.';
    }
}

// Simulácia komponentu pre JSON to TS
export const JsonToTsComponentCode = \`
import React, { useState } from 'react';
import { jsonToTsInterface } from '../utils/jsonToTs';

const JsonToTsTool = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [tsOutput, setTsOutput] = useState('');

  const handleConvert = () => {
    const result = jsonToTsInterface(jsonInput);
    setTsOutput(result);
  };

  return (
    <div className="json-to-ts-container">
      <h2>JSON to TypeScript Interface Converter (Killer Feature)</h2>
      <textarea value={jsonInput} onChange={(e) => setJsonInput(e.target.value)} placeholder="Vložte JSON" />
      <button onClick={handleConvert}>Generovať TS Interface</button>
      <pre>{tsOutput}</pre>
    </div>
  );
};

export default JsonToTsTool;
\`;
