import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const RegexTester = () => {
  const [pattern, setPattern] = useLocalStorage("regexPattern", "");
  const [flags, setFlags] = useLocalStorage("regexFlags", "g");
  const [testString, setTestString] = useLocalStorage("regexTestString", "");
  const [matches, setMatches] = useState<string[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!pattern || !testString) {
      setMatches([]);
      setError("");
      return;
    }

    try {
      const regex = new RegExp(pattern, flags);
      const found = testString.match(regex);
      setMatches(found || []);
      setError("");
    } catch (error) {
      setMatches([]);
      setError((error as Error).message);
    }
  }, [pattern, flags, testString]);

  const renderHighlightedText = () => {
    if (!pattern || !testString || matches.length === 0) {
      return <>{testString}</>;
    }

    try {
      const regex = new RegExp(pattern, flags.replace('g', '')); // Remove 'g' flag for split
      const parts = testString.split(regex);
      const result: React.ReactNode[] = [];

      let matchIndex = 0;
      parts.forEach((part, i) => {
        if (i > 0 && matchIndex < matches.length) {
          result.push(
            <mark key={`match-${i}`} className="bg-primary/20 rounded px-1">
              {matches[matchIndex]}
            </mark>
          );
          matchIndex++;
        }
        if (part) {
          result.push(<span key={`text-${i}`}>{part}</span>);
        }
      });

      return <>{result}</>;
    } catch {
      return <>{testString}</>;
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Pattern</label>
          <Input
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            placeholder="\\w+@\\w+\\.\\w+"
            className="font-mono"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Flags</label>
          <Input
            value={flags}
            onChange={(e) => setFlags(e.target.value)}
            placeholder="g, i, m, etc."
            className="font-mono"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Test String</label>
        <Textarea
          value={testString}
          onChange={(e) => setTestString(e.target.value)}
          placeholder="Enter text to test against your regex pattern"
          className="font-mono h-32 resize-y"
          aria-label="Test string for regex matching"
        />
      </div>

      {error && (
        <div className="p-3 bg-destructive/10 text-destructive rounded-lg border border-destructive/20">
          <strong>Invalid regex:</strong> {error}
        </div>
      )}

      {testString && !error && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium">
              Matches ({matches.length})
            </label>
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                setPattern("");
                setFlags("g");
                setTestString("");
              }}
            >
              Clear
            </Button>
          </div>
          
          {matches.length > 0 ? (
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted font-mono text-sm whitespace-pre-wrap">
                {renderHighlightedText()}
              </div>
              <div className="space-y-2">
                {matches.map((match, index) => (
                  <div key={index} className="p-2 bg-primary/10 rounded border border-primary/20 flex items-center justify-between">
                    <code className="text-sm">{match}</code>
                    <span className="text-xs text-muted-foreground">Match {index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : pattern ? (
            <div className="p-4 rounded-lg bg-muted text-sm text-muted-foreground text-center">
              No matches found
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};
