import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { QRCodeSVG } from "qrcode.react";
import { Download } from "lucide-react";

export const QRCodeGenerator = () => {
  const [text, setText] = useState("https://example.com");

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
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Text or URL</label>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text or URL"
        />
      </div>

      {text && (
        <div className="flex flex-col items-center gap-4">
          <div className="p-6 bg-white rounded-lg">
            <QRCodeSVG
              id="qr-code"
              value={text}
              size={256}
              level="H"
              includeMargin
            />
          </div>
          <Button onClick={downloadQR} className="w-full md:w-auto">
            <Download className="h-4 w-4 mr-2" />
            Download QR Code
          </Button>
        </div>
      )}
    </div>
  );
};
