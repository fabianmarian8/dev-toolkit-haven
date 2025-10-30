import { useNavigate } from "react-router-dom";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";

const blogArticles = [
  {
    id: "top-10-free-json-formatters",
    title: "Top 10 Free JSON Formatters",
    description: "Discover the best free JSON formatters available online. Compare features, speed, and usability of the top tools for formatting and validating JSON data.",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Tools Review",
    path: "/blog/top-10-free-json-formatters",
  },
  {
    id: "how-to-compress-images-online-free",
    title: "How to Compress Images Online Free",
    description: "Learn the best techniques and tools for compressing images online without losing quality. Step-by-step guide to optimize your images for web and mobile.",
    date: "2025-01-20",
    readTime: "6 min read",
    category: "Tutorial",
    path: "/blog/how-to-compress-images-online-free",
  },
  {
    id: "best-free-developer-tools-2025",
    title: "Best Free Developer Tools 2025",
    description: "A comprehensive guide to the most essential free developer tools in 2025. From JSON formatters to image compressors, find everything you need to boost your productivity.",
    date: "2025-01-25",
    readTime: "10 min read",
    category: "Best Of",
    path: "/blog/best-free-developer-tools-2025",
  },
];

const blogSEO = {
  title: "Blog - Free DevTools | Developer Tools & Tutorials",
  description: "Read articles, tutorials, and guides about free developer tools, JSON formatters, image compression, and web development best practices.",
  keywords: ["developer blog", "web development tutorials", "free tools", "JSON formatter guide", "image compression tutorial"],
};

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <SEOHead config={blogSEO} />

      {/* Hero Section */}
      <div className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container relative mx-auto px-4 py-16 md:py-20">
          <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              <BookOpen className="h-4 w-4" />
              Developer Blog
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
              Articles & Tutorials
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Guides, reviews, and best practices for using free developer tools
            </p>
          </div>
        </div>
      </div>

      {/* Blog Articles Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {blogArticles.map((article) => (
            <Card
              key={article.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border-2 hover:border-primary/50 flex flex-col"
              onClick={() => navigate(article.path)}
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded-md font-medium">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-3 mt-2">
                  {article.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{article.readTime}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="group-hover:bg-primary/10">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
