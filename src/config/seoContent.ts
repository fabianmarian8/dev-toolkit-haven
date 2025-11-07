export interface ToolSEOContent {
  title: string;
  description: string;
  howToUse: string[];
  whyUse: string[];
}

export const toolsContent: Record<string, ToolSEOContent> = {
  json: {
    title: "Free JSON Formatter",
    description: "Our free JSON formatter helps developers validate, format, and beautify JSON data instantly. Whether you need to debug API responses, format configuration files, or simply make JSON more readable, our tool handles it all in your browser with complete privacy.",
    howToUse: [
      "Paste your JSON data into the input area",
      "Click 'Format' to beautify or 'Minify' to compress",
      "The tool validates your JSON and highlights any errors",
      "Copy the formatted result with one click"
    ],
    whyUse: [
      "100% free with no registration required",
      "Instant validation and error detection",
      "Syntax highlighting for easy reading",
      "Works offline - all processing in browser",
      "No file size limits or usage restrictions"
    ]
  },
  base64: {
    title: "Free Base64 Encoder Decoder",
    description: "Convert text and data to Base64 encoding and decode Base64 strings back to original text. Perfect for encoding API credentials, embedding images, or handling binary data in text format. All processing happens securely in your browser.",
    howToUse: [
      "Choose 'Encode' or 'Decode' mode",
      "Paste your text or Base64 string",
      "Click the convert button",
      "Copy the result instantly"
    ],
    whyUse: [
      "Free unlimited conversions",
      "Support for text and file encoding",
      "Instant results with no server uploads",
      "Perfect for developers and security testing",
      "Privacy-focused - all data stays local"
    ]
  },
  image: {
    title: "Free Image Compressor",
    description: "Compress JPG, PNG, and WebP images without losing quality. Reduce file sizes by up to 80% while maintaining visual quality. Perfect for optimizing images for websites, apps, or storage. All compression happens in your browser for complete privacy.",
    howToUse: [
      "Upload your image (JPG, PNG, or WebP)",
      "Adjust the compression quality slider",
      "Preview the compressed result",
      "Download your optimized image"
    ],
    whyUse: [
      "Free unlimited image compression",
      "No file size or quantity limits",
      "Maintains image quality while reducing size",
      "No uploads - all processing in browser",
      "Supports multiple image formats"
    ]
  },
  color: {
    title: "Free Color Picker",
    description: "Pick colors and convert between HEX, RGB, and HSL formats instantly. Perfect for web designers, developers, and anyone working with colors. Get all color formats at once and copy them with a single click.",
    howToUse: [
      "Use the color picker to select any color",
      "Or paste a HEX, RGB, or HSL value",
      "View all format conversions instantly",
      "Click to copy any format to clipboard"
    ],
    whyUse: [
      "Free color conversion tool",
      "Supports HEX, RGB, and HSL formats",
      "Live preview of selected colors",
      "One-click copy to clipboard",
      "Perfect for web development and design"
    ]
  },
  regex: {
    title: "Free Regex Tester",
    description: "Test and debug regular expressions with real-time matching and highlighting. Perfect for developers working with pattern matching, validation, or text processing. See matches instantly as you type.",
    howToUse: [
      "Enter your regular expression pattern",
      "Paste the text you want to test",
      "See matches highlighted in real-time",
      "Adjust flags (global, case-insensitive, etc.)"
    ],
    whyUse: [
      "Free regex testing with no limits",
      "Real-time pattern matching",
      "Syntax highlighting for matches",
      "Support for all regex flags",
      "Perfect for learning and debugging regex"
    ]
  },
  markdown: {
    title: "Free Markdown Editor",
    description: "Write and preview markdown in real-time with our free online editor. Perfect for creating documentation, README files, blog posts, or any markdown content. See your formatted output as you type.",
    howToUse: [
      "Type or paste markdown in the editor",
      "See live preview in real-time",
      "Use toolbar for common formatting",
      "Copy the formatted markdown or HTML"
    ],
    whyUse: [
      "Free markdown editor with live preview",
      "Support for all markdown syntax",
      "Syntax highlighting in editor",
      "No registration or sign-up needed",
      "Perfect for documentation and blogging"
    ]
  },
  hash: {
    title: "Free Hash Generator",
    description: "Generate MD5, SHA-256, and SHA-512 hashes from any text instantly. Perfect for password hashing, file integrity checks, or cryptographic operations. All hashing happens securely in your browser.",
    howToUse: [
      "Enter the text you want to hash",
      "Select hash algorithm (MD5, SHA-256, SHA-512)",
      "View generated hash instantly",
      "Copy hash with one click"
    ],
    whyUse: [
      "Free unlimited hash generation",
      "Support for MD5, SHA-256, SHA-512",
      "Instant hash computation",
      "Privacy-focused - no server processing",
      "Perfect for security and development"
    ]
  },
  qr: {
    title: "Free QR Code Generator",
    description: "Create QR codes from text or URLs instantly. Perfect for sharing links, contact information, or any text data. Download QR codes as PNG images for printing or digital use.",
    howToUse: [
      "Enter text or URL to encode",
      "QR code generates instantly",
      "Customize size if needed",
      "Download as PNG image"
    ],
    whyUse: [
      "Free unlimited QR code generation",
      "High-resolution output",
      "No watermarks or branding",
      "Instant generation and download",
      "Perfect for marketing and sharing"
    ]
  },
  diff: {
    title: "Free Text Diff Checker",
    description: "Compare two text blocks and see differences highlighted side-by-side. Perfect for code reviews, document comparison, or tracking changes. See additions, deletions, and modifications instantly.",
    howToUse: [
      "Paste original text in left panel",
      "Paste modified text in right panel",
      "View differences highlighted automatically",
      "Additions shown in green, deletions in red"
    ],
    whyUse: [
      "Free text comparison tool",
      "Side-by-side diff view",
      "Color-coded changes",
      "Perfect for code reviews",
      "No file size limits"
    ]
  },
  url: {
    title: "Free URL Encoder Decoder",
    description: "Encode and decode URLs for web applications. Convert special characters to URL-safe format or decode encoded URLs back to readable text. Essential tool for web developers.",
    howToUse: [
      "Choose 'Encode' or 'Decode' mode",
      "Paste your URL or text",
      "Click convert button",
      "Copy encoded/decoded result"
    ],
    whyUse: [
      "Free URL encoding tool",
      "Instant conversion",
      "Handle special characters correctly",
      "Perfect for API development",
      "No usage limits"
    ]
  },
  uuid: {
    title: "Free UUID Generator",
    description: "Generate universally unique identifiers (UUID v4) instantly. Perfect for database primary keys, unique file names, or any application requiring unique IDs. Generate single or bulk UUIDs.",
    howToUse: [
      "Click 'Generate UUID' button",
      "UUID v4 created instantly",
      "Generate multiple UUIDs if needed",
      "Copy to clipboard with one click"
    ],
    whyUse: [
      "Free unlimited UUID generation",
      "Cryptographically secure UUIDs",
      "Instant generation",
      "Bulk generation support",
      "Perfect for development and databases"
    ]
  },
  timestamp: {
    title: "Free Timestamp Converter",
    description: "Convert between Unix timestamps and human-readable dates. Perfect for developers working with APIs, databases, or any system using timestamp data. Supports millisecond precision.",
    howToUse: [
      "Enter Unix timestamp or select date",
      "Conversion happens instantly",
      "View in multiple formats",
      "Copy result with one click"
    ],
    whyUse: [
      "Free timestamp conversion",
      "Support for milliseconds",
      "Multiple date format outputs",
      "Instant conversion",
      "Perfect for API development"
    ]
  },
  jwt: {
    title: "Free JWT Decoder",
    description: "Decode and inspect JWT (JSON Web Token) tokens securely in your browser. View header, payload, signature, and token information including expiration dates, issuer, and claims. All processing happens locally for complete privacy.",
    howToUse: [
      "Paste your JWT token into the input field",
      "Click 'Decode JWT' button",
      "View decoded header and payload",
      "Check token expiration and validity",
      "Copy decoded parts with one click"
    ],
    whyUse: [
      "100% privacy - all processing in browser",
      "Free JWT decoding tool",
      "View token expiration and claims",
      "Inspect header, payload, and signature",
      "Perfect for debugging authentication",
      "No data sent to any server"
    ]
  }
};
