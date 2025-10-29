import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Copy, Trash2 } from "lucide-react";
import { toast } from "sonner";
import CryptoJS from "crypto-js";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useDebounce } from "@/hooks/useDebounce";
import { HASH_GENERATOR } from "@/constants";

export const HashGenerator = () => {
  const [input, setInput] = useLocalStorage("hashInput", "");
  const debouncedInput = useDebounce(input, HASH_GENERATOR.DEBOUNCE_DELAY);
  const [hashes, setHashes] = useState({
    md5: "",
    sha256: "",
    sha512: "",
  });

  useEffect(() => {
    if (debouncedInput) {
      setHashes({
        md5: CryptoJS.MD5(debouncedInput).toString(),
        sha256: CryptoJS.SHA256(debouncedInput).toString(),
        sha512: CryptoJS.SHA512(debouncedInput).toString(),
      });
    } else {
      setHashes({ md5: "", sha256: "", sha512: "" });
    }
  }, [debouncedInput]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Input Text</label>
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text to hash"
            className="font-mono flex-1"
            aria-label="Text input for hash generation"
          />
          <Button
            variant="outline"
            onClick={() => {
              setInput("");
              setHashes({ md5: "", sha256: "", sha512: "" });
            }}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {input && (
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div className="flex-1 overflow-hidden">
              <p className="text-xs text-muted-foreground">MD5</p>
              <code className="text-xs font-mono break-all">{hashes.md5}</code>
            </div>
            <Button size="sm" variant="ghost" onClick={() => copyToClipboard(hashes.md5)}>
              <Copy className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div className="flex-1 overflow-hidden">
              <p className="text-xs text-muted-foreground">SHA-256</p>
              <code className="text-xs font-mono break-all">{hashes.sha256}</code>
            </div>
            <Button size="sm" variant="ghost" onClick={() => copyToClipboard(hashes.sha256)}>
              <Copy className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div className="flex-1 overflow-hidden">
              <p className="text-xs text-muted-foreground">SHA-512</p>
              <code className="text-xs font-mono break-all">{hashes.sha512}</code>
            </div>
            <Button size="sm" variant="ghost" onClick={() => copyToClipboard(hashes.sha512)}>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
