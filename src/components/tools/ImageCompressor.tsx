import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import imageCompression from "browser-image-compression";
import { Download } from "lucide-react";

export const ImageCompressor = () => {
  const [originalImage, setOriginalImage] = useState<File | null>(null);
  const [compressedImage, setCompressedImage] = useState<string>("");
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setOriginalImage(file);
    setOriginalSize(file.size);

    try {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };

      const compressed = await imageCompression(file, options);
      setCompressedSize(compressed.size);
      
      const url = URL.createObjectURL(compressed);
      setCompressedImage(url);
      
      toast.success(`Image compressed! Reduced by ${Math.round(((file.size - compressed.size) / file.size) * 100)}%`);
    } catch (error) {
      toast.error("Compression failed: " + (error as Error).message);
    }
  };

  const downloadCompressed = () => {
    if (!compressedImage) return;
    const a = document.createElement("a");
    a.href = compressedImage;
    a.download = "compressed-image.jpg";
    a.click();
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Upload Image</label>
        <Input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="cursor-pointer"
        />
      </div>
      
      {originalImage && compressedImage && (
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h3 className="font-medium">Original</h3>
            <p className="text-sm text-muted-foreground">{(originalSize / 1024).toFixed(2)} KB</p>
            <img
              src={URL.createObjectURL(originalImage)}
              alt="Original"
              className="w-full rounded-lg border"
            />
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Compressed</h3>
            <p className="text-sm text-muted-foreground">{(compressedSize / 1024).toFixed(2)} KB</p>
            <img
              src={compressedImage}
              alt="Compressed"
              className="w-full rounded-lg border"
            />
          </div>
        </div>
      )}
      
      {compressedImage && (
        <Button onClick={downloadCompressed} className="w-full">
          <Download className="h-4 w-4 mr-2" />
          Download Compressed Image
        </Button>
      )}
    </div>
  );
};
