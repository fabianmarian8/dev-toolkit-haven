// Gamification types and interfaces

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  requirement: number;
  category: 'usage' | 'streak' | 'variety' | 'special';
  unlocked: boolean;
  unlockedAt?: Date;
  progress: number;
}

export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastVisit: string; // ISO date string
  totalDays: number;
}

export interface ToolUsage {
  toolId: string;
  count: number;
  lastUsed: string; // ISO date string
  firstUsed: string; // ISO date string
}

export interface UserStats {
  totalToolsUsed: number;
  totalOperations: number;
  favoriteTools: string[];
  achievements: Achievement[];
  streak: StreakData;
  toolUsage: ToolUsage[];
  joinedDate: string; // ISO date string
}

export interface AchievementNotification {
  achievement: Achievement;
  timestamp: Date;
  shown: boolean;
}

// Achievement definitions
export const ACHIEVEMENTS: Omit<Achievement, 'unlocked' | 'unlockedAt' | 'progress'>[] = [
  // Usage achievements
  {
    id: 'first_tool',
    title: 'Getting Started',
    description: 'Use your first tool',
    icon: '🎯',
    requirement: 1,
    category: 'usage',
  },
  {
    id: 'tool_explorer',
    title: 'Tool Explorer',
    description: 'Use 5 different tools',
    icon: '🔍',
    requirement: 5,
    category: 'variety',
  },
  {
    id: 'tool_master',
    title: 'Tool Master',
    description: 'Use all 12 tools',
    icon: '🏆',
    requirement: 12,
    category: 'variety',
  },
  {
    id: 'json_novice',
    title: 'JSON Novice',
    description: 'Format 10 JSON documents',
    icon: '📄',
    requirement: 10,
    category: 'usage',
  },
  {
    id: 'json_pro',
    title: 'JSON Pro',
    description: 'Format 50 JSON documents',
    icon: '📊',
    requirement: 50,
    category: 'usage',
  },
  {
    id: 'json_master',
    title: 'JSON Master',
    description: 'Format 100 JSON documents',
    icon: '💎',
    requirement: 100,
    category: 'usage',
  },
  {
    id: 'image_optimizer',
    title: 'Image Optimizer',
    description: 'Compress 25 images',
    icon: '🖼️',
    requirement: 25,
    category: 'usage',
  },
  {
    id: 'regex_wizard',
    title: 'Regex Wizard',
    description: 'Test 20 regex patterns',
    icon: '🧙',
    requirement: 20,
    category: 'usage',
  },
  
  // Streak achievements
  {
    id: 'streak_3',
    title: 'On a Roll',
    description: 'Use tools 3 days in a row',
    icon: '🔥',
    requirement: 3,
    category: 'streak',
  },
  {
    id: 'streak_7',
    title: 'Week Warrior',
    description: 'Use tools 7 days in a row',
    icon: '⚡',
    requirement: 7,
    category: 'streak',
  },
  {
    id: 'streak_30',
    title: 'Monthly Master',
    description: 'Use tools 30 days in a row',
    icon: '🌟',
    requirement: 30,
    category: 'streak',
  },
  
  // Special achievements
  {
    id: 'early_bird',
    title: 'Early Bird',
    description: 'Use tools before 6 AM',
    icon: '🌅',
    requirement: 1,
    category: 'special',
  },
  {
    id: 'night_owl',
    title: 'Night Owl',
    description: 'Use tools after midnight',
    icon: '🦉',
    requirement: 1,
    category: 'special',
  },
  {
    id: 'power_user',
    title: 'Power User',
    description: 'Use 10 tools in one day',
    icon: '⚡',
    requirement: 10,
    category: 'special',
  },
];
