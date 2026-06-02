import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "Applebot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "GPTBot",
          "ClaudeBot",
          "Claude-User",
          "anthropic-ai",
          "Claude-SearchBot",
          "PerplexityBot",
          "Perplexity-User",
          "YouBot",
          "CCBot",
          "Applebot-Extended",
          "Google-Extended",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://premierdentistrync.com/sitemap.xml",
    host: "https://premierdentistrync.com",
  };
}
