import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";

export const ColorPickerTool = () => {
  const [color, setColor] = useState("#0ea5e9");

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
      : "";
  };

  const hexToHsl = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return "";

    let r = parseInt(result[1], 16) / 255;
    let g = parseInt(result[2], 16) / 255;
    let b = parseInt(result[3], 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / d + 2) / 6; break;
        case b: h = ((r - g) / d + 4) / 6; break;
      }
    }

    return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-48 h-48 rounded-lg border-2 shadow-lg"
          style={{ backgroundColor: color }}
        />
        <Input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-48 h-12 cursor-pointer"
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
          <div>
            <p className="text-xs text-muted-foreground">HEX</p>
            <code className="text-sm font-mono">{color.toUpperCase()}</code>
          </div>
          <Button size="sm" variant="ghost" onClick={() => copyToClipboard(color)}>
            <Copy className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
          <div>
            <p className="text-xs text-muted-foreground">RGB</p>
            <code className="text-sm font-mono">{hexToRgb(color)}</code>
          </div>
          <Button size="sm" variant="ghost" onClick={() => copyToClipboard(hexToRgb(color))}>
            <Copy className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
          <div>
            <p className="text-xs text-muted-foreground">HSL</p>
            <code className="text-sm font-mono">{hexToHsl(color)}</code>
          </div>
          <Button size="sm" variant="ghost" onClick={() => copyToClipboard(hexToHsl(color))}>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
