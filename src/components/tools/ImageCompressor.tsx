import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";
import imageCompression from "browser-image-compression";
import { Download, Upload } from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const ImageCompressor = () => {
  const [originalImage, setOriginalImage] = useState<File | null>(null);
  const [originalUrl, setOriginalUrl] = useState<string>("");
  const [compressedImage, setCompressedImage] = useState<string>("");
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);
  const [quality, setQuality] = useLocalStorage("imageQuality", 80);
  const [isCompressing, setIsCompressing] = useState(false);

  // Use ref to track if compression is in progress (prevents loop)
  const isCompressingRef = useRef(false);
  // Track last compressed quality to prevent unnecessary recompressions
  const lastQualityRef = useRef<number>(quality);

  useEffect(() => {
    return () => {
      if (originalUrl) URL.revokeObjectURL(originalUrl);
      if (compressedImage) URL.revokeObjectURL(compressedImage);
    };
  }, [originalUrl, compressedImage]);

  const compressImage = useCallback(async (file: File) => {
    setIsCompressing(true);

    try {
      const options = {
        maxSizeMB: quality / 100,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
        initialQuality: quality / 100,
      };

      const compressed = await imageCompression(file, options);
      setCompressedSize(compressed.size);
      
      const compressedUrl = URL.createObjectURL(compressed);

      setCompressedImage((oldUrl) => {
        if (oldUrl) URL.revokeObjectURL(oldUrl);
        return compressedUrl;
      });

      // Update last quality ref
      lastQualityRef.current = quality;

      if (showToast) {
        const reduction = Math.round(((file.size - compressed.size) / file.size) * 100);
        toast.success(`Compressed! ${reduction}% smaller`);
      }
    } catch (error) {
      toast.error("Compression failed: " + (error as Error).message);
    } finally {
      isCompressingRef.current = false;
      setIsCompressing(false);
    }
  }, [quality]);

  // Recompress when quality changes (with debouncing via ref check)
  useEffect(() => {
    if (originalImage && !isCompressing) {
      compressImage(originalImage);
    }
  }, [quality, originalImage, compressImage, isCompressing]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (originalUrl) URL.revokeObjectURL(originalUrl);
    if (compressedImage) URL.revokeObjectURL(compressedImage);

    setOriginalImage(file);
    setOriginalSize(file.size);
    const url = URL.createObjectURL(file);
    setOriginalUrl(url);
    
    compressImage(file);
  };

  const downloadCompressed = () => {
    if (!compressedImage) return;
    const a = document.createElement("a");
    a.href = compressedImage;
    a.download = "compressed-image.jpg";
    a.click();
  };

  return (
    <div className="space-y-6">
      {!originalImage ? (
        <div className="border-2 border-dashed rounded-lg p-12 text-center">
          <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <label htmlFor="image-upload" className="cursor-pointer block">
            <span className="text-sm text-muted-foreground">
              Click to upload or drag and drop
            </span>
          </label>
          <Input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          <p className="text-xs text-muted-foreground mt-2">PNG, JPG, WebP up to 10MB</p>
        </div>
      ) : (
        <>
          <div>
            <label className="block text-sm font-medium mb-3">
              Compression Quality: {quality}%
            </label>
            <Slider
              value={[quality]}
              onValueChange={(value) => setQuality(value[0])}
              min={10}
              max={100}
              step={5}
              className="mb-2"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Smaller file</span>
              <span>Better quality</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-medium">Original</h3>
              <p className="text-sm text-muted-foreground">{(originalSize / 1024).toFixed(2)} KB</p>
              <img
                src={originalUrl}
                alt="Original"
                className="w-full rounded-lg border"
              />
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Compressed</h3>
              <p className="text-sm text-muted-foreground">
                {isCompressing ? "Compressing..." : `${(compressedSize / 1024).toFixed(2)} KB`}
              </p>
              {compressedImage && (
                <img
                  src={compressedImage}
                  alt="Compressed"
                  className="w-full rounded-lg border"
                />
              )}
            </div>
          </div>

          <div className="flex gap-2">
            {compressedImage && (
              <Button onClick={downloadCompressed} className="flex-1">
                <Download className="h-4 w-4 mr-2" />
                Download Compressed
              </Button>
            )}
            <Button
              variant="outline"
              onClick={() => {
                setOriginalImage(null);
                setCompressedImage("");
                setOriginalUrl("");
              }}
            >
              Clear
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
