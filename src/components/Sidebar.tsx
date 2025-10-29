import { Code2, FileJson, FileText, Image, Hash, QrCode, GitCompare, Link2, Regex, Palette } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTool: string;
  onToolChange: (tool: string) => void;
}

const tools = [
  { id: "json", label: "JSON Formatter", icon: FileJson },
  { id: "base64", label: "Base64 Encode/Decode", icon: Code2 },
  { id: "image", label: "Image Compressor", icon: Image },
  { id: "color", label: "Color Picker", icon: Palette },
  { id: "regex", label: "Regex Tester", icon: Regex },
  { id: "markdown", label: "Markdown Preview", icon: FileText },
  { id: "hash", label: "Hash Generator", icon: Hash },
  { id: "qr", label: "QR Code Generator", icon: QrCode },
  { id: "diff", label: "Text Diff", icon: GitCompare },
  { id: "url", label: "URL Encode/Decode", icon: Link2 },
];

export const Sidebar = ({ activeTool, onToolChange }: SidebarProps) => {
  return (
    <aside className="w-64 bg-card border-r border-border p-4 flex flex-col gap-2">
      <div className="mb-6">
        <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          DevTools Hub
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Developer utilities</p>
      </div>
      <nav className="flex flex-col gap-1">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <button
              key={tool.id}
              onClick={() => onToolChange(tool.id)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all",
                activeTool === tool.id
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "text-foreground hover:bg-muted"
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{tool.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
