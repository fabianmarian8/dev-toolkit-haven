import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";
import imageCompression from "browser-image-compression";
import { Download, Upload } from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { IMAGE_COMPRESSOR } from "@/constants";

export const ImageCompressor = () => {
  const [originalImage, setOriginalImage] = useState<File | null>(null);
  const [originalUrl, setOriginalUrl] = useState<string>("");
  const [compressedImage, setCompressedImage] = useState<string>("");
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);
  const [quality, setQuality] = useLocalStorage<number>("imageQuality", IMAGE_COMPRESSOR.DEFAULT_QUALITY);
  const [isCompressing, setIsCompressing] = useState(false);

  // Use refs to prevent infinite loops
  const isCompressingRef = useRef(false);
  const lastQualityRef = useRef<number>(quality);
  const qualityRef = useRef(quality);

  // Sync quality ref with state
  useEffect(() => {
    qualityRef.current = quality;
  }, [quality]);

  useEffect(() => {
    return () => {
      if (originalUrl) URL.revokeObjectURL(originalUrl);
      if (compressedImage) URL.revokeObjectURL(compressedImage);
    };
  }, [originalUrl, compressedImage]);

  // Stable function - no dependencies to avoid recreation
  const compressImage = useCallback(async (file: File, showToast = true) => {
    // Prevent concurrent compressions
    if (isCompressingRef.current) {
      return;
    }

    isCompressingRef.current = true;
    setIsCompressing(true);

    try {
      const currentQuality = qualityRef.current;

      const options = {
        maxSizeMB: currentQuality / 100,
        maxWidthOrHeight: IMAGE_COMPRESSOR.MAX_DIMENSION,
        useWebWorker: true,
        initialQuality: currentQuality / 100,
      };

      const compressed = await imageCompression(file, options);
      setCompressedSize(compressed.size);

      const compressedUrl = URL.createObjectURL(compressed);

      setCompressedImage((oldUrl) => {
        if (oldUrl) URL.revokeObjectURL(oldUrl);
        return compressedUrl;
      });

      lastQualityRef.current = currentQuality;

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
  }, []); // Empty deps - stable function!

  // Recompress when quality changes
  useEffect(() => {
    if (originalImage && !isCompressingRef.current && lastQualityRef.current !== quality) {
      compressImage(originalImage, false); // Silent recompression
    }
  }, [quality, originalImage]); // No compressImage here!

  const processFile = async (file: File) => {
    // Validate file size
    if (file.size > IMAGE_COMPRESSOR.MAX_FILE_SIZE) {
      toast.error(`File is too large. Maximum size is ${IMAGE_COMPRESSOR.MAX_FILE_SIZE / 1024 / 1024}MB`);
      return;
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error("Please upload a valid image file");
      return;
    }

    if (originalUrl) URL.revokeObjectURL(originalUrl);
    if (compressedImage) URL.revokeObjectURL(compressedImage);

    setOriginalImage(file);
    setOriginalSize(file.size);
    const url = URL.createObjectURL(file);
    setOriginalUrl(url);

    await compressImage(file, true); // With toast
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    await processFile(file);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      await processFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
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
        <div
          className="border-2 border-dashed rounded-lg p-12 text-center transition-colors hover:border-primary"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
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
            aria-label="Upload image file"
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
              min={IMAGE_COMPRESSOR.MIN_QUALITY}
              max={IMAGE_COMPRESSOR.MAX_QUALITY}
              step={IMAGE_COMPRESSOR.QUALITY_STEP}
              className="mb-2"
              aria-valuetext={`${quality} percent quality`}
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
