// dev-toolkit-haven/src/components/json/JsonTool.tsx

import React, { useState } from 'react';
import JsonDiffTool from './JsonDiffTool'; // Predpokladáme, že tento súbor vytvoríte
import JsonToTsTool from './JsonToTsTool'; // Predpokladáme, že tento súbor vytvoríte

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
        <div className="p-4 space-y-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Free JSON Formatter, Diff & TS Converter</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">Váš all-in-one nástroj pre prácu s JSON dátami. **Teraz s unikátnymi funkciami Diff a konverziou na TypeScript!**</p>

            {/* Základný Formatter */}
            <div className="border p-4 rounded-lg shadow-md dark:bg-gray-700">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">JSON Formatter & Validator</h2>
                <textarea
                    value={jsonInput}
                    onChange={(e) => setJsonInput(e.target.value)}
                    placeholder="Vložte JSON na formátovanie..."
                    className="w-full h-40 border p-2 rounded resize-none dark:bg-gray-800 dark:text-white"
                />
                <button onClick={formatJson} className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold p-2 rounded transition duration-150">Formátovať JSON</button>
                <pre className="bg-gray-100 dark:bg-gray-800 dark:text-gray-200 p-3 mt-4 rounded overflow-auto text-sm">{formattedJson}</pre>
            </div>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Killer Feature 1: JSON Diff - V reálnom kóde by ste tu importovali a použili JsonDiffTool */}
            <div className="border p-4 rounded-lg shadow-md dark:bg-gray-700">
                {/* <JsonDiffTool /> */}
                <p className="text-center text-red-500">**POZNÁMKA:** Pre plnú funkčnosť JSON Diff vložte kód z \`src/utils/jsonDiff.ts\` do nového súboru \`src/components/json/JsonDiffTool.tsx\` a odkomentujte riadok vyššie.</p>
            </div>

            {/* Killer Feature 2: JSON to TS - V reálnom kóde by ste tu importovali a použili JsonToTsTool */}
            <div className="border p-4 rounded-lg shadow-md dark:bg-gray-700">
                {/* <JsonToTsTool /> */}
                <p className="text-center text-red-500">**POZNÁMKA:** Pre plnú funkčnosť JSON to TS vložte kód z \`src/utils/jsonToTs.ts\` do nového súboru \`src/components/json/JsonToTsTool.tsx\` a odkomentujte riadok vyššie.</p>
            </div>

            {/* SEO Content */}
            <div className="text-gray-700 dark:text-gray-400">
                {/* V reálnom kóde by ste tu vložili obsah zo súboru src/content/json-seo.md */}
                <h2 className="text-2xl font-semibold mt-8">Prečo je náš JSON Formatter, Diff a TS Converter najlepší bezplatný nástroj</h2>
                <p>JSON (JavaScript Object Notation) je de facto štandardom pre výmenu dát v modernom webovom vývoji. Často sa však stretávame s neformátovanými, minifikovanými alebo chybne štruktúrovanými JSON reťazcami, ktoré sťažujú čítanie a ladenie. Náš **Free JSON Formatter** rieši tento problém okamžite, pričom ponúka čisté a čitateľné výstupy s voliteľnou úrovňou odsadenia.</p>
                <h3 className="text-xl font-semibold mt-4">🚀 Killer Feature 1: JSON Diff a Merge Online</h3>
                <p>Jedným z najčastejších problémov pri práci s API alebo konfiguráciami je porovnávanie dvoch verzií JSON dát. Hľadanie rozdielov ručne je časovo náročné a náchylné na chyby. Náš **JSON Diff Checker Online** vám umožňuje vložiť dva JSON objekty (napr. starú a novú odpoveď z API) a okamžite vizuálne zvýrazní pridané, odstránené a zmenené kľúče a hodnoty. Táto funkcia je kľúčová pre: **Ladenie API** a **Verzovanie konfigurácií**.</p>
                <h3 className="text-xl font-semibold mt-4">💡 Killer Feature 2: JSON to TypeScript Interface Converter Free</h3>
                <p>Pre vývojárov používajúcich TypeScript je manuálne vytváranie rozhraní (interfaces) z JSON dát rutinná a nudná práca. Náš **JSON to TypeScript Interface Converter** automaticky analyzuje štruktúru vášho JSON objektu a vygeneruje zodpovedajúce TypeScript rozhranie. To šetrí čas, minimalizuje preklepy a zabezpečuje typovú bezpečnosť vo vašom projekte.</p>
            </div>
        </div>
    );
};

export default JsonFormatter;
