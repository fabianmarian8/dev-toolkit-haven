// dev-toolkit-haven/src/utils/jsonDiff.ts

/**
 * Simulácia funkcie pre porovnanie dvoch JSON objektov a zvýraznenie rozdielov.
 * V reálnej aplikácii by sa použila knižnica ako 'jsondiffpatch' alebo 'deep-diff'.
 *
 * @param jsonA Prvý JSON reťazec
 * @param jsonB Druhý JSON reťazec
 * @returns Objekt s porovnaním (simulácia)
 */
export function getJsonDiff(jsonA: string, jsonB: string): { diff: any, hasDiff: boolean } {
    try {
        const objA = JSON.parse(jsonA);
        const objB = JSON.parse(jsonB);

        // Zjednodušená simulácia porovnania
        const diffResult = {
            // V reálnom kóde by tu bol detailný diff objekt
            simulatedDiff: {
                keysAdded: Object.keys(objB).filter(key => !(key in objA)),
                keysRemoved: Object.keys(objA).filter(key => !(key in objB)),
                keysChanged: Object.keys(objA).filter(key => objA[key] !== objB[key] && (key in objB)),
            }
        };

        const hasDiff = diffResult.simulatedDiff.keysAdded.length > 0 ||
                        diffResult.simulatedDiff.keysRemoved.length > 0 ||
                        diffResult.simulatedDiff.keysChanged.length > 0;

        return { diff: diffResult, hasDiff };
    } catch (e) {
        console.error("Chyba pri parsovaní JSON pre Diff:", e);
        return { diff: { error: "Neplatný JSON vstup" }, hasDiff: true };
    }
}

// Simulácia komponentu pre JSON Diff
export const JsonDiffComponentCode = `
import React, { useState } from 'react';
import { getJsonDiff } from '../utils/jsonDiff';

const JsonDiffTool = () => {
  const [jsonA, setJsonA] = useState('');
  const [jsonB, setJsonB] = useState('');
  const [diffResult, setDiffResult] = useState(null);

  const handleCompare = () => {
    const result = getJsonDiff(jsonA, jsonB);
    setDiffResult(result);
  };

  return (
    <div className="json-diff-container">
      <h2>JSON Diff & Merge (Killer Feature)</h2>
      <div className="flex space-x-4">
        <textarea value={jsonA} onChange={(e) => setJsonA(e.target.value)} placeholder="JSON A" />
        <textarea value={jsonB} onChange={(e) => setJsonB(e.target.value)} placeholder="JSON B" />
      </div>
      <button onClick={handleCompare}>Porovnať JSON</button>
      {diffResult && (
        <pre className={diffResult.hasDiff ? 'text-red-500' : 'text-green-500'}>
          {JSON.stringify(diffResult.diff, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default JsonDiffTool;
`;
