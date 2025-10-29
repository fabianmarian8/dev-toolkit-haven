import { Code2, FileJson, FileText, Image, Hash, QrCode, GitCompare, Link2, Regex, Palette } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

interface SidebarContentProps {
  activeTool: string;
  onToolChange: (tool: string) => void;
}

const tools = [
  { id: "json", label: "JSON Formatter", icon: FileJson, path: "/json" },
  { id: "base64", label: "Base64 Encode/Decode", icon: Code2, path: "/base64" },
  { id: "image", label: "Image Compressor", icon: Image, path: "/image" },
  { id: "color", label: "Color Picker", icon: Palette, path: "/color" },
  { id: "regex", label: "Regex Tester", icon: Regex, path: "/regex" },
  { id: "markdown", label: "Markdown Preview", icon: FileText, path: "/markdown" },
  { id: "hash", label: "Hash Generator", icon: Hash, path: "/hash" },
  { id: "qr", label: "QR Code Generator", icon: QrCode, path: "/qr" },
  { id: "diff", label: "Text Diff", icon: GitCompare, path: "/diff" },
  { id: "url", label: "URL Encode/Decode", icon: Link2, path: "/url" },
];

export const SidebarContent = ({ activeTool, onToolChange }: SidebarContentProps) => {
  const location = useLocation();

  return (
    <div className="flex flex-col h-full">
      <nav className="flex flex-col gap-1 p-4 flex-1">
        {tools.map((tool) => {
          const Icon = tool.icon;
          const isActive = location.pathname === tool.path || (location.pathname === "/" && tool.id === "json");
          return (
            <Link
              key={tool.id}
              to={tool.path}
              onClick={() => onToolChange(tool.id)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all",
                isActive
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "text-foreground hover:bg-muted"
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{tool.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t flex items-center justify-between">
        <div className="text-xs text-muted-foreground">
          🔒 Client-side only
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};
