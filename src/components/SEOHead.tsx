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

    // Update or create link tags
    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);

      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }

      element.setAttribute("href", href);
    };

    // Update standard meta tags
    updateMetaTag("description", config.description);
    updateMetaTag("keywords", config.keywords.join(", "));
    updateMetaTag("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // Add canonical URL
    if (config.canonical) {
      updateLinkTag("canonical", config.canonical);
    }

    // Get current URL for og:url
    const currentUrl = window.location.href;

    // Update Open Graph tags
    updateMetaTag("og:title", config.ogTitle, true);
    updateMetaTag("og:description", config.ogDescription, true);
    updateMetaTag("og:type", "website", true);
    updateMetaTag("og:url", currentUrl, true);
    updateMetaTag("og:locale", "en_US", true);

    // Update og:image if provided, otherwise use default
    const ogImage = config.ogImage || "/og-image.png";
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("og:image:width", "1200", true);
    updateMetaTag("og:image:height", "630", true);
    updateMetaTag("og:image:alt", config.ogTitle, true);

    // Update Twitter tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", config.ogTitle);
    updateMetaTag("twitter:description", config.ogDescription);
    updateMetaTag("twitter:image", ogImage);

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
