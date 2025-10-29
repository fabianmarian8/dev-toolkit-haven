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
  Sparkles
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tools = [
  {
    id: "json",
    title: "JSON Formatter",
    description: "Format, validate, and minify JSON data with syntax highlighting",
    icon: FileJson,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10 hover:bg-blue-500/20",
  },
  {
    id: "base64",
    title: "Base64 Encoder/Decoder",
    description: "Encode and decode Base64 strings easily",
    icon: FileText,
    color: "text-green-500",
    bgColor: "bg-green-500/10 hover:bg-green-500/20",
  },
  {
    id: "image",
    title: "Image Compressor",
    description: "Compress and optimize images without quality loss",
    icon: Image,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10 hover:bg-purple-500/20",
  },
  {
    id: "color",
    title: "Color Picker",
    description: "Pick colors and convert between HEX, RGB, HSL formats",
    icon: Palette,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10 hover:bg-pink-500/20",
  },
  {
    id: "regex",
    title: "Regex Tester",
    description: "Test and debug regular expressions with real-time matching",
    icon: Regex,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10 hover:bg-orange-500/20",
  },
  {
    id: "markdown",
    title: "Markdown Preview",
    description: "Preview markdown formatting in real-time",
    icon: FileCode2,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10 hover:bg-indigo-500/20",
  },
  {
    id: "hash",
    title: "Hash Generator",
    description: "Generate MD5, SHA-256, and SHA-512 hashes",
    icon: Hash,
    color: "text-red-500",
    bgColor: "bg-red-500/10 hover:bg-red-500/20",
  },
  {
    id: "qr",
    title: "QR Code Generator",
    description: "Create QR codes from text or URLs instantly",
    icon: QrCode,
    color: "text-teal-500",
    bgColor: "bg-teal-500/10 hover:bg-teal-500/20",
  },
  {
    id: "diff",
    title: "Text Diff",
    description: "Compare text differences side by side",
    icon: FileSpreadsheet,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10 hover:bg-yellow-500/20",
  },
  {
    id: "url",
    title: "URL Encoder/Decoder",
    description: "Encode and decode URLs for web applications",
    icon: Link,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10 hover:bg-cyan-500/20",
  },
  {
    id: "uuid",
    title: "UUID Generator",
    description: "Generate universally unique identifiers (v4)",
    icon: Key,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10 hover:bg-violet-500/20",
  },
  {
    id: "timestamp",
    title: "Timestamp Converter",
    description: "Convert between timestamps and human-readable dates",
    icon: Clock,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10 hover:bg-emerald-500/20",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              100% Free Forever
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
              Free Developer Tools
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Professional online utilities for developers. No registration, no limits, completely free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                size="lg"
                className="text-lg px-8"
                onClick={() => navigate("/json")}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8"
                onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View All Tools
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Grid Section */}
      <div id="tools" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
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
              <Card
                key={tool.id}
                className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border-2 hover:border-primary/50"
                onClick={() => navigate(`/${tool.id}`)}
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-lg ${tool.bgColor} flex items-center justify-center mb-4 transition-colors duration-300`}>
                    <Icon className={`h-7 w-7 ${tool.color}`} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {tool.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                    Open Tool
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">100% Free</h3>
              <p className="text-muted-foreground">
                All tools are completely free with no hidden costs or premium features
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Key className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">No Registration</h3>
              <p className="text-muted-foreground">
                Use all tools instantly without creating an account or signing up
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <FileCode2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Privacy First</h3>
              <p className="text-muted-foreground">
                All processing happens in your browser. Your data never leaves your device
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
