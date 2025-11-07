import { useState, useEffect, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import {
  UserStats,
  Achievement,
  StreakData,
  ToolUsage,
  ACHIEVEMENTS,
  AchievementNotification,
} from '@/types/gamification';

const STORAGE_KEY = 'user_stats';
const NOTIFICATIONS_KEY = 'achievement_notifications';

const getDefaultStats = (): UserStats => ({
  totalToolsUsed: 0,
  totalOperations: 0,
  favoriteTools: [],
  achievements: ACHIEVEMENTS.map(a => ({
    ...a,
    unlocked: false,
    progress: 0,
  })),
  streak: {
    currentStreak: 0,
    longestStreak: 0,
    lastVisit: new Date().toISOString(),
    totalDays: 0,
  },
  toolUsage: [],
  joinedDate: new Date().toISOString(),
});

export const useGamification = () => {
  const [stats, setStats] = useLocalStorage<UserStats>(STORAGE_KEY, getDefaultStats());
  const [notifications, setNotifications] = useLocalStorage<AchievementNotification[]>(
    NOTIFICATIONS_KEY,
    []
  );

  // Update streak on visit
  useEffect(() => {
    const updateStreak = () => {
      const now = new Date();
      const lastVisit = new Date(stats.streak.lastVisit);
      const daysDiff = Math.floor(
        (now.getTime() - lastVisit.getTime()) / (1000 * 60 * 60 * 24)
      );

      if (daysDiff === 0) {
        // Same day, no update needed
        return;
      }

      const newStreak: StreakData = { ...stats.streak };

      if (daysDiff === 1) {
        // Consecutive day
        newStreak.currentStreak += 1;
        newStreak.longestStreak = Math.max(
          newStreak.longestStreak,
          newStreak.currentStreak
        );
        newStreak.totalDays += 1;
      } else {
        // Streak broken
        newStreak.currentStreak = 1;
        newStreak.totalDays += 1;
      }

      newStreak.lastVisit = now.toISOString();

      setStats(prev => ({
        ...prev,
        streak: newStreak,
      }));

      // Check streak achievements
      checkStreakAchievements(newStreak.currentStreak);
    };

    updateStreak();
  }, []);

  // Track tool usage
  const trackToolUsage = useCallback(
    (toolId: string) => {
      setStats(prev => {
        const now = new Date().toISOString();
        const existingUsage = prev.toolUsage.find(u => u.toolId === toolId);

        let newToolUsage: ToolUsage[];
        if (existingUsage) {
          newToolUsage = prev.toolUsage.map(u =>
            u.toolId === toolId
              ? { ...u, count: u.count + 1, lastUsed: now }
              : u
          );
        } else {
          newToolUsage = [
            ...prev.toolUsage,
            {
              toolId,
              count: 1,
              lastUsed: now,
              firstUsed: now,
            },
          ];
        }

        const uniqueTools = new Set(newToolUsage.map(u => u.toolId)).size;
        const totalOps = prev.totalOperations + 1;

        // Check achievements
        checkUsageAchievements(toolId, existingUsage ? existingUsage.count + 1 : 1);
        checkVarietyAchievements(uniqueTools);
        checkSpecialAchievements(totalOps);

        return {
          ...prev,
          totalToolsUsed: uniqueTools,
          totalOperations: totalOps,
          toolUsage: newToolUsage,
        };
      });
    },
    [setStats]
  );

  // Check and unlock achievements
  const checkUsageAchievements = useCallback(
    (toolId: string, count: number) => {
      setStats(prev => {
        const newAchievements = prev.achievements.map(achievement => {
          if (achievement.unlocked) return achievement;

          // JSON achievements
          if (toolId === 'json') {
            if (achievement.id === 'json_novice' && count >= 10) {
              unlockAchievement(achievement);
              return { ...achievement, unlocked: true, unlockedAt: new Date(), progress: 100 };
            }
            if (achievement.id === 'json_pro' && count >= 50) {
              unlockAchievement(achievement);
              return { ...achievement, unlocked: true, unlockedAt: new Date(), progress: 100 };
            }
            if (achievement.id === 'json_master' && count >= 100) {
              unlockAchievement(achievement);
              return { ...achievement, unlocked: true, unlockedAt: new Date(), progress: 100 };
            }
          }

          // Image achievements
          if (toolId === 'image' && achievement.id === 'image_optimizer' && count >= 25) {
            unlockAchievement(achievement);
            return { ...achievement, unlocked: true, unlockedAt: new Date(), progress: 100 };
          }

          // Regex achievements
          if (toolId === 'regex' && achievement.id === 'regex_wizard' && count >= 20) {
            unlockAchievement(achievement);
            return { ...achievement, unlocked: true, unlockedAt: new Date(), progress: 100 };
          }

          // First tool
          if (achievement.id === 'first_tool' && count >= 1) {
            unlockAchievement(achievement);
            return { ...achievement, unlocked: true, unlockedAt: new Date(), progress: 100 };
          }

          return achievement;
        });

        return { ...prev, achievements: newAchievements };
      });
    },
    [setStats]
  );

  const checkVarietyAchievements = useCallback(
    (uniqueTools: number) => {
      setStats(prev => {
        const newAchievements = prev.achievements.map(achievement => {
          if (achievement.unlocked) return achievement;

          if (achievement.id === 'tool_explorer' && uniqueTools >= 5) {
            unlockAchievement(achievement);
            return { ...achievement, unlocked: true, unlockedAt: new Date(), progress: 100 };
          }
          if (achievement.id === 'tool_master' && uniqueTools >= 12) {
            unlockAchievement(achievement);
            return { ...achievement, unlocked: true, unlockedAt: new Date(), progress: 100 };
          }

          return achievement;
        });

        return { ...prev, achievements: newAchievements };
      });
    },
    [setStats]
  );

  const checkStreakAchievements = useCallback(
    (currentStreak: number) => {
      setStats(prev => {
        const newAchievements = prev.achievements.map(achievement => {
          if (achievement.unlocked) return achievement;

          if (achievement.id === 'streak_3' && currentStreak >= 3) {
            unlockAchievement(achievement);
            return { ...achievement, unlocked: true, unlockedAt: new Date(), progress: 100 };
          }
          if (achievement.id === 'streak_7' && currentStreak >= 7) {
            unlockAchievement(achievement);
            return { ...achievement, unlocked: true, unlockedAt: new Date(), progress: 100 };
          }
          if (achievement.id === 'streak_30' && currentStreak >= 30) {
            unlockAchievement(achievement);
            return { ...achievement, unlocked: true, unlockedAt: new Date(), progress: 100 };
          }

          return achievement;
        });

        return { ...prev, achievements: newAchievements };
      });
    },
    [setStats]
  );

  const checkSpecialAchievements = useCallback(
    (totalOps: number) => {
      const hour = new Date().getHours();

      setStats(prev => {
        const newAchievements = prev.achievements.map(achievement => {
          if (achievement.unlocked) return achievement;

          // Early bird (before 6 AM)
          if (achievement.id === 'early_bird' && hour < 6) {
            unlockAchievement(achievement);
            return { ...achievement, unlocked: true, unlockedAt: new Date(), progress: 100 };
          }

          // Night owl (after midnight)
          if (achievement.id === 'night_owl' && hour >= 0 && hour < 4) {
            unlockAchievement(achievement);
            return { ...achievement, unlocked: true, unlockedAt: new Date(), progress: 100 };
          }

          return achievement;
        });

        return { ...prev, achievements: newAchievements };
      });
    },
    [setStats]
  );

  const unlockAchievement = useCallback(
    (achievement: Achievement) => {
      const notification: AchievementNotification = {
        achievement,
        timestamp: new Date(),
        shown: false,
      };

      setNotifications(prev => [...prev, notification]);
    },
    [setNotifications]
  );

  const markNotificationAsShown = useCallback(
    (achievementId: string) => {
      setNotifications(prev =>
        prev.map(n =>
          n.achievement.id === achievementId ? { ...n, shown: true } : n
        )
      );
    },
    [setNotifications]
  );

  const getUnshownNotifications = useCallback(() => {
    return notifications.filter(n => !n.shown);
  }, [notifications]);

  const resetStats = useCallback(() => {
    setStats(getDefaultStats());
    setNotifications([]);
  }, [setStats, setNotifications]);

  return {
    stats,
    trackToolUsage,
    notifications: getUnshownNotifications(),
    markNotificationAsShown,
    resetStats,
  };
};
