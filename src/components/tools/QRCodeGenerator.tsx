import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { QRCodeSVG } from "qrcode.react";
import { Download, Trash2 } from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { QR_CODE } from "@/constants";

export const QRCodeGenerator = () => {
  const [text, setText] = useLocalStorage("qrText", "https://example.com");
  const [size, setSize] = useLocalStorage<number>("qrSize", QR_CODE.DEFAULT_SIZE);

  const downloadQR = () => {
    const svg = document.getElementById("qr-code");
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");

      const downloadLink = document.createElement("a");
      downloadLink.download = "qrcode.png";
      downloadLink.href = pngFile;
      downloadLink.click();
    };

    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Text or URL</label>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text or URL"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-3">
          QR Code Size: {size}px
        </label>
        <Slider
          value={[size]}
          onValueChange={(value) => setSize(value[0])}
          min={QR_CODE.MIN_SIZE}
          max={QR_CODE.MAX_SIZE}
          step={QR_CODE.SIZE_STEP}
          className="mb-2"
          aria-valuetext={`${size} pixels`}
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Small</span>
          <span>Large</span>
        </div>
      </div>

      {text && (
        <div className="flex flex-col items-center gap-4">
          <div className="p-6 bg-white rounded-lg">
            <QRCodeSVG
              id="qr-code"
              value={text}
              size={size}
              level="H"
              includeMargin
            />
          </div>
          <div className="flex gap-2 w-full">
            <Button onClick={downloadQR} className="flex-1">
              <Download className="h-4 w-4 mr-2" />
              Download QR Code
            </Button>
            <Button 
              variant="outline"
              onClick={() => setText("")}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
