export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: {
    "@context": string;
    "@type": string;
    name: string;
    description: string;
    url: string;
    applicationCategory: string;
    operatingSystem?: string;
    offers: {
      "@type": string;
      price: string;
      priceCurrency: string;
    };
    aggregateRating?: {
      "@type": string;
      ratingValue: string;
      ratingCount: string;
      bestRating?: string;
    };
  };
}

export const toolsSEO: Record<string, SEOConfig> = {
  json: {
    title: "Free JSON Formatter Online - Validate & Beautify JSON | Free DevTools",
    description: "FREE JSON formatter and validator online. Format, beautify, minify and validate JSON data instantly. No registration required. 100% free JSON formatting tool for developers.",
    keywords: ["free json formatter", "json validator online", "format json", "json beautifier free", "validate json", "json formatter online free", "free json tool"],
    ogTitle: "Free JSON Formatter Online - Format & Validate JSON",
    ogDescription: "FREE online JSON formatter. Validate, beautify and minify JSON data. No registration required.",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Free JSON Formatter",
      description: "Free online JSON formatter and validator",
      url: "/json",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "156",
        bestRating: "5"
      }
    }
  },
  base64: {
    title: "Free Base64 Encoder Decoder Online - Convert Base64 | Free DevTools",
    description: "FREE Base64 encoder and decoder online. Encode and decode Base64 strings instantly. No limits, no registration. 100% free Base64 conversion tool.",
    keywords: ["free base64 encoder", "base64 decoder online", "base64 encode free", "convert base64", "base64 tool free", "encode decode base64"],
    ogTitle: "Free Base64 Encoder Decoder - Convert Base64 Online",
    ogDescription: "FREE Base64 encoder and decoder. Convert text to Base64 and back. No registration required.",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Free Base64 Encoder Decoder",
      description: "Free online Base64 encoder and decoder",
      url: "/base64",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.7",
        ratingCount: "142",
        bestRating: "5"
      }
    }
  },
  image: {
    title: "Free Image Compressor Online - Compress JPG PNG WebP | Free DevTools",
    description: "FREE image compressor online. Compress JPG, PNG, WebP images without losing quality. Reduce file size instantly. No upload limits, 100% free image compression.",
    keywords: ["free image compressor", "compress jpg online", "compress png free", "image compression tool", "reduce image size free", "optimize images online"],
    ogTitle: "Free Image Compressor - Compress JPG PNG WebP Online",
    ogDescription: "FREE image compressor. Reduce image file size without quality loss. No limits.",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Free Image Compressor",
      description: "Free online image compression tool",
      url: "/image",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "289",
        bestRating: "5"
      }
    }
  },
  color: {
    title: "Free Color Picker Online - HEX RGB HSL Converter | Free DevTools",
    description: "FREE color picker online. Convert colors between HEX, RGB, HSL formats instantly. Pick colors and get all formats. 100% free color conversion tool for designers.",
    keywords: ["free color picker", "hex to rgb converter", "color converter free", "rgb to hex online", "hsl color picker", "color tool free"],
    ogTitle: "Free Color Picker - Convert HEX RGB HSL Colors Online",
    ogDescription: "FREE color picker and converter. Convert between HEX, RGB, HSL formats instantly.",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Free Color Picker",
      description: "Free online color picker and converter",
      url: "/color",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.6",
        ratingCount: "178",
        bestRating: "5"
      }
    }
  },
  regex: {
    title: "Free Regex Tester Online - Test Regular Expressions | Free DevTools",
    description: "FREE regex tester online. Test and debug regular expressions with real-time matching. No registration required. 100% free regex testing tool for developers.",
    keywords: ["free regex tester", "regex test online", "regular expression tester free", "regex validator", "test regex online free"],
    ogTitle: "Free Regex Tester - Test Regular Expressions Online",
    ogDescription: "FREE regex tester. Test regular expressions with real-time matching and highlighting.",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Free Regex Tester",
      description: "Free online regex testing tool",
      url: "/regex",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.7",
        ratingCount: "134",
        bestRating: "5"
      }
    }
  },
  markdown: {
    title: "Free Markdown Editor Online - Preview Markdown Live | Free DevTools",
    description: "FREE markdown editor and preview online. Write and preview markdown in real-time. No registration required. 100% free markdown editor for developers and writers.",
    keywords: ["free markdown editor", "markdown preview online", "markdown editor free", "live markdown preview", "markdown tool free"],
    ogTitle: "Free Markdown Editor - Preview Markdown Online",
    ogDescription: "FREE markdown editor with live preview. Write and format markdown instantly.",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Free Markdown Editor",
      description: "Free online markdown editor with live preview",
      url: "/markdown",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "167",
        bestRating: "5"
      }
    }
  },
  hash: {
    title: "Free Hash Generator Online - MD5 SHA256 SHA512 | Free DevTools",
    description: "FREE hash generator online. Generate MD5, SHA-256, SHA-512 hashes instantly. No limits, no registration. 100% free hash generation tool for developers.",
    keywords: ["free hash generator", "md5 generator online", "sha256 hash free", "generate hash online", "hash tool free", "sha512 generator"],
    ogTitle: "Free Hash Generator - MD5 SHA256 SHA512 Online",
    ogDescription: "FREE hash generator. Create MD5, SHA-256, SHA-512 hashes instantly.",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Free Hash Generator",
      description: "Free online hash generation tool",
      url: "/hash",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.7",
        ratingCount: "123",
        bestRating: "5"
      }
    }
  },
  qr: {
    title: "Free QR Code Generator Online - Create QR Codes | Free DevTools",
    description: "FREE QR code generator online. Create QR codes from text or URLs instantly. Download as PNG. No limits, 100% free QR code creation tool.",
    keywords: ["free qr code generator", "qr code maker online", "create qr code free", "qr generator online", "free qr code creator"],
    ogTitle: "Free QR Code Generator - Create QR Codes Online",
    ogDescription: "FREE QR code generator. Create QR codes from text or URLs instantly. Download free.",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Free QR Code Generator",
      description: "Free online QR code generator",
      url: "/qr",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      }
    }
  },
  diff: {
    title: "Free Text Diff Checker Online - Compare Text | Free DevTools",
    description: "FREE text diff checker online. Compare text differences side by side with highlighting. No registration required. 100% free text comparison tool.",
    keywords: ["free text diff", "compare text online", "text diff checker free", "diff tool online", "compare text free"],
    ogTitle: "Free Text Diff Checker - Compare Text Online",
    ogDescription: "FREE text diff tool. Compare text differences with side-by-side highlighting.",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Free Text Diff Checker",
      description: "Free online text comparison tool",
      url: "/diff",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.6",
        ratingCount: "98",
        bestRating: "5"
      }
    }
  },
  url: {
    title: "Free URL Encoder Decoder Online - Encode Decode URLs | Free DevTools",
    description: "FREE URL encoder and decoder online. Encode and decode URLs instantly. No limits, no registration. 100% free URL encoding tool for developers.",
    keywords: ["free url encoder", "url decoder online", "encode url free", "decode url online", "url encoding tool free"],
    ogTitle: "Free URL Encoder Decoder - Encode Decode URLs Online",
    ogDescription: "FREE URL encoder and decoder. Convert URLs for web applications instantly.",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Free URL Encoder Decoder",
      description: "Free online URL encoder and decoder",
      url: "/url",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      }
    }
  },
  uuid: {
    title: "Free UUID Generator Online - Generate UUIDs v4 | Free DevTools",
    description: "FREE UUID generator online. Generate universally unique identifiers (v4) instantly. No limits, no registration. 100% free UUID generation tool.",
    keywords: ["free uuid generator", "uuid v4 generator", "generate uuid online", "uuid maker free", "unique id generator"],
    ogTitle: "Free UUID Generator - Generate UUIDs Online",
    ogDescription: "FREE UUID generator. Create universally unique identifiers (v4) instantly.",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Free UUID Generator",
      description: "Free online UUID generation tool",
      url: "/uuid",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      }
    }
  },
  timestamp: {
    title: "Free Timestamp Converter Online - Unix Time Converter | Free DevTools",
    description: "FREE timestamp converter online. Convert between Unix timestamps and human-readable dates. No limits, 100% free timestamp conversion tool.",
    keywords: ["free timestamp converter", "unix timestamp converter", "convert timestamp online", "epoch converter free", "time converter online"],
    ogTitle: "Free Timestamp Converter - Convert Unix Timestamps",
    ogDescription: "FREE timestamp converter. Convert between Unix timestamps and readable dates.",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Free Timestamp Converter",
      description: "Free online timestamp converter",
      url: "/timestamp",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.7",
        ratingCount: "105",
        bestRating: "5"
      }
    }
  }
};

export const homeSEO: SEOConfig = {
  title: "Free DevTools - 100% Free Online Developer Tools",
  description: "FREE online developer tools. JSON formatter, Base64 encoder, image compressor, color picker, regex tester and more. No registration required. All tools 100% free forever.",
  keywords: ["free developer tools", "free online tools", "developer utilities free", "free json formatter", "free base64 encoder", "free dev tools"],
  ogTitle: "Free DevTools - 100% Free Online Developer Tools",
  ogDescription: "FREE online developer tools. All tools 100% free, no registration required."
};
