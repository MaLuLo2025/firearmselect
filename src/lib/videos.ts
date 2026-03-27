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
  "Caliber & Ballistics",
  "Home Defense",
  "Concealed Carry",
  "Firearms Mechanics",
  "Reviews & Comparisons",
  "Self-Defense",
] as const;

export type VideoCategory = (typeof videoCategories)[number];

// All YouTube video IDs verified live as of March 2026
export const videos: Video[] = [
  // ── Caliber & Ballistics ──────────────────────────────────
  {
    id: "9mm-vs-357",
    title: "Personal Protection: 9mm vs .357 Magnum",
    source: "Paul Harrell",
    youtubeId: "CD2t_qG9dls",
    category: "Caliber & Ballistics",
    summary:
      "Paul Harrell applies his signature meat target methodology to one of the most debated comparisons in the handgun world: the 9mm Luger versus the .357 Magnum. Using layered targets designed to simulate clothing, muscle, lung tissue, and bone — constructed from leather, t-shirt fabric, pork chops, oranges, and beef ribs — Harrell tests multiple loads in each caliber under controlled conditions.\n\nThe results reveal nuanced differences in penetration depth, wound channel diameter, and energy transfer that defy the simplistic \"bigger is better\" arguments common in online forums. Harrell demonstrates that modern 9mm defensive ammunition has closed much of the performance gap that historically existed between the two calibers, while acknowledging that the .357 Magnum still delivers meaningfully more energy per round.\n\nWhat makes this analysis particularly valuable is Harrell's insistence on empirical observation over theoretical speculation. Rather than citing manufacturer data sheets, he lets the targets tell the story. He addresses the practical tradeoffs that matter in the real world: the .357 Magnum's superior terminal performance comes at the cost of significantly more recoil, reduced capacity, slower follow-up shots, and greater muzzle blast — factors that directly affect shooter accuracy under stress.\n\nHarrell concludes by framing the decision not as which caliber is \"better\" in the abstract, but which caliber a given shooter can deploy most effectively when it matters. For many shooters, the 9mm's combination of manageable recoil, high capacity, and adequate terminal performance with quality defensive ammunition makes it the more practical choice — but Harrell respects both sides of the argument with data rather than dogma.",
    relatedFaqIds: ["caliber-concealed-carry", "revolver-vs-semi-auto"],
    relatedBlogSlugs: [],
  },
  {
    id: "ballistics-gel",
    title: "Why Ballistics Gel Works and Caliber Arguments are Dumb",
    source: "Lucky Gunner / Chris Baker",
    youtubeId: "T6kUvi72s0Y",
    category: "Caliber & Ballistics",
    summary:
      "Chris Baker draws on Lucky Gunner's massive ammunition testing project — over 117 self-defense loads tested in calibrated ballistic gelatin — to explain why gel testing remains the gold standard for evaluating defensive ammunition performance, and why most caliber debates miss the point entirely.\n\nBaker walks through the science behind ballistic gelatin: how it was developed to simulate human soft tissue density, why the FBI adopted 10% ordnance gelatin as its testing protocol, and what the data actually tells us about bullet performance. He explains the two critical metrics — penetration depth and expansion diameter — and why both must fall within specific ranges to be considered effective for self-defense.\n\nThe video's most provocative argument is that the differences between major defensive calibers (9mm, .40 S&W, .45 ACP) are far smaller than most gun owners believe. When loaded with quality modern defensive ammunition, all three calibers achieve similar penetration depths and expanded diameters in gel testing. The variation between individual loads within the same caliber is often greater than the variation between calibers — meaning your choice of specific ammunition matters more than your choice of caliber.\n\nBaker doesn't dismiss caliber selection as irrelevant, but reframes it: if terminal performance differences are marginal, then the factors that aren't marginal — recoil management, shot capacity, and how much you actually practice — should drive the decision. The presentation is data-first and refreshingly free of the tribal allegiances that typically dominate this discussion.",
    relatedFaqIds: ["caliber-concealed-carry", "first-firearm"],
    relatedBlogSlugs: [],
  },
  {
    id: "44-magnum",
    title: "Everything You Wanted to Know About .44 Magnum",
    source: "Lucky Gunner / Chris Baker",
    youtubeId: "UVIwSQNOQ0Y",
    category: "Caliber & Ballistics",
    summary:
      "A comprehensive deep dive into one of the most iconic cartridges in firearms history. Chris Baker traces the .44 Magnum from its development by Elmer Keith and Smith & Wesson in the 1950s through its cultural moment as Dirty Harry's signature round to its practical applications today.\n\nBaker covers the ballistic performance of the .44 Magnum across different barrel lengths and load types, from full-power hunting loads to reduced-recoil defensive options. He addresses the cartridge's real-world strengths — exceptional stopping power for large game, deep penetration through barriers, and versatility across handgun and lever-action rifle platforms — as well as its practical limitations: punishing recoil, limited capacity in most platforms, high ammunition cost, and the sheer size and weight of firearms chambered for it.\n\nThe video examines the .44 Magnum's niche in the modern landscape where it faces competition from newer cartridges like the 10mm Auto and .454 Casull. Baker makes the case that the .44 Magnum remains relevant for specific applications — backcountry defense against large animals, handgun hunting, and situations requiring deep penetration — while acknowledging it's a poor choice for concealed carry or general-purpose self-defense where lighter, higher-capacity options perform better.",
    relatedFaqIds: ["caliber-concealed-carry"],
    relatedBlogSlugs: [],
  },

  // ── Home Defense ──────────────────────────────────────────
  {
    id: "home-defense-guns",
    title: "Top Five Guns for Home Defense",
    source: "Paul Harrell",
    youtubeId: "K4FESGjiH3s",
    category: "Home Defense",
    summary:
      "Paul Harrell draws on decades of practical shooting experience to evaluate the five firearm types he considers most suitable for home defense, analyzing each through the lens of real-world conditions rather than range performance. His selections span handguns, shotguns, and rifles, with each evaluated against criteria that matter inside a home: overpenetration risk, ease of use under stress, capacity, and suitability for the average homeowner.\n\nHarrell's analysis goes beyond the typical \"best home defense gun\" listicle by addressing the environmental factors most reviewers ignore. He discusses how barrel length affects maneuverability in hallways and doorways, why the sound of a pump shotgun racking is not a reliable deterrent strategy, and how ammunition selection can be more important than platform selection when it comes to protecting other occupants of the home from pass-through rounds.\n\nThe video is characteristically honest about tradeoffs. Harrell acknowledges that shotguns deliver devastating terminal performance but require more training to operate effectively under stress than most owners invest. He discusses why AR-platform rifles, often dismissed as \"too much gun\" for home defense, actually produce less dangerous overpenetration than many common handgun and shotgun loads when loaded with appropriate ammunition.\n\nWhat sets this analysis apart is Harrell's willingness to address the human element: a home defense firearm that its owner hasn't trained with, can't quickly access from secure storage, or can't operate reliably in the dark with elevated heart rate is a liability, not an asset. The best home defense gun, he argues, is the one you can actually use effectively when woken at 3 AM.",
    relatedFaqIds: ["home-defense-storage", "first-firearm", "basic-safety-rules"],
    relatedBlogSlugs: [],
  },
  {
    id: "9mm-home-defense",
    title: "5 Best 9mm Home Defense Pistols Under $500",
    source: "Honest Outlaw",
    youtubeId: "vilo1-2H4jc",
    category: "Home Defense",
    summary:
      "Honest Outlaw presents a detailed comparison of five budget-friendly 9mm pistols evaluated specifically for home defense duty. Each pistol is assessed across multiple criteria: reliability over thousands of rounds of testing, accuracy at defensive distances, trigger quality, ergonomics, sights, and overall build quality relative to price.\n\nThe review covers options from manufacturers including Canik, Smith & Wesson, Glock, and Walther — brands that have established track records in the sub-$500 segment. For each pistol, Honest Outlaw provides concrete round counts from his own testing, notes any malfunctions or parts breakages encountered, and explains which issues are deal-breakers versus acceptable compromises at the price point.\n\nWhat distinguishes this review from typical \"best of\" lists is the emphasis on home defense context specifically. Honest Outlaw discusses why home defense handgun requirements differ from concealed carry — where size, weight, and concealability matter less, but factors like sight radius, grip surface area, rail compatibility for weapon lights, and magazine capacity become more important. He addresses the practical question most buyers face: whether spending $450 on a proven design delivers meaningfully better reliability than a $300 budget option.",
    relatedFaqIds: ["first-firearm", "handgun-cost", "home-defense-storage"],
    relatedBlogSlugs: [],
  },

  // ── Concealed Carry ───────────────────────────────────────
  {
    id: "concealed-carry-essentials",
    title: "Five Things to Have for Concealed Carry",
    source: "Paul Harrell",
    youtubeId: "aKNQPhVucVY",
    category: "Concealed Carry",
    summary:
      "Paul Harrell outlines the essential items and considerations for everyday concealed carry, drawing on decades of personal carry experience and real-world anecdotes. Rather than a gear review, this is a practical philosophy of what it takes to carry responsibly every day.\n\nHarrell addresses the items beyond the firearm itself that experienced carriers consider non-negotiable: a quality holster that maintains consistent positioning and retention, a reliable belt that supports the weight of a loaded handgun without sagging, spare ammunition in a format that allows efficient reloading, and the often-overlooked importance of a good flashlight. He discusses why each item matters not in theory but in practice, using specific situations from his own experience.\n\nThe video's most valuable contribution is Harrell's discussion of mindset as equipment. He argues that the most important thing a concealed carrier can \"have\" is an accurate understanding of the legal and ethical framework governing the use of lethal force in their jurisdiction. A well-equipped carrier who doesn't understand when they can and cannot legally draw is more dangerous than an unarmed citizen.",
    relatedFaqIds: ["start-carrying-concealed", "holster-type"],
    relatedBlogSlugs: [],
  },
  {
    id: "choosing-carry-pistol",
    title: "Everything You Should Know Before Choosing a Carry Pistol",
    source: "Honest Outlaw",
    youtubeId: "SGKiL8rdhYA",
    category: "Concealed Carry",
    summary:
      "Honest Outlaw draws on extensive testing of hundreds of handguns to create a comprehensive buyer's guide for selecting a concealed carry pistol. This isn't a \"top 5\" list — it's a framework for making an informed decision based on your specific body type, lifestyle, wardrobe, and defensive priorities.\n\nThe video covers the critical factors in carry pistol selection: size class (subcompact, compact, full-size) and how each maps to different carry positions and body types. Honest Outlaw explains the practical tradeoffs between concealability and shootability — smaller guns hide better but are harder to shoot well, and the gap between a micro-compact and a compact pistol is larger than most buyers expect in terms of accuracy and recoil management.\n\nHe addresses caliber selection, aftermarket support, reliability benchmarks (what round count constitutes a meaningful reliability test), and why the pistol you'll actually carry every day is better than the one that sits in a safe because it's too heavy or uncomfortable. The discussion of ergonomics is particularly practical — Honest Outlaw explains how to evaluate grip angle, trigger reach, and control placement in the store, and why \"it feels good in my hand\" doesn't always translate to shooting well.",
    relatedFaqIds: ["start-carrying-concealed", "holster-type", "first-firearm", "caliber-concealed-carry"],
    relatedBlogSlugs: [],
  },

  // ── Firearms Mechanics ────────────────────────────────────
  {
    id: "roller-delayed-blowback",
    title: "How Does It Work: Roller Delayed Blowback",
    source: "Forgotten Weapons / Ian McCollum",
    youtubeId: "sd8FrUe8fMM",
    category: "Firearms Mechanics",
    summary:
      "Ian McCollum traces the roller delayed blowback mechanism from its origins in Mauser's WWII-era research and development through its adoption in some of the most influential military firearms of the Cold War era. Using cutaway diagrams and slow-motion footage, McCollum explains how the system works at a mechanical level: a pair of rollers lock the bolt head to the barrel extension, and an angled locking wedge creates mechanical disadvantage that delays the bolt's rearward travel until chamber pressure drops to safe levels.\n\nThe video follows the engineering lineage from the Mauser StG 45(M) prototype through the Spanish CETME rifles, ultimately arriving at the Heckler & Koch G3 battle rifle and its derivatives — the MP5 submachine gun, the HK33 rifle, and the PSG1 sniper rifle. McCollum explains why roller delayed blowback became HK's signature operating system and the engineering tradeoffs that made it attractive for military adoption: fewer moving parts than a gas-operated system, excellent accuracy due to the locked-breech design, and reliability in adverse conditions.\n\nThis is firearms engineering content at its best — technically precise, historically grounded, and presented with the clarity that has made Forgotten Weapons one of the most respected firearms education channels. No politics, no product promotion — just how the mechanism works and why it matters in the history of firearms design.",
    relatedFaqIds: [],
    relatedBlogSlugs: [],
  },
  {
    id: "short-recoil",
    title: "How Does It Work: Short Recoil Operation",
    source: "Forgotten Weapons / Ian McCollum",
    youtubeId: "HZcgZ4aq8Ew",
    category: "Firearms Mechanics",
    summary:
      "Ian McCollum explains the operating mechanism behind virtually every modern semi-automatic handgun: the short recoil system pioneered by John Moses Browning in the early 20th century. Using detailed animations and physical demonstrations, McCollum walks through the complete cycle of operation — from trigger pull through firing, barrel-slide separation, extraction, ejection, and feeding of the next round.\n\nThe video explains why Browning's tilting-barrel short recoil design became the dominant operating system for self-loading pistols. McCollum covers the critical engineering insight: the barrel and slide travel rearward together for a short distance (hence \"short recoil\"), keeping the breech locked while chamber pressure is at its peak. A cam or link then pulls the barrel downward, unlocking it from the slide, which continues rearward alone to complete the cycle.\n\nMcCollum traces the evolution from Browning's original 1911 linkage system through the simplified cam-lock designs used in modern pistols like the Glock, SIG P320, and Smith & Wesson M&P. Understanding this mechanism gives gun owners genuine insight into why their handguns function the way they do — why limp-wristing causes malfunctions, why recoil spring weight matters, and how the interplay between barrel, slide, and frame determines the shooting characteristics of different pistol designs.",
    relatedFaqIds: ["revolver-vs-semi-auto"],
    relatedBlogSlugs: [],
  },
  {
    id: "ar-system",
    title: "How Does It Work: Stoner's AR System",
    source: "Forgotten Weapons / Ian McCollum",
    youtubeId: "4xlKgkwt6Ro",
    category: "Firearms Mechanics",
    summary:
      "A detailed examination of Eugene Stoner's direct gas impingement system as implemented in the AR-10 and AR-15/M16 platform — the most widely owned rifle system in the United States. Ian McCollum explains how gas is tapped from the barrel through a gas port and directed through a gas tube back to the bolt carrier group, where it pushes the carrier rearward to cycle the action.\n\nMcCollum addresses the longstanding debate between Stoner's direct impingement design and the short-stroke gas piston systems used in competing platforms like the AK-47 and HK416. He explains the engineering tradeoffs honestly: direct impingement deposits carbon and fouling directly into the receiver, requiring more frequent cleaning, but the system's lighter bolt carrier group and inline design contribute to the AR platform's characteristic accuracy and the straight-line recoil impulse that makes it controllable in rapid fire.\n\nThe video provides essential context for AR owners who want to understand their rifle beyond the operator's manual — why gas block alignment matters, how buffer weight affects the cycling dynamics, and what actually happens during a malfunction at the mechanical level. McCollum's presentation is purely educational, treating the AR system as an engineering achievement worth understanding on its own terms.",
    relatedFaqIds: [],
    relatedBlogSlugs: [],
  },

  // ── Reviews & Comparisons ─────────────────────────────────
  {
    id: "colt-python",
    title: "Colt 2020 Python .357 Magnum",
    source: "Hickok45",
    youtubeId: "cYbjwiMQTzw",
    category: "Reviews & Comparisons",
    summary:
      "Hickok45 puts the reintroduced Colt Python through an extensive range session, evaluating one of the most anticipated — and most debated — revolver releases in recent memory. The 2020 Python represents Colt's attempt to revive their most iconic revolver with modern manufacturing techniques, and Hickok45 tests whether it lives up to the legacy.\n\nThe review covers trigger quality in both single and double action, accuracy at various distances including Hickok45's signature long-range steel targets, and the fit and finish of the new production model. He provides honest feedback about the revolver's performance, including any issues encountered during his testing — the kind of candid assessment that has made his channel one of the most trusted in the firearms community.\n\nHickok45's range demonstrations are particularly valuable because of his decades of shooting experience. His observations about trigger feel, balance, and practical accuracy come from a shooter who has fired thousands of revolvers, giving his comparisons to the original Python production run genuine authority. The video serves as both a thorough review of a specific firearm and a broader education in what to look for when evaluating revolver quality.",
    relatedFaqIds: ["revolver-vs-semi-auto"],
    relatedBlogSlugs: [],
  },
  {
    id: "python-vs-686",
    title: "2020 Colt Python vs Smith & Wesson 686",
    source: "Hickok45",
    youtubeId: "B9AR3EBieA0",
    category: "Reviews & Comparisons",
    summary:
      "A head-to-head comparison of two premier .357 Magnum revolvers — the reintroduced Colt Python and the Smith & Wesson 686 — both in four-inch barrel configurations. Hickok45 shoots both revolvers extensively, comparing trigger action, accuracy, ergonomics, and overall shooting experience.\n\nThe comparison goes beyond surface-level specifications into the differences that matter at the range. Hickok45 evaluates each revolver's double-action trigger pull — arguably the most important characteristic in a defensive revolver — as well as single-action crispness, cylinder lockup, and how each gun handles both .38 Special and full-power .357 Magnum loads. His observations about balance, grip angle, and sight picture differences provide practical information that can't be gleaned from specification sheets.\n\nThe value proposition discussion is particularly relevant: with the Python commanding a significant price premium over the 686, Hickok45 addresses whether the differences in fit, finish, and performance justify the additional cost. His assessment is balanced, acknowledging the Python's superior trigger and aesthetic appeal while recognizing the 686 as an exceptional revolver in its own right at a more accessible price point.",
    relatedFaqIds: ["revolver-vs-semi-auto", "handgun-cost"],
    relatedBlogSlugs: [],
  },

  // ── Self-Defense ──────────────────────────────────────────
  {
    id: "self-defense-misconceptions",
    title: "What Gun Owners Get WRONG About Self-Defense",
    source: "Active Self Protection / John Correia",
    youtubeId: "OX6UkEi1n0k",
    category: "Self-Defense",
    summary:
      "John Correia draws on his analysis of tens of thousands of documented defensive encounters — captured on security cameras, body cameras, and bystander footage from around the world — to challenge the assumptions that many gun owners hold about how self-defense situations actually unfold. The gap between what people imagine a defensive encounter looks like and what the data shows is significant.\n\nCorreia addresses several critical misconceptions: that defensive encounters happen at longer distances than they actually do (most occur within conversational distance), that attackers always present clear advance warning (many don't), that drawing from concealment is faster than most people think they need it to be (it isn't), and that marksmanship is the primary skill that determines outcomes (it's one of several, and often not the most important).\n\nThe video covers the legal and emotional aftermath of defensive shootings — an area most training programs underemphasize. Correia explains why having a plan for the minutes and hours after a defensive encounter is as important as having a plan for the encounter itself, including what to say (and not say) to responding officers, and why carrying some form of legal defense coverage deserves serious consideration.\n\nWhat makes this analysis uniquely authoritative is its empirical foundation. Rather than theorizing about what might happen in a defensive situation, Correia has reviewed more real-world encounters than almost anyone in the firearms training industry. His conclusions are data-driven and sometimes uncomfortable — particularly his observation that most gun owners train for scenarios that rarely occur while neglecting skills that the data shows matter most.",
    relatedFaqIds: ["start-carrying-concealed", "restricted-locations", "duty-to-inform"],
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
