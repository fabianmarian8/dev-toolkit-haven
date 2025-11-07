import { useEffect, useState } from "react";
import { Users } from "lucide-react";

export const UsageCounter = () => {
  const [count, setCount] = useState(0);
  const targetCount = 12453; // Simulated usage count
  
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetCount / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="flex items-center justify-center gap-3 py-4">
      {/* Avatar stack */}
      <div className="flex -space-x-3">
        <div className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
          JD
        </div>
        <div className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
          SK
        </div>
        <div className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white text-xs font-bold">
          ML
        </div>
        <div className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
          <Users className="w-5 h-5 text-white" />
        </div>
      </div>
      
      {/* Counter text */}
      <div className="text-sm">
        <span className="font-bold text-lg bg-gradient-primary bg-clip-text text-transparent">
          {count.toLocaleString()}+
        </span>
        <span className="text-muted-foreground ml-1">
          developers used this today
        </span>
      </div>
    </div>
  );
};
