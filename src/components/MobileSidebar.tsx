import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SidebarContent } from "./SidebarContent";

interface MobileSidebarProps {
  activeTool: string;
  onToolChange: (tool: string) => void;
}

export const MobileSidebar = ({ activeTool, onToolChange }: MobileSidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            DevTools Hub
          </SheetTitle>
        </SheetHeader>
        <SidebarContent activeTool={activeTool} onToolChange={onToolChange} />
      </SheetContent>
    </Sheet>
  );
};
