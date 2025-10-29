import { SidebarContent } from "./SidebarContent";

interface SidebarProps {
  activeTool: string;
  onToolChange: (tool: string) => void;
}

export const Sidebar = ({ activeTool, onToolChange }: SidebarProps) => {
  return (
    <aside className="hidden md:flex w-64 bg-card border-r border-border flex-col">
      <div className="p-4 border-b">
        <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          DevTools Hub
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Developer utilities</p>
      </div>
      <SidebarContent activeTool={activeTool} onToolChange={onToolChange} />
    </aside>
  );
};
