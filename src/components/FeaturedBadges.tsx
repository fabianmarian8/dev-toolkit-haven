import { Star, TrendingUp, Award } from "lucide-react";

export const FeaturedBadges = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 py-6 opacity-70 hover:opacity-100 transition-opacity">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
        <span className="font-medium">4.8/5 Average Rating</span>
      </div>
      
      <div className="w-px h-4 bg-border" />
      
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <TrendingUp className="w-4 h-4 text-green-500" />
        <span className="font-medium">50K+ Tools Used Daily</span>
      </div>
      
      <div className="w-px h-4 bg-border" />
      
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Award className="w-4 h-4 text-blue-500" />
        <span className="font-medium">100% Free Forever</span>
      </div>
    </div>
  );
};
