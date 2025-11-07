import { Trophy, Lock, Check } from 'lucide-react';
import { Achievement } from '@/types/gamification';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface AchievementsPanelProps {
  achievements: Achievement[];
}

export const AchievementsPanel = ({ achievements }: AchievementsPanelProps) => {
  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const totalCount = achievements.length;
  const progressPercentage = Math.round((unlockedCount / totalCount) * 100);

  const categories = {
    usage: achievements.filter(a => a.category === 'usage'),
    streak: achievements.filter(a => a.category === 'streak'),
    variety: achievements.filter(a => a.category === 'variety'),
    special: achievements.filter(a => a.category === 'special'),
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2 relative">
          <Trophy className="w-4 h-4" />
          Achievements
          {unlockedCount > 0 && (
            <Badge variant="secondary" className="ml-1">
              {unlockedCount}/{totalCount}
            </Badge>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Trophy className="w-6 h-6 text-yellow-500" />
            Your Achievements
          </DialogTitle>
          <DialogDescription>
            Track your progress and unlock badges by using Free DevTools
          </DialogDescription>
        </DialogHeader>

        {/* Progress bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Overall Progress</span>
            <span className="text-muted-foreground">
              {unlockedCount} / {totalCount} ({progressPercentage}%)
            </span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Achievement categories */}
        <div className="space-y-6 mt-6">
          {Object.entries(categories).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-3 capitalize flex items-center gap-2">
                {category === 'usage' && '📊'}
                {category === 'streak' && '🔥'}
                {category === 'variety' && '🌈'}
                {category === 'special' && '⭐'}
                {category} Achievements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {items.map(achievement => (
                  <AchievementCard key={achievement.id} achievement={achievement} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const AchievementCard = ({ achievement }: { achievement: Achievement }) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border p-4 transition-all duration-300",
        achievement.unlocked
          ? "bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border-yellow-500/50 shadow-md"
          : "bg-muted/50 border-border opacity-60"
      )}
    >
      {/* Unlocked indicator */}
      {achievement.unlocked && (
        <div className="absolute top-2 right-2">
          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
            <Check className="w-4 h-4 text-white" />
          </div>
        </div>
      )}

      <div className="flex items-start gap-3">
        {/* Icon */}
        <div
          className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0",
            achievement.unlocked
              ? "bg-gradient-to-br from-yellow-400 to-orange-500"
              : "bg-muted"
          )}
        >
          {achievement.unlocked ? achievement.icon : <Lock className="w-5 h-5 text-muted-foreground" />}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-sm mb-1">{achievement.title}</h4>
          <p className="text-xs text-muted-foreground mb-2">
            {achievement.description}
          </p>

          {/* Progress or unlock date */}
          {achievement.unlocked && achievement.unlockedAt ? (
            <p className="text-xs text-green-600 dark:text-green-400 font-medium">
              Unlocked {new Date(achievement.unlockedAt).toLocaleDateString()}
            </p>
          ) : (
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">
                  {achievement.progress}/{achievement.requirement}
                </span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{
                    width: `${(achievement.progress / achievement.requirement) * 100}%`,
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
