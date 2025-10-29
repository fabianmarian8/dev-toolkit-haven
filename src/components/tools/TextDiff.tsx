import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { diffLines, Change } from "diff";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useDebounce } from "@/hooks/useDebounce";
import { TEXT_DIFF } from "@/constants";
import { Trash2 } from "lucide-react";

export const TextDiff = () => {
  const [text1, setText1] = useLocalStorage("diffText1", "");
  const [text2, setText2] = useLocalStorage("diffText2", "");
  const debouncedText1 = useDebounce(text1, TEXT_DIFF.DEBOUNCE_DELAY);
  const debouncedText2 = useDebounce(text2, TEXT_DIFF.DEBOUNCE_DELAY);
  const [diff, setDiff] = useState<Change[]>([]);

  useEffect(() => {
    if (debouncedText1 || debouncedText2) {
      const differences = diffLines(debouncedText1, debouncedText2);
      setDiff(differences);
    } else {
      setDiff([]);
    }
  }, [debouncedText1, debouncedText2]);

  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Text 1 (Original)</label>
          <Textarea
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            placeholder="Enter first text"
            className="font-mono h-48 resize-y"
            aria-label="First text for comparison"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Text 2 (Modified)</label>
          <Textarea
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            placeholder="Enter second text"
            className="font-mono h-48 resize-y"
            aria-label="Second text for comparison"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          variant="outline"
          onClick={() => {
            setText1("");
            setText2("");
            setDiff([]);
          }}
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Clear All
        </Button>
      </div>

      {diff.length > 0 && (
        <div>
          <label className="block text-sm font-medium mb-2">
            Differences ({diff.filter(d => d.added || d.removed).length} changes)
          </label>
          <div className="p-4 border rounded-lg font-mono text-sm max-h-96 overflow-y-auto">
            {diff.map((part, index) => (
              <div
                key={index}
                className={
                  part.added
                    ? "bg-green-500/20 text-green-600 dark:text-green-400 px-2 py-1"
                    : part.removed
                    ? "bg-red-500/20 text-red-600 dark:text-red-400 px-2 py-1 line-through"
                    : "px-2 py-1"
                }
              >
                {part.value}
              </div>
            ))}
          </div>
          <div className="mt-2 flex gap-4 text-xs">
            <span className="flex items-center gap-1">
              <div className="w-3 h-3 bg-green-500/20 border border-green-500/40 rounded"></div>
              Added
            </span>
            <span className="flex items-center gap-1">
              <div className="w-3 h-3 bg-red-500/20 border border-red-500/40 rounded"></div>
              Removed
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
