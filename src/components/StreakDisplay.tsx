import { Flame, TrendingUp, Calendar } from 'lucide-react';
import { StreakData } from '@/types/gamification';
import { cn } from '@/lib/utils';

interface StreakDisplayProps {
  streak: StreakData;
  compact?: boolean;
}

export const StreakDisplay = ({ streak, compact = false }: StreakDisplayProps) => {
  const getStreakColor = (days: number) => {
    if (days >= 30) return 'from-orange-500 to-red-500';
    if (days >= 7) return 'from-yellow-500 to-orange-500';
    if (days >= 3) return 'from-blue-500 to-purple-500';
    return 'from-gray-400 to-gray-500';
  };

  const getStreakMessage = (days: number) => {
    if (days === 0) return "Start your streak today!";
    if (days === 1) return "Great start!";
    if (days < 3) return "Keep it up!";
    if (days < 7) return "You're on fire!";
    if (days < 30) return "Amazing streak!";
    return "Legendary!";
  };

  if (compact) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg border border-orange-500/20">
        <Flame className={cn(
          "w-5 h-5",
          streak.currentStreak > 0 ? "text-orange-500" : "text-gray-400"
        )} />
        <div className="flex flex-col">
          <span className="text-sm font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            {streak.currentStreak} Day Streak
          </span>
          <span className="text-xs text-muted-foreground">
            {getStreakMessage(streak.currentStreak)}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Current Streak */}
      <div className="relative overflow-hidden rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 p-6">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 via-red-400/10 to-orange-400/10 animate-pulse" />
        
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Flame className={cn(
                "w-6 h-6",
                streak.currentStreak > 0 ? "text-orange-500 animate-pulse" : "text-gray-400"
              )} />
              <h3 className="text-lg font-semibold">Current Streak</h3>
            </div>
            <span className="text-xs text-muted-foreground">
              {getStreakMessage(streak.currentStreak)}
            </span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className={cn(
              "text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
              getStreakColor(streak.currentStreak)
            )}>
              {streak.currentStreak}
            </span>
            <span className="text-2xl text-muted-foreground">
              {streak.currentStreak === 1 ? 'day' : 'days'}
            </span>
          </div>

          {streak.currentStreak > 0 && (
            <p className="text-sm text-muted-foreground mt-2">
              Come back tomorrow to keep your streak alive! 🔥
            </p>
          )}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Longest Streak */}
        <div className="rounded-xl border bg-card p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Longest Streak
            </span>
          </div>
          <p className="text-3xl font-bold">
            {streak.longestStreak}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {streak.longestStreak === 1 ? 'day' : 'days'}
          </p>
        </div>

        {/* Total Days */}
        <div className="rounded-xl border bg-card p-4">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Total Days
            </span>
          </div>
          <p className="text-3xl font-bold">
            {streak.totalDays}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            active days
          </p>
        </div>
      </div>

      {/* Streak Calendar Preview (simplified) */}
      <div className="rounded-xl border bg-card p-4">
        <h4 className="text-sm font-medium mb-3">Last 7 Days</h4>
        <div className="flex gap-2">
          {Array.from({ length: 7 }).map((_, i) => {
            const isActive = i < Math.min(streak.currentStreak, 7);
            return (
              <div
                key={i}
                className={cn(
                  "flex-1 h-12 rounded-lg transition-all duration-300",
                  isActive
                    ? "bg-gradient-to-br from-orange-400 to-red-500 shadow-lg"
                    : "bg-muted"
                )}
                title={isActive ? `Day ${7 - i}` : 'Inactive'}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
