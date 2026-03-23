export interface LawSection {
  heading: string;
  content: string;
  keyStatute?: string;
}

export interface StateLawDetail {
  stateSlug: string;
  effectiveDate: string;
  effectiveLaw: string;
  sections: LawSection[];
  citations: string;
}

export const stateLawDetails: StateLawDetail[] = [
  {
    stateSlug: "texas",
    effectiveDate: "September 1, 2021",
    effectiveLaw: "HB 1927, Firearm Carry Act of 2021",
    sections: [
      {
        heading: "Concealed & Open Carry",
        content: "Texas is a constitutional carry state. Under the Firearm Carry Act of 2021 (HB 1927), individuals aged 21 and older who can legally possess a firearm may carry a handgun — concealed or openly in a holster — without obtaining a License to Carry (LTC). The LTC remains available and is recommended for interstate reciprocity and access to certain locations where unlicensed carry is restricted.",
        keyStatute: "Texas Penal Code § 46.02 — Unlawful Carrying Weapons. As amended by HB 1927, this section no longer criminalizes the carrying of a handgun by a person aged 21 or older who is not otherwise prohibited from possessing a firearm.",
      },
      {
        heading: "Who Cannot Carry",
        content: "A person is prohibited from carrying a handgun without a license if, within the preceding five years, they were convicted of: assault causing bodily injury (Penal Code § 22.01), deadly conduct (§ 22.05), terroristic threat (§ 22.07), or disorderly conduct involving a firearm (§ 42.01). Convicted felons are prohibited from possessing any firearm under both Texas Penal Code § 46.04 and federal law (18 U.S.C. § 922(g)).",
      },
      {
        heading: "Prohibited Locations",
        content: "Even with constitutional carry, handguns are prohibited in: schools and school events (Penal Code § 46.03), polling places on election day, courts and court offices, racetracks, secured areas of airports, bars and establishments deriving 51% or more of revenue from on-premises alcohol sales (identified by the red \"51%\" sign), correctional facilities, hospitals and nursing homes (unless authorized), amusement parks, places of religious worship (unless authorized by the organization), and government meetings. Private businesses may prohibit carry by posting notice under Penal Code §§ 30.05, 30.06, and 30.07.",
      },
      {
        heading: "Purchase Requirements",
        content: "No state permit is required to purchase a firearm. All purchases from licensed dealers require a federal NICS background check via ATF Form 4473. Private sales between Texas residents do not require a background check under state law. Buyers must be 21 to purchase a handgun from an FFL (18 for long guns). There is no waiting period and no state firearms registry.",
      },
    ],
    citations: "Texas Penal Code Chapter 46; Texas Government Code Chapter 411, Subchapter H; HB 1927 (87th Legislature, 2021).",
  },
  {
    stateSlug: "florida",
    effectiveDate: "July 1, 2023",
    effectiveLaw: "SB 150",
    sections: [
      {
        heading: "Concealed Carry",
        content: "Florida enacted permitless concealed carry under SB 150, effective July 1, 2023. Any person who meets the eligibility requirements for a Concealed Weapon License (CWL) may carry a concealed weapon or firearm without a license. The person must carry valid government-issued identification and display it upon demand by a law enforcement officer. The CWL remains available through the Florida Department of Agriculture and Consumer Services and is recommended for interstate reciprocity.",
        keyStatute: "Florida Statutes § 790.01 — as amended by SB 150, authorizes concealed carry without a license for eligible persons.",
      },
      {
        heading: "Open Carry",
        content: "Open carry remains prohibited in Florida except in limited circumstances: when fishing, camping, hunting, or at an indoor shooting range, or when traveling to and from these activities. In September 2024, the First District Court of Appeals found the open carry ban violated the Second Amendment, though the legal landscape continues to evolve.",
      },
      {
        heading: "Who Cannot Carry",
        content: "Eligibility mirrors CWL requirements under Florida Statutes § 790.06: must be a U.S. citizen or permanent resident, at least 21 years old, no felony convictions, not under indictment, no domestic violence misdemeanor convictions, no injunctions for protection against domestic violence or repeat violence, not adjudicated mentally defective or committed to a mental institution, no chronic substance abuse, and no DUI convictions within the preceding three years.",
      },
      {
        heading: "Prohibited Locations",
        content: "Florida Statutes § 790.06(12) prohibits carrying in: police, sheriff, and highway patrol stations; detention facilities and prisons; courthouses; polling places; government meetings; school administration buildings and school-sponsored events; career centers; college and university facilities (unless locked in a vehicle); establishments serving alcohol (bars, not restaurants); hospitals providing mental health services; airport terminals; and the Florida State Capitol complex.",
      },
      {
        heading: "Purchase Requirements",
        content: "No state permit is required to purchase a firearm. All purchases from FFLs require a NICS background check. Florida imposes a mandatory three-day waiting period (excluding weekends and holidays) for handgun purchases from licensed dealers, though CWL holders and active law enforcement are exempt. There is no state firearms registry.",
      },
    ],
    citations: "Florida Statutes Chapter 790; SB 150 (2023 Legislative Session).",
  },
  {
    stateSlug: "california",
    effectiveDate: "January 1, 2024",
    effectiveLaw: "SB 2, updated post-Bruen framework",
    sections: [
      {
        heading: "Concealed Carry",
        content: "California is a shall-issue state following the Supreme Court's Bruen decision. A Concealed Carry Weapon (CCW) permit is required and is issued by the county sheriff or local police chief. Under SB 2 (effective January 1, 2024), California revised its CCW framework to comply with Bruen while adding new restrictions on where permit holders can carry and expanding training requirements.",
        keyStatute: "California Penal Code § 26150 — authorizes county sheriffs to issue CCW licenses to qualified residents. § 26155 — authorizes chiefs of police to issue CCW licenses.",
      },
      {
        heading: "Open Carry",
        content: "Open carry of both loaded and unloaded firearms is prohibited in all incorporated areas and most unincorporated areas. California Penal Code §§ 25850 (loaded) and 26350 (unloaded handguns) govern open carry restrictions.",
      },
      {
        heading: "Who Cannot Carry",
        content: "Applicants for a CCW must be: at least 21 years old, a resident of the county of application, of good moral character, completed a training course of not less than 16 hours, and demonstrate good cause (though post-Bruen, the subjective \"good cause\" standard has been struck down — the practical requirement is meeting objective eligibility criteria). Prohibited persons include convicted felons, persons with specified misdemeanor convictions (including domestic violence), persons subject to restraining orders, persons addicted to narcotics, and persons found to be mentally ill.",
      },
      {
        heading: "Prohibited Locations",
        content: "Under SB 2, CCW holders are prohibited from carrying in numerous \"sensitive places\" including: government buildings, public transit, parks, playgrounds, churches and houses of worship, banks, zoos, museums, libraries, hospitals and medical facilities, bars and restaurants serving alcohol, stadiums, entertainment venues, parking areas for these locations, and any private property that does not affirmatively permit firearms. Many of these restrictions are subject to ongoing litigation.",
      },
      {
        heading: "Purchase Requirements",
        content: "California imposes extensive purchase requirements: a Firearm Safety Certificate (FSC) is required for all purchases; a 10-day waiting period applies to all firearms purchases; background checks are required for all sales including private transfers (universal background checks); handgun purchases are limited to one per 30 days; California maintains an Assault Weapons Control Act restricting specific firearm types; all firearms must be registered with the Department of Justice; and all sales must be processed through a licensed dealer.",
      },
    ],
    citations: "California Penal Code §§ 25400-26400 (carry laws); § 26150-26225 (CCW licensing); §§ 30510-30530 (assault weapons); SB 2 (2023-2024 Session).",
  },
  {
    stateSlug: "new-york",
    effectiveDate: "September 1, 2022",
    effectiveLaw: "Concealed Carry Improvement Act, S51001",
    sections: [
      {
        heading: "Concealed Carry",
        content: "New York requires a license to possess and carry handguns. Following the Supreme Court's Bruen decision striking down New York's \"proper cause\" requirement, the state enacted the Concealed Carry Improvement Act (CCIA) establishing new requirements. Applications are processed at the county level through the licensing officer (typically a judge or police commissioner). The process includes an application, character references, in-person interview, 16 hours of classroom training, 2 hours of live-fire training, and a review of social media accounts.",
        keyStatute: "New York Penal Law § 400.00 — governs the licensing of firearms, including requirements for issuance and grounds for denial or revocation.",
      },
      {
        heading: "Open Carry",
        content: "Open carry is not permitted in New York. All handgun carry requires a concealed carry license.",
      },
      {
        heading: "Who Cannot Carry",
        content: "Applicants must be at least 21 years old (no exemption for 18-20), a citizen of the United States, of good moral character, not convicted of a felony or serious offense, not subject to a protection order, not involuntarily committed to a mental institution, and not have had a license revoked. The CCIA added requirements for disclosure of social media accounts and in-person interviews.",
      },
      {
        heading: "Prohibited Locations",
        content: "The CCIA designates extensive sensitive locations where concealed carry is prohibited: government buildings, courts, polling places, public transit, Times Square, parks and public areas, places of worship, libraries, museums, theaters, entertainment venues, hospitals and healthcare facilities, nurseries and preschools, schools and colleges, shelters, bars and restaurants serving alcohol, and all private property unless the owner has posted a sign expressly permitting firearms. Several of these restrictions are subject to ongoing federal litigation.",
      },
      {
        heading: "Purchase Requirements",
        content: "New York requires a license to possess a handgun (not just to carry). Long gun purchases require a background check through the state system. A semi-automatic rifle license was enacted in 2022 requiring applicants to be 21 (raised from 18). New York has an assault weapons ban, a large-capacity magazine ban (more than 10 rounds), mandatory safe storage requirements, universal background checks for all sales, and a red flag law (Extreme Risk Protection Order).",
      },
    ],
    citations: "New York Penal Law Article 400 (licensing); Concealed Carry Improvement Act (S51001, 2022); New York State Rifle & Pistol Association v. Bruen, 597 U.S. 1 (2022).",
  },
  {
    stateSlug: "arizona",
    effectiveDate: "July 29, 2010",
    effectiveLaw: "SB 1108",
    sections: [
      {
        heading: "Concealed & Open Carry",
        content: "Arizona was among the first states to adopt constitutional carry in 2010. Any person aged 21 or older who can legally possess a firearm may carry concealed without a permit. Open carry of firearms is legal for anyone 18 or older. Arizona also issues a Concealed Weapons Permit (CWP) through the Department of Public Safety for those who want reciprocity with other states.",
        keyStatute: "Arizona Revised Statutes § 13-3102 — defines misconduct involving weapons. § 13-3112 — governs the concealed weapons permit system.",
      },
      {
        heading: "Who Cannot Carry",
        content: "Prohibited possessors under Arizona law include: convicted felons, persons found to constitute a danger to themselves or others and adjudicated as mentally incompetent (§ 13-3101), undocumented aliens, and persons convicted of a domestic violence offense. Arizona's prohibited possessor statute (§ 13-3101(A)(7)) defines who is prohibited from possessing firearms.",
      },
      {
        heading: "Prohibited Locations",
        content: "Arizona prohibits firearms in: polling places on election day, nuclear or hydroelectric generating stations, military installations, correctional facilities, federal buildings, school grounds (K-12, with exceptions for unloaded firearms in locked vehicles), and any establishment or event where the owner has posted notice prohibiting firearms. Arizona preempts most local firearms regulations under § 13-3108.",
      },
      {
        heading: "Purchase Requirements",
        content: "No state permit is required to purchase any firearm. All FFL sales require a federal NICS background check. Private sales do not require a background check. There is no waiting period, no firearms registration, and no state assault weapons ban.",
      },
    ],
    citations: "Arizona Revised Statutes Title 13, Chapter 31 (weapons and explosives); SB 1108 (2010).",
  },
  {
    stateSlug: "georgia",
    effectiveDate: "April 12, 2022",
    effectiveLaw: "SB 319, Constitutional Carry Act",
    sections: [
      {
        heading: "Concealed & Open Carry",
        content: "Georgia enacted constitutional carry under SB 319, effective April 12, 2022. Georgia residents aged 21 or older (18 for active-duty military) who can legally possess a firearm may carry a handgun openly or concealed without a Georgia Weapons Carry License (GWL). The GWL remains available for reciprocity with other states.",
        keyStatute: "O.C.G.A. § 16-11-126 — as amended by SB 319, provides that a person licensed or eligible to be licensed may carry a weapon in certain locations. O.C.G.A. § 16-11-129 — governs weapons carry license issuance.",
      },
      {
        heading: "Who Cannot Carry",
        content: "Persons prohibited from carrying include: convicted felons, persons under 21 (18 for military), persons involuntarily hospitalized for mental health treatment within the past five years, persons adjudicated mentally incompetent, fugitives from justice, persons convicted of unlawful manufacture or distribution of controlled substances, persons convicted of certain misdemeanors within the past five years (including carrying a weapon without a license, pointing a weapon at another, or family violence battery).",
      },
      {
        heading: "Prohibited Locations",
        content: "Georgia prohibits carry in: government buildings where screening is provided (O.C.G.A. § 16-11-127(e)), courthouses, jails and prisons, mental health facilities, nuclear facilities, and within 150 feet of a polling place. Georgia generally allows carry in churches, bars, and government buildings without screening, making it more permissive than many states.",
      },
      {
        heading: "Purchase Requirements",
        content: "No permit is required to purchase a firearm. All FFL sales require a federal NICS background check. Private sales do not require a background check under state law. There is no waiting period, no state firearms registry, and no state assault weapons ban. Georgia preempts local firearms regulations under O.C.G.A. § 16-11-173.",
      },
    ],
    citations: "O.C.G.A. Title 16, Chapter 11, Article 4 (dangerous instrumentalities and practices); SB 319 (2022 Session).",
  },
  {
    stateSlug: "ohio",
    effectiveDate: "June 13, 2022",
    effectiveLaw: "SB 215",
    sections: [
      {
        heading: "Concealed & Open Carry",
        content: "Ohio adopted constitutional carry under SB 215, effective June 13, 2022. Adults aged 21 and older who are legally eligible to possess firearms may carry concealed without a permit. Open carry is legal for anyone 18 or older who can legally possess a firearm. Ohio continues to issue the Concealed Handgun License (CHL) through county sheriffs for reciprocity purposes.",
        keyStatute: "Ohio Revised Code § 2923.111 — as added by SB 215, provides that a person who is not prohibited from possessing a firearm may carry a concealed handgun without a license. § 2923.125 — governs CHL issuance.",
      },
      {
        heading: "Duty to Inform",
        content: "SB 215 eliminated the affirmative duty to inform law enforcement of a concealed handgun during a traffic stop. However, a person must still truthfully respond if directly asked by an officer whether they are carrying a concealed handgun.",
      },
      {
        heading: "Who Cannot Carry",
        content: "Ohio's prohibited persons include: convicted felons, fugitives from justice, persons under indictment for a felony, persons adjudicated as mentally defective or committed to a mental institution, unlawful users of controlled substances, persons convicted of domestic violence offenses, persons subject to protection orders, and persons dishonorably discharged from the military.",
      },
      {
        heading: "Prohibited Locations",
        content: "Ohio prohibits carry in: police stations, sheriff offices, and highway patrol posts; courthouses; government buildings with security screening; school safety zones (grounds of a school or preschool, with vehicle exceptions); colleges and universities (governed by institutional policy); and any establishment with a posted prohibition. Ohio has broad preemption preventing most local firearms ordinances under ORC § 9.68.",
      },
      {
        heading: "Purchase Requirements",
        content: "No permit is required to purchase any firearm. All FFL sales require a federal NICS background check. Private sales do not require a background check. There is no waiting period, no state firearms registry, and no state assault weapons ban.",
      },
    ],
    citations: "Ohio Revised Code Chapter 2923 (conspiracy, attempt, and complicity; weapons control); SB 215 (134th General Assembly, 2022).",
  },
  {
    stateSlug: "colorado",
    effectiveDate: "Various dates; most recent significant legislation 2023-2024",
    effectiveLaw: "Multiple bills",
    sections: [
      {
        heading: "Concealed Carry",
        content: "Colorado requires a Concealed Handgun Permit (CHP) for concealed carry, issued by the county sheriff. Colorado is a shall-issue state — the sheriff must issue the permit if the applicant meets all statutory requirements. The permit is valid for five years.",
        keyStatute: "C.R.S. § 18-12-203 — establishes criteria for obtaining a concealed handgun permit. § 18-12-105.6 — prohibits unlawful carrying of a concealed weapon.",
      },
      {
        heading: "Open Carry",
        content: "Open carry is legal in Colorado for anyone who can legally possess a firearm. However, Denver and some other municipalities have local restrictions on open carry that predate the state's limited preemption statute. Colorado's preemption law (C.R.S. § 29-11.7-103) allows local governments to enact firearms regulations that are more restrictive than state law in certain areas.",
      },
      {
        heading: "Who Cannot Carry",
        content: "CHP applicants must be: at least 21 years old, a legal resident of Colorado, not prohibited under federal or state law from possessing firearms, not chronically addicted to alcohol, not an unlawful user of controlled substances, not subject to a protection order, and have completed a handgun training course demonstrating competence. The training must include live-fire proficiency.",
      },
      {
        heading: "Prohibited Locations",
        content: "Colorado prohibits firearms in: K-12 schools (C.R.S. § 18-12-105.5), federal buildings, courthouses (at the discretion of the chief judge), and any private property with posted prohibition. Recent legislation (2023-2024) has added restrictions including prohibitions in certain government buildings and sensitive locations, though specific provisions are subject to ongoing legal challenges.",
      },
      {
        heading: "Purchase Requirements",
        content: "Colorado requires a background check for all firearms sales, including private transfers (universal background checks enacted in 2013, HB 1229). There is no waiting period for most purchases, though a 2024 law imposed a three-day waiting period. Colorado has a large-capacity magazine ban (more than 15 rounds, enacted 2013). There is no state assault weapons ban and no state firearms registry. Colorado also enacted a red flag law (Extreme Risk Protection Order) in 2019.",
      },
    ],
    citations: "C.R.S. Title 18, Article 12 (offenses relating to firearms and weapons); HB 13-1229 (universal background checks); HB 19-1177 (red flag law).",
  },
  {
    stateSlug: "pennsylvania",
    effectiveDate: "Current through 2025 legislative session",
    effectiveLaw: "Pennsylvania Uniform Firearms Act",
    sections: [
      {
        heading: "Concealed Carry",
        content: "Pennsylvania requires a License to Carry Firearms (LTCF) for concealed carry, issued by the county sheriff. Pennsylvania is a shall-issue state. The LTCF is valid for five years and costs $19. The process is typically straightforward with no training requirement.",
        keyStatute: "18 Pa.C.S. § 6109 — governs licenses to carry firearms. § 6106 — defines the offense of carrying a firearm without a license.",
      },
      {
        heading: "Open Carry",
        content: "Open carry of a firearm is legal without a permit in most of Pennsylvania for anyone who can legally possess a firearm. The exception is Philadelphia, where an LTCF is required to openly carry a firearm in public. This Philadelphia exception is established under 18 Pa.C.S. § 6108.",
      },
      {
        heading: "Who Cannot Carry",
        content: "Persons prohibited from possessing firearms under 18 Pa.C.S. § 6105 include: convicted felons, persons convicted of specified misdemeanors (including misdemeanor DUI third or subsequent offense), fugitives from justice, persons adjudicated as mentally incompetent or involuntarily committed, persons subject to active protection from abuse orders, persons convicted of driving under the influence three or more times within a five-year period, and illegal aliens.",
      },
      {
        heading: "Prohibited Locations",
        content: "Pennsylvania prohibits firearms in: courthouses (at the discretion of the county), federal buildings, and school property (18 Pa.C.S. § 912). Pennsylvania's preemption statute (18 Pa.C.S. § 6120) prevents municipalities from enacting firearms ordinances more restrictive than state law, with the exception of discharge regulations.",
      },
      {
        heading: "Purchase Requirements",
        content: "All handgun purchases require a background check through the Pennsylvania Instant Check System (PICS), operated by the Pennsylvania State Police — this applies to both dealer and private sales. Long gun private sales between unlicensed individuals do not require a background check. There is no waiting period and no state firearms registry. Pennsylvania does not have an assault weapons ban or a magazine capacity restriction.",
      },
    ],
    citations: "18 Pa.C.S. Chapter 61 (firearms and other dangerous articles); Pennsylvania Uniform Firearms Act.",
  },
  {
    stateSlug: "michigan",
    effectiveDate: "February 13, 2024",
    effectiveLaw: "2023 gun safety legislative package",
    sections: [
      {
        heading: "Concealed Carry",
        content: "Michigan requires a Concealed Pistol License (CPL) for concealed carry, issued by the county clerk. Michigan is a shall-issue state. The CPL requires completion of a pistol safety training course including classroom instruction and range time. The license is valid for five years (previously four years, extended by recent legislation).",
        keyStatute: "MCL § 28.425b — establishes requirements for CPL issuance. MCL § 750.227 — defines the offense of carrying a concealed weapon without a license.",
      },
      {
        heading: "Open Carry",
        content: "Open carry of a handgun is legal in Michigan without a permit for anyone who is legally allowed to possess a firearm and is at least 18 years old. However, a CPL is required to open carry in certain locations designated as \"pistol-free zones\" (CPL holders may carry in some pistol-free zones that are off-limits to non-CPL holders).",
      },
      {
        heading: "Who Cannot Carry",
        content: "Prohibited persons include: convicted felons (within 8 years of completing all penalties for specified felonies, or permanently for other felonies), persons under 21 (for CPL; 18 for purchase and open carry), persons dishonorably discharged from the military, persons adjudicated as mentally ill, persons subject to personal protection orders, persons convicted of certain misdemeanors within the preceding eight years, and unlawful users of controlled substances.",
      },
      {
        heading: "New Gun Safety Laws (2023-2024)",
        content: "Michigan enacted a package of gun safety legislation in 2023-2024 including: universal background checks for all firearm sales including private transfers; a safe storage requirement making it a misdemeanor to negligently store a firearm where a minor could access it; and a red flag law (Extreme Risk Protection Order) allowing courts to temporarily remove firearms from individuals deemed a risk. These laws represent a significant shift in Michigan's firearms regulatory landscape.",
      },
      {
        heading: "Prohibited Locations",
        content: "Michigan designates several pistol-free zones under MCL § 28.425o where carrying is restricted: schools and school property, day care centers, sports arenas and stadiums, bars and taverns, churches and houses of worship, hospitals, dormitories, casinos, and entertainment facilities with a seating capacity of 2,500 or more. CPL holders may carry concealed in some of these locations; open carry in these zones requires a CPL.",
      },
      {
        heading: "Purchase Requirements",
        content: "A License to Purchase is required for all handgun purchases in Michigan, obtained from local law enforcement. All sales (dealer and private) require a background check under the new universal background check law. There is no waiting period. Michigan maintains a handgun registry — all handgun sales must be reported to local law enforcement. There is no state assault weapons ban and no magazine capacity restriction.",
      },
    ],
    citations: "MCL Chapters 28 and 750 (weapons and firearms); 2023 Public Acts 17, 18, 19, 23, 29, 38 (gun safety package).",
  },
];

export const getStateLawDetail = (stateSlug: string): StateLawDetail | undefined =>
  stateLawDetails.find((d) => d.stateSlug === stateSlug);
