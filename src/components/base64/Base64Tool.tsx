// dev-toolkit-haven/src/components/base64/Base64Tool.tsx

import React, { useState } from 'react';
// Import simulovaného komponentu
import Base64FileTool from './Base64FileTool'; // Predpokladáme, že by bol v samostatnom súbore

// Simulácia hlavného Base64 Encoder/Decoder
const Base64Tool = () => {
    const [textInput, setTextInput] = useState('');
    const [base64Output, setBase64Output] = useState('');

    const encode = () => {
        try {
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
        <div className="p-4">
            <h1>Free Base64 Encoder, Decoder & File Converter</h1>
            <p>Rýchla konverzia textu a súborov do Base64 a späť. **Teraz s podporou súborov!**</p>

            {/* Základný Text Encoder/Decoder */}
            <div className="my-4">
                <h2>Text to Base64</h2>
                <textarea
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    placeholder="Vložte text na kódovanie..."
                    className="w-full h-20 border p-2"
                />
                <button onClick={encode} className="bg-blue-500 text-white p-2 rounded mr-2">Kódovať (Encode)</button>
                <button onClick={decode} className="bg-green-500 text-white p-2 rounded">Dekódovať (Decode)</button>
                <textarea value={base64Output} onChange={(e) => setBase64Output(e.target.value)} placeholder="Base64 výstup..." className="w-full h-20 border p-2 mt-2" />
            </div>

            <hr className="my-8" />

            {/* Killer Feature: Base64 File Converter */}
            {/* V reálnom kóde by tu bol Base64FileTool komponent */}
            <div className="my-4 border p-4 rounded">
                <h2 className="text-xl font-bold">🚀 Base64 File Converter</h2>
                <p>Konvertujte súbory (obrázky, dokumenty) na Base64 reťazec a späť. (Simulácia implementácie)</p>
                {/* {Base64FileTool} */}
            </div>
        </div>
    );
};

export default Base64Tool;
