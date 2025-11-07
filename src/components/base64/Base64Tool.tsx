// dev-toolkit-haven/src/components/base64/Base64Tool.tsx

import React, { useState } from 'react';
import Base64FileTool from './Base64FileTool'; // Predpokladáme, že tento súbor vytvoríte

// Simulácia hlavného Base64 Encoder/Decoder
const Base64Tool = () => {
    const [textInput, setTextInput] = useState('');
    const [base64Output, setBase64Output] = useState('');

    const encode = () => {
        try {
            // Používame btoa/atob, ktoré sú dostupné v prehliadači
            setBase64Output(btoa(textInput));
        } catch (e) {
            setBase64Output('Chyba: Neplatný vstup pre Base64 kódovanie.');
        }
    };

    const decode = () => {
        try {
            setTextInput(atob(base64Output));
        } catch (e) {
            setTextInput('Chyba: Neplatný Base64 reťazec pre dekódovanie.');
        }
    };

    return (
        <div className="p-4 space-y-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Free Base64 Encoder, Decoder & File Converter</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">Rýchla konverzia textu a súborov do Base64 a späť. **Teraz s podporou súborov!**</p>

            {/* Základný Text Encoder/Decoder */}
            <div className="border p-4 rounded-lg shadow-md dark:bg-gray-700">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Text to Base64 Converter</h2>
                <textarea
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    placeholder="Vložte text na kódovanie..."
                    className="w-full h-20 border p-2 rounded resize-none dark:bg-gray-800 dark:text-white"
                />
                <div className="flex space-x-2 mt-2">
                    <button onClick={encode} className="bg-blue-500 hover:bg-blue-600 text-white font-bold p-2 rounded transition duration-150">Kódovať (Encode)</button>
                    <button onClick={decode} className="bg-green-500 hover:bg-green-600 text-white font-bold p-2 rounded transition duration-150">Dekódovať (Decode)</button>
                </div>
                <textarea value={base64Output} onChange={(e) => setBase64Output(e.target.value)} placeholder="Base64 výstup..." className="w-full h-20 border p-2 mt-4 rounded resize-none dark:bg-gray-800 dark:text-white" />
            </div>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Killer Feature: Base64 File Converter - V reálnom kóde by ste tu importovali a použili Base64FileTool */}
            <div className="border p-4 rounded-lg shadow-md dark:bg-gray-700">
                {/* <Base64FileTool /> */}
                <p className="text-center text-red-500">**POZNÁMKA:** Pre plnú funkčnosť Base64 File Converter vložte kód z \`src/utils/base64File.ts\` do nového súboru \`src/components/base64/Base64FileTool.tsx\` a odkomentujte riadok vyššie.</p>
            </div>

            {/* SEO Content */}
            <div className="text-gray-700 dark:text-gray-400">
                {/* V reálnom kóde by ste tu vložili obsah zo súboru src/content/base64-seo.md */}
                <h2 className="text-2xl font-semibold mt-8">Base64 Encoder/Decoder a File Converter: Najlepší bezplatný nástroj</h2>
                <p>Base64 je kódovacia schéma, ktorá transformuje binárne dáta (ako sú obrázky alebo súbory) na reťazec znakov ASCII. Je to nevyhnutné pre prenos dát cez médiá, ktoré sú navrhnuté na spracovanie textu, ako napríklad e-mail alebo URL adresy. Náš **Free Base64 Encoder a Decoder** poskytuje okamžitú konverziu textu.</p>
                <h3 className="text-xl font-semibold mt-4">🚀 Killer Feature: Base64 File to Text a Text to File Converter</h3>
                <p>Zatiaľ čo väčšina online nástrojov sa obmedzuje len na text, náš nástroj ide o krok ďalej. Náš **Base64 File Converter** vám umožňuje **Nahrať súbor** a okamžite získať jeho Base64 reprezentáciu, alebo **Vložiť Base64 reťazec** a stiahnuť ho späť ako pôvodný súbor. Táto funkcia rieši reálny problém vývojárov a dizajnérov, ktorí potrebujú rýchlo pracovať s dátami v Base64 formáte.</p>
            </div>
        </div>
    );
};

export default Base64Tool;
