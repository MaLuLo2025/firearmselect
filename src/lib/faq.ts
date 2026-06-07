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
  "Travel & Transport",
  "Training & Instruction",
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
    id: "brandishing-definition",
    question: "What does \"brandishing\" a firearm actually mean?",
    answer:
      "Brandishing typically means displaying a firearm in a rude, angry, threatening, or intimidating manner. Only five states (Louisiana, Michigan, Mississippi, Virginia, West Virginia) use the term \"brandishing\" explicitly in their statutes\u2014most states criminalize the same behavior under laws like menacing, improper exhibition, or unlawful display. Key elements: displaying or exhibiting the firearm (even partially), in a threatening manner, with intent to intimidate. The gun doesn't need to be pointed at anyone or even loaded. For detailed legal definitions and penalties, see our article on [what brandishing means legally](/blog/what-brandishing-firearm-means-felony).",
    keywords: ["brandishing", "display", "threaten", "menacing", "unlawful display", "improper exhibition"],
    category: "Gun Laws",
    relatedLinks: [
      { label: "What Brandishing Actually Means", href: "/blog/what-brandishing-firearm-means-felony" },
      { label: "State Carry Laws", href: "/carry-laws" },
    ],
  },
  {
    id: "defensive-display-legal",
    question: "Can I show my gun to deter someone without getting charged?",
    answer:
      "It depends on your state and the specific circumstances. Some states recognize \"defensive display\" as lawful when you reasonably believe you face an unlawful threat\u2014but it's an affirmative defense, meaning you admit to displaying the weapon and must prove it was justified. In states without defensive display laws, any exhibition of a firearm during a confrontation is presumptively criminal unless you meet the full standard for lawful use of deadly force. The legally safest response to confrontations while armed is to leave rather than reveal you're carrying. For the full breakdown, see our article on [brandishing and defensive display](/blog/what-brandishing-firearm-means-felony).",
    keywords: ["defensive display", "deter", "show gun", "self-defense", "brandishing", "affirmative defense"],
    category: "Gun Laws",
    relatedLinks: [
      { label: "What Brandishing Actually Means", href: "/blog/what-brandishing-firearm-means-felony" },
      { label: "State Carry Laws", href: "/carry-laws" },
    ],
  },
  {
    id: "brandishing-misdemeanor-felony",
    question: "Is brandishing a misdemeanor or felony?",
    answer:
      "Typically a misdemeanor for first offenses under ordinary circumstances (30 days to 1 year in jail). Circumstances that elevate to felony include: brandishing at a daycare during operating hours, brandishing in the presence of law enforcement, brandishing a loaded firearm in certain locations, or brandishing during commission of another crime. \"Wobbler\" offenses give prosecutors discretion to charge either misdemeanor or felony based on circumstances and your criminal history. See our [detailed brandishing penalties guide](/blog/what-brandishing-firearm-means-felony) for state-specific information.",
    keywords: ["brandishing", "misdemeanor", "felony", "penalty", "wobbler", "sentencing"],
    category: "Gun Laws",
    relatedLinks: [
      { label: "What Brandishing Actually Means", href: "/blog/what-brandishing-firearm-means-felony" },
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
    id: "state-storage-laws",
    question: "Does my state require me to lock up my guns?",
    answer:
      "Twenty-six states plus DC have secure storage or child access prevention (CAP) laws. Two states (Massachusetts, Oregon) require all firearms to be locked when not in use. Thirteen states require secure storage only when minors or prohibited persons are present. Eleven states plus DC only impose liability if someone actually gains access to an unsecured firearm. For state-specific requirements, see our article on [storage laws by state](/blog/firearm-storage-laws-by-state).",
    keywords: ["storage", "lock", "state law", "CAP", "child access prevention", "secure storage", "required"],
    category: "Safety & Storage",
    relatedLinks: [
      { label: "Firearm Storage Laws by State", href: "/blog/firearm-storage-laws-by-state" },
      { label: "Safety & Storage Guide", href: "/safety" },
    ],
  },
  {
    id: "secure-storage-definition",
    question: "What counts as \"secure storage\" under state law?",
    answer:
      "Common requirements include locked containers (gun safes, lockboxes), trigger locks or cable locks, and sometimes storing firearms unloaded with ammunition kept separately. Some states specify minimum lock standards; others accept any lock. Quick-access biometric safes satisfy all state requirements while preserving rapid access for home defense. The specific definition varies by state. See our [storage laws guide](/blog/firearm-storage-laws-by-state) for details.",
    keywords: ["secure storage", "locked container", "trigger lock", "cable lock", "biometric safe", "gun safe"],
    category: "Safety & Storage",
    relatedLinks: [
      { label: "Firearm Storage Laws by State", href: "/blog/firearm-storage-laws-by-state" },
      { label: "Safety & Storage Guide", href: "/safety" },
    ],
  },
  {
    id: "child-age-storage-law",
    question: "At what age does a child trigger storage requirements?",
    answer:
      "It varies. Twelve states (including California, Massachusetts, Colorado) define a child as anyone under 18. Florida, New Hampshire, and Texas use age 16. Illinois and Iowa use age 14. The age threshold determines when secure storage laws apply and affects liability if a minor accesses an unsecured firearm. For state-specific age thresholds, see our [storage laws article](/blog/firearm-storage-laws-by-state).",
    keywords: ["child", "minor", "age", "storage", "CAP", "threshold", "teenager"],
    category: "Safety & Storage",
    relatedLinks: [
      { label: "Firearm Storage Laws by State", href: "/blog/firearm-storage-laws-by-state" },
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
    id: "open-vs-concealed-legal-difference",
    question: "What's the legal difference between open carry and concealed carry?",
    answer:
      "Open carry means carrying a firearm in a manner that's wholly or partially visible to others (typically in an outside-the-waistband holster). Concealed carry means carrying hidden from ordinary observation (inside waistband, ankle holster, off-body carry). The legal implications differ dramatically: 47 states permit some form of open carry, but only 3 states (California, Illinois, New York) prohibit it entirely. Some states require permits for concealed carry but allow permitless open carry, while others require permits for both. For state-by-state details, see our article on [open carry vs concealed carry laws](/blog/open-carry-vs-concealed-carry-laws).",
    keywords: ["open carry", "concealed carry", "legal difference", "visible", "hidden", "permit"],
    category: "Concealed Carry",
    relatedLinks: [
      { label: "Open Carry vs Concealed Carry", href: "/blog/open-carry-vs-concealed-carry-laws" },
      { label: "State Carry Laws", href: "/carry-laws" },
    ],
  },
  {
    id: "printing-concealed-carry",
    question: "What is \"printing\" and can I be charged for it?",
    answer:
      "Printing refers to the outline of a concealed firearm showing through clothing. Different states define \"concealed\" differently\u2014some require that the firearm not be \"readily visible,\" while others specify it must not be \"discernible.\" Whether a visible gun outline violates concealment requirements depends on your state's specific language. To avoid issues, carry in a manner that eliminates any visible outline. For more detail, see our [open carry vs concealed carry guide](/blog/open-carry-vs-concealed-carry-laws).",
    keywords: ["printing", "concealed", "outline", "visible", "discernible", "concealment"],
    category: "Concealed Carry",
    relatedLinks: [
      { label: "Open Carry vs Concealed Carry", href: "/blog/open-carry-vs-concealed-carry-laws" },
      { label: "State Carry Laws", href: "/carry-laws" },
    ],
  },
  {
    id: "local-laws-restrict-open-carry",
    question: "Can local laws restrict open carry even if my state allows it?",
    answer:
      "Yes. State law sets the baseline, but municipalities often add restrictions. Virginia allows statewide open carry but permits localities to ban firearms in public buildings and parks. North Carolina permits local governments to prohibit display of firearms on public property. Texas allows businesses to post signage (30.07 signs) prohibiting open carry while still allowing concealed carry. Always verify local ordinances before open carrying in a new city or county. See our [open carry vs concealed carry guide](/blog/open-carry-vs-concealed-carry-laws) for examples.",
    keywords: ["local laws", "municipal", "ordinance", "open carry", "restriction", "city", "county"],
    category: "Concealed Carry",
    relatedLinks: [
      { label: "Open Carry vs Concealed Carry", href: "/blog/open-carry-vs-concealed-carry-laws" },
      { label: "State Carry Laws", href: "/carry-laws" },
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

  // ── State Laws (CCW Travel) ─────────────────────────────
  {
    id: "arrested-ny-out-of-state-permit",
    question: "Can I be arrested in New York for carrying on a valid out-of-state concealed carry permit?",
    answer:
      "Yes. New York does not recognize any out-of-state concealed carry permit. Carrying concealed in New York on a permit issued by another state is treated under New York law as carrying without a license, a felony with significant penalties. The state has prosecuted visitors in this situation, including travelers who voluntarily disclosed the firearm to law enforcement. For a full breakdown of non-recognition states and partial-recognition traps, see our guide on states that don't honor concealed carry permits.",
    keywords: ["new york", "arrest", "out-of-state", "permit", "non-recognition", "felony", "CCW"],
    category: "Gun Laws",
    relatedLinks: [
      { label: "States That Don't Honor CCW Permits", href: "/blog/states-that-dont-honor-concealed-carry-permits" },
      { label: "State Gun Law Guides", href: "/states" },
    ],
  },
  {
    id: "federal-safe-passage-non-recognition",
    question: "Does federal safe-passage law protect me when driving through a non-recognition state?",
    answer:
      "Only under narrow conditions. 18 U.S.C. § 926A protects the transport of an unloaded firearm in a locked container, stored separately from ammunition, through a state where possession would otherwise be unlawful — and only when traveling between two places where possession is legal. Carrying the firearm on your person, keeping it loaded, or making an overnight stop can void the protection. Read our full travel guidance in our reciprocity breakdown.",
    keywords: ["safe passage", "FOPA", "926A", "transport", "drive through", "non-recognition", "federal"],
    category: "Gun Laws",
    relatedLinks: [
      { label: "States That Don't Honor CCW Permits", href: "/blog/states-that-dont-honor-concealed-carry-permits" },
      { label: "Interstate Reciprocity Guide", href: "/reciprocity" },
    ],
  },
  {
    id: "constitutional-carry-visitor-no-permit",
    question: "Can I carry without a permit as a visitor to a constitutional carry state?",
    answer:
      "Sometimes, not always. Twenty-nine states allow some form of permitless concealed carry, but several limit the right to their own residents. Age requirements, citizenship requirements, and location restrictions also vary. See our 2026 constitutional carry guide for non-residents for a state-by-state breakdown.",
    keywords: ["constitutional carry", "visitor", "non-resident", "permitless", "travel", "no permit"],
    category: "Gun Laws",
    relatedLinks: [
      { label: "Constitutional Carry for Non-Residents 2026", href: "/blog/constitutional-carry-states-for-non-residents-2026" },
      { label: "State Carry Laws", href: "/carry-laws" },
    ],
  },

  // ── Buying (First-Time Handgun) ────────────────────────────
  {
    id: "fair-price-first-handgun-2026",
    question: "What's a fair all-in price for a first-time handgun purchase in 2026?",
    answer:
      "Quality striker-fired 9mm handguns from major manufacturers fall in the $450–$700 range at retail. Budget options from a few reputable manufacturers run $300–$450. If your out-the-door total is pushing past $900 for a standard first handgun, walk through the receipt item-by-item — bundled holsters, \"range starter packs,\" and aftermarket triggers are the most common ways first-time buyers quietly overpay. Our first-time buyer question checklist covers what to ask and what to decline.",
    keywords: ["price", "cost", "first handgun", "fair price", "2026", "out the door", "how much"],
    category: "Buying Your First Firearm",
    relatedLinks: [
      { label: "7 Questions to Ask When Buying", href: "/blog/what-to-ask-when-buying-your-first-handgun" },
      { label: "Find Local Dealers", href: "/dealers" },
    ],
  },
  {
    id: "holster-light-safe-day-one",
    question: "Do I need a holster, light, and safe on day one?",
    answer:
      "A secure storage container is not optional — at minimum, a basic pistol safe or lockbox. A holster is optional unless you plan to carry immediately; choose it separately from the firearm purchase rather than accepting a bundled one at point-of-sale markup. A weapon light is useful but not required for the first purchase. Read the full breakdown in our first-time buyer guide.",
    keywords: ["holster", "light", "safe", "day one", "first purchase", "accessories", "bundle"],
    category: "Buying Your First Firearm",
    relatedLinks: [
      { label: "7 Questions to Ask When Buying", href: "/blog/what-to-ask-when-buying-your-first-handgun" },
      { label: "Safety & Storage Guide", href: "/safety" },
    ],
  },
  // ── Concealed Carry (new entries from 2026-04-27 cycle) ──
  {
    id: "ccw-reciprocity-other-states",
    question: "Does my concealed carry permit work in other states?",
    answer: "It depends on which states. There is no federal concealed carry license. Each state decides whether to honor permits issued by other states. Roughly half the states have constitutional carry (no permit required at all). Others recognize permits from defined lists of partner states. A small number recognize no out-of-state permits. Always verify on the destination state's attorney general or state police website before traveling.",
    keywords: ["reciprocity", "concealed carry", "permit", "travel", "other states", "honor"],
    category: "Concealed Carry",
    relatedLinks: [
      { label: "Concealed Carry Reciprocity Guide", href: "/blog/concealed-carry-reciprocity-states" },
      { label: "State-by-State Gun Laws", href: "/laws" },
    ],
  },
  {
    id: "non-resident-permit-honored",
    question: "Are non-resident permits honored the same way as resident permits?",
    answer: "Often not. Many states honor only resident permits from their reciprocity partners. A Florida non-resident permit, for example, has historically been less broadly recognized than a Florida resident permit issued to a Florida resident. If you're carrying on a non-resident permit, verify the destination state's specific recognition rule — look for \"resident permits only\" language.",
    keywords: ["non-resident", "permit", "reciprocity", "Florida", "recognition"],
    category: "Concealed Carry",
    relatedLinks: [
      { label: "Concealed Carry Reciprocity Guide", href: "/blog/concealed-carry-reciprocity-states" },
    ],
  },
  {
    id: "syg-vs-castle-doctrine",
    question: "What's the difference between Stand Your Ground and Castle Doctrine?",
    answer: "The Castle Doctrine, present in nearly every U.S. state, removes the duty to retreat when defending against an unlawful intruder in your home (and often vehicle, business, or curtilage). Stand-your-ground laws extend the no-retreat rule to any place the defender has a legal right to be. Castle Doctrine is older, narrower, and nearly universal. SYG is broader, more recent, and adopted by a majority of states.",
    keywords: ["stand your ground", "castle doctrine", "self-defense", "duty to retreat", "SYG"],
    category: "Gun Laws",
    relatedLinks: [
      { label: "Stand Your Ground vs Duty to Retreat", href: "/blog/stand-your-ground-vs-duty-to-retreat" },
    ],
  },
  {
    id: "syg-travel-other-state",
    question: "Does Stand Your Ground apply to me when I travel to another state?",
    answer: "No. Self-defense law is governed by the law of the place where the use of force occurred, not your state of residence. A traveler from a stand-your-ground state who uses force in a duty-to-retreat state is evaluated under the duty-to-retreat rule. This is one of the more dangerous gaps in carry knowledge — assumptions formed in one state's legal environment do not travel with you.",
    keywords: ["stand your ground", "travel", "duty to retreat", "self-defense", "state law"],
    category: "Gun Laws",
    relatedLinks: [
      { label: "Stand Your Ground vs Duty to Retreat", href: "/blog/stand-your-ground-vs-duty-to-retreat" },
      { label: "State-by-State Gun Laws", href: "/laws" },
    ],
  },
  {
    id: "first-handgun-caliber",
    question: "What caliber should my first handgun be?",
    answer: "For most users, 9mm is the defensive answer. Modern 9mm self-defense ammunition meets FBI ballistic standards, recoil is manageable, capacity in equivalent frames is the highest among centerfire defensive calibers, and practice ammunition is the cheapest. The FBI returned to 9mm as its issued service caliber after extensive testing. For a first handgun used primarily for skill development, .22 LR is excellent for learning fundamentals before stepping up.",
    keywords: ["caliber", "9mm", "first handgun", ".22", ".45", ".380", "defensive"],
    category: "Buying Your First Firearm",
    relatedLinks: [
      { label: "First Handgun Guide", href: "/blog/first-handgun-guide" },
    ],
  },
  {
    id: "full-size-vs-compact",
    question: "Should I buy a full-size or compact handgun first?",
    answer: "Depends on the use. For home defense, full-size 9mm — easier to shoot accurately, absorbs recoil better, holds more rounds. For concealed carry, compact 9mm in the size of a Glock 19, Sig P365XL, or M&P 2.0 Compact — large enough to be shootable, small enough to conceal. For pure range practice, full-size. The buyer trying to solve all three with one gun usually compromises all three.",
    keywords: ["full-size", "compact", "handgun", "concealed carry", "home defense", "Glock 19"],
    category: "Buying Your First Firearm",
    relatedLinks: [
      { label: "First Handgun Guide", href: "/blog/first-handgun-guide" },
    ],
  },
  {
    id: "permit-before-buying",
    question: "Do I need a permit before I can buy a handgun?",
    answer: "Federally, you need to be 21 (or 18 in some states for private sales), pass a background check, and have valid identification. A few states have universal background check or permit-to-purchase requirements that condition handgun purchases on additional documentation. Carrying concealed in public is what triggers the permit requirement in non-constitutional-carry states — buying does not.",
    keywords: ["permit", "buy", "handgun", "background check", "purchase", "age requirement"],
    category: "Buying Your First Firearm",
    relatedLinks: [
      { label: "First Handgun Guide", href: "/blog/first-handgun-guide" },
    ],
  },
  {
    id: "fopa-transport-rule",
    question: "What's the FOPA federal transport rule?",
    answer: "The Firearms Owners Protection Act allows a person legally entitled to possess a firearm in their state of origin and state of destination to transport that firearm through any state, provided the firearm is unloaded and locked in a container separate from ammunition. FOPA does not authorize carry — only transport. It is a defense against state prosecution, not a permit substitute.",
    keywords: ["FOPA", "transport", "federal", "interstate", "travel", "unloaded", "locked"],
    category: "Concealed Carry",
    relatedLinks: [
      { label: "Concealed Carry Reciprocity Guide", href: "/blog/concealed-carry-reciprocity-states" },
      { label: "Reciprocity & Interstate Travel", href: "/reciprocity" },
      { label: "Flying with Firearms: TSA Rules", href: "/blog/flying-with-firearms-tsa-rules" },
    ],
  },
  {
    id: "deadly-force-requirements",
    question: "What does the law require before I can use deadly force in self-defense?",
    answer: "Every U.S. state requires the same baseline elements: an imminent threat of death or great bodily harm, a reasonable belief that the threat is real, force proportionate to the threat, and that the defender was not the initial aggressor. Stand-your-ground vs. duty-to-retreat governs only one additional question — whether the defender must attempt safe retreat before using deadly force. The threshold elements above must be met in either jurisdiction.",
    keywords: ["deadly force", "self-defense", "imminent threat", "proportionate", "legal requirements"],
    category: "Gun Laws",
    relatedLinks: [
      { label: "Stand Your Ground vs Duty to Retreat", href: "/blog/stand-your-ground-vs-duty-to-retreat" },
    ],
  },

  // ── Travel & Transport ──────────────────────────────────────
  {
    id: "fly-with-firearm",
    question: "Can I fly with a firearm?",
    answer:
      "Yes. Flying with a firearm is legal under federal law with four requirements: the firearm must be unloaded, packed in a hard-sided container, secured with locks only you control (no TSA master-key locks), and transported as checked baggage only. You must declare the firearm at the airline check-in counter — not at the TSA security checkpoint. Penalties for violations start at $1,500 for a carry-on incident and can exceed $17,000 per violation.",
    keywords: ["fly", "flying", "airport", "TSA", "airline", "checked baggage", "travel", "air travel"],
    category: "Travel & Transport",
    relatedLinks: [
      { label: "Flying with Firearms: Full Guide", href: "/blog/flying-with-firearms-tsa-rules" },
      { label: "Reciprocity & Interstate Travel", href: "/reciprocity" },
    ],
  },
  {
    id: "tsa-locks-firearm-case",
    question: "Do I need to use TSA-approved locks on my firearm case?",
    answer:
      "No — and this is one of the most common mistakes. TSA-accessible locks (the kind with master keys TSA agents can use) are explicitly prohibited for firearm containers. Use only standard locks that you control. If TSA needs to inspect the container, they will call you back to the checkpoint to unlock it yourself.",
    keywords: ["TSA", "locks", "case", "container", "master key", "firearm case", "approved locks"],
    category: "Travel & Transport",
    relatedLinks: [
      { label: "Flying with Firearms: Full Guide", href: "/blog/flying-with-firearms-tsa-rules" },
    ],
  },
  {
    id: "flight-diversion-firearm",
    question: "What happens to my firearm if my flight is diverted?",
    answer:
      "If your flight diverts involuntarily and you must exit the airport and retrieve checked baggage, you may be in legal jeopardy if the diversion state has laws prohibiting your firearm or magazine configuration. Immediately notify airline staff that you have a declared firearm in your bag and ask for their procedure. Contact law enforcement at the diversion airport to explain the situation proactively. Demonstrate you're acting in good faith immediately — don't wait to be discovered with the firearm.",
    keywords: ["diversion", "diverted", "flight", "layover", "state law", "airport", "travel"],
    category: "Travel & Transport",
    relatedLinks: [
      { label: "Flying with Firearms: Full Guide", href: "/blog/flying-with-firearms-tsa-rules" },
      { label: "FOPA Transport Rule", href: "/reciprocity" },
    ],
  },

  // ── Buying Your First Firearm (gun show additions) ──────────
  {
    id: "gun-show-loophole",
    question: "Do gun shows have a background check loophole?",
    answer:
      "The \"gun show loophole\" is a misleading label. Background check requirements depend on who is selling, not where the sale happens. Licensed dealers (FFLs) must run NICS background checks at gun shows, just as they would in their retail store. Private individuals selling from their personal collection are not required to conduct background checks in most states — and that exemption applies anywhere, not just at gun shows. Several states have enacted universal background check laws requiring checks for all transfers, including private party sales.",
    keywords: ["gun show", "loophole", "background check", "private sale", "FFL", "NICS"],
    category: "Buying Your First Firearm",
    relatedLinks: [
      { label: "Buying at a Gun Show: Full Guide", href: "/blog/buying-gun-at-gun-show" },
      { label: "State Gun Law Guides", href: "/states" },
    ],
  },
  {
    id: "private-seller-background-check",
    question: "Are background check rules different for private sellers at gun shows?",
    answer:
      "In states without universal background check laws, private sellers at gun shows operate under the same rules as private sellers anywhere else — no NICS check required. In universal background check states (California, Colorado, Illinois, New York, and others), all transfers including private party sales must go through a licensed dealer for a background check, regardless of venue. Know your state's rules before completing any private sale.",
    keywords: ["private seller", "background check", "universal", "gun show", "transfer", "FFL"],
    category: "Buying Your First Firearm",
    relatedLinks: [
      { label: "Buying at a Gun Show: Full Guide", href: "/blog/buying-gun-at-gun-show" },
      { label: "State Gun Law Guides", href: "/states" },
    ],
  },

  // ── Training & Instruction ──────────────────────────────────
  {
    id: "instructor-credentials",
    question: "What credentials should I look for in a firearms instructor?",
    answer:
      "Look for instructors certified by recognized organizations: NRA Certified Instructor (multiple discipline options), USCCA Certified Instructor (emphasis on defensive context and legal framework), or Rangemaster Certified Instructor (strong practical shooting background). Credentials establish a baseline but don't guarantee quality — ask specifically about years of experience, student-to-instructor ratio, and emergency medical kit availability at the range.",
    keywords: ["instructor", "credentials", "NRA", "USCCA", "Rangemaster", "certification", "training"],
    category: "Training & Instruction",
    relatedLinks: [
      { label: "Choosing an Instructor: Full Guide", href: "/blog/how-to-choose-firearms-instructor" },
    ],
  },
  {
    id: "instructor-red-flags",
    question: "What are the warning signs of a poor firearms instructor?",
    answer:
      "Red flags: inability or unwillingness to demonstrate the techniques being taught; rigid insistence on one \"correct\" method with no acknowledgment of individual variation; casual attitude toward safety rules; credentials that can't be independently verified; pressure to purchase gear during the course; student-to-instructor ratio above 10:1 without additional range officers. Good instruction prioritizes repetition and corrective feedback on fundamental skills before advancing to complex techniques.",
    keywords: ["instructor", "red flags", "warning signs", "bad instructor", "safety", "training"],
    category: "Training & Instruction",
    relatedLinks: [
      { label: "Choosing an Instructor: Full Guide", href: "/blog/how-to-choose-firearms-instructor" },
    ],
  },
  {
    id: "instructor-student-ratio",
    question: "What student-to-instructor ratio is safe for a live-fire course?",
    answer:
      "For live-fire instruction, the general safe standard is no more than 10 students per instructor. Below 8:1 allows for meaningful individual feedback. Courses running 15+ students per instructor without additional range safety officers present can create conditions where safety issues go unobserved. Ask about ratio before booking — it's a direct safety question and any competent instructor will answer without hesitation.",
    keywords: ["ratio", "students", "instructor", "live fire", "range", "safety", "class size"],
    category: "Training & Instruction",
    relatedLinks: [
      { label: "Choosing an Instructor: Full Guide", href: "/blog/how-to-choose-firearms-instructor" },
    ],
  },
];

export function getFaqsByCategory(category: string): FaqEntry[] {
  return faqData.filter((faq) => faq.category === category);
}

export function getFaqById(id: string): FaqEntry | undefined {
  return faqData.find((faq) => faq.id === id);
}
