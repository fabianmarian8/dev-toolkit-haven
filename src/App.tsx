import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Home from "./pages/Home";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogArticleJsonFormatters from "./pages/BlogArticleJsonFormatters";
import BlogArticleImageCompression from "./pages/BlogArticleImageCompression";
import BlogArticleDeveloperTools2025 from "./pages/BlogArticleDeveloperTools2025";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/json" element={<Index />} />
            <Route path="/base64" element={<Index />} />
            <Route path="/image" element={<Index />} />
            <Route path="/color" element={<Index />} />
            <Route path="/regex" element={<Index />} />
            <Route path="/markdown" element={<Index />} />
            <Route path="/hash" element={<Index />} />
            <Route path="/qr" element={<Index />} />
            <Route path="/diff" element={<Index />} />
            <Route path="/url" element={<Index />} />
            <Route path="/uuid" element={<Index />} />
            <Route path="/timestamp" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/top-10-free-json-formatters" element={<BlogArticleJsonFormatters />} />
            <Route path="/blog/how-to-compress-images-online-free" element={<BlogArticleImageCompression />} />
            <Route path="/blog/best-free-developer-tools-2025" element={<BlogArticleDeveloperTools2025 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
