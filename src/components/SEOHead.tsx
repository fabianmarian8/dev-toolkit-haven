import { useEffect } from "react";
import { SEOConfig } from "@/config/seo";

interface SEOHeadProps {
  config: SEOConfig;
}

export const SEOHead = ({ config }: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = config.title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    // Update standard meta tags
    updateMetaTag("description", config.description);
    updateMetaTag("keywords", config.keywords.join(", "));

    // Update Open Graph tags
    updateMetaTag("og:title", config.ogTitle, true);
    updateMetaTag("og:description", config.ogDescription, true);
    updateMetaTag("og:type", "website", true);

    // Update Twitter tags
    updateMetaTag("twitter:title", config.ogTitle);
    updateMetaTag("twitter:description", config.ogDescription);

    // Add or update structured data
    if (config.structuredData) {
      let scriptElement = document.querySelector('script[type="application/ld+json"]');

      if (!scriptElement) {
        scriptElement = document.createElement("script");
        scriptElement.setAttribute("type", "application/ld+json");
        document.head.appendChild(scriptElement);
      }

      scriptElement.textContent = JSON.stringify(config.structuredData);
    }
  }, [config]);

  return null;
};
