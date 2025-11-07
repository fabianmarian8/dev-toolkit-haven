// dev-toolkit-haven/src/utils/jsonToTs.ts

import { jsonToTS } from 'json-to-ts';

/**
 * Konvertuje JSON reťazec na TypeScript Interface.
 * Využíva knižnicu 'json-to-ts' pre robustnú konverziu.
 *
 * @param jsonString Vstupný JSON reťazec
 * @returns TypeScript Interface reťazec
 */
export function jsonToTsInterface(jsonString: string): string {
    try {
        const obj = JSON.parse(jsonString);
        const tsInterfaces = jsonToTS(obj, { rootName: 'RootInterface' });
        return tsInterfaces.join('\n\n');
    } catch (e) {
        return '// Chyba: Neplatný JSON vstup pre konverziu na TypeScript Interface.';
    }
}

// Simulácia komponentu pre JSON to TS
export const JsonToTsComponentCode = \`
import React, { useState, useCallback } from 'react';
import { jsonToTsInterface } from '../utils/jsonToTs';

const JsonToTsTool = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [tsOutput, setTsOutput] = useState('');

  const handleConvert = useCallback(() => {
    const result = jsonToTsInterface(jsonInput);
    setTsOutput(result);
  }, [jsonInput]);

  return (
    <div className="json-to-ts-container p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400">💡 JSON to TypeScript Interface Converter</h2>
      <p className="mb-4 text-gray-600 dark:text-gray-300">Generujte robustné TypeScript rozhrania priamo z JSON dát. Využíva knižnicu \`json-to-ts\`.</p>
      
      <textarea 
        value={jsonInput} 
        onChange={(e) => setJsonInput(e.target.value)} 
        placeholder="Vložte JSON na konverziu..." 
        className="w-full h-40 border p-2 rounded resize-none dark:bg-gray-700 dark:text-white"
      />
      
      <button 
        onClick={handleConvert} 
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-2 transition duration-150"
      >
        Generovať TS Interface
      </button>
      
      <div className="mt-4">
        <p className="font-bold">Výsledné TypeScript Rozhranie:</p>
        <pre className="bg-white dark:bg-gray-900 p-3 rounded mt-2 overflow-auto text-sm">
          {tsOutput}
        </pre>
      </div>
    </div>
  );
};

export default JsonToTsTool;
\`;
