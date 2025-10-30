interface SEOContentProps {
  title: string;
  description: string;
  howToUse: string[];
  whyUse: string[];
}

export const SEOContent = ({ title, description, howToUse, whyUse }: SEOContentProps) => {
  return (
    <div className="mt-8 space-y-6 text-sm">
      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-3">About {title}</h2>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="prose dark:prose-invert max-w-none">
          <h3 className="text-xl font-semibold mb-3">How to Use</h3>
          <ul className="space-y-2 text-muted-foreground">
            {howToUse.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h3 className="text-xl font-semibold mb-3">Why Use This Tool?</h3>
          <ul className="space-y-2 text-muted-foreground">
            {whyUse.map((reason, index) => (
              <li key={index}>{reason}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-muted/50 rounded-lg p-4">
        <p className="text-xs text-muted-foreground text-center">
          ✨ This tool is 100% free, requires no registration, and all processing happens in your browser for maximum privacy.
        </p>
      </div>
    </div>
  );
};
