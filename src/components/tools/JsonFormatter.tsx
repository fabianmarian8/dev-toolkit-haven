import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Copy, Check, Trash2 } from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const JsonFormatter = () => {
  const [input, setInput] = useLocalStorage("jsonInput", "");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
      toast.success("JSON formatted successfully!");
    } catch (error) {
      toast.error("Invalid JSON: " + (error as Error).message);
    }
  };

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      setOutput(minified);
      toast.success("JSON minified successfully!");
    } catch (error) {
      toast.error("Invalid JSON: " + (error as Error).message);
    }
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Input JSON</label>
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='{"key": "value", "array": [1, 2, 3]}'
          className="font-mono h-48 resize-y"
        />
      </div>
      <div className="flex gap-2">
        <Button onClick={formatJson}>Format</Button>
        <Button onClick={minifyJson} variant="secondary">Minify</Button>
        <Button 
          onClick={() => { setInput(""); setOutput(""); }} 
          variant="outline"
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Clear
        </Button>
      </div>
      {output && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium">Output</label>
            <Button onClick={copyOutput} size="sm" variant="outline">
              {copied ? (
                <>
                  <Check className="h-4 w-4 mr-2" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </>
              )}
            </Button>
          </div>
          <pre className="p-4 rounded-lg bg-code-bg text-code-text overflow-x-auto max-h-[500px] resize-y">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
};
