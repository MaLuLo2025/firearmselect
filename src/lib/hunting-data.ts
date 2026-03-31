export interface HuntingSeason {
  species: string;
  seasonType: string;
  dates: string;
  bagLimit: string;
  legalMethods: string;
  notes?: string;
}

export interface HuntingLicense {
  type: string;
  cost: string;
  notes?: string;
}

export interface HuntingStateData {
  stateSlug: string;
  stateName: string;
  stateAbbr: string;
  overview: string;
  wildlifeAgency: string;
  wildlifeAgencyUrl: string;
  regulationsUrl: string;
  hunterEdUrl: string;
  violationHotline?: string;
  seasons: {
    bigGame: HuntingSeason[];
    upland: HuntingSeason[];
    waterfowl: HuntingSeason[];
    turkey: HuntingSeason[];
    smallGame: HuntingSeason[];
  };
  licenses: HuntingLicense[];
  tagsAndDraws: string;
  harvestReporting: string;
}

export const huntingStates: HuntingStateData[] = [
  {
    stateSlug: "texas",
    stateName: "Texas",
    stateAbbr: "TX",
    overview: "Texas is one of the most popular hunting destinations in the United States, with an estimated 1.1 million licensed hunters and over 100 million acres of habitat. The state offers diverse hunting opportunities from white-tailed deer and mule deer to feral hogs (which have no closed season), pronghorn, and a wide variety of upland and migratory birds. Texas operates primarily on a private land model — the vast majority of hunting occurs on private ranches, many of which offer paid access through lease programs or day hunts.",
    wildlifeAgency: "Texas Parks & Wildlife Department",
    wildlifeAgencyUrl: "https://tpwd.texas.gov/hunting",
    regulationsUrl: "https://tpwd.texas.gov/regulations/outdoor-annual",
    hunterEdUrl: "https://tpwd.texas.gov/education/hunter-education",
    violationHotline: "Operation Game Thief: 1-800-792-GAME",
    seasons: {
      bigGame: [
        { species: "White-tailed Deer", seasonType: "Archery", dates: "Sep 27 – Nov 7, 2025", bagLimit: "5 deer, no more than 3 bucks", legalMethods: "Bow and arrow, crossbow", notes: "Antler restrictions vary by county" },
        { species: "White-tailed Deer", seasonType: "General", dates: "Nov 1 – Jan 18, 2026", bagLimit: "5 deer, no more than 3 bucks", legalMethods: "Rifle, shotgun, handgun, muzzleloader, bow", notes: "CWD zones have mandatory testing requirements" },
        { species: "White-tailed Deer", seasonType: "Muzzleloader", dates: "Jan 19 – Feb 1, 2026", bagLimit: "5 deer, no more than 3 bucks", legalMethods: "Muzzleloader only" },
        { species: "Mule Deer", seasonType: "General", dates: "Nov 22 – Dec 7, 2025", bagLimit: "2 mule deer, 1 buck", legalMethods: "Rifle, shotgun, handgun, muzzleloader, bow", notes: "Trans-Pecos and Panhandle regions only" },
        { species: "Pronghorn", seasonType: "General", dates: "Oct 4 – Oct 12, 2025", bagLimit: "1 pronghorn", legalMethods: "Rifle, shotgun, handgun, muzzleloader, bow", notes: "Permit required — issued by drawing" },
        { species: "Feral Hog", seasonType: "Year-round", dates: "No closed season", bagLimit: "No limit", legalMethods: "Any legal firearm, bow, trapping", notes: "No license required on private land with landowner consent" },
      ],
      upland: [
        { species: "Northern Bobwhite Quail", seasonType: "General", dates: "Oct 25 – Feb 22, 2026", bagLimit: "15 daily / 45 possession", legalMethods: "Shotgun" },
        { species: "Pheasant", seasonType: "General", dates: "Dec 6 – Jan 4, 2026", bagLimit: "3 daily / 9 possession", legalMethods: "Shotgun", notes: "Panhandle region only" },
      ],
      waterfowl: [
        { species: "Ducks", seasonType: "General", dates: "Varies by zone — Nov through Jan", bagLimit: "6 daily (species-specific limits)", legalMethods: "Shotgun (non-toxic shot required)", notes: "Federal duck stamp + HIP registration required. Check USFWS frameworks for current year." },
        { species: "Geese", seasonType: "General", dates: "Varies by zone — Oct through Feb", bagLimit: "Varies by species", legalMethods: "Shotgun (non-toxic shot required)", notes: "Light goose conservation order extends through March" },
      ],
      turkey: [
        { species: "Rio Grande Turkey", seasonType: "Fall", dates: "Nov 1 – Jan 18, 2026", bagLimit: "4 turkeys, either sex", legalMethods: "Shotgun, bow, rifle" },
        { species: "Rio Grande Turkey", seasonType: "Spring", dates: "Mar 14 – May 10, 2026", bagLimit: "4 gobblers", legalMethods: "Shotgun, bow", notes: "Eastern turkey has more limited season in east Texas" },
      ],
      smallGame: [
        { species: "Eastern Cottontail", seasonType: "General", dates: "Oct 1 – Feb 22, 2026", bagLimit: "10 daily / 20 possession", legalMethods: "Rifle, shotgun, handgun" },
        { species: "Squirrel", seasonType: "General", dates: "Oct 1 – Feb 22, 2026", bagLimit: "10 daily / 20 possession", legalMethods: "Rifle, shotgun, handgun" },
      ],
    },
    licenses: [
      { type: "Resident Hunting License", cost: "$25", notes: "Required for all resident hunters" },
      { type: "Non-Resident Hunting License", cost: "$315" },
      { type: "Super Combo (resident)", cost: "$68", notes: "Includes hunting, fishing, and all stamps" },
      { type: "Youth Hunting License (under 17)", cost: "Free with Hunter Education", notes: "Must complete hunter education" },
      { type: "Senior Hunting License (65+)", cost: "$7" },
      { type: "Federal Duck Stamp", cost: "$25", notes: "Required for waterfowl hunting" },
      { type: "Upland Game Bird Stamp", cost: "$7" },
    ],
    tagsAndDraws: "Texas uses a drawing system for pronghorn antelope and some managed lands hunts. Applications are typically due by mid-August through the TPWD online system. There is no point system — drawings are random. Most white-tailed deer hunting does not require a tag beyond the general license, though some Wildlife Management Areas require special permits. Mule deer in some units require a Managed Lands Deer permit.",
    harvestReporting: "Texas requires mandatory reporting for certain species and management areas through the My Texas Hunt Harvest app or online system. White-tailed deer harvest reporting is mandatory in CWD management zones. All hunters are encouraged to report harvest data to support wildlife management decisions. CWD testing is mandatory for deer harvested in designated CWD zones.",
  },
  {
    stateSlug: "colorado",
    stateName: "Colorado",
    stateAbbr: "CO",
    overview: "Colorado offers world-class big game hunting, particularly for elk, mule deer, and pronghorn. The state manages roughly 23 million acres of public land, making it one of the most accessible states for hunting on public ground. Colorado uses a preference point system for limited licenses, and over-the-counter elk tags are available in many units. The state has seen significant growth in hunter numbers, leading to increased competition for limited draw tags.",
    wildlifeAgency: "Colorado Parks and Wildlife",
    wildlifeAgencyUrl: "https://cpw.state.co.us/thingstodo/Pages/Hunting.aspx",
    regulationsUrl: "https://cpw.state.co.us/hunting/Pages/Regulations.aspx",
    hunterEdUrl: "https://cpw.state.co.us/learn/Pages/HunterEducation.aspx",
    violationHotline: "Operation Game Thief: 1-877-265-6648",
    seasons: {
      bigGame: [
        { species: "Elk", seasonType: "Archery", dates: "Aug 30 – Sep 28, 2025", bagLimit: "1 elk per license", legalMethods: "Bow and arrow, crossbow (by permit)", notes: "Over-the-counter archery elk licenses available in most units" },
        { species: "Elk", seasonType: "Muzzleloader", dates: "Sep 13 – Sep 21, 2025", bagLimit: "1 elk per license", legalMethods: "Muzzleloader", notes: "Limited licenses — draw only" },
        { species: "Elk", seasonType: "Rifle (combined seasons)", dates: "Oct 11 – Nov 16, 2025", bagLimit: "1 elk per license", legalMethods: "Rifle, shotgun, handgun, muzzleloader", notes: "Four separate rifle seasons within this window" },
        { species: "Mule Deer", seasonType: "Archery", dates: "Aug 30 – Sep 28, 2025", bagLimit: "1 deer per license", legalMethods: "Bow and arrow", notes: "Limited licenses in most units — draw required" },
        { species: "Mule Deer", seasonType: "Rifle (combined seasons)", dates: "Oct 11 – Nov 16, 2025", bagLimit: "1 deer per license", legalMethods: "Rifle, shotgun, handgun, muzzleloader", notes: "Buck licenses require draw in nearly all units" },
        { species: "Pronghorn", seasonType: "Rifle", dates: "Oct 4 – Oct 19, 2025", bagLimit: "1 pronghorn per license", legalMethods: "Rifle, shotgun, handgun, muzzleloader, bow", notes: "All licenses by draw. Preference point system applies." },
        { species: "Black Bear", seasonType: "General", dates: "Sep 2 – Nov 30, 2025", bagLimit: "1 bear per year", legalMethods: "Rifle, bow, muzzleloader", notes: "Over-the-counter licenses available. No baiting, no spring season, no hound hunting." },
        { species: "Mountain Lion", seasonType: "General", dates: "Nov 1, 2025 – Mar 31, 2026", bagLimit: "1 lion per year", legalMethods: "Rifle, bow, handgun", notes: "License by draw in some units, OTC in others" },
      ],
      upland: [
        { species: "Ring-necked Pheasant", seasonType: "General", dates: "Nov 8 – Jan 31, 2026", bagLimit: "3 daily / 9 possession", legalMethods: "Shotgun" },
        { species: "Dusky Grouse", seasonType: "General", dates: "Sep 1 – Nov 30, 2025", bagLimit: "3 daily / 9 possession", legalMethods: "Shotgun, rifle" },
      ],
      waterfowl: [
        { species: "Ducks", seasonType: "General", dates: "Varies by zone — Oct through Jan", bagLimit: "6 daily (species-specific limits)", legalMethods: "Shotgun (non-toxic shot required)", notes: "Federal duck stamp + HIP required" },
      ],
      turkey: [
        { species: "Wild Turkey", seasonType: "Spring", dates: "Apr 11 – May 24, 2026", bagLimit: "1 bearded turkey", legalMethods: "Shotgun, bow", notes: "Limited licenses by draw" },
        { species: "Wild Turkey", seasonType: "Fall", dates: "Sep 1 – Oct 31, 2025", bagLimit: "1 turkey either sex", legalMethods: "Shotgun, bow, rifle", notes: "Limited units" },
      ],
      smallGame: [
        { species: "Cottontail Rabbit", seasonType: "General", dates: "Year-round", bagLimit: "10 daily / 20 possession", legalMethods: "Rifle, shotgun, handgun" },
        { species: "Squirrel", seasonType: "General", dates: "Year-round", bagLimit: "5 daily / 10 possession", legalMethods: "Rifle, shotgun, handgun" },
      ],
    },
    licenses: [
      { type: "Resident Hunting License", cost: "$35.17" },
      { type: "Non-Resident Hunting License", cost: "$100.71" },
      { type: "Resident Elk License (OTC)", cost: "$56.93" },
      { type: "Non-Resident Elk License (OTC)", cost: "$665.43" },
      { type: "Resident Deer License", cost: "$41.93", notes: "Draw required in most units" },
      { type: "Non-Resident Deer License", cost: "$424.43", notes: "Draw required in most units" },
      { type: "Youth License (12–17)", cost: "Reduced fees apply" },
      { type: "Preference Point", cost: "$40 (resident) / $100 (non-resident)", notes: "Per species, per year" },
    ],
    tagsAndDraws: "Colorado uses a preference point system for limited elk, deer, pronghorn, moose, mountain goat, and bighorn sheep licenses. Hunters who are not drawn accumulate one preference point per year, increasing their odds in subsequent draws. The primary draw application period is typically March through early April. Over-the-counter elk licenses are available for archery and some rifle seasons in many units — these do not require a draw. Leftover licenses from the draw are sold on a first-come, first-served basis in August.",
    harvestReporting: "Colorado requires mandatory harvest reporting for all big game species. Hunters must report harvest within 5 days of kill through the CPW online system or by phone. Chronic Wasting Disease testing is mandatory in designated CWD management areas. Failure to report is a violation that can affect future license eligibility.",
  },
  {
    stateSlug: "montana",
    stateName: "Montana",
    stateAbbr: "MT",
    overview: "Montana is one of the premier hunting destinations in North America, with vast tracts of public land and diverse big game populations including elk, mule deer, white-tailed deer, pronghorn, moose, mountain goat, and bighorn sheep. Approximately 30 million acres of public land are open to hunting. The state maintains a general elk and deer season with relatively affordable resident tags, though non-resident licenses are limited by a cap and lottery system.",
    wildlifeAgency: "Montana Fish, Wildlife & Parks",
    wildlifeAgencyUrl: "https://fwp.mt.gov/hunt",
    regulationsUrl: "https://fwp.mt.gov/hunt/regulations",
    hunterEdUrl: "https://fwp.mt.gov/education/hunter",
    violationHotline: "TIP-MONT: 1-800-847-6668",
    seasons: {
      bigGame: [
        { species: "Elk", seasonType: "Archery", dates: "Sep 6 – Oct 19, 2025", bagLimit: "1 elk per general license", legalMethods: "Bow and arrow, crossbow (disabled permit)" },
        { species: "Elk", seasonType: "General Rifle", dates: "Oct 25 – Nov 30, 2025", bagLimit: "1 elk per general license", legalMethods: "Rifle, shotgun, handgun, muzzleloader, bow", notes: "Brow-tined bull or antlerless elk, depending on district" },
        { species: "Mule Deer", seasonType: "General", dates: "Oct 25 – Nov 30, 2025", bagLimit: "1 deer per general license", legalMethods: "Rifle, shotgun, handgun, muzzleloader, bow", notes: "Antler restrictions vary by district" },
        { species: "White-tailed Deer", seasonType: "General", dates: "Oct 25 – Nov 30, 2025", bagLimit: "1 deer per general license", legalMethods: "Rifle, shotgun, handgun, muzzleloader, bow" },
        { species: "Pronghorn", seasonType: "General", dates: "Oct 11 – Nov 23, 2025", bagLimit: "1 pronghorn", legalMethods: "Rifle, shotgun, handgun, muzzleloader, bow", notes: "License by draw in most districts" },
        { species: "Black Bear", seasonType: "Spring", dates: "Apr 15 – May 31, 2026", bagLimit: "1 bear", legalMethods: "Rifle, bow, muzzleloader", notes: "No baiting. Hound hunting prohibited." },
        { species: "Black Bear", seasonType: "Fall", dates: "Sep 6 – Nov 30, 2025", bagLimit: "1 bear", legalMethods: "Rifle, bow, muzzleloader" },
        { species: "Mountain Lion", seasonType: "General", dates: "Dec 1, 2025 – Apr 14, 2026", bagLimit: "1 lion per year", legalMethods: "Rifle, bow, handgun", notes: "Quotas apply by district" },
      ],
      upland: [
        { species: "Ring-necked Pheasant", seasonType: "General", dates: "Oct 11 – Jan 1, 2026", bagLimit: "3 daily / 9 possession", legalMethods: "Shotgun" },
        { species: "Sage Grouse", seasonType: "General", dates: "Sep 1 – Sep 30, 2025", bagLimit: "2 daily / 4 possession", legalMethods: "Shotgun", notes: "Limited areas — check regulations for open areas" },
        { species: "Sharp-tailed Grouse", seasonType: "General", dates: "Sep 1 – Jan 1, 2026", bagLimit: "4 daily / 8 possession", legalMethods: "Shotgun" },
      ],
      waterfowl: [
        { species: "Ducks", seasonType: "General", dates: "Varies by zone — Oct through Jan", bagLimit: "6 daily (species-specific limits)", legalMethods: "Shotgun (non-toxic shot required)", notes: "Federal duck stamp + HIP required" },
      ],
      turkey: [
        { species: "Wild Turkey", seasonType: "Spring", dates: "Apr 12 – May 15, 2026", bagLimit: "1 bearded turkey per license", legalMethods: "Shotgun, bow" },
        { species: "Wild Turkey", seasonType: "Fall", dates: "Sep 1 – Nov 30, 2025", bagLimit: "1 turkey either sex", legalMethods: "Shotgun, bow, rifle" },
      ],
      smallGame: [
        { species: "Cottontail Rabbit", seasonType: "General", dates: "Sep 1 – Mar 31, 2026", bagLimit: "10 daily", legalMethods: "Rifle, shotgun, handgun" },
        { species: "Snowshoe Hare", seasonType: "General", dates: "Sep 1 – Mar 31, 2026", bagLimit: "10 daily", legalMethods: "Rifle, shotgun, handgun" },
      ],
    },
    licenses: [
      { type: "Resident Conservation License", cost: "$8", notes: "Required base license" },
      { type: "Resident Deer/Elk Combination", cost: "$28" },
      { type: "Non-Resident Conservation License", cost: "$10" },
      { type: "Non-Resident Deer/Elk Combination", cost: "$1,050", notes: "Limited by annual cap — lottery required" },
      { type: "Non-Resident Deer License Only", cost: "$527" },
      { type: "Youth (12–17)", cost: "Reduced fees" },
      { type: "Federal Duck Stamp", cost: "$25", notes: "Required for waterfowl" },
    ],
    tagsAndDraws: "Montana limits non-resident big game licenses through an annual cap — approximately 17,000 deer/elk combination licenses are available. A lottery drawing determines which non-residents receive licenses. Applications open in March. Residents can purchase general deer and elk licenses over the counter. Special permits for moose, mountain goat, bighorn sheep, and antelope require a drawing for both residents and non-residents. Montana does not use a preference or bonus point system — all drawings are purely random.",
    harvestReporting: "Montana requires all big game animals to be checked and reported. Elk and deer must be reported through the FWP harvest reporting system within 24 hours. CWD surveillance testing is mandatory in designated areas. Moose, mountain goat, and bighorn sheep require mandatory check within 24 hours of harvest.",
  },
  {
    stateSlug: "wisconsin",
    stateName: "Wisconsin",
    stateAbbr: "WI",
    overview: "Wisconsin has a deep hunting culture, with over 600,000 licensed deer hunters making the November gun deer season one of the largest organized hunts in the world. The state offers excellent white-tailed deer, turkey, waterfowl, and small game hunting across a mix of public and private land. Wisconsin has been at the forefront of CWD management, with extensive testing and management zones that affect hunting regulations in many counties.",
    wildlifeAgency: "Wisconsin Department of Natural Resources",
    wildlifeAgencyUrl: "https://dnr.wisconsin.gov/topic/hunt",
    regulationsUrl: "https://dnr.wisconsin.gov/topic/hunt/regulations",
    hunterEdUrl: "https://dnr.wisconsin.gov/topic/hunt/education",
    violationHotline: "WDNR Tip Line: 1-800-847-9367",
    seasons: {
      bigGame: [
        { species: "White-tailed Deer", seasonType: "Archery/Crossbow", dates: "Sep 13 – Jan 4, 2026", bagLimit: "1 buck + bonus antlerless tags available", legalMethods: "Bow and arrow, crossbow", notes: "Continuous season except during 9-day gun season" },
        { species: "White-tailed Deer", seasonType: "Gun", dates: "Nov 22 – Nov 30, 2025", bagLimit: "1 buck + bonus antlerless tags", legalMethods: "Rifle, shotgun, handgun, muzzleloader", notes: "CWD zones have mandatory testing and additional antlerless tags" },
        { species: "White-tailed Deer", seasonType: "Muzzleloader", dates: "Dec 1 – Dec 10, 2025", bagLimit: "1 deer (antlerless in most units)", legalMethods: "Muzzleloader only" },
        { species: "Black Bear", seasonType: "General", dates: "Sep 3 – Oct 7, 2025", bagLimit: "1 bear per year", legalMethods: "Rifle, shotgun, bow, muzzleloader", notes: "Permit required by drawing. Baiting and hound hunting permitted in designated zones." },
      ],
      upland: [
        { species: "Ring-necked Pheasant", seasonType: "General", dates: "Oct 18 – Dec 31, 2025", bagLimit: "2 daily (roosters only) / 5 possession", legalMethods: "Shotgun" },
        { species: "Ruffed Grouse", seasonType: "General", dates: "Sep 13 – Jan 4, 2026", bagLimit: "5 daily / 10 possession", legalMethods: "Shotgun" },
      ],
      waterfowl: [
        { species: "Ducks", seasonType: "General", dates: "Varies by zone — Sep through Nov", bagLimit: "6 daily (species-specific limits)", legalMethods: "Shotgun (non-toxic shot required)", notes: "Federal duck stamp + HIP required" },
      ],
      turkey: [
        { species: "Wild Turkey", seasonType: "Spring", dates: "Apr 16 – May 27, 2026", bagLimit: "1 bearded turkey per period", legalMethods: "Shotgun, bow", notes: "Six time periods — assigned by drawing" },
        { species: "Wild Turkey", seasonType: "Fall", dates: "Sep 13 – Nov 21, 2025", bagLimit: "1 turkey either sex", legalMethods: "Shotgun, bow, rifle", notes: "Select zones only" },
      ],
      smallGame: [
        { species: "Cottontail Rabbit", seasonType: "General", dates: "Oct 18 – Feb 28, 2026", bagLimit: "3 daily", legalMethods: "Rifle, shotgun, handgun" },
        { species: "Fox/Gray Squirrel", seasonType: "General", dates: "Sep 13 – Jan 31, 2026", bagLimit: "5 daily", legalMethods: "Rifle, shotgun, handgun" },
      ],
    },
    licenses: [
      { type: "Resident Gun Deer License", cost: "$24" },
      { type: "Resident Archery/Crossbow License", cost: "$24" },
      { type: "Non-Resident Gun Deer License", cost: "$160" },
      { type: "Non-Resident Archery License", cost: "$160" },
      { type: "Youth Deer License (under 12)", cost: "Free", notes: "Mentored hunting program" },
      { type: "Senior License (65+)", cost: "Reduced fees" },
      { type: "Turkey License", cost: "$15 (resident) / $60 (non-resident)" },
      { type: "Small Game License", cost: "$18 (resident) / $85 (non-resident)" },
    ],
    tagsAndDraws: "Wisconsin deer tags are generally available over the counter for the gun and archery seasons. Bonus antlerless tags are available in many counties and are often unlimited in CWD management zones. Bear permits are issued through a preference point drawing — wait times can exceed 5 years for popular zones. Spring turkey permits are allocated through a random drawing across six time periods. Applications are typically due in December for spring turkey and bear.",
    harvestReporting: "Wisconsin requires mandatory GameReg electronic registration for all deer, bear, and turkey harvested. Registration must be completed by 5:00 PM the day after harvest through the online system or by phone. CWD testing is strongly encouraged statewide and mandatory in designated CWD Affected Areas. Testing is free through WDNR sampling stations.",
  },
  {
    stateSlug: "pennsylvania",
    stateName: "Pennsylvania",
    stateAbbr: "PA",
    overview: "Pennsylvania has nearly one million licensed hunters, making it one of the most active hunting states in the country. The state offers over 1.5 million acres of State Game Lands open to public hunting, plus additional state forest lands. White-tailed deer is the primary big game species, with the state managing antler restrictions that require bucks to have at least 3 points on one side in most Wildlife Management Units. Pennsylvania also has growing populations of black bear and wild turkey.",
    wildlifeAgency: "Pennsylvania Game Commission",
    wildlifeAgencyUrl: "https://www.pgc.pa.gov/Hunting/Pages/default.aspx",
    regulationsUrl: "https://www.pgc.pa.gov/Hunting/Law/Pages/HuntingSeasons.aspx",
    hunterEdUrl: "https://www.pgc.pa.gov/Education/HunterTrapper Education/Pages/default.aspx",
    violationHotline: "Operation Game Thief: 1-888-742-8001",
    seasons: {
      bigGame: [
        { species: "White-tailed Deer", seasonType: "Archery", dates: "Sep 20 – Nov 15 & Dec 26 – Jan 24, 2026", bagLimit: "1 antlered + 1 antlerless (with tag)", legalMethods: "Bow and arrow, crossbow" },
        { species: "White-tailed Deer", seasonType: "Regular Rifle", dates: "Dec 1 – Dec 13, 2025", bagLimit: "1 antlered (3 pts on one side)", legalMethods: "Rifle, shotgun, handgun, muzzleloader", notes: "Antler point restriction: 3 points on one side in most WMUs" },
        { species: "White-tailed Deer", seasonType: "Flintlock Muzzleloader", dates: "Dec 26 – Jan 17, 2026", bagLimit: "1 antlerless (with tag)", legalMethods: "Flintlock muzzleloader only" },
        { species: "Black Bear", seasonType: "General", dates: "Nov 22 – Nov 25, 2025", bagLimit: "1 bear per year", legalMethods: "Rifle, shotgun, handgun, muzzleloader, bow", notes: "Extended archery and muzzleloader bear seasons in some WMUs" },
        { species: "Elk", seasonType: "General", dates: "Nov 3 – Nov 8, 2025", bagLimit: "1 elk", legalMethods: "Rifle, bow, muzzleloader", notes: "Very limited licenses by drawing — extremely competitive" },
      ],
      upland: [
        { species: "Ring-necked Pheasant", seasonType: "General", dates: "Oct 25 – Nov 29, 2025", bagLimit: "2 daily (roosters only) / 4 possession", legalMethods: "Shotgun", notes: "Stocked birds on State Game Lands. Wild populations very limited." },
        { species: "Ruffed Grouse", seasonType: "General", dates: "Oct 18 – Nov 29, 2025 & Dec 15 – Jan 24, 2026", bagLimit: "2 daily / 4 possession", legalMethods: "Shotgun" },
      ],
      waterfowl: [
        { species: "Ducks", seasonType: "General", dates: "Varies by zone — Oct through Jan", bagLimit: "6 daily (species-specific limits)", legalMethods: "Shotgun (non-toxic shot required)", notes: "Federal duck stamp + HIP required" },
      ],
      turkey: [
        { species: "Wild Turkey", seasonType: "Spring (youth)", dates: "Apr 19, 2026", bagLimit: "1 bearded turkey", legalMethods: "Shotgun, bow" },
        { species: "Wild Turkey", seasonType: "Spring (general)", dates: "May 3 – May 31, 2026", bagLimit: "1 bearded turkey", legalMethods: "Shotgun, bow" },
        { species: "Wild Turkey", seasonType: "Fall", dates: "Nov 1 – Nov 15, 2025", bagLimit: "1 turkey either sex", legalMethods: "Shotgun, bow, rifle" },
      ],
      smallGame: [
        { species: "Cottontail Rabbit", seasonType: "General", dates: "Oct 18 – Feb 28, 2026", bagLimit: "4 daily", legalMethods: "Rifle, shotgun, handgun" },
        { species: "Squirrel", seasonType: "General", dates: "Sep 13 – Nov 29, 2025 & Dec 15 – Feb 28, 2026", bagLimit: "6 daily", legalMethods: "Rifle, shotgun, handgun" },
      ],
    },
    licenses: [
      { type: "Resident General License", cost: "$20.97" },
      { type: "Non-Resident General License", cost: "$101.97" },
      { type: "Resident Archery License (add-on)", cost: "$26.97" },
      { type: "Muzzleloader License (add-on)", cost: "$16.97" },
      { type: "Antlerless Deer License", cost: "$6.97 (resident) / $26.97 (non-resident)", notes: "Required for antlerless deer" },
      { type: "Bear License", cost: "$16.97 (resident) / $36.97 (non-resident)" },
      { type: "Turkey License", cost: "$21.97 (resident) / $51.97 (non-resident)" },
      { type: "Youth (under 17)", cost: "Reduced fees" },
      { type: "Senior Lifetime License (65+)", cost: "$51.97" },
    ],
    tagsAndDraws: "Most Pennsylvania hunting licenses are available over the counter. Antlerless deer licenses are allocated by Wildlife Management Unit through a lottery drawing. DMAP (Deer Management Assistance Program) tags provide additional antlerless opportunities on participating properties. Elk licenses are extremely limited (approximately 100 per year) and awarded by drawing. Bear licenses are available over the counter with a general hunting license.",
    harvestReporting: "Pennsylvania requires mandatory reporting of all deer, bear, turkey, and elk harvested. Reporting must be completed by 10 PM the day of harvest through the PA Game Commission HuntFishPA app or by phone. CWD testing is available at check stations and is mandatory in Disease Management Areas.",
  },
  {
    stateSlug: "michigan",
    stateName: "Michigan",
    stateAbbr: "MI",
    overview: "Michigan ranks among the top hunting states with over 600,000 deer hunters and nearly 4 million acres of state-managed public land. The state is divided into Upper and Lower Peninsulas with distinct season structures. Michigan offers excellent white-tailed deer, wild turkey, waterfowl, and small game hunting. The state has been managing bovine tuberculosis in deer herds in the northeast Lower Peninsula and CWD in the south-central Lower Peninsula, affecting regulations in those areas.",
    wildlifeAgency: "Michigan Department of Natural Resources",
    wildlifeAgencyUrl: "https://www.michigan.gov/dnr/things-to-do/hunting",
    regulationsUrl: "https://www.michigan.gov/dnr/managing-resources/wildlife/deer/regulations",
    hunterEdUrl: "https://www.michigan.gov/dnr/education/hunter-education",
    violationHotline: "Report All Poaching (RAP): 1-800-292-7800",
    seasons: {
      bigGame: [
        { species: "White-tailed Deer", seasonType: "Archery", dates: "Oct 1 – Nov 14 & Dec 1 – Jan 1, 2026", bagLimit: "Varies by license type", legalMethods: "Bow and arrow, crossbow" },
        { species: "White-tailed Deer", seasonType: "Firearm", dates: "Nov 15 – Nov 30, 2025", bagLimit: "1 antlered (4 pts on one side in some DMUs)", legalMethods: "Rifle, shotgun, handgun, muzzleloader", notes: "Antler point restrictions in many DMUs" },
        { species: "White-tailed Deer", seasonType: "Muzzleloader", dates: "Dec 5 – Dec 21, 2025", bagLimit: "1 deer", legalMethods: "Muzzleloader only", notes: "Zone-specific" },
        { species: "White-tailed Deer", seasonType: "Late Antlerless (Lower Peninsula)", dates: "Dec 22 – Jan 1, 2026", bagLimit: "Antlerless only", legalMethods: "Rifle, shotgun, muzzleloader, bow", notes: "Private land only in many areas" },
        { species: "Black Bear", seasonType: "General", dates: "Sep 15 – Oct 26, 2025", bagLimit: "1 bear", legalMethods: "Rifle, shotgun, bow, muzzleloader", notes: "License by drawing. Baiting permitted." },
        { species: "Elk", seasonType: "General", dates: "Dec 9 – Dec 17, 2025", bagLimit: "1 elk", legalMethods: "Rifle, bow, muzzleloader", notes: "Very limited licenses (approx. 200) by drawing. Northeast Lower Peninsula only." },
      ],
      upland: [
        { species: "Ring-necked Pheasant", seasonType: "General", dates: "Oct 10 – Nov 14 & Dec 1 – Jan 1, 2026", bagLimit: "2 daily (roosters only) / 4 possession", legalMethods: "Shotgun" },
        { species: "Ruffed Grouse", seasonType: "General", dates: "Sep 15 – Nov 14 & Dec 1 – Jan 1, 2026", bagLimit: "5 daily / 10 possession", legalMethods: "Shotgun" },
        { species: "Woodcock", seasonType: "General", dates: "Sep 15 – Nov 14, 2025", bagLimit: "3 daily / 9 possession", legalMethods: "Shotgun" },
      ],
      waterfowl: [
        { species: "Ducks", seasonType: "General", dates: "Varies by zone — Oct through Dec", bagLimit: "6 daily (species-specific limits)", legalMethods: "Shotgun (non-toxic shot required)", notes: "Federal duck stamp + HIP required. Michigan has excellent Great Lakes waterfowl hunting." },
      ],
      turkey: [
        { species: "Wild Turkey", seasonType: "Spring", dates: "Apr 20 – May 31, 2026", bagLimit: "1 bearded turkey", legalMethods: "Shotgun, bow" },
        { species: "Wild Turkey", seasonType: "Fall", dates: "Sep 15 – Nov 14, 2025", bagLimit: "1 turkey either sex", legalMethods: "Shotgun, bow, rifle", notes: "Select units only" },
      ],
      smallGame: [
        { species: "Cottontail Rabbit", seasonType: "General", dates: "Sep 15 – Mar 31, 2026", bagLimit: "5 daily", legalMethods: "Rifle, shotgun, handgun" },
        { species: "Fox/Gray Squirrel", seasonType: "General", dates: "Sep 15 – Mar 31, 2026", bagLimit: "5 daily", legalMethods: "Rifle, shotgun, handgun" },
      ],
    },
    licenses: [
      { type: "Resident Base License", cost: "$11" },
      { type: "Resident Deer License", cost: "$20" },
      { type: "Resident Deer Combo (2 tags)", cost: "$40" },
      { type: "Non-Resident Base License", cost: "$11" },
      { type: "Non-Resident Deer License", cost: "$190" },
      { type: "Resident Turkey License", cost: "$15" },
      { type: "Non-Resident Turkey License", cost: "$75" },
      { type: "Youth (10–16)", cost: "Reduced fees", notes: "Mentored youth hunting available under 10" },
      { type: "Senior (65+)", cost: "$6 base license" },
    ],
    tagsAndDraws: "Michigan deer licenses are generally available over the counter. Antlerless deer licenses are available by application in some Deer Management Units. Bear licenses are allocated through a preference point drawing — wait times vary by Bear Management Unit from 1 to 7+ years. Elk licenses (approximately 200 per year) are by lottery drawing. Applications for bear and elk are typically due in June.",
    harvestReporting: "Michigan requires mandatory harvest reporting for all deer, bear, turkey, and elk within 72 hours of harvest through the Michigan DNR website or by phone. Deer harvested in bovine TB and CWD management areas must be presented at a DNR check station for testing. Testing is free and results are provided to hunters.",
  },
  {
    stateSlug: "georgia",
    stateName: "Georgia",
    stateAbbr: "GA",
    overview: "Georgia offers a long deer season and diverse hunting opportunities across the state's varied terrain — from the Blue Ridge Mountains in the north to the coastal plains in the south. The state has approximately 375,000 deer hunters and manages over 1 million acres of Wildlife Management Areas open to public hunting. Georgia is particularly known for excellent white-tailed deer, wild turkey, and feral hog hunting. Dove hunting is deeply rooted in the state's hunting culture.",
    wildlifeAgency: "Georgia Department of Natural Resources — Wildlife Resources Division",
    wildlifeAgencyUrl: "https://georgiawildlife.com/hunting",
    regulationsUrl: "https://georgiawildlife.com/hunting/regulations",
    hunterEdUrl: "https://georgiawildlife.com/hunter-education",
    violationHotline: "Ranger Hotline: 1-800-241-4113",
    seasons: {
      bigGame: [
        { species: "White-tailed Deer", seasonType: "Archery", dates: "Sep 13 – Oct 10, 2025", bagLimit: "12 deer per season, no more than 2 antlered", legalMethods: "Bow and arrow, crossbow" },
        { species: "White-tailed Deer", seasonType: "Firearms", dates: "Oct 18 – Jan 11, 2026", bagLimit: "12 deer per season, no more than 2 antlered", legalMethods: "Rifle, shotgun, handgun, muzzleloader, bow", notes: "Liberal bag limits. Antler restrictions vary by county." },
        { species: "Feral Hog", seasonType: "Year-round", dates: "No closed season", bagLimit: "No limit", legalMethods: "Any legal firearm, bow, trapping", notes: "No license required on private land" },
        { species: "Black Bear", seasonType: "General", dates: "Sep 13 – Jan 11, 2026", bagLimit: "1 bear per year", legalMethods: "Rifle, shotgun, bow, muzzleloader", notes: "North Georgia mountains only. Specific counties designated." },
      ],
      upland: [
        { species: "Northern Bobwhite Quail", seasonType: "General", dates: "Nov 15 – Feb 28, 2026", bagLimit: "12 daily", legalMethods: "Shotgun" },
        { species: "Mourning Dove", seasonType: "General", dates: "Sep 1 – Oct 4 & Nov 8 – Nov 23 & Dec 13 – Jan 15, 2026", bagLimit: "15 daily", legalMethods: "Shotgun", notes: "Split season" },
      ],
      waterfowl: [
        { species: "Ducks", seasonType: "General", dates: "Varies by zone — Nov through Jan", bagLimit: "6 daily (species-specific limits)", legalMethods: "Shotgun (non-toxic shot required)", notes: "Federal duck stamp + HIP required" },
      ],
      turkey: [
        { species: "Wild Turkey", seasonType: "Spring", dates: "Mar 21 – May 15, 2026", bagLimit: "3 gobblers per spring season", legalMethods: "Shotgun, bow" },
        { species: "Wild Turkey", seasonType: "Fall", dates: "Oct 18 – Nov 28, 2025", bagLimit: "1 turkey either sex", legalMethods: "Shotgun, bow, rifle", notes: "Select counties only" },
      ],
      smallGame: [
        { species: "Cottontail Rabbit", seasonType: "General", dates: "Nov 15 – Feb 28, 2026", bagLimit: "10 daily", legalMethods: "Rifle, shotgun, handgun" },
        { species: "Squirrel", seasonType: "General", dates: "Aug 15 – Feb 28, 2026", bagLimit: "12 daily", legalMethods: "Rifle, shotgun, handgun" },
      ],
    },
    licenses: [
      { type: "Resident Hunting License", cost: "$15" },
      { type: "Non-Resident Hunting License", cost: "$130" },
      { type: "Big Game License (deer/bear)", cost: "$19 (resident) / $170 (non-resident)" },
      { type: "Turkey License", cost: "$5 (resident) / $75 (non-resident)" },
      { type: "Youth (under 16)", cost: "Free", notes: "Hunter education required" },
      { type: "Senior (65+)", cost: "$7 (honorary license)" },
      { type: "Federal Duck Stamp", cost: "$25", notes: "Required for waterfowl" },
    ],
    tagsAndDraws: "Most Georgia hunting licenses are available over the counter. Quota hunts on Wildlife Management Areas require a drawing — applications are submitted online through the Georgia Outdoor Recreation Licensing system. There is no preference point system for most quota hunts. Alligator harvest permits are issued by lottery. Applications for quota hunts are typically due in August.",
    harvestReporting: "Georgia requires mandatory harvest reporting for all deer, turkey, and bear within 24 hours of harvest through the Ga Hunt/Fish app, online, or by phone. Failure to report is a violation. CWD surveillance is conducted through voluntary sampling at check stations.",
  },
  {
    stateSlug: "oregon",
    stateName: "Oregon",
    stateAbbr: "OR",
    overview: "Oregon offers diverse hunting across dramatically varied terrain — from the Cascade Range and high desert to coastal rainforests and river valleys. The state manages over 3 million acres of public land open to hunting. Major big game species include Roosevelt and Rocky Mountain elk, mule deer, black-tailed deer, pronghorn, and black bear. Oregon uses a controlled hunt tag system for most big game, with a preference point system for popular units.",
    wildlifeAgency: "Oregon Department of Fish and Wildlife",
    wildlifeAgencyUrl: "https://www.dfw.state.or.us/resources/hunting/",
    regulationsUrl: "https://www.dfw.state.or.us/resources/hunting/big_game/regulations/",
    hunterEdUrl: "https://www.dfw.state.or.us/education/hunter/",
    violationHotline: "TIP Line: 1-800-452-7888",
    seasons: {
      bigGame: [
        { species: "Roosevelt/Rocky Mountain Elk", seasonType: "Archery", dates: "Aug 30 – Sep 28, 2025", bagLimit: "1 elk per tag", legalMethods: "Bow and arrow", notes: "General archery season. Controlled hunt tags for rifle seasons." },
        { species: "Roosevelt/Rocky Mountain Elk", seasonType: "Rifle", dates: "Oct 25 – Nov 7, 2025 (varies by unit)", bagLimit: "1 elk per tag", legalMethods: "Rifle, muzzleloader", notes: "Most rifle elk tags by controlled hunt drawing" },
        { species: "Mule Deer / Black-tailed Deer", seasonType: "Archery", dates: "Aug 30 – Sep 28, 2025", bagLimit: "1 deer per tag", legalMethods: "Bow and arrow" },
        { species: "Mule Deer / Black-tailed Deer", seasonType: "Rifle", dates: "Oct 4 – Nov 7, 2025 (varies by unit)", bagLimit: "1 deer per tag", legalMethods: "Rifle, muzzleloader", notes: "Western Oregon general season available; eastern Oregon mostly controlled hunt" },
        { species: "Pronghorn", seasonType: "General", dates: "Aug 9 – Aug 24, 2025", bagLimit: "1 pronghorn per tag", legalMethods: "Rifle, bow, muzzleloader", notes: "All tags by controlled hunt drawing" },
        { species: "Black Bear", seasonType: "General", dates: "Aug 1 – Dec 31, 2025", bagLimit: "1 bear per year", legalMethods: "Rifle, bow, muzzleloader", notes: "General season tag available over the counter. No hound hunting." },
        { species: "Mountain Lion", seasonType: "General", dates: "Year-round", bagLimit: "1 lion per year", legalMethods: "Rifle, bow, handgun", notes: "Tag available with hunting license. No hound hunting." },
      ],
      upland: [
        { species: "Ring-necked Pheasant", seasonType: "General", dates: "Oct 11 – Dec 31, 2025", bagLimit: "2 daily (roosters only) / 6 possession", legalMethods: "Shotgun" },
        { species: "Mountain Quail", seasonType: "General", dates: "Oct 11 – Jan 31, 2026", bagLimit: "5 daily / 15 possession", legalMethods: "Shotgun" },
        { species: "Chukar", seasonType: "General", dates: "Oct 11 – Jan 31, 2026", bagLimit: "8 daily / 24 possession", legalMethods: "Shotgun" },
      ],
      waterfowl: [
        { species: "Ducks", seasonType: "General", dates: "Varies by zone — Oct through Jan", bagLimit: "7 daily (species-specific limits)", legalMethods: "Shotgun (non-toxic shot required)", notes: "Federal duck stamp + HIP required. Oregon has excellent Pacific Flyway waterfowl hunting." },
      ],
      turkey: [
        { species: "Wild Turkey", seasonType: "Spring", dates: "Apr 15 – May 31, 2026", bagLimit: "1 bearded turkey per tag", legalMethods: "Shotgun, bow", notes: "Second tag available in some units" },
        { species: "Wild Turkey", seasonType: "Fall", dates: "Oct 1 – Dec 31, 2025", bagLimit: "1 turkey either sex", legalMethods: "Shotgun, bow, rifle" },
      ],
      smallGame: [
        { species: "Western Cottontail", seasonType: "General", dates: "Year-round", bagLimit: "5 daily / 10 possession", legalMethods: "Rifle, shotgun, handgun" },
        { species: "Western Gray Squirrel", seasonType: "General", dates: "Closed", bagLimit: "N/A", legalMethods: "N/A", notes: "Protected species — no open season" },
      ],
    },
    licenses: [
      { type: "Resident Hunting License", cost: "$33.50" },
      { type: "Non-Resident Hunting License", cost: "$169.50" },
      { type: "Resident Deer Tag", cost: "$30.50" },
      { type: "Non-Resident Deer Tag", cost: "$349.50" },
      { type: "Resident Elk Tag", cost: "$44.50" },
      { type: "Non-Resident Elk Tag", cost: "$544.50" },
      { type: "Youth (12–17)", cost: "Reduced fees" },
      { type: "Controlled Hunt Application Fee", cost: "$8 per application" },
    ],
    tagsAndDraws: "Oregon uses a controlled hunt system for most elk rifle tags, eastern Oregon deer, pronghorn, and premium units. Applications are due in mid-May. A preference point system applies — hunters who are not drawn accumulate points that improve odds in subsequent years. General season archery tags and western Oregon deer rifle tags are available over the counter. Leftover controlled hunt tags go on sale in August.",
    harvestReporting: "Oregon requires mandatory harvest reporting for all deer and elk within 10 days of harvest. Hunters must report online or by phone. Mandatory CWD testing is required for deer and elk harvested in designated surveillance areas. All big game animals must be validated (tagged) immediately upon harvest.",
  },
  {
    stateSlug: "missouri",
    stateName: "Missouri",
    stateAbbr: "MO",
    overview: "Missouri is one of the most successful deer and turkey management stories in the country. The state has over 500,000 deer hunters and is consistently ranked among the top states for trophy white-tailed deer and wild turkey harvest. The Missouri Department of Conservation manages over 1,000 conservation areas totaling roughly 1 million acres open to public hunting. The state is also known for excellent waterfowl hunting along the Missouri and Mississippi River corridors.",
    wildlifeAgency: "Missouri Department of Conservation",
    wildlifeAgencyUrl: "https://mdc.mo.gov/hunting-trapping",
    regulationsUrl: "https://mdc.mo.gov/hunting-trapping/regulations",
    hunterEdUrl: "https://mdc.mo.gov/hunting-trapping/hunter-education",
    violationHotline: "Operation Game Thief: 1-800-392-1111",
    seasons: {
      bigGame: [
        { species: "White-tailed Deer", seasonType: "Archery", dates: "Sep 15 – Nov 14 & Nov 26 – Jan 15, 2026", bagLimit: "2 antlered + unlimited antlerless in some counties", legalMethods: "Bow and arrow, crossbow" },
        { species: "White-tailed Deer", seasonType: "Firearms (November)", dates: "Nov 15 – Nov 25, 2025", bagLimit: "1 antlered + 1 antlerless", legalMethods: "Rifle, shotgun, handgun, muzzleloader", notes: "11-day season" },
        { species: "White-tailed Deer", seasonType: "Alternative Methods", dates: "Dec 27 – Jan 6, 2026", bagLimit: "1 antlerless", legalMethods: "Muzzleloader, handgun, bow, atlatl" },
        { species: "Black Bear", seasonType: "General", dates: "Oct 18 – Oct 27, 2025", bagLimit: "1 bear per year", legalMethods: "Rifle, bow, muzzleloader", notes: "Limited permits by drawing. Southern Missouri only. Established 2021." },
        { species: "Feral Hog", seasonType: "Year-round", dates: "No closed season on private land", bagLimit: "No limit", legalMethods: "Any legal firearm, bow, trapping", notes: "MDC actively manages hog removal. Check current policies." },
      ],
      upland: [
        { species: "Northern Bobwhite Quail", seasonType: "General", dates: "Nov 1 – Jan 15, 2026", bagLimit: "8 daily / 16 possession", legalMethods: "Shotgun" },
        { species: "Ring-necked Pheasant", seasonType: "General", dates: "Nov 1 – Jan 15, 2026", bagLimit: "2 daily (roosters only) / 4 possession", legalMethods: "Shotgun", notes: "Northern Missouri primarily" },
      ],
      waterfowl: [
        { species: "Ducks", seasonType: "General", dates: "Varies by zone — Oct through Jan", bagLimit: "6 daily (species-specific limits)", legalMethods: "Shotgun (non-toxic shot required)", notes: "Federal duck stamp + HIP required. Mississippi Flyway." },
      ],
      turkey: [
        { species: "Wild Turkey", seasonType: "Spring (youth)", dates: "Apr 11 – Apr 12, 2026", bagLimit: "1 bearded turkey", legalMethods: "Shotgun, bow" },
        { species: "Wild Turkey", seasonType: "Spring (regular)", dates: "Apr 20 – May 10, 2026", bagLimit: "2 bearded turkeys", legalMethods: "Shotgun, bow" },
        { species: "Wild Turkey", seasonType: "Fall", dates: "Oct 1 – Oct 31, 2025", bagLimit: "2 turkeys either sex", legalMethods: "Shotgun, bow, rifle" },
      ],
      smallGame: [
        { species: "Cottontail Rabbit", seasonType: "General", dates: "Oct 1 – Feb 15, 2026", bagLimit: "6 daily / 12 possession", legalMethods: "Rifle, shotgun, handgun" },
        { species: "Squirrel", seasonType: "General", dates: "May 24 – Feb 15, 2026", bagLimit: "10 daily / 20 possession", legalMethods: "Rifle, shotgun, handgun" },
      ],
    },
    licenses: [
      { type: "Resident Hunting Permit", cost: "$19" },
      { type: "Non-Resident Hunting Permit", cost: "$125" },
      { type: "Resident Deer/Turkey Permit", cost: "$17" },
      { type: "Non-Resident Deer/Turkey Permit", cost: "$225" },
      { type: "Resident Archery Permit", cost: "$24" },
      { type: "Non-Resident Archery Permit", cost: "$225" },
      { type: "Youth (under 16)", cost: "Free", notes: "With hunter education" },
      { type: "Senior (65+)", cost: "$7" },
    ],
    tagsAndDraws: "Most Missouri hunting permits are available over the counter. Managed deer hunts on Conservation Areas require a drawing — apply through the MDC online system. Bear permits are extremely limited (approximately 400) and issued by lottery drawing. No preference point system is used for most drawings. Elk restoration permits (very limited) are available by drawing in designated areas.",
    harvestReporting: "Missouri requires mandatory Telecheck for all deer, turkey, and bear harvested. Registration must be completed by midnight the day of harvest through the MDC website, app, or by phone. Each animal receives a unique confirmation number that serves as the harvest tag. CWD sampling is conducted at voluntary check stations.",
  },
  {
    stateSlug: "wyoming",
    stateName: "Wyoming",
    stateAbbr: "WY",
    overview: "Wyoming offers some of the finest big game hunting in North America, with healthy populations of elk, mule deer, pronghorn, moose, bighorn sheep, and mountain goat. The state has more pronghorn than people and consistently produces trophy-class elk and mule deer. Roughly half of Wyoming's land is publicly accessible. The state uses a preference point system for limited-quota areas and offers general licenses for some elk and deer hunts.",
    wildlifeAgency: "Wyoming Game and Fish Department",
    wildlifeAgencyUrl: "https://wgfd.wyo.gov/Hunting",
    regulationsUrl: "https://wgfd.wyo.gov/Regulations",
    hunterEdUrl: "https://wgfd.wyo.gov/Education/Hunter-Education",
    violationHotline: "STOP Poaching Hotline: 1-877-943-3847",
    seasons: {
      bigGame: [
        { species: "Elk", seasonType: "General (Area 7 & others)", dates: "Oct 1 – Oct 31, 2025", bagLimit: "1 elk per license", legalMethods: "Rifle, bow, muzzleloader", notes: "General licenses available in some areas. Limited quota in most." },
        { species: "Elk", seasonType: "Archery", dates: "Sep 1 – Sep 30, 2025", bagLimit: "1 elk per license", legalMethods: "Bow and arrow" },
        { species: "Mule Deer", seasonType: "General", dates: "Oct 1 – Oct 31, 2025", bagLimit: "1 deer per license", legalMethods: "Rifle, bow, muzzleloader", notes: "General licenses available in some regions" },
        { species: "White-tailed Deer", seasonType: "General", dates: "Oct 1 – Nov 30, 2025", bagLimit: "1 deer per license", legalMethods: "Rifle, bow, muzzleloader", notes: "Eastern Wyoming primarily" },
        { species: "Pronghorn", seasonType: "General", dates: "Oct 1 – Oct 31, 2025", bagLimit: "1 pronghorn per license", legalMethods: "Rifle, bow, muzzleloader", notes: "Wyoming has the largest pronghorn population in the world" },
        { species: "Moose", seasonType: "General", dates: "Oct 1 – Oct 31, 2025", bagLimit: "1 moose", legalMethods: "Rifle, bow, muzzleloader", notes: "Very limited licenses by drawing. Once in a lifetime for residents." },
        { species: "Bighorn Sheep", seasonType: "General", dates: "Sep 1 – Oct 31, 2025", bagLimit: "1 ram", legalMethods: "Rifle, bow, muzzleloader", notes: "Extremely limited. Once in a lifetime. 75/25 resident/non-resident split." },
        { species: "Black Bear", seasonType: "Spring", dates: "Apr 15 – May 31, 2026", bagLimit: "1 bear per year", legalMethods: "Rifle, bow, muzzleloader" },
        { species: "Black Bear", seasonType: "Fall", dates: "Sep 1 – Oct 31, 2025", bagLimit: "1 bear per year", legalMethods: "Rifle, bow, muzzleloader" },
        { species: "Mountain Lion", seasonType: "General", dates: "Sep 1 – Mar 31, 2026", bagLimit: "1 lion per year", legalMethods: "Rifle, bow, handgun", notes: "Quotas by hunt area" },
      ],
      upland: [
        { species: "Sage Grouse", seasonType: "General", dates: "Sep 20 – Sep 30, 2025", bagLimit: "2 daily / 4 possession", legalMethods: "Shotgun", notes: "Short season. Check area closures." },
        { species: "Sharp-tailed Grouse", seasonType: "General", dates: "Sep 1 – Nov 30, 2025", bagLimit: "3 daily / 9 possession", legalMethods: "Shotgun" },
        { species: "Ring-necked Pheasant", seasonType: "General", dates: "Oct 1 – Dec 31, 2025", bagLimit: "3 daily / 9 possession", legalMethods: "Shotgun" },
      ],
      waterfowl: [
        { species: "Ducks", seasonType: "General", dates: "Varies by zone — Oct through Jan", bagLimit: "6 daily (species-specific limits)", legalMethods: "Shotgun (non-toxic shot required)", notes: "Federal duck stamp + HIP required" },
      ],
      turkey: [
        { species: "Wild Turkey", seasonType: "Spring", dates: "Apr 1 – May 31, 2026", bagLimit: "1 bearded turkey per license", legalMethods: "Shotgun, bow" },
        { species: "Wild Turkey", seasonType: "Fall", dates: "Sep 1 – Jan 15, 2026", bagLimit: "1 turkey either sex", legalMethods: "Shotgun, bow, rifle" },
      ],
      smallGame: [
        { species: "Cottontail Rabbit", seasonType: "General", dates: "Sep 1 – Mar 31, 2026", bagLimit: "10 daily", legalMethods: "Rifle, shotgun, handgun" },
        { species: "Snowshoe Hare", seasonType: "General", dates: "Sep 1 – Mar 31, 2026", bagLimit: "10 daily", legalMethods: "Rifle, shotgun, handgun" },
      ],
    },
    licenses: [
      { type: "Resident Hunting License", cost: "$27" },
      { type: "Non-Resident Hunting License", cost: "$307", notes: "Required base license" },
      { type: "Resident Elk License", cost: "$52" },
      { type: "Non-Resident Elk License", cost: "$587 (full price) / $312 (cow/calf)" },
      { type: "Resident Deer License", cost: "$43" },
      { type: "Non-Resident Deer License", cost: "$352" },
      { type: "Resident Pronghorn License", cost: "$43" },
      { type: "Non-Resident Pronghorn License", cost: "$267" },
      { type: "Youth (under 14)", cost: "Free resident youth licenses available" },
      { type: "Preference Point", cost: "$30 (resident) / $100 (non-resident)", notes: "Per species, per year" },
    ],
    tagsAndDraws: "Wyoming uses a preference point system for limited-quota big game licenses. Applications are due in January for the following fall. Hunters who are not drawn receive one preference point. General elk and deer licenses are available in some areas without a drawing. Moose, bighorn sheep, and mountain goat are once-in-a-lifetime draws for residents. The state allocates approximately 75% of limited-quota licenses to residents and 25% to non-residents.",
    harvestReporting: "Wyoming requires all big game animals to be checked and reported within specified timeframes. Elk and deer must be reported within 10 days of the close of the season or within 30 days of harvest, whichever is earlier. All trophy game (bear, mountain lion) must be checked within 3 days. CWD testing is mandatory for deer and elk harvested in designated CWD management areas.",
  },
];

export const huntingStateSlugs = huntingStates.map((s) => s.stateSlug);

export function getHuntingData(stateSlug: string): HuntingStateData | undefined {
  return huntingStates.find((s) => s.stateSlug === stateSlug);
}
