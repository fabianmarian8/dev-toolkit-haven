import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Copy, Clock, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const TimestampConverter = () => {
  const [timestamp, setTimestamp] = useLocalStorage("timestamp", "");
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [humanReadable, setHumanReadable] = useState("");
  const [iso, setIso] = useState("");
  const [utc, setUtc] = useState("");
  const [error, setError] = useState("");

  // Update current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!timestamp) {
      setHumanReadable("");
      setIso("");
      setUtc("");
      setError("");
      return;
    }

    try {
      // Try to parse as number (Unix timestamp)
      let date: Date;
      const num = Number(timestamp);

      if (!isNaN(num)) {
        // If it looks like seconds (10 digits), convert to milliseconds
        date = new Date(num.toString().length <= 10 ? num * 1000 : num);
      } else {
        // Try to parse as date string
        date = new Date(timestamp);
      }

      if (isNaN(date.getTime())) {
        setError("Invalid timestamp format");
        setHumanReadable("");
        setIso("");
        setUtc("");
      } else {
        setError("");
        setHumanReadable(date.toLocaleString());
        setIso(date.toISOString());
        setUtc(date.toUTCString());
      }
    } catch (err) {
      setError("Invalid timestamp format");
      setHumanReadable("");
      setIso("");
      setUtc("");
    }
  }, [timestamp]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  const useCurrentTime = () => {
    setTimestamp(currentTime.toString());
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
        <div>
          <p className="text-xs text-muted-foreground">Current Unix Timestamp</p>
          <code className="text-lg font-mono">{currentTime}</code>
        </div>
        <Button size="sm" variant="outline" onClick={useCurrentTime}>
          <Clock className="h-4 w-4 mr-2" />
          Use Now
        </Button>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Timestamp or Date String
        </label>
        <div className="flex gap-2">
          <Input
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
            placeholder="Enter Unix timestamp or date string (e.g., 1234567890 or 2024-01-01)"
            className="font-mono flex-1"
            aria-label="Timestamp input"
          />
          <Button
            variant="outline"
            onClick={() => setTimestamp("")}
            aria-label="Clear timestamp"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
        {error && (
          <p className="text-sm text-destructive mt-2">{error}</p>
        )}
      </div>

      {timestamp && !error && (
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div className="flex-1 overflow-hidden">
              <p className="text-xs text-muted-foreground">Human Readable</p>
              <code className="text-sm font-mono break-all">{humanReadable}</code>
            </div>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => copyToClipboard(humanReadable)}
              aria-label="Copy human readable date"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div className="flex-1 overflow-hidden">
              <p className="text-xs text-muted-foreground">ISO 8601</p>
              <code className="text-sm font-mono break-all">{iso}</code>
            </div>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => copyToClipboard(iso)}
              aria-label="Copy ISO date"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div className="flex-1 overflow-hidden">
              <p className="text-xs text-muted-foreground">UTC</p>
              <code className="text-sm font-mono break-all">{utc}</code>
            </div>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => copyToClipboard(utc)}
              aria-label="Copy UTC date"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div className="flex-1 overflow-hidden">
              <p className="text-xs text-muted-foreground">Unix Timestamp (seconds)</p>
              <code className="text-sm font-mono break-all">
                {Math.floor(new Date(timestamp.length <= 10 ? Number(timestamp) * 1000 : Number(timestamp) || timestamp).getTime() / 1000)}
              </code>
            </div>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => copyToClipboard(
                Math.floor(new Date(timestamp.length <= 10 ? Number(timestamp) * 1000 : Number(timestamp) || timestamp).getTime() / 1000).toString()
              )}
              aria-label="Copy Unix timestamp"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
