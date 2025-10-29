import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
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

const Index = () => {
  const [activeTool, setActiveTool] = useState("json");

  const renderTool = () => {
    switch (activeTool) {
      case "json":
        return <JsonFormatter />;
      case "base64":
        return <Base64Tool />;
      case "image":
        return <ImageCompressor />;
      case "color":
        return <ColorPickerTool />;
      case "regex":
        return <RegexTester />;
      case "markdown":
        return <MarkdownPreview />;
      case "hash":
        return <HashGenerator />;
      case "qr":
        return <QRCodeGenerator />;
      case "diff":
        return <TextDiff />;
      case "url":
        return <URLTool />;
      default:
        return <JsonFormatter />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar activeTool={activeTool} onToolChange={setActiveTool} />
      <main className="flex-1 overflow-y-auto">
        <div className="container max-w-4xl py-8 px-4">
          <div className="bg-gradient-card rounded-xl shadow-glow p-6 border">
            {renderTool()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
