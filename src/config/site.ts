export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Readventures Wiki",
  shortName: "Readventures",
  logoText: "R",
  tagline: "Guides, Characters & Gameplay Walkthroughs",
  description: "Readventures Wiki provides gameplay guides, character information, mechanics details, and useful tips to help players explore the adventure world.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://readventures.top",
  supportEmail: "support@readventures.top",
  gameUrl: "#",
  heroVideoId: "WzBEwL0db10",
  social: {
    discord: "#",
    youtube: "#",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
