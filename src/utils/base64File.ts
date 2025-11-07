// dev-toolkit-haven/src/utils/base64File.ts

/**
 * Simulácia funkcie pre konverziu súboru na Base64 reťazec.
 * Táto funkcia je určená pre prehliadačové prostredie (FileReader API).
 *
 * @param file Vstupný súbor (File objekt)
 * @returns Promise, ktorý sa vyrieši Base64 reťazcom (Data URL)
 */
export function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
    });
}

/**
 * Simulácia funkcie pre stiahnutie Base64 reťazca ako súboru.
 *
 * @param base64String Base64 reťazec (vrátane hlavičky data:...)
 * @param filename Názov súboru na stiahnutie
 */
export function base64ToFileDownload(base64String: string, filename: string) {
    // V reálnom kóde by sa použil Blob a window.URL.createObjectURL
    const link = document.createElement('a');
    link.href = base64String;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log(\`Simulácia stiahnutia súboru: \${filename}\`);
}

// Simulácia komponentu pre Base64 File konverziu
export const Base64FileComponentCode = \`
import React, { useState, useCallback } from 'react';
import { fileToBase64, base64ToFileDownload } from '../utils/base64File';

const Base64FileTool = () => {
  const [base64Output, setBase64Output] = useState('');
  const [fileInput, setFileInput] = useState(null);

  const handleFileChange = useCallback(async (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileInput(file);
      try {
        const result = await fileToBase64(file);
        setBase64Output(result);
      } catch (error) {
        setBase64Output('Chyba pri konverzii súboru na Base64.');
      }
    }
  }, []);

  const handleDownload = useCallback(() => {
    if (base64Output) {
      // Získanie MIME typu a názvu súboru pre stiahnutie
      const mimeTypeMatch = base64Output.match(/^data:(.*?);/);
      const mimeType = mimeTypeMatch ? mimeTypeMatch[1] : 'application/octet-stream';
      const filename = \`download.\${mimeType.split('/')[1] || 'bin'}\`;
      
      base64ToFileDownload(base64Output, filename);
    }
  }, [base64Output]);

  return (
    <div className="base64-file-container">
      <h2 className="text-xl font-bold">🚀 Base64 File Converter (Killer Feature)</h2>
      <p>Konvertujte súbory (obrázky, dokumenty) na Base64 reťazec a späť.</p>
      
      <div className="my-4">
        <label className="block font-medium">1. Súbor na Base64:</label>
        <input type="file" onChange={handleFileChange} className="mt-1" />
        <textarea value={base64Output} readOnly placeholder="Base64 výstup..." className="w-full h-20 border p-2 mt-2" />
      </div>

      <div className="my-4">
        <label className="block font-medium">2. Base64 na Súbor:</label>
        <textarea value={base64Output} onChange={(e) => setBase64Output(e.target.value)} placeholder="Vložte Base64 reťazec..." className="w-full h-20 border p-2" />
        <button onClick={handleDownload} disabled={!base64Output} className="bg-green-500 text-white p-2 rounded mt-2">Stiahnuť súbor</button>
      </div>
    </div>
  );
};

export default Base64FileTool;
\`;
