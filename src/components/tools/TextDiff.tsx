import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { diffLines, Change } from "diff";

export const TextDiff = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [diff, setDiff] = useState<Change[]>([]);

  const calculateDiff = (t1: string, t2: string) => {
    const differences = diffLines(t1, t2);
    setDiff(differences);
  };

  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Text 1</label>
          <Textarea
            value={text1}
            onChange={(e) => {
              setText1(e.target.value);
              calculateDiff(e.target.value, text2);
            }}
            placeholder="Enter first text"
            className="font-mono h-48 resize-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Text 2</label>
          <Textarea
            value={text2}
            onChange={(e) => {
              setText2(e.target.value);
              calculateDiff(text1, e.target.value);
            }}
            placeholder="Enter second text"
            className="font-mono h-48 resize-none"
          />
        </div>
      </div>

      {diff.length > 0 && (
        <div>
          <label className="block text-sm font-medium mb-2">Differences</label>
          <div className="p-4 border rounded-lg font-mono text-sm max-h-96 overflow-y-auto">
            {diff.map((part, index) => (
              <div
                key={index}
                className={
                  part.added
                    ? "bg-green-500/20 text-green-600 dark:text-green-400"
                    : part.removed
                    ? "bg-red-500/20 text-red-600 dark:text-red-400"
                    : ""
                }
              >
                {part.value}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
