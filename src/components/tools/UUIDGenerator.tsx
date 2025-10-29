import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, RefreshCw, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { UUID } from "@/constants";

export const UUIDGenerator = () => {
  const [uuids, setUuids] = useState<string[]>([]);
  const [count, setCount] = useState(UUID.COUNT_DEFAULT);

  const generateUUID = (): string => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };

  const generateUUIDs = () => {
    const validCount = Math.max(UUID.COUNT_MIN, Math.min(count, UUID.COUNT_MAX));
    const newUuids = Array.from({ length: validCount }, () => generateUUID());
    setUuids(newUuids);
    toast.success(`Generated ${validCount} UUID${validCount > 1 ? 's' : ''}!`);
  };

  const copyToClipboard = (uuid: string) => {
    navigator.clipboard.writeText(uuid);
    toast.success("Copied to clipboard!");
  };

  const copyAll = () => {
    navigator.clipboard.writeText(uuids.join('\n'));
    toast.success(`Copied all ${uuids.length} UUIDs to clipboard!`);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-2">Number of UUIDs</label>
          <Input
            type="number"
            min={UUID.COUNT_MIN}
            max={UUID.COUNT_MAX}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="font-mono"
            aria-label="Number of UUIDs to generate"
          />
        </div>
        <div className="flex items-end gap-2">
          <Button onClick={generateUUIDs}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Generate
          </Button>
          {uuids.length > 0 && (
            <Button variant="outline" onClick={() => setUuids([])}>
              <Trash2 className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {uuids.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium">
              Generated UUIDs ({uuids.length})
            </label>
            <Button onClick={copyAll} size="sm" variant="outline">
              <Copy className="h-4 w-4 mr-2" />
              Copy All
            </Button>
          </div>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {uuids.map((uuid, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-muted rounded-lg font-mono text-sm"
              >
                <code>{uuid}</code>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => copyToClipboard(uuid)}
                  aria-label={`Copy UUID ${uuid}`}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
