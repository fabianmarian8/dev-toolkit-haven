import React, { useState, useCallback } from 'react';
import { getJsonDiff } from '../../utils/jsonDiff';
// V reálnom kóde by ste potrebovali aj vizualizátor, napr. 'jsondiffpatch-html'
// Pre zjednodušenie zobrazíme len surový Delta objekt

const JsonDiffTool = () => {
  const [jsonA, setJsonA] = useState('');
  const [jsonB, setJsonB] = useState('');
  const [diffResult, setDiffResult] = useState(null);
  const [error, setError] = useState('');

  const handleCompare = useCallback(() => {
    setError('');
    const { diff, hasDiff, error: diffError } = getJsonDiff(jsonA, jsonB);
    
    if (diffError) {
      setError(diffError);
      setDiffResult(null);
      return;
    }

    setDiffResult({ diff, hasDiff });
  }, [jsonA, jsonB]);

  return (
    <div className="json-diff-container p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">🚀 JSON Diff & Merge</h2>
      <p className="mb-4 text-gray-600 dark:text-gray-300">Porovnajte dva JSON objekty a zistite presné rozdiely. Využíva robustnú knižnicu \`jsondiffpatch\`.</p>
      
      <div className="flex space-x-4 mb-4">
        <textarea 
          value={jsonA} 
          onChange={(e) => setJsonA(e.target.value)} 
          placeholder="JSON A (Pôvodný)" 
          className="flex-1 h-40 border p-2 rounded resize-none dark:bg-gray-700 dark:text-white"
        />
        <textarea 
          value={jsonB} 
          onChange={(e) => setJsonB(e.target.value)} 
          placeholder="JSON B (Nový)" 
          className="flex-1 h-40 border p-2 rounded resize-none dark:bg-gray-700 dark:text-white"
        />
      </div>
      
      <button 
        onClick={handleCompare} 
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-150"
      >
        Porovnať JSON
      </button>
      
      {error && <p className="text-red-500 mt-4 font-medium">{error}</p>}

      {diffResult && (
        <div className="mt-4">
          <p className={`font-bold ${diffResult.hasDiff ? 'text-red-500' : 'text-green-500'}`}>
            {diffResult.hasDiff ? 'Rozdiely nájdené (Delta objekt):' : 'JSON objekty sú identické.'}
          </p>
          {diffResult.diff && (
            <pre className="bg-white dark:bg-gray-900 p-3 rounded mt-2 overflow-auto text-sm">
              {JSON.stringify(diffResult.diff, null, 2)}
            </pre>
          )}
        </div>
      )}
    </div>
  );
};

export default JsonDiffTool;
