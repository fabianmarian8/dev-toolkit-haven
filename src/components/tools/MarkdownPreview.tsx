import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Copy, Trash2 } from "lucide-react";
import { toast } from "sonner";

export const MarkdownPreview = () => {
  const [markdown, setMarkdown] = useLocalStorage("markdown", "# Hello World\n\nStart typing your **markdown** here!\n\n## Features\n\n- Lists\n- **Bold** and *italic*\n- `code blocks`\n- [Links](https://example.com)");

  const copyMarkdown = () => {
    navigator.clipboard.writeText(markdown);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2 justify-end">
        <Button size="sm" variant="outline" onClick={copyMarkdown}>
          <Copy className="h-4 w-4 mr-2" />
          Copy
        </Button>
        <Button size="sm" variant="outline" onClick={() => setMarkdown("")}>
          <Trash2 className="h-4 w-4 mr-2" />
          Clear
        </Button>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Markdown Input</label>
          <Textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="font-mono h-96 resize-y"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Preview</label>
          <div className="p-4 border rounded-lg h-96 overflow-y-auto prose prose-sm max-w-none dark:prose-invert">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};
