import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Copy, Palette as PaletteIcon, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const ColorPickerTool = () => {
  const [color, setColor] = useLocalStorage("colorPicker", "#0ea5e9");
  const [colorHistory, setColorHistory] = useLocalStorage<string[]>("colorHistory", []);

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

  const addToHistory = (newColor: string) => {
    if (!colorHistory.includes(newColor)) {
      setColorHistory([newColor, ...colorHistory.slice(0, 9)]);
    }
  };

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    addToHistory(newColor);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-48 h-48 rounded-lg border-2 shadow-lg transition-all"
          style={{ backgroundColor: color }}
        />
        <Input
          type="color"
          value={color}
          onChange={(e) => handleColorChange(e.target.value)}
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

      {colorHistory.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium flex items-center gap-2">
              <PaletteIcon className="h-4 w-4" />
              Color History
            </label>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setColorHistory([])}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {colorHistory.map((historyColor, index) => (
              <button
                key={index}
                className="h-12 rounded-lg border-2 hover:scale-110 transition-all cursor-pointer"
                style={{ backgroundColor: historyColor }}
                onClick={() => setColor(historyColor)}
                title={historyColor}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
