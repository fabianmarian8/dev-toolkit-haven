import { useNavigate } from "react-router-dom";
import {
  FileJson,
  FileText,
  Image,
  Palette,
  Regex,
  FileCode2,
  Hash,
  QrCode,
  FileSpreadsheet,
  Link,
  Key,
  Clock,
  ArrowRight,
  Sparkles,
  Share2
} from "lucide-react";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SEOHead } from "@/components/SEOHead";
import { homeSEO } from "@/config/seo";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { GlassmorphismCard } from "@/components/GlassmorphismCard";
import { UsageCounter } from "@/components/UsageCounter";
import { FeaturedBadges } from "@/components/FeaturedBadges";

const tools = [
  {
    id: "json",
    title: "JSON Formatter",
    description: "Format, validate, and minify JSON data with syntax highlighting",
    icon: FileJson,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10 hover:bg-blue-500/20",
    gradient: "from-blue-500/10 to-blue-600/5 dark:from-blue-500/20 dark:to-blue-600/10",
  },
  {
    id: "base64",
    title: "Base64 Encoder/Decoder",
    description: "Encode and decode Base64 strings easily",
    icon: FileText,
    color: "text-green-500",
    bgColor: "bg-green-500/10 hover:bg-green-500/20",
    gradient: "from-green-500/10 to-green-600/5 dark:from-green-500/20 dark:to-green-600/10",
  },
  {
    id: "image",
    title: "Image Compressor",
    description: "Compress and optimize images without quality loss",
    icon: Image,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10 hover:bg-purple-500/20",
    gradient: "from-purple-500/10 to-purple-600/5 dark:from-purple-500/20 dark:to-purple-600/10",
  },
  {
    id: "color",
    title: "Color Picker",
    description: "Pick colors and convert between HEX, RGB, HSL formats",
    icon: Palette,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10 hover:bg-pink-500/20",
    gradient: "from-pink-500/10 to-pink-600/5 dark:from-pink-500/20 dark:to-pink-600/10",
  },
  {
    id: "regex",
    title: "Regex Tester",
    description: "Test and debug regular expressions with real-time matching",
    icon: Regex,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10 hover:bg-orange-500/20",
    gradient: "from-orange-500/10 to-orange-600/5 dark:from-orange-500/20 dark:to-orange-600/10",
  },
  {
    id: "markdown",
    title: "Markdown Preview",
    description: "Preview markdown formatting in real-time",
    icon: FileCode2,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10 hover:bg-indigo-500/20",
    gradient: "from-indigo-500/10 to-indigo-600/5 dark:from-indigo-500/20 dark:to-indigo-600/10",
  },
  {
    id: "hash",
    title: "Hash Generator",
    description: "Generate MD5, SHA-256, and SHA-512 hashes",
    icon: Hash,
    color: "text-red-500",
    bgColor: "bg-red-500/10 hover:bg-red-500/20",
    gradient: "from-red-500/10 to-red-600/5 dark:from-red-500/20 dark:to-red-600/10",
  },
  {
    id: "qr",
    title: "QR Code Generator",
    description: "Create QR codes from text or URLs instantly",
    icon: QrCode,
    color: "text-teal-500",
    bgColor: "bg-teal-500/10 hover:bg-teal-500/20",
    gradient: "from-teal-500/10 to-teal-600/5 dark:from-teal-500/20 dark:to-teal-600/10",
  },
  {
    id: "diff",
    title: "Text Diff",
    description: "Compare text differences side by side",
    icon: FileSpreadsheet,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10 hover:bg-yellow-500/20",
    gradient: "from-yellow-500/10 to-yellow-600/5 dark:from-yellow-500/20 dark:to-yellow-600/10",
  },
  {
    id: "url",
    title: "URL Encoder/Decoder",
    description: "Encode and decode URLs for web applications",
    icon: Link,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10 hover:bg-cyan-500/20",
    gradient: "from-cyan-500/10 to-cyan-600/5 dark:from-cyan-500/20 dark:to-cyan-600/10",
  },
  {
    id: "uuid",
    title: "UUID Generator",
    description: "Generate universally unique identifiers (v4)",
    icon: Key,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10 hover:bg-violet-500/20",
    gradient: "from-violet-500/10 to-violet-600/5 dark:from-violet-500/20 dark:to-violet-600/10",
  },
  {
    id: "timestamp",
    title: "Timestamp Converter",
    description: "Convert between timestamps and human-readable dates",
    icon: Clock,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10 hover:bg-emerald-500/20",
    gradient: "from-emerald-500/10 to-emerald-600/5 dark:from-emerald-500/20 dark:to-emerald-600/10",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <SEOHead config={homeSEO} />
      
      {/* Header with Theme Toggle */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Free DevTools
            </h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden">
        <AnimatedBackground />
        
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 dark:border-gray-700/50 shadow-lg">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="bg-gradient-primary bg-clip-text text-transparent font-semibold">
                100% Free Forever
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Free Developer
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 dark:from-pink-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                Tools
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              Professional online utilities for developers. No registration, no limits, completely free.
            </p>

            {/* Usage Counter */}
            <UsageCounter />

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                size="lg"
                className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={() => navigate("/json")}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border-white/20 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300"
                onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View All Tools
              </Button>
            </div>

            {/* Featured Badges */}
            <FeaturedBadges />
          </div>
        </div>
      </div>

      {/* Tools Grid Section */}
      <div id="tools" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Tool
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select from our collection of professional developer utilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <GlassmorphismCard
                key={tool.id}
                gradient={tool.gradient}
                onClick={() => navigate(`/${tool.id}`)}
                className="h-full"
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl ${tool.bgColor} flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon className={`h-8 w-8 ${tool.color}`} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {tool.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-primary/10 transition-all duration-300"
                  >
                    Open Tool
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </GlassmorphismCard>
            );
          })}
        </div>
      </div>

      {/* Features Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">100% Free</h3>
              <p className="text-muted-foreground leading-relaxed">
                All tools are completely free with no hidden costs or premium features
              </p>
            </div>
            
            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Key className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">No Registration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Use all tools instantly without creating an account or signing up
              </p>
            </div>
            
            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500/20 to-orange-500/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <FileCode2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Privacy First</h3>
              <p className="text-muted-foreground leading-relaxed">
                All processing happens in your browser. Your data never leaves your device
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Share Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h3 className="text-3xl font-bold">Love Free DevTools?</h3>
          <p className="text-lg text-muted-foreground">
            Help other developers discover these free tools by sharing with your network
          </p>
          <Button
            size="lg"
            variant="outline"
            className="gap-2"
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Free DevTools',
                  text: 'Check out these free developer tools!',
                  url: window.location.href
                });
              }
            }}
          >
            <Share2 className="h-5 w-5" />
            Share Free DevTools
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
