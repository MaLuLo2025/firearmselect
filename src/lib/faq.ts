export interface RelatedLink {
  label: string;
  href: string;
}

export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
  category: string;
  relatedLinks: RelatedLink[];
}

export const faqCategories = [
  "Gun Laws",
  "Buying Your First Firearm",
  "Safety & Storage",
  "Concealed Carry",
] as const;

export type FaqCategory = (typeof faqCategories)[number];

export const faqData: FaqEntry[] = [
  // ── Gun Laws ──────────────────────────────────────────────
  {
    id: "permit-to-buy",
    question: "Do I need a permit to buy a firearm?",
    answer:
      "It depends on your state. Some states require a purchase permit for handguns, long guns, or both, while others have no permit requirement for purchases. Federal law requires all purchases from licensed dealers to include a NICS background check regardless of state. Check your state's specific requirements on our state law pages.",
    keywords: ["permit", "purchase", "buy", "license", "requirement"],
    category: "Gun Laws",
    relatedLinks: [
      { label: "State Gun Law Guides", href: "/states" },
      { label: "Video: Understanding the NICS Background Check", href: "/resources/videos#nics-background-check" },
    ],
  },
  {
    id: "concealed-carry-permit",
    question: "What is a concealed carry permit and how do I get one?",
    answer:
      "A concealed carry permit (also called a CCW, CHL, or LTC depending on the state) authorizes you to carry a concealed handgun in public. Requirements vary significantly by state — some require training courses and live-fire qualification, others are \"constitutional carry\" states with no permit needed. Most permits involve a background check, fees, and an application with your local sheriff or state agency.",
    keywords: ["concealed carry", "permit", "CCW", "CHL", "LTC", "license", "constitutional carry"],
    category: "Gun Laws",
    relatedLinks: [
      { label: "State Carry Laws", href: "/carry-laws" },
      { label: "Video: Concealed Carry Basics", href: "/resources/videos#concealed-carry-basics" },
    ],
  },
  {
    id: "constitutional-carry",
    question: "What are \"constitutional carry\" states?",
    answer:
      "Constitutional carry (also called permitless carry) means the state allows adults who can legally possess a firearm to carry it concealed without a government-issued permit. The number of constitutional carry states has grown significantly in recent years. Even in these states, federal prohibited-person laws still apply, and some locations remain off-limits. Many people in constitutional carry states still choose to obtain a permit for reciprocity when traveling to other states.",
    keywords: ["constitutional carry", "permitless", "unrestricted", "open carry", "permit not required"],
    category: "Gun Laws",
    relatedLinks: [
      { label: "State Carry Laws", href: "/carry-laws" },
      { label: "All 50 States Index", href: "/states" },
    ],
  },
  {
    id: "carry-another-state",
    question: "Can I carry my firearm in another state?",
    answer:
      "Carrying across state lines depends on reciprocity agreements between states. Your home state's carry permit may or may not be recognized in the state you're visiting. Some states honor all other states' permits, some honor only specific states, and some don't recognize any out-of-state permits. Always verify reciprocity before traveling with a concealed firearm. Federal law (FOPA) provides limited protection for transporting firearms through states where you're not licensed, provided the firearm is unloaded and inaccessible.",
    keywords: ["reciprocity", "travel", "carry", "other state", "transport", "FOPA", "interstate"],
    category: "Gun Laws",
    relatedLinks: [
      { label: "Interstate Reciprocity Guide", href: "/reciprocity" },
      { label: "State Gun Law Guides", href: "/states" },
    ],
  },
  {
    id: "background-check",
    question: "What happens during a background check when I buy a gun?",
    answer:
      "When you purchase a firearm from a licensed dealer (FFL), you fill out ATF Form 4473 and present government-issued ID. The dealer contacts the FBI's National Instant Criminal Background Check System (NICS), which checks your information against databases of prohibited persons. Results come back as Proceed, Delayed, or Denied. Delays are resolved within three business days in most cases. Private sales between individuals may or may not require a background check depending on state law.",
    keywords: ["background check", "NICS", "4473", "form", "FBI", "dealer", "FFL", "private sale"],
    category: "Gun Laws",
    relatedLinks: [
      { label: "Video: Understanding the NICS Background Check", href: "/resources/videos#nics-background-check" },
      { label: "State Gun Law Guides", href: "/states" },
    ],
  },
  {
    id: "restricted-locations",
    question: "Where can't I legally carry a firearm?",
    answer:
      "Federal law prohibits firearms in certain locations regardless of state law, including federal buildings, post offices, and schools (with limited state-law exceptions). Most states add their own restricted locations such as courthouses, bars, polling places, hospitals, and places of worship. Private businesses may also prohibit firearms on their premises. Penalties for carrying in restricted areas can range from misdemeanors to felonies. Always know the specific prohibited locations in your state.",
    keywords: ["prohibited", "restricted", "carry", "location", "school", "federal building", "church", "bar"],
    category: "Gun Laws",
    relatedLinks: [
      { label: "State Gun Law Guides", href: "/states" },
      { label: "State Carry Laws", href: "/carry-laws" },
    ],
  },

  // ── Buying Your First Firearm ─────────────────────────────
  {
    id: "first-firearm",
    question: "What should I look for when buying my first firearm?",
    answer:
      "Start by identifying your primary purpose — home defense, concealed carry, target shooting, or hunting — as this determines the type and size of firearm that's appropriate. Handle multiple models at a gun store to find one that fits your hand comfortably. Consider factors like caliber (9mm is widely recommended for first-time handgun buyers), reliability, ease of operation, and availability of ammunition and accessories. Renting firearms at a range before buying is one of the best ways to make an informed decision.",
    keywords: ["first gun", "buying", "new shooter", "beginner", "what gun", "recommend", "starter"],
    category: "Buying Your First Firearm",
    relatedLinks: [
      { label: "Video: How to Buy Your First Handgun", href: "/resources/videos#first-handgun" },
      { label: "Blog: First-Time Buyer's Guide", href: "/blog/first-time-gun-buyer-guide" },
    ],
  },
  {
    id: "revolver-vs-semi-auto",
    question: "Should I buy a revolver or a semi-automatic pistol?",
    answer:
      "Both are reliable choices with different advantages. Revolvers are mechanically simpler, have no external safety to manipulate, and are less likely to malfunction due to limp-wristing or ammunition sensitivity. Semi-automatic pistols typically hold more rounds, are faster to reload, have slimmer profiles for concealed carry, and have less felt recoil for comparable calibers. For a first handgun, the best choice is whichever you shoot more accurately and comfortably.",
    keywords: ["revolver", "semi-automatic", "pistol", "auto", "difference", "which is better"],
    category: "Buying Your First Firearm",
    relatedLinks: [
      { label: "Video: How to Buy Your First Handgun", href: "/resources/videos#first-handgun" },
    ],
  },
  {
    id: "handgun-cost",
    question: "How much does a good handgun cost?",
    answer:
      "Reliable, quality handguns from reputable manufacturers typically range from $350 to $700 for most purposes. Budget models from brands like Taurus or Ruger start around $250–$400. Mid-range options from Smith & Wesson, Glock, and Springfield Armory generally fall between $400–$600. Premium handguns from Sig Sauer, HK, and others can run $700–$1,200+. Factor in additional costs: a quality holster ($50–$150), ammunition for practice, cleaning supplies, and training classes.",
    keywords: ["cost", "price", "how much", "expensive", "budget", "affordable", "cheap"],
    category: "Buying Your First Firearm",
    relatedLinks: [
      { label: "Video: How to Buy Your First Handgun", href: "/resources/videos#first-handgun" },
      { label: "Find Local Dealers", href: "/dealers" },
    ],
  },
  {
    id: "training-before-buying",
    question: "Do I need to take a class before buying a gun?",
    answer:
      "While most states don't require training before purchasing a firearm (some states do — check your state's laws), completing a firearms safety course is strongly recommended for all new gun owners. Courses cover safe handling, storage, basic marksmanship, and legal responsibilities. Many ranges offer beginner courses at reasonable prices. The NSSF's First Shots program provides free introductory sessions at participating ranges nationwide.",
    keywords: ["class", "training", "course", "learn", "instruction", "first shots", "safety class", "required"],
    category: "Buying Your First Firearm",
    relatedLinks: [
      { label: "Video: The 10 Rules of Firearm Safety", href: "/resources/videos#10-rules-safety" },
      { label: "Video: Your First Trip to the Range", href: "/resources/videos#first-range-trip" },
    ],
  },

  // ── Safety & Storage ──────────────────────────────────────
  {
    id: "basic-safety-rules",
    question: "What are the basic rules of firearm safety?",
    answer:
      "The universally accepted rules are: (1) Always treat every firearm as if it's loaded. (2) Never point a firearm at anything you don't intend to shoot. (3) Keep your finger off the trigger until you're ready to fire. (4) Be certain of your target and what's beyond it. These four rules are redundant by design — even if one is violated, the others prevent an accident. The NSSF's expanded list includes additional guidance on safe storage, ammunition matching, and proper maintenance.",
    keywords: ["rules", "safety", "basic", "fundamental", "four rules", "NRA rules", "safe handling"],
    category: "Safety & Storage",
    relatedLinks: [
      { label: "Video: The 10 Rules of Firearm Safety", href: "/resources/videos#10-rules-safety" },
      { label: "Video: Secure Firearm Storage", href: "/resources/videos#secure-storage" },
      { label: "Safety & Storage Guide", href: "/safety" },
    ],
  },
  {
    id: "safe-storage",
    question: "What is the safest way to store firearms at home?",
    answer:
      "The safest storage uses a dedicated gun safe or lockbox that prevents unauthorized access while allowing reasonably quick access for the owner in an emergency. Options range from bedside biometric lockboxes ($100–$300) to full-size safes ($500–$2,000+). At minimum, use a cable lock or trigger lock (often provided free with new firearms or from Project ChildSafe). Ammunition should be stored separately from firearms when children are present. No storage method is effective if the combination, key, or code is accessible to unauthorized users.",
    keywords: ["storage", "safe", "lockbox", "secure", "lock", "child", "children", "access", "home"],
    category: "Safety & Storage",
    relatedLinks: [
      { label: "Video: Secure Firearm Storage", href: "/resources/videos#secure-storage" },
      { label: "Video: Many Paths to Firearm Safety", href: "/resources/videos#many-paths-safety" },
      { label: "Safety & Storage Guide", href: "/safety" },
    ],
  },
  {
    id: "home-defense-storage",
    question: "I'm thinking about buying a gun for home defense. What should I know about safe storage?",
    answer:
      "Home defense firearms require balancing immediate accessibility with secure storage. Biometric (fingerprint) safes or push-button lockboxes mounted to furniture or inside nightstands provide rapid access for authorized users while keeping the firearm secure from children and unauthorized adults. Practice opening your safe or lockbox regularly so you can do it reliably under stress, including in the dark. Never leave a home defense firearm unsecured — even momentarily. Programs like Project ChildSafe provide free gun locks through local law enforcement agencies.",
    keywords: ["home defense", "safe storage", "quick access", "bedside", "biometric", "child safe", "protect"],
    category: "Safety & Storage",
    relatedLinks: [
      { label: "Video: Secure Firearm Storage", href: "/resources/videos#secure-storage" },
      { label: "Video: Many Paths to Firearm Safety", href: "/resources/videos#many-paths-safety" },
      { label: "Safety & Storage Guide", href: "/safety" },
    ],
  },
  {
    id: "cleaning-frequency",
    question: "How often should I clean my firearm?",
    answer:
      "Clean your firearm after every range session or whenever it's been exposed to moisture, dust, or debris. Firearms that are carried daily should be cleaned every 1–2 weeks even if not fired, as lint, sweat, and body oils can affect function. A basic cleaning involves field-stripping, running a bore brush and solvent through the barrel, wiping down internal surfaces, and applying a light coat of lubricant to moving parts. Refer to your firearm's owner's manual for model-specific instructions.",
    keywords: ["clean", "cleaning", "maintenance", "how often", "lube", "lubricate", "oil", "solvent"],
    category: "Safety & Storage",
    relatedLinks: [
      { label: "Video: How to Clean a Semi-Automatic Pistol", href: "/resources/videos#clean-pistol" },
    ],
  },
  {
    id: "range-what-to-bring",
    question: "What should I bring to a shooting range?",
    answer:
      "Essential items: your firearm (unloaded, in a case), ammunition, eye protection (shooting glasses), ear protection (earmuffs or plugs — electronic muffs are ideal), and a valid ID. Most ranges require you to sign a waiver. Useful additions: a range bag, extra magazines, targets (or purchase at the range), a small flashlight for checking chambers, and a basic cleaning kit. Wear a high-collared shirt and closed-toe shoes — hot brass can eject unpredictably. Leave your ego at the door and don't hesitate to ask range staff for help.",
    keywords: ["range", "bring", "what to bring", "first time", "shooting range", "gear", "equipment", "eye", "ear"],
    category: "Safety & Storage",
    relatedLinks: [
      { label: "Video: Your First Trip to the Range", href: "/resources/videos#first-range-trip" },
      { label: "Video: Handgun Shooting Fundamentals", href: "/resources/videos#shooting-fundamentals" },
      { label: "Find Local Ranges", href: "/dealers" },
    ],
  },

  // ── Concealed Carry ───────────────────────────────────────
  {
    id: "start-carrying-concealed",
    question: "What do I need to know before I start carrying concealed?",
    answer:
      "Before carrying, understand your state's legal requirements (permit/permitless status, restricted locations, duty to inform law enforcement). Invest in a quality holster designed for your specific firearm — a poor holster is dangerous and uncomfortable. Train regularly, including draw practice from concealment. Understand the legal framework for self-defense in your state, including use-of-force laws and your state's stand-your-ground or duty-to-retreat standard. Consider carrying insurance or a legal defense plan. Carrying a firearm is a serious responsibility that requires ongoing training and situational awareness.",
    keywords: ["concealed carry", "start carrying", "begin", "new", "CCW", "first time carry", "everyday carry", "EDC"],
    category: "Concealed Carry",
    relatedLinks: [
      { label: "Video: Concealed Carry Basics", href: "/resources/videos#concealed-carry-basics" },
      { label: "Video: Choosing a Holster", href: "/resources/videos#choosing-holster" },
      { label: "State Carry Laws", href: "/carry-laws" },
    ],
  },
  {
    id: "holster-type",
    question: "What type of holster should I use for concealed carry?",
    answer:
      "The best holster depends on your body type, clothing, and carry position. Inside-the-waistband (IWB) holsters at the 3–5 o'clock position are the most common for concealed carry. Appendix carry (AIWB) offers fast draw times but requires careful safety practice. Pocket holsters work well for small firearms. Key requirements for any holster: it must fully cover the trigger guard, retain the firearm securely, allow a full firing grip on the draw, and be made from rigid material (Kydex or quality leather — never use fabric or universal-fit holsters). Expect to try several holsters before finding the right one.",
    keywords: ["holster", "IWB", "OWB", "appendix", "AIWB", "pocket", "carry position", "kydex", "leather"],
    category: "Concealed Carry",
    relatedLinks: [
      { label: "Video: Choosing a Concealed Carry Holster", href: "/resources/videos#choosing-holster" },
    ],
  },
  {
    id: "caliber-concealed-carry",
    question: "What caliber should I choose for concealed carry?",
    answer:
      "9mm is the most widely recommended caliber for concealed carry due to its combination of manageable recoil, adequate terminal performance with modern defensive ammunition, high magazine capacity, and affordable practice ammunition. The .380 ACP is popular in smaller pocket-sized pistols but offers less terminal performance. The .40 S&W and .45 ACP offer more energy per round but with increased recoil and reduced capacity. Shot placement is more important than caliber — the best caliber is the one you can shoot accurately and practice with regularly.",
    keywords: ["caliber", "concealed carry", "9mm", "380", "45", "best caliber", "self defense", "ammunition", "round"],
    category: "Concealed Carry",
    relatedLinks: [
      { label: "Video: Handgun Calibers Explained", href: "/resources/videos#calibers-explained" },
    ],
  },
  {
    id: "duty-to-inform",
    question: "Do I have to tell a police officer I'm carrying a firearm?",
    answer:
      "\"Duty to inform\" laws vary by state. Some states require you to immediately inform a law enforcement officer during any interaction that you are carrying a concealed firearm. Other states only require you to inform if asked. Some states have no duty to inform at all. Regardless of legal requirements, many firearms instructors and attorneys recommend calmly and politely informing officers, as it tends to result in more positive interactions. Always keep your hands visible and follow the officer's instructions.",
    keywords: ["duty to inform", "police", "officer", "traffic stop", "tell", "disclose", "pulled over", "law enforcement"],
    category: "Concealed Carry",
    relatedLinks: [
      { label: "State Carry Laws", href: "/carry-laws" },
      { label: "State Gun Law Guides", href: "/states" },
    ],
  },
];

export function getFaqsByCategory(category: string): FaqEntry[] {
  return faqData.filter((faq) => faq.category === category);
}

export function getFaqById(id: string): FaqEntry | undefined {
  return faqData.find((faq) => faq.id === id);
}
