export interface Video {
  id: string;
  title: string;
  source: string;
  youtubeId: string;
  category: string;
  summary: string;
  relatedFaqIds: string[];
  relatedBlogSlugs: string[];
}

export const videoCategories = [
  "Safety & Storage",
  "First-Time Buyers",
  "Caliber & Ammunition",
  "Concealed Carry",
  "Range & Marksmanship",
  "Cleaning & Maintenance",
] as const;

export type VideoCategory = (typeof videoCategories)[number];

// All YouTube video IDs verified live as of March 2026
export const videos: Video[] = [
  // ── Safety & Storage ──────────────────────────────────────
  {
    id: "10-rules-safety",
    title: "Gun Safety is a Habit",
    source: "NSSF / Project ChildSafe",
    youtubeId: "zOgDImpN63A",
    category: "Safety & Storage",
    summary:
      "The National Shooting Sports Foundation's Project ChildSafe initiative explains why firearms safety must be treated as a daily habit, not a one-time checklist. Covers the fundamental rules of safe handling, the importance of consistent storage practices, and why responsible ownership starts with building safety into your routine. Produced by the firearms industry's official safety education program.",
    relatedFaqIds: ["basic-safety-rules"],
    relatedBlogSlugs: [],
  },
  {
    id: "secure-storage",
    title: "Secure Your Firearms: Protect the People You Love",
    source: "NSSF / Project ChildSafe",
    youtubeId: "F9wMpN2blHI",
    category: "Safety & Storage",
    summary:
      "An overview of why secure firearm storage matters and the steps every gun owner should take to prevent unauthorized access. Covers the importance of locking up firearms when not in use, available storage options, and the free gun lock program provided through Project ChildSafe and local law enforcement agencies nationwide.",
    relatedFaqIds: ["safe-storage", "home-defense-storage"],
    relatedBlogSlugs: [],
  },
  {
    id: "many-paths-safety",
    title: "Talking with Kids About Gun Safety",
    source: "NSSF / Project ChildSafe",
    youtubeId: "M86QxNZF3AE",
    category: "Safety & Storage",
    summary:
      "A practical guide for parents on how to have age-appropriate conversations with children about firearms safety. Covers what to say at different ages, how to address curiosity, and the importance of combining education with secure storage. Produced by NSSF's Project ChildSafe program in partnership with safety educators.",
    relatedFaqIds: ["safe-storage", "home-defense-storage"],
    relatedBlogSlugs: [],
  },

  // ── First-Time Buyers ─────────────────────────────────────
  {
    id: "first-handgun",
    title: "How to Use a Semi-Automatic Pistol",
    source: "Lucky Gunner",
    youtubeId: "QjNRPtDJK3c",
    category: "First-Time Buyers",
    summary:
      "A beginner-friendly walkthrough of semi-automatic pistol operation from Lucky Gunner's Shooting 101 series. Covers how to load, unload, and safely operate a semi-automatic handgun, including magazine insertion, slide manipulation, and proper clearing procedures. Essential knowledge for anyone considering their first handgun purchase.",
    relatedFaqIds: ["first-firearm", "revolver-vs-semi-auto"],
    relatedBlogSlugs: ["first-time-gun-buyer-guide"],
  },
  {
    id: "nics-background-check",
    title: "Operation Secure Store: A Firearms Industry Safety Initiative",
    source: "NSSF",
    youtubeId: "uVNc_Txiccs",
    category: "First-Time Buyers",
    summary:
      "The National Shooting Sports Foundation explains the firearms industry's commitment to responsible retail practices and secure storage education. Covers what licensed dealers do to promote safety, the role of federally licensed firearms retailers in the purchase process, and industry-wide initiatives to prevent unauthorized access to firearms.",
    relatedFaqIds: ["background-check", "first-firearm"],
    relatedBlogSlugs: [],
  },

  // ── Caliber & Ammunition ──────────────────────────────────
  {
    id: "calibers-explained",
    title: "Choosing a Caliber & Load",
    source: "NSSF",
    youtubeId: "wGxa16BfJE8",
    category: "Caliber & Ammunition",
    summary:
      "A practical introduction to selecting the right caliber and ammunition load for your intended purpose. Covers common calibers for handguns and rifles, the differences between target and defensive ammunition, and factors to consider when choosing a load — including recoil, capacity, and availability. Part of NSSF's Let's Go Shooting educational series.",
    relatedFaqIds: ["caliber-concealed-carry"],
    relatedBlogSlugs: [],
  },

  // ── Concealed Carry ───────────────────────────────────────
  {
    id: "concealed-carry-basics",
    title: "7 Concealed Carry Tips That Could Save Your Life",
    source: "Honest Outlaw",
    youtubeId: "gpj9GALQWlk",
    category: "Concealed Carry",
    summary:
      "A straightforward overview of essential concealed carry fundamentals from experienced reviewer Honest Outlaw. Covers holster selection, situational awareness, draw practice, wardrobe considerations, and the mindset required for responsible everyday carry. Emphasizes that carrying a firearm is a serious commitment that requires ongoing training.",
    relatedFaqIds: ["start-carrying-concealed", "holster-type"],
    relatedBlogSlugs: [],
  },
  {
    id: "choosing-holster",
    title: "12 Concealed Carry Tips You Need to Know",
    source: "Honest Outlaw",
    youtubeId: "14BdTP5G6fA",
    category: "Concealed Carry",
    summary:
      "An in-depth guide to practical concealed carry from Honest Outlaw covering holster types, carry positions, clothing choices, and everyday carry logistics. Evaluates IWB, appendix, and OWB options with emphasis on comfort, concealability, and safe draw technique. Practical advice for both new and experienced carriers looking to refine their setup.",
    relatedFaqIds: ["holster-type", "start-carrying-concealed"],
    relatedBlogSlugs: [],
  },

  // ── Range & Marksmanship ──────────────────────────────────
  {
    id: "first-range-trip",
    title: "Introduction to Range Safety and Etiquette",
    source: "NSSF",
    youtubeId: "COvFyw-6Fqs",
    category: "Range & Marksmanship",
    summary:
      "What to expect on your first visit to an indoor or outdoor shooting range. Covers range commands, proper etiquette, required safety equipment (eyes and ears), lane procedures, and how to interact with range safety officers. Produced by NSSF for people who have never been to a range before.",
    relatedFaqIds: ["range-what-to-bring"],
    relatedBlogSlugs: [],
  },
  {
    id: "shooting-fundamentals",
    title: "Pistol Grip & Stance Fundamentals",
    source: "NSSF / Babes with Bullets",
    youtubeId: "okgmmHzoMtA",
    category: "Range & Marksmanship",
    summary:
      "A step-by-step tutorial on proper handgun grip and shooting stance from champion shooter Kay Miculek. Covers the fundamentals of accurate pistol shooting including hand placement, stance positioning, sight alignment, and trigger control. Part of NSSF's beginner target shooting tip series, appropriate for new shooters learning to shoot.",
    relatedFaqIds: ["range-what-to-bring"],
    relatedBlogSlugs: [],
  },

  // ── Cleaning & Maintenance ────────────────────────────────
  {
    id: "clean-pistol",
    title: "How to Clean Your Concealed Carry Firearm",
    source: "NSSF",
    youtubeId: "R6kxRVnI6Nc",
    category: "Cleaning & Maintenance",
    summary:
      "A complete walkthrough of cleaning and maintaining a concealed carry handgun. Covers field-stripping, cleaning the barrel and slide, proper lubrication points, and reassembly. Emphasizes the importance of regular cleaning for firearms carried daily, where lint, sweat, and body oils can affect reliability. Includes tool and solvent recommendations.",
    relatedFaqIds: ["cleaning-frequency"],
    relatedBlogSlugs: [],
  },
  {
    id: "cleaning-101",
    title: "Firearm Cleaning 101 with Otis Technology",
    source: "NSSF",
    youtubeId: "RQ1uuvd2AD0",
    category: "Cleaning & Maintenance",
    summary:
      "A beginner-friendly introduction to firearm cleaning tools, solvents, and techniques in partnership with Otis Technology. Covers the difference between field-strip and detail-strip cleaning, when to use bore brushes versus patches, and how to properly lubricate moving parts without over-oiling. Demonstrates a complete cleaning session from start to finish.",
    relatedFaqIds: ["cleaning-frequency"],
    relatedBlogSlugs: [],
  },
];

export function getVideoById(id: string): Video | undefined {
  return videos.find((v) => v.id === id);
}

export function getVideosByCategory(category: string): Video[] {
  return videos.filter((v) => v.category === category);
}

export function getYoutubeThumbnail(youtubeId: string): string {
  return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
}

export function getYoutubeUrl(youtubeId: string): string {
  return `https://www.youtube.com/watch?v=${youtubeId}`;
}
