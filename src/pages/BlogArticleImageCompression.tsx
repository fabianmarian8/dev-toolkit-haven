import { useNavigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, CheckCircle2, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";

const articleSEO = {
  title: "How to Compress Images Online Free - Complete Guide 2025 | Free DevTools",
  description: "Learn the best techniques and tools for compressing images online without losing quality. Step-by-step guide to optimize your images for web and mobile.",
  keywords: ["compress images", "image compression", "optimize images", "reduce image size", "image compressor online free", "compress jpg", "compress png"],
};

const BlogArticleImageCompression = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <SEOHead config={articleSEO} />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/blog")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Button>
        </div>
      </header>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Article Header */}
        <header className="mb-8 pb-8 border-b">
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-md font-medium">
              Tutorial
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>January 20, 2025</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>6 min read</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            How to Compress Images Online Free
          </h1>

          <p className="text-xl text-muted-foreground">
            Learn the best techniques and tools for compressing images online without losing quality. A step-by-step guide to optimize your images for web and mobile.
          </p>
        </header>

        {/* Article Body */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>Why Image Compression Matters</h2>
          <p>
            Images are often the largest files on websites, accounting for up to 50% of page weight. Unoptimized images can significantly slow down your website, leading to poor user experience and lower search engine rankings. Image compression helps you reduce file sizes while maintaining visual quality.
          </p>

          <div className="not-prose p-6 border rounded-lg bg-card my-6">
            <h3 className="text-lg font-bold mb-3">Quick Stats:</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                <span><strong>53% of mobile users</strong> abandon sites that take longer than 3 seconds to load</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                <span><strong>1 second delay</strong> in page load time can reduce conversions by 7%</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                <span><strong>Compressed images</strong> can be 70-90% smaller without visible quality loss</span>
              </li>
            </ul>
          </div>

          <h2>Understanding Image Compression</h2>
          <p>
            There are two main types of image compression:
          </p>

          <h3>Lossy Compression</h3>
          <p>
            Lossy compression reduces file size by permanently removing some image data. This technique can achieve significant size reductions (up to 90%) with minimal visible quality loss when done correctly.
          </p>
          <ul>
            <li><strong>Best for:</strong> Photos, complex images, web graphics</li>
            <li><strong>Formats:</strong> JPEG, WebP</li>
            <li><strong>Pros:</strong> Very small file sizes</li>
            <li><strong>Cons:</strong> Some quality loss, not reversible</li>
          </ul>

          <h3>Lossless Compression</h3>
          <p>
            Lossless compression reduces file size without any quality loss by removing metadata and optimizing how the image data is stored. The image can be perfectly reconstructed from the compressed version.
          </p>
          <ul>
            <li><strong>Best for:</strong> Logos, icons, screenshots, graphics with text</li>
            <li><strong>Formats:</strong> PNG, WebP (lossless mode)</li>
            <li><strong>Pros:</strong> No quality loss, reversible</li>
            <li><strong>Cons:</strong> Smaller file size reductions compared to lossy</li>
          </ul>

          <h2>Step-by-Step: How to Compress Images Online</h2>

          <div className="not-prose space-y-6 my-8">
            {/* Step 1 */}
            <div className="p-6 border rounded-lg">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Choose Your Compression Tool</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Select a free online image compressor. We recommend Free DevTools Image Compressor for its privacy-first approach and excellent compression algorithms.
                  </p>
                  <Button size="sm" onClick={() => navigate("/image")}>Open Image Compressor</Button>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 border rounded-lg">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Upload Your Images</h3>
                  <p className="text-sm text-muted-foreground">
                    Drag and drop your images or click to browse. Most tools support JPEG, PNG, WebP, and other common formats. You can often upload multiple images at once.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 border rounded-lg">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Adjust Compression Settings</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Set your desired quality level. A good starting point is 80-85% quality, which provides excellent results for most images.
                  </p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• <strong>90-100%:</strong> Minimal compression, nearly original quality</li>
                    <li>• <strong>80-90%:</strong> Recommended for most uses, barely visible differences</li>
                    <li>• <strong>70-80%:</strong> Noticeable but acceptable quality, smaller files</li>
                    <li>• <strong>Below 70%:</strong> Visible quality loss, use only when necessary</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 border rounded-lg">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Preview and Compare</h3>
                  <p className="text-sm text-muted-foreground">
                    Before downloading, compare the original and compressed images side by side. Check that the quality meets your needs and adjust settings if necessary.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="p-6 border rounded-lg">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Download Compressed Images</h3>
                  <p className="text-sm text-muted-foreground">
                    Download your optimized images individually or as a ZIP file. Use these compressed versions on your website or application.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2>Best Practices for Image Compression</h2>
          <ul>
            <li><strong>Choose the right format:</strong> Use JPEG for photos, PNG for graphics with transparency, WebP for the best of both worlds</li>
            <li><strong>Resize before compressing:</strong> Scale images to their display size before compression for maximum savings</li>
            <li><strong>Remove metadata:</strong> Strip EXIF data and other metadata that isn't needed</li>
            <li><strong>Test on different devices:</strong> Ensure compressed images look good on both mobile and desktop</li>
            <li><strong>Use responsive images:</strong> Serve different image sizes based on device screen size</li>
            <li><strong>Consider WebP format:</strong> WebP offers superior compression compared to JPEG and PNG</li>
          </ul>

          <h2>Common Mistakes to Avoid</h2>
          <ul>
            <li><strong>Over-compression:</strong> Don't sacrifice too much quality for marginal file size savings</li>
            <li><strong>Wrong format:</strong> Using PNG for photos or JPEG for logos can result in poor quality or large files</li>
            <li><strong>Compressing already compressed images:</strong> This can degrade quality without size benefits</li>
            <li><strong>Not testing:</strong> Always preview compressed images before deploying to production</li>
          </ul>

          <div className="not-prose p-6 border-2 border-primary/20 rounded-lg bg-primary/5 my-8">
            <div className="flex items-start gap-3">
              <ImageIcon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold mb-2">Privacy Tip</h3>
                <p className="text-sm">
                  When using online tools, choose ones that process images locally in your browser. Free DevTools Image Compressor performs all compression client-side, meaning your images never leave your device.
                </p>
              </div>
            </div>
          </div>

          <h2>Conclusion</h2>
          <p>
            Image compression is a crucial skill for anyone building websites or apps. With the right tools and techniques, you can reduce image file sizes by 70-90% while maintaining excellent visual quality. This leads to faster page loads, better user experience, and improved SEO.
          </p>
          <p>
            Ready to optimize your images? Try our free image compressor now!
          </p>

          <div className="flex gap-4 mt-8">
            <Button size="lg" onClick={() => navigate("/image")}>
              Try Image Compressor
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/blog")}>
              Back to Blog
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogArticleImageCompression;
