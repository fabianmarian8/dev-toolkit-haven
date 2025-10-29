import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const RegexTester = () => {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [testString, setTestString] = useState("");
  const [matches, setMatches] = useState<string[]>([]);

  const testRegex = () => {
    try {
      const regex = new RegExp(pattern, flags);
      const found = testString.match(regex);
      setMatches(found || []);
      toast.success(`Found ${found?.length || 0} matches!`);
    } catch (error) {
      toast.error("Invalid regex: " + (error as Error).message);
      setMatches([]);
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Pattern</label>
          <Input
            value={pattern}
            onChange={(e) => {
              setPattern(e.target.value);
              testRegex();
            }}
            placeholder="Enter regex pattern"
            className="font-mono"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Flags</label>
          <Input
            value={flags}
            onChange={(e) => {
              setFlags(e.target.value);
              testRegex();
            }}
            placeholder="g, i, m, etc."
            className="font-mono"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Test String</label>
        <Textarea
          value={testString}
          onChange={(e) => {
            setTestString(e.target.value);
            testRegex();
          }}
          placeholder="Enter text to test"
          className="font-mono h-32 resize-none"
        />
      </div>

      {matches.length > 0 && (
        <div>
          <label className="block text-sm font-medium mb-2">
            Matches ({matches.length})
          </label>
          <div className="space-y-2">
            {matches.map((match, index) => (
              <div key={index} className="p-2 bg-primary/10 rounded border border-primary/20">
                <code className="text-sm">{match}</code>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
