import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassmorphismCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  gradient?: string;
}

export const GlassmorphismCard = ({ 
  children, 
  className, 
  onClick,
  gradient = "from-white/40 to-white/10 dark:from-gray-800/40 dark:to-gray-900/10"
}: GlassmorphismCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-2xl",
        "bg-gradient-to-br backdrop-blur-xl",
        gradient,
        "border border-white/20 dark:border-gray-700/50",
        "shadow-xl hover:shadow-2xl",
        "transition-all duration-500 ease-out",
        "hover:scale-[1.02] hover:-translate-y-1",
        onClick && "cursor-pointer",
        className
      )}
    >
      {/* Animated gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl -z-10" />
      
      {/* Shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
