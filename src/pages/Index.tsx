import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import { MobileSidebar } from "@/components/MobileSidebar";
import { JsonFormatter } from "@/components/tools/JsonFormatter";
import { Base64Tool } from "@/components/tools/Base64Tool";
import { ImageCompressor } from "@/components/tools/ImageCompressor";
import { ColorPickerTool } from "@/components/tools/ColorPicker";
import { RegexTester } from "@/components/tools/RegexTester";
import { MarkdownPreview } from "@/components/tools/MarkdownPreview";
import { HashGenerator } from "@/components/tools/HashGenerator";
import { QRCodeGenerator } from "@/components/tools/QRCodeGenerator";
import { TextDiff } from "@/components/tools/TextDiff";
import { URLTool } from "@/components/tools/URLTool";
import { UUIDGenerator } from "@/components/tools/UUIDGenerator";
import { TimestampConverter } from "@/components/tools/TimestampConverter";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const toolsMap: Record<string, { component: () => React.ReactNode; title: string; description: string }> = {
  "/json": {
    component: () => <JsonFormatter />,
    title: "JSON Formatter",
    description: "Format, validate, and minify JSON data"
  },
  "/base64": {
    component: () => <Base64Tool />,
    title: "Base64 Encoder/Decoder",
    description: "Encode and decode Base64 strings"
  },
  "/image": {
    component: () => <ImageCompressor />,
    title: "Image Compressor",
    description: "Compress and optimize images"
  },
  "/color": {
    component: () => <ColorPickerTool />,
    title: "Color Picker",
    description: "Pick colors and convert between formats"
  },
  "/regex": {
    component: () => <RegexTester />,
    title: "Regex Tester",
    description: "Test and debug regular expressions"
  },
  "/markdown": {
    component: () => <MarkdownPreview />,
    title: "Markdown Preview",
    description: "Preview markdown in real-time"
  },
  "/hash": {
    component: () => <HashGenerator />,
    title: "Hash Generator",
    description: "Generate MD5, SHA-256, and SHA-512 hashes"
  },
  "/qr": {
    component: () => <QRCodeGenerator />,
    title: "QR Code Generator",
    description: "Create QR codes from text"
  },
  "/diff": {
    component: () => <TextDiff />,
    title: "Text Diff",
    description: "Compare text differences"
  },
  "/url": {
    component: () => <URLTool />,
    title: "URL Encoder/Decoder",
    description: "Encode and decode URLs"
  },
  "/uuid": {
    component: () => <UUIDGenerator />,
    title: "UUID Generator",
    description: "Generate UUIDs (v4)"
  },
  "/timestamp": {
    component: () => <TimestampConverter />,
    title: "Timestamp Converter",
    description: "Convert between timestamps and dates"
  },
};

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const getToolFromPath = (path: string) => {
    return path.substring(1);
  };

  const [activeTool, setActiveTool] = useLocalStorage(
    "lastTool",
    getToolFromPath(location.pathname)
  );

  useEffect(() => {
    const toolFromPath = getToolFromPath(location.pathname);
    if (toolFromPath !== activeTool) {
      setActiveTool(toolFromPath);
    }
  }, [location.pathname, activeTool, setActiveTool]);

  const handleToolChange = (tool: string) => {
    setActiveTool(tool);
    navigate(`/${tool}`);
  };

  const currentTool = toolsMap[location.pathname] || toolsMap["/json"];

  return (
    <div className="flex h-screen overflow-hidden w-full">
      <Sidebar activeTool={activeTool} onToolChange={handleToolChange} />
      <main className="flex-1 overflow-y-auto">
        <div className="md:hidden p-4 border-b flex items-center gap-3">
          <MobileSidebar activeTool={activeTool} onToolChange={handleToolChange} />
          <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Free DevTools
          </h1>
        </div>
        <div className="container max-w-4xl py-8 px-4">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">{currentTool.title}</h2>
            <p className="text-muted-foreground">{currentTool.description}</p>
          </div>
          <div className="bg-gradient-card rounded-xl shadow-glow p-6 border">
            {currentTool.component()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
