import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Copy, Trash2 } from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const Base64Tool = () => {
  const [input, setInput] = useLocalStorage("base64Input", "");
  const [output, setOutput] = useState("");

  const encode = () => {
    try {
      // Handle Unicode characters properly
      const encoded = btoa(
        encodeURIComponent(input).replace(/%([0-9A-F]{2})/g, (_, p1) =>
          String.fromCharCode(parseInt(p1, 16))
        )
      );
      setOutput(encoded);
      toast.success("Encoded to Base64!");
    } catch (error) {
      toast.error("Encoding failed: " + (error as Error).message);
    }
  };

  const decode = () => {
    try {
      // Handle Unicode characters properly
      const decoded = decodeURIComponent(
        Array.from(atob(input), c =>
          '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        ).join('')
      );
      setOutput(decoded);
      toast.success("Decoded from Base64!");
    } catch (error) {
      toast.error("Decoding failed: " + (error as Error).message);
    }
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(output);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Input</label>
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to encode or Base64 to decode"
          className="font-mono h-48 resize-y"
        />
      </div>
      <div className="flex gap-2">
        <Button onClick={encode}>Encode to Base64</Button>
        <Button onClick={decode} variant="secondary">Decode from Base64</Button>
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
              <Copy className="h-4 w-4 mr-2" />
              Copy
            </Button>
          </div>
          <Textarea
            value={output}
            readOnly
            className="font-mono h-48 resize-y bg-muted"
          />
        </div>
      )}
    </div>
  );
};
