import { BarChart3, TrendingUp, Star, Clock } from 'lucide-react';
import { UserStats } from '@/types/gamification';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { StreakDisplay } from './StreakDisplay';
import { cn } from '@/lib/utils';

interface UserStatsPanelProps {
  stats: UserStats;
}

export const UserStatsPanel = ({ stats }: UserStatsPanelProps) => {
  // Sort tools by usage
  const sortedTools = [...stats.toolUsage].sort((a, b) => b.count - a.count);
  const topTools = sortedTools.slice(0, 5);

  // Calculate total operations
  const totalOps = stats.totalOperations;

  // Get most used tool
  const mostUsedTool = sortedTools[0];

  // Calculate days since joined
  const daysSinceJoined = Math.floor(
    (new Date().getTime() - new Date(stats.joinedDate).getTime()) / (1000 * 60 * 60 * 24)
  );

  const toolNames: Record<string, string> = {
    json: 'JSON Formatter',
    base64: 'Base64 Encoder',
    image: 'Image Compressor',
    color: 'Color Picker',
    regex: 'Regex Tester',
    markdown: 'Markdown Preview',
    hash: 'Hash Generator',
    qr: 'QR Code Generator',
    diff: 'Text Diff',
    url: 'URL Encoder',
    uuid: 'UUID Generator',
    timestamp: 'Timestamp Converter',
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <BarChart3 className="w-4 h-4" />
          Your Stats
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <BarChart3 className="w-6 h-6 text-primary" />
            Your Statistics
          </DialogTitle>
          <DialogDescription>
            Track your usage and progress with Free DevTools
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Overview Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard
              icon={<TrendingUp className="w-5 h-5" />}
              label="Total Operations"
              value={totalOps.toLocaleString()}
              color="text-blue-500"
            />
            <StatCard
              icon={<Star className="w-5 h-5" />}
              label="Tools Used"
              value={`${stats.totalToolsUsed}/12`}
              color="text-purple-500"
            />
            <StatCard
              icon={<Clock className="w-5 h-5" />}
              label="Days Active"
              value={daysSinceJoined}
              color="text-green-500"
            />
            <StatCard
              icon={<BarChart3 className="w-5 h-5" />}
              label="Achievements"
              value={`${stats.achievements.filter(a => a.unlocked).length}/${stats.achievements.length}`}
              color="text-orange-500"
            />
          </div>

          {/* Streak Display */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Your Streak</h3>
            <StreakDisplay streak={stats.streak} />
          </div>

          {/* Top Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Most Used Tools</h3>
            <div className="space-y-3">
              {topTools.length > 0 ? (
                topTools.map((tool, index) => {
                  const maxCount = topTools[0].count;
                  const percentage = (tool.count / maxCount) * 100;
                  
                  return (
                    <div key={tool.toolId} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-muted-foreground">
                            #{index + 1}
                          </span>
                          <span className="font-medium">
                            {toolNames[tool.toolId] || tool.toolId}
                          </span>
                        </div>
                        <span className="text-muted-foreground">
                          {tool.count} {tool.count === 1 ? 'use' : 'uses'}
                        </span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div
                          className={cn(
                            "h-full transition-all duration-500 rounded-full",
                            index === 0 && "bg-gradient-to-r from-blue-500 to-purple-500",
                            index === 1 && "bg-gradient-to-r from-purple-500 to-pink-500",
                            index === 2 && "bg-gradient-to-r from-pink-500 to-orange-500",
                            index >= 3 && "bg-gradient-to-r from-gray-400 to-gray-500"
                          )}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-sm text-muted-foreground text-center py-8">
                  Start using tools to see your statistics here!
                </p>
              )}
            </div>
          </div>

          {/* Recent Activity */}
          {mostUsedTool && (
            <div className="rounded-xl border bg-card p-4">
              <h3 className="text-lg font-semibold mb-3">Your Favorite Tool</h3>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-3xl">🏆</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg">
                    {toolNames[mostUsedTool.toolId] || mostUsedTool.toolId}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Used {mostUsedTool.count} times
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Last used: {new Date(mostUsedTool.lastUsed).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Member Since */}
          <div className="text-center py-4 border-t">
            <p className="text-sm text-muted-foreground">
              Member since {new Date(stats.joinedDate).toLocaleDateString()}
              {daysSinceJoined > 0 && ` • ${daysSinceJoined} ${daysSinceJoined === 1 ? 'day' : 'days'} ago`}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const StatCard = ({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  color: string;
}) => {
  return (
    <div className="rounded-xl border bg-card p-4">
      <div className={cn("mb-2", color)}>{icon}</div>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-xs text-muted-foreground mt-1">{label}</p>
    </div>
  );
};
