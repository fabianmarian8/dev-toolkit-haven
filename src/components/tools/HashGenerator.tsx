import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import CryptoJS from "crypto-js";

export const HashGenerator = () => {
  const [input, setInput] = useState("");
  const [hashes, setHashes] = useState({
    md5: "",
    sha256: "",
    sha512: "",
  });

  const generateHashes = (text: string) => {
    setHashes({
      md5: CryptoJS.MD5(text).toString(),
      sha256: CryptoJS.SHA256(text).toString(),
      sha512: CryptoJS.SHA512(text).toString(),
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Input Text</label>
        <Input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            generateHashes(e.target.value);
          }}
          placeholder="Enter text to hash"
          className="font-mono"
        />
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
