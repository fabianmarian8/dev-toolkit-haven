// dev-toolkit-haven/src/components/json/JsonTool.tsx

import React, { useState } from 'react';
// Import simulovaných komponentov
import JsonDiffTool from './JsonDiffTool'; // Predpokladáme, že by bol v samostatnom súbore
import JsonToTsTool from './JsonToTsTool'; // Predpokladáme, že by bol v samostatnom súbore

// Simulácia hlavného JSON Formattera
const JsonFormatter = () => {
    const [jsonInput, setJsonInput] = useState('');
    const [formattedJson, setFormattedJson] = useState('');

    const formatJson = () => {
        try {
            const obj = JSON.parse(jsonInput);
            setFormattedJson(JSON.stringify(obj, null, 2));
        } catch (e) {
            setFormattedJson('Chyba: Neplatný JSON');
        }
    };

    return (
        <div className="p-4">
            <h1>Free JSON Formatter, Diff & TS Converter</h1>
            <p>Váš all-in-one nástroj pre prácu s JSON dátami. **Teraz s unikátnymi funkciami Diff a konverziou na TypeScript!**</p>

            {/* Základný Formatter */}
            <div className="my-4">
                <h2>JSON Formatter & Validator</h2>
                <textarea
                    value={jsonInput}
                    onChange={(e) => setJsonInput(e.target.value)}
                    placeholder="Vložte JSON na formátovanie..."
                    className="w-full h-40 border p-2"
                />
                <button onClick={formatJson} className="bg-blue-500 text-white p-2 rounded">Formátovať JSON</button>
                <pre className="bg-gray-100 p-2 mt-2">{formattedJson}</pre>
            </div>

            <hr className="my-8" />

            {/* Killer Feature 1: JSON Diff */}
            {/* V reálnom kóde by tu bol JsonDiffTool komponent */}
            <div className="my-4 border p-4 rounded">
                <h2 className="text-xl font-bold">🚀 JSON Diff & Merge</h2>
                <p>Porovnajte dva JSON objekty a zistite presné rozdiely. (Simulácia implementácie)</p>
                {/* {JsonDiffTool} */}
            </div>

            {/* Killer Feature 2: JSON to TS */}
            {/* V reálnom kóde by tu bol JsonToTsTool komponent */}
            <div className="my-4 border p-4 rounded">
                <h2 className="text-xl font-bold">💡 JSON to TypeScript Interface Converter</h2>
                <p>Generujte TypeScript rozhrania priamo z JSON dát. (Simulácia implementácie)</p>
                {/* {JsonToTsTool} */}
            </div>
        </div>
    );
};

export default JsonFormatter;
