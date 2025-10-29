import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import ReactMarkdown from "react-markdown";

export const MarkdownPreview = () => {
  const [markdown, setMarkdown] = useState("# Hello World\n\nStart typing your **markdown** here!");

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium mb-2">Markdown Input</label>
        <Textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          className="font-mono h-96 resize-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Preview</label>
        <div className="p-4 border rounded-lg h-96 overflow-y-auto prose prose-sm max-w-none dark:prose-invert">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
