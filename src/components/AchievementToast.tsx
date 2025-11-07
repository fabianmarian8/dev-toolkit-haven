import { useEffect, useState } from 'react';
import { X, Trophy } from 'lucide-react';
import { Achievement } from '@/types/gamification';
import { cn } from '@/lib/utils';

interface AchievementToastProps {
  achievement: Achievement;
  onClose: () => void;
}

export const AchievementToast = ({ achievement, onClose }: AchievementToastProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // Slide in
    setTimeout(() => setIsVisible(true), 100);

    // Auto close after 5 seconds
    const timer = setTimeout(() => {
      handleClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 max-w-sm transition-all duration-300 ease-out",
        isVisible && !isLeaving ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      )}
    >
      <div className="relative overflow-hidden rounded-2xl border border-yellow-500/50 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/50 dark:to-orange-950/50 backdrop-blur-xl shadow-2xl">
        {/* Animated gradient border */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 opacity-20 animate-pulse" />
        
        {/* Content */}
        <div className="relative p-6">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-3xl">{achievement.icon}</span>
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <Trophy className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                <span className="text-xs font-semibold text-yellow-600 dark:text-yellow-400 uppercase tracking-wide">
                  Achievement Unlocked!
                </span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
                {achievement.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {achievement.description}
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="flex-shrink-0 p-1 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </button>
          </div>
        </div>

        {/* Sparkle effects */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
        <div className="absolute bottom-2 left-2 w-1 h-1 bg-orange-400 rounded-full animate-ping animation-delay-2000" />
      </div>
    </div>
  );
};
