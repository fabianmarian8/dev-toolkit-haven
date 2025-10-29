import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Base64Tool = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const encode = () => {
    try {
      const encoded = btoa(input);
      setOutput(encoded);
      toast.success("Encoded to Base64!");
    } catch (error) {
      toast.error("Encoding failed: " + (error as Error).message);
    }
  };

  const decode = () => {
    try {
      const decoded = atob(input);
      setOutput(decoded);
      toast.success("Decoded from Base64!");
    } catch (error) {
      toast.error("Decoding failed: " + (error as Error).message);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Input</label>
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to encode or Base64 to decode"
          className="font-mono h-48 resize-none"
        />
      </div>
      <div className="flex gap-2">
        <Button onClick={encode}>Encode to Base64</Button>
        <Button onClick={decode} variant="secondary">Decode from Base64</Button>
      </div>
      {output && (
        <div>
          <label className="block text-sm font-medium mb-2">Output</label>
          <Textarea
            value={output}
            readOnly
            className="font-mono h-48 resize-none bg-muted"
          />
        </div>
      )}
    </div>
  );
};
