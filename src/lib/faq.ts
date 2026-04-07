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
  "Hunting",
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
      { label: "Video: Concealed Carry Essentials", href: "/resources/videos#concealed-carry-essentials" },
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
      "Start by identifying your primary purpose — home defense, concealed carry, target shooting, or hunting — as this determines the type and size of firearm that's appropriate. Handle multiple models at a gun store to find one that fits your hand comfortably, paying attention to grip angle, trigger reach, and how naturally the sights align for you. As reviewer Honest Outlaw emphasizes after testing hundreds of handguns, 'feels good in my hand' doesn't always translate to shooting well — ergonomics under recoil matter more than static comfort. For caliber, 9mm remains the most practical choice for first-time handgun buyers: Lucky Gunner's testing of over 117 defensive loads demonstrates that modern 9mm ammunition achieves comparable terminal performance to larger calibers while offering lower recoil, higher capacity, and significantly cheaper practice ammunition. Consider also the total cost of ownership — a reliable pistol ($350–$600), quality holster ($50–$150), and at least 500 rounds of practice ammunition to build basic proficiency. Renting firearms at a range before buying is one of the best ways to make an informed decision.",
    keywords: ["first gun", "buying", "new shooter", "beginner", "what gun", "recommend", "starter"],
    category: "Buying Your First Firearm",
    relatedLinks: [
      { label: "Video: Choosing a Carry Pistol", href: "/resources/videos#choosing-carry-pistol" },
      { label: "Video: 9mm Home Defense Pistols", href: "/resources/videos#9mm-home-defense" },
      { label: "Blog: First-Time Buyer's Guide", href: "/blog/first-time-gun-buyer-guide" },
    ],
  },
  {
    id: "revolver-vs-semi-auto",
    question: "Should I buy a revolver or a semi-automatic pistol?",
    answer:
      "Both are proven designs with meaningful engineering differences. Modern semi-automatic pistols use a short recoil operating system — as explained in Forgotten Weapons' detailed mechanical breakdown — where the barrel and slide travel rearward together before unlocking, a design pioneered by John Browning that powers nearly every modern self-loading handgun from Glocks to SIGs. This gives semi-autos higher capacity (typically 10–17 rounds), faster reloads, slimmer profiles for concealed carry, and generally less felt recoil for comparable calibers. Revolvers are mechanically simpler with fewer points of failure, require no external safety manipulation, and are inherently less sensitive to ammunition variations and grip technique — they'll fire reliably regardless of limp-wristing or underpowered loads. Hickok45's head-to-head comparison of the Colt Python and S&W 686 demonstrates the kind of trigger quality and precision that high-end revolvers deliver, particularly in single action. For a first handgun, the practical answer is whichever platform you shoot more accurately and are willing to train with consistently.",
    keywords: ["revolver", "semi-automatic", "pistol", "auto", "difference", "which is better"],
    category: "Buying Your First Firearm",
    relatedLinks: [
      { label: "Video: How Short Recoil Works", href: "/resources/videos#short-recoil" },
      { label: "Video: Python vs S&W 686", href: "/resources/videos#python-vs-686" },
    ],
  },
  {
    id: "handgun-cost",
    question: "How much does a good handgun cost?",
    answer:
      "Reliable, quality handguns from reputable manufacturers typically range from $350 to $700 for most purposes. Honest Outlaw's extensive testing of budget 9mm pistols demonstrates that several models under $500 — from manufacturers like Canik, Smith & Wesson, Glock, and Walther — deliver reliability comparable to pistols costing twice as much, with thousands of rounds fired without significant malfunctions. Mid-range options generally fall between $400–$600, while premium handguns from Sig Sauer, HK, and others run $700–$1,200+. The meaningful question isn't just the sticker price but total cost of ownership: factor in a quality holster ($50–$150), at least 500 rounds of practice ammunition to build basic competence ($150–$250 at current 9mm prices), cleaning supplies, and ideally a training course. As Hickok45's Python vs 686 comparison illustrates, a $900 revolver does deliver tangibly better fit and trigger quality than a $700 one — but the law of diminishing returns applies, and the $300 you save may be better spent on ammunition and range time.",
    keywords: ["cost", "price", "how much", "expensive", "budget", "affordable", "cheap"],
    category: "Buying Your First Firearm",
    relatedLinks: [
      { label: "Video: 9mm Home Defense Pistols Under $500", href: "/resources/videos#9mm-home-defense" },
      { label: "Find Local Dealers", href: "/dealers" },
    ],
  },
  {
    id: "training-before-buying",
    question: "Do I need to take a class before buying a gun?",
    answer:
      "While most states don't require training before purchasing a firearm (some states do — check your state's laws), completing a firearms safety course is strongly recommended for all new gun owners. John Correia of Active Self Protection, who has analyzed tens of thousands of documented defensive encounters, makes a compelling case that most gun owners train for scenarios that rarely occur while neglecting the skills that real-world data shows matter most — drawing under stress, making shoot/don't-shoot decisions in fractions of a second, and understanding the legal framework that governs use of force. A quality course covers safe handling, storage, basic marksmanship, legal responsibilities, and ideally introduces force-on-force or scenario-based decision making. Many ranges offer beginner courses at reasonable prices, and more advanced courses from qualified instructors address the practical and legal realities of defensive firearm use.",
    keywords: ["class", "training", "course", "learn", "instruction", "first shots", "safety class", "required"],
    category: "Buying Your First Firearm",
    relatedLinks: [
      { label: "Video: Self-Defense Misconceptions", href: "/resources/videos#self-defense-misconceptions" },
      { label: "Safety & Storage Guide", href: "/safety" },
    ],
  },

  // ── Safety & Storage ──────────────────────────────────────
  {
    id: "basic-safety-rules",
    question: "What are the basic rules of firearm safety?",
    answer:
      "The universally accepted rules are: (1) Always treat every firearm as if it's loaded. (2) Never point a firearm at anything you don't intend to shoot. (3) Keep your finger off the trigger until you're ready to fire. (4) Be certain of your target and what's beyond it. These four rules are redundant by design — even if one is violated, the others prevent an accident. Paul Harrell extends this framework with a practical insight often overlooked: understanding what is beyond your target is especially critical in a home defense context, where common handgun and shotgun loads can penetrate multiple interior walls and endanger other occupants. Safety isn't just about handling discipline — it includes ammunition selection, secure storage, and knowing how your specific firearm and load combination performs in your specific environment.",
    keywords: ["rules", "safety", "basic", "fundamental", "four rules", "NRA rules", "safe handling"],
    category: "Safety & Storage",
    relatedLinks: [
      { label: "Video: Home Defense Guns", href: "/resources/videos#home-defense-guns" },
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
      { label: "Video: Home Defense Guns", href: "/resources/videos#home-defense-guns" },
      { label: "Safety & Storage Guide", href: "/safety" },
    ],
  },
  {
    id: "home-defense-storage",
    question: "I'm thinking about buying a gun for home defense. What should I know about safe storage?",
    answer:
      "Home defense firearms require balancing immediate accessibility with secure storage — and as Paul Harrell emphasizes in his home defense analysis, a firearm that its owner can't quickly access from secure storage or operate reliably in the dark with an elevated heart rate is a liability, not an asset. Biometric (fingerprint) safes or push-button lockboxes mounted to furniture or inside nightstands provide rapid access for authorized users while keeping the firearm secure from children and unauthorized adults. Practice opening your safe or lockbox regularly so you can do it reliably under stress, including in the dark. Ammunition selection matters as much as the firearm itself for home defense — Harrell demonstrates that certain common handgun and shotgun loads produce more dangerous overpenetration through interior walls than appropriately loaded AR-platform rifles, a counterintuitive finding that should inform both your firearm and ammunition choices. Never leave a home defense firearm unsecured, even momentarily.",
    keywords: ["home defense", "safe storage", "quick access", "bedside", "biometric", "child safe", "protect"],
    category: "Safety & Storage",
    relatedLinks: [
      { label: "Video: Home Defense Guns", href: "/resources/videos#home-defense-guns" },
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
      { label: "Safety & Storage Guide", href: "/safety" },
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
      { label: "Find Local Ranges", href: "/dealers" },
      { label: "Safety & Storage Guide", href: "/safety" },
    ],
  },

  // ── Concealed Carry ───────────────────────────────────────
  {
    id: "start-carrying-concealed",
    question: "What do I need to know before I start carrying concealed?",
    answer:
      "Before carrying, understand your state's legal requirements (permit/permitless status, restricted locations, duty to inform law enforcement). Paul Harrell, drawing on decades of daily carry experience, identifies five non-negotiable essentials: a quality holster with consistent retention and positioning, a reliable belt that supports the weight of a loaded handgun, spare ammunition in a reloadable format, a good flashlight, and — most critically — an accurate understanding of the legal and ethical framework governing lethal force in your jurisdiction. John Correia of Active Self Protection adds empirical weight to this: his analysis of thousands of real defensive encounters reveals that most occur at conversational distance, that drawing from concealment is slower than people expect, and that the legal and emotional aftermath of a defensive shooting deserves as much preparation as the encounter itself. Invest in training that goes beyond static marksmanship — scenario-based decision making, draw-from-concealment practice, and understanding when you legally can and cannot use force. Consider carrying insurance or a legal defense plan. Carrying a firearm is a serious responsibility that requires ongoing training and situational awareness.",
    keywords: ["concealed carry", "start carrying", "begin", "new", "CCW", "first time carry", "everyday carry", "EDC"],
    category: "Concealed Carry",
    relatedLinks: [
      { label: "Video: Concealed Carry Essentials", href: "/resources/videos#concealed-carry-essentials" },
      { label: "Video: Choosing a Carry Pistol", href: "/resources/videos#choosing-carry-pistol" },
      { label: "Video: Self-Defense Misconceptions", href: "/resources/videos#self-defense-misconceptions" },
      { label: "State Carry Laws", href: "/carry-laws" },
    ],
  },
  {
    id: "holster-type",
    question: "What type of holster should I use for concealed carry?",
    answer:
      "The best holster depends on your body type, clothing, and carry position — and as Honest Outlaw emphasizes in his carry pistol guide, holster selection is inseparable from pistol selection because the two must work together as a system. Inside-the-waistband (IWB) holsters at the 3–5 o'clock position are the most common for concealed carry. Appendix carry (AIWB) offers fast draw times but requires careful safety practice and a pistol appropriately sized for your body type. Pocket holsters work well for small firearms. Key requirements for any holster: it must fully cover the trigger guard, retain the firearm securely, allow a full firing grip on the draw, and be made from rigid material (Kydex or quality leather — never use fabric or universal-fit holsters). Paul Harrell considers a quality holster one of the five non-negotiable essentials for concealed carry, noting that consistent positioning is critical because your draw stroke must be automatic under stress. Expect to try several holsters before finding the right one — this is normal, not a sign you chose the wrong firearm.",
    keywords: ["holster", "IWB", "OWB", "appendix", "AIWB", "pocket", "carry position", "kydex", "leather"],
    category: "Concealed Carry",
    relatedLinks: [
      { label: "Video: Choosing a Carry Pistol", href: "/resources/videos#choosing-carry-pistol" },
      { label: "Video: Concealed Carry Essentials", href: "/resources/videos#concealed-carry-essentials" },
    ],
  },
  {
    id: "caliber-concealed-carry",
    question: "What caliber should I choose for concealed carry?",
    answer:
      "9mm is the most widely recommended caliber for concealed carry, and the data supports this consensus. Lucky Gunner's testing of over 117 self-defense loads in calibrated ballistic gelatin demonstrates that the terminal performance differences between 9mm, .40 S&W, and .45 ACP are far smaller than most gun owners believe when quality defensive ammunition is used — the variation between individual loads within the same caliber is often greater than the variation between calibers. Paul Harrell's empirical meat target comparisons of 9mm versus .357 Magnum reach a similar conclusion: while the .357 Magnum delivers meaningfully more energy per round, this advantage comes at the cost of greater recoil, reduced capacity, slower follow-up shots, and increased muzzle blast — all of which directly affect accuracy under stress. The .380 ACP is popular in smaller pocket-sized pistols but offers less terminal performance. As both Harrell and Lucky Gunner's Chris Baker emphasize, shot placement is more important than caliber — if the terminal performance differences between major calibers are marginal, then recoil management, capacity, and how much you actually practice should drive the decision.",
    keywords: ["caliber", "concealed carry", "9mm", "380", "45", "best caliber", "self defense", "ammunition", "round"],
    category: "Concealed Carry",
    relatedLinks: [
      { label: "Video: 9mm vs .357 Magnum", href: "/resources/videos#9mm-vs-357" },
      { label: "Video: Why Ballistics Gel Works", href: "/resources/videos#ballistics-gel" },
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

  // ── Hunting ──────────────────────────────────────────────
  {
    id: "hunting-license-need",
    question: "What licenses do I need to go hunting?",
    answer:
      "At minimum, you need a base hunting license from the state where you plan to hunt. Most states also require species-specific tags (deer tag, elk tag, turkey tag) purchased separately. Waterfowl hunters need a federal duck stamp ($25) in addition to state licenses. Many states also require a habitat stamp or conservation stamp. Check your state's wildlife agency website for the complete list — requirements vary significantly from state to state.",
    keywords: ["license", "permit", "tag", "stamp", "hunting license", "requirements"],
    category: "Hunting",
    relatedLinks: [
      { label: "Hunting Licenses Guide 2025–2026", href: "/blog/hunting-license-guide-2025-2026" },
      { label: "How to Plan Your First Hunt", href: "/blog/how-to-plan-your-first-hunt" },
    ],
  },
  {
    id: "hunting-draw-tags",
    question: "What is a draw tag and how do I apply?",
    answer:
      "A draw tag (also called limited entry or controlled hunt) is a hunting license allocated through a lottery drawing rather than sold over the counter. States use draws for species or areas where demand exceeds what the wildlife population can sustain — most elk rifle tags in Colorado, all pronghorn tags in Wyoming, and bear permits in Wisconsin are examples. Applications are typically due months before the season (January through May for fall hunts). If you are not drawn, some states give you a preference or bonus point that improves your odds in future years.",
    keywords: ["draw", "lottery", "controlled hunt", "preference point", "bonus point", "application", "tag"],
    category: "Hunting",
    relatedLinks: [
      { label: "Hunting Licenses Guide 2025–2026", href: "/blog/hunting-license-guide-2025-2026" },
      { label: "Hunting Seasons by State", href: "/hunting" },
    ],
  },
  {
    id: "hunter-education",
    question: "Do I need to take a hunter education course?",
    answer:
      "Nearly every state requires completion of a hunter education course before you can purchase a hunting license, regardless of age. Most states accept certificates from other states, so you only need to complete the course once. Courses cover firearms safety, wildlife conservation, regulations, field dressing, and ethics. Many are available online with a required in-person field day. Complete your hunter education well before you plan to hunt — do not wait until the week before the season, because field-day slots fill up months in advance.",
    keywords: ["hunter education", "hunter safety", "course", "certificate", "training", "requirement"],
    category: "Hunting",
    relatedLinks: [
      { label: "How to Plan Your First Hunt", href: "/blog/how-to-plan-your-first-hunt" },
      { label: "Hunter Safety Essentials", href: "/blog/hunter-safety-essentials" },
    ],
  },
  {
    id: "hunter-safety-essentials",
    question: "What are the most important hunter safety habits?",
    answer:
      "The four firearms safety rules — treat every firearm as loaded, never point the muzzle at anything you are not willing to destroy, keep your finger off the trigger until you are ready to shoot, and be sure of your target and what is beyond it — are the foundation. Beyond those, the highest-stakes habits are positive target identification (never shooting at sound or movement), wearing blaze orange whenever possible, and using a full-body harness with a lifeline anytime you hunt from an elevated stand. Tree stand falls are the leading cause of serious hunting injury, and most are preventable with proper equipment used correctly.",
    keywords: ["safety", "hunter safety", "tree stand", "harness", "blaze orange", "target identification", "four rules", "muzzle"],
    category: "Hunting",
    relatedLinks: [
      { label: "Hunter Safety Essentials", href: "/blog/hunter-safety-essentials" },
      { label: "Hunting Etiquette and Ethics", href: "/blog/hunting-etiquette-and-ethics" },
    ],
  },
  {
    id: "public-land-hunting",
    question: "Where can I hunt if I don't own land?",
    answer:
      "The United States has hundreds of millions of acres of public land open to hunting. National Forests (193 million acres) and BLM land (245 million acres) are generally open to hunting under state regulations. Every state also manages Wildlife Management Areas, Game Lands, or Conservation Areas specifically for public hunting access. The onX Hunt app is the best tool for identifying public vs. private land boundaries. Many states also operate walk-in hunting access programs that open private land to public hunting during certain seasons.",
    keywords: ["public land", "where to hunt", "access", "WMA", "game lands", "BLM", "national forest"],
    category: "Hunting",
    relatedLinks: [
      { label: "Public Land Hunting Guide", href: "/blog/public-land-hunting-beginners-guide" },
      { label: "How to Plan Your First Hunt", href: "/blog/how-to-plan-your-first-hunt" },
    ],
  },
  {
    id: "hunting-season-dates",
    question: "When is hunting season in my state?",
    answer:
      "Season dates vary by state, species, and weapon type (archery, rifle, muzzleloader). Most deer seasons run from September through January, with archery seasons typically opening first and rifle seasons in November. Turkey spring seasons generally run April through May. Waterfowl seasons are set annually under federal frameworks and vary by flyway. We have detailed season date breakdowns for every state in our hunting section. Always verify dates with your state wildlife agency before hunting — dates can change from year to year.",
    keywords: ["season dates", "when", "hunting season", "deer season", "elk season", "turkey season"],
    category: "Hunting",
    relatedLinks: [
      { label: "Hunting Seasons by State", href: "/hunting" },
      { label: "Hunting Licenses Guide 2025–2026", href: "/blog/hunting-license-guide-2025-2026" },
    ],
  },
  {
    id: "harvest-reporting",
    question: "Do I have to report my harvest?",
    answer:
      "Most states require mandatory harvest reporting for big game (deer, elk, bear) and turkey. Reporting deadlines range from immediately upon harvest to within a few days, depending on the state. Many states now use electronic reporting through apps or websites — gone are the days of physical check stations for most species. Failure to report is a violation that can result in fines and loss of hunting privileges. In states with Chronic Wasting Disease (CWD) management zones, additional mandatory testing may be required for deer and elk.",
    keywords: ["harvest report", "reporting", "check station", "CWD", "mandatory", "telecheck"],
    category: "Hunting",
    relatedLinks: [
      { label: "How to Plan Your First Hunt", href: "/blog/how-to-plan-your-first-hunt" },
      { label: "Hunting Seasons by State", href: "/hunting" },
    ],
  },
];

export function getFaqsByCategory(category: string): FaqEntry[] {
  return faqData.filter((faq) => faq.category === category);
}

export function getFaqById(id: string): FaqEntry | undefined {
  return faqData.find((faq) => faq.id === id);
}
