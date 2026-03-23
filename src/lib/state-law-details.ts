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
  {
    stateSlug: "illinois",
    effectiveDate: "January 1, 2024",
    effectiveLaw: "assault weapons ban under HB 5471; FOID system ongoing",
    sections: [
      { heading: "Concealed Carry", content: "Illinois requires a Concealed Carry License (CCL) issued by the Illinois State Police. Applicants must hold a valid Firearm Owners Identification (FOID) card, complete 16 hours of training (including range qualification), submit fingerprints, and pass a background check. The CCL is valid for five years.", keyStatute: "430 ILCS 66 — Firearm Concealed Carry Act. 430 ILCS 65 — Firearm Owners Identification Card Act." },
      { heading: "Open Carry", content: "Open carry is prohibited in Illinois. All lawful carry of firearms in public requires a CCL and must be concealed." },
      { heading: "Who Cannot Carry", content: "Prohibited persons include: convicted felons, persons adjudicated as mentally disabled, minors (under 21 for CCL), persons convicted of domestic battery or aggravated domestic battery, persons subject to active orders of protection, persons convicted of assault or battery within the past five years, persons who are patients in a mental health facility, persons addicted to narcotics, and persons who have been convicted of certain misdemeanors within the preceding five years." },
      { heading: "Prohibited Locations", content: "Illinois designates extensive prohibited locations under 430 ILCS 66/65: government buildings, courts, prisons and jails, schools and school property, childcare facilities, public parks and playgrounds, Cook County Forest Preserve, public transportation (CTA, Metra, Pace), airports, hospitals and mental health facilities, public libraries, amusement parks, zoos, museums, stadiums, racetracks, casinos, bars (over 50% alcohol revenue), nuclear facilities, and any private property with posted prohibition." },
      { heading: "Purchase Requirements", content: "Illinois requires a Firearm Owners Identification (FOID) card to purchase or possess any firearm or ammunition. All sales require a background check — private sellers must verify the buyer's FOID card through the Illinois State Police. There is a 72-hour waiting period for handguns and 24 hours for long guns. Illinois enacted an assault weapons ban in January 2023 (HB 5471, the Protect Illinois Communities Act) prohibiting the sale of certain semi-automatic weapons and magazines over 10 rounds (handguns) or 15 rounds (long guns). Previously owned items may be kept but must be registered." },
    ],
    citations: "430 ILCS 65 (FOID Act); 430 ILCS 66 (Concealed Carry Act); 720 ILCS 5/24 (deadly weapons); HB 5471 (Protect Illinois Communities Act, 2023).",
  },
  {
    stateSlug: "north-carolina",
    effectiveDate: "March 29, 2023",
    effectiveLaw: "SB 41, repeal of pistol purchase permit",
    sections: [
      { heading: "Concealed Carry", content: "North Carolina requires a Concealed Handgun Permit (CHP) for concealed carry, issued by the county sheriff. The state is shall-issue. Applicants must complete an approved firearms safety course including live-fire training, be at least 21 years old, and pass a background check. The permit is valid for five years.", keyStatute: "N.C.G.S. § 14-415.10 through 14-415.27 — governs concealed handgun permits." },
      { heading: "Open Carry", content: "Open carry is legal in North Carolina without a permit for anyone who can legally possess a firearm. However, it is illegal to carry a weapon (open or concealed) at parades, funerals, or picket lines, and local governments may regulate the display of firearms on public property." },
      { heading: "Pistol Purchase Permit Repeal", content: "In March 2023, the North Carolina legislature overrode Governor Cooper's veto of SB 41, repealing the state's longstanding pistol purchase permit requirement. Previously, buyers needed a permit from the county sheriff to purchase a handgun. Now, handgun purchases from FFLs follow the standard federal NICS background check without an additional state permit." },
      { heading: "Who Cannot Carry", content: "Prohibited persons include: convicted felons, persons under indictment for a felony, fugitives from justice, unlawful users of controlled substances, persons adjudicated as mentally incompetent, illegal aliens, persons dishonorably discharged, persons subject to domestic violence protective orders, and persons convicted of a misdemeanor crime of domestic violence." },
      { heading: "Prohibited Locations", content: "North Carolina prohibits carrying (concealed or openly) in: areas of assemblies where admission is charged, educational property (schools K-12 and campuses), state and federal buildings, the General Assembly, courthouses, law enforcement facilities, establishments where alcohol is sold and consumed, parades and demonstrations, and any posted private property." },
      { heading: "Purchase Requirements", content: "All FFL purchases require a NICS background check. Private handgun sales no longer require a purchase permit (as of SB 41, 2023). There is no waiting period. North Carolina does not have an assault weapons ban or magazine capacity restriction." },
    ],
    citations: "N.C.G.S. Chapter 14, Article 54B (concealed handgun permit); N.C.G.S. § 14-269 (carrying concealed weapons); SB 41 (2023).",
  },
  {
    stateSlug: "new-jersey",
    effectiveDate: "December 22, 2022",
    effectiveLaw: "A4769, post-Bruen carry reform",
    sections: [
      { heading: "Concealed Carry", content: "New Jersey requires a Permit to Carry a Handgun (PCH) for concealed carry. Following the Bruen decision, New Jersey enacted A4769 to comply while adding new restrictions. The permit is issued by the county superior court after application through local police. Applicants must demonstrate familiarity with firearms through training, pass a background check, provide character references, and be at least 21 years old. The permit is valid for two years.", keyStatute: "N.J.S.A. 2C:58-4 — governs permits to carry handguns." },
      { heading: "Open Carry", content: "Open carry is effectively prohibited in New Jersey. The carry permit authorizes concealed carry only." },
      { heading: "Who Cannot Carry", content: "New Jersey has some of the most restrictive eligibility criteria in the nation. Prohibited persons include: convicted felons, persons convicted of certain disorderly persons offenses (including domestic violence), persons confined for mental disorder, persons with substance abuse history, minors, persons subject to restraining orders, and persons who have had a firearm seized under the state's red flag law." },
      { heading: "Prohibited Locations", content: "New Jersey designates extensive sensitive places: government buildings, courts, schools and colleges, childcare facilities, parks and beaches, entertainment venues, restaurants and bars, hospitals and healthcare facilities, public transit, shelters, museums, libraries, casinos, airports, and any private property that does not display signage expressly permitting firearms. Many of these restrictions are subject to ongoing federal litigation." },
      { heading: "Purchase Requirements", content: "New Jersey requires a Firearms Purchaser Identification Card (FPIC) for all long gun and ammunition purchases, and a separate Permit to Purchase a Handgun for each handgun acquisition. All sales require a background check through the state NICS system. There is no waiting period beyond the permit processing time (which can take weeks to months). New Jersey has an assault weapons ban and a magazine capacity limit of 10 rounds. All firearms must be registered." },
    ],
    citations: "N.J.S.A. 2C:39 (weapons); N.J.S.A. 2C:58 (licensing and registration); A4769 (2022 post-Bruen legislation).",
  },
  {
    stateSlug: "virginia",
    effectiveDate: "July 1, 2024",
    effectiveLaw: "most recent legislative session changes",
    sections: [
      { heading: "Concealed Carry", content: "Virginia requires a Concealed Handgun Permit (CHP) for concealed carry, issued by the circuit court of the applicant's county or city of residence. Virginia is a shall-issue state. Applicants must demonstrate firearms competence through one of several approved methods (including completion of a firearms safety course, military service, or law enforcement training). The permit is valid for five years.", keyStatute: "Virginia Code § 18.2-308 — defines carrying concealed weapons offense and permit exemptions. § 18.2-308.02 through 308.014 — governs CHP application and issuance." },
      { heading: "Open Carry", content: "Open carry is legal in Virginia without a permit for anyone who can legally possess a firearm, with the exception of certain locations. Virginia does restrict open carry of certain firearms (assault-style weapons) in some localities under local ordinance authority granted by the state legislature." },
      { heading: "Who Cannot Carry", content: "Prohibited persons include: convicted felons, persons acquitted by reason of insanity, persons adjudicated legally incompetent, persons involuntarily committed to a mental health facility, persons subject to protective orders, persons convicted of certain drug offenses, persons convicted of assault and battery of a family member within three years, persons convicted of two or more DUI offenses within five years, and persons under 21." },
      { heading: "Prohibited Locations", content: "Virginia prohibits concealed carry in: places of religious worship during a service (without good and sufficient reason), courthouses, school property (K-12), Capitol Square, the Governor's mansion, and air carrier airport terminals. Virginia also prohibits carrying in any establishment licensed to sell alcohol for on-premises consumption while consuming alcohol." },
      { heading: "Purchase Requirements", content: "Virginia enacted universal background checks in 2020, requiring a background check for all firearms sales including private transfers. There is no waiting period. Virginia has a red flag law (substantial risk order) enacted in 2020. There is no state assault weapons ban, though some localities may regulate certain firearms under authority granted by the legislature. There is no state firearms registry and no magazine capacity restriction." },
    ],
    citations: "Virginia Code Title 18.2, Chapter 7 (crimes involving health and safety); Virginia Code § 18.2-308 series (concealed weapons).",
  },
  {
    stateSlug: "washington",
    effectiveDate: "January 1, 2024",
    effectiveLaw: "most recent legislation including assault weapons ban",
    sections: [
      { heading: "Concealed Carry", content: "Washington requires a Concealed Pistol License (CPL) for concealed carry, issued by local law enforcement (city police or county sheriff). Washington is a shall-issue state. No training is required. Applicants must be at least 21 years old and pass a background check. The license is valid for five years.", keyStatute: "RCW 9.41.070 — governs concealed pistol license issuance." },
      { heading: "Open Carry", content: "Open carry is legal in Washington without a permit for anyone who can legally possess a firearm. However, open carry is prohibited in certain locations including the state capitol and its grounds." },
      { heading: "Who Cannot Carry", content: "Prohibited persons include: convicted felons, persons under court commitment for mental health, persons subject to no-contact orders or protection orders, persons convicted of domestic violence offenses, minors under 21 (for CPL; under 21 for semi-automatic rifle purchase), persons convicted of certain drug offenses, and fugitives from justice." },
      { heading: "Prohibited Locations", content: "Washington prohibits firearms in: courtrooms and areas used in connection with court proceedings, jails and law enforcement facilities, the restricted areas of commercial airports, mental health facilities, school grounds and facilities (with limited exceptions for CPL holders in vehicles), state capitol buildings and grounds, and music festivals and similar large public events (under local authority)." },
      { heading: "Purchase Requirements", content: "Washington requires a background check for all firearms sales including private transfers (universal background checks enacted in 2014 via I-594). In 2023, Washington enacted an assault weapons ban (HB 1240) prohibiting the sale of certain semi-automatic rifles. The state also has a 10-day waiting period for all firearms purchases (enacted 2024), a magazine capacity limit of 10 rounds (enacted 2022), mandatory safe storage requirements, and a red flag law (Extreme Risk Protection Order, enacted 2017). A semi-automatic rifle purchase requires the buyer to be 21 and complete a firearms safety course." },
    ],
    citations: "RCW Chapter 9.41 (firearms and dangerous weapons); I-594 (2014, universal background checks); HB 1240 (2023, assault weapons ban).",
  },
  {
    stateSlug: "tennessee",
    effectiveDate: "July 1, 2021",
    effectiveLaw: "constitutional carry under HB 786",
    sections: [
      { heading: "Concealed & Open Carry", content: "Tennessee adopted constitutional carry under HB 786, effective July 1, 2021. However, Tennessee's version is more restrictive than most constitutional carry states — it applies only to persons 21 and older (18 for military) who are not prohibited from possessing firearms and who are citizens or lawful permanent residents. Tennessee also issues an Enhanced Handgun Carry Permit (EHCP) and a Concealed Handgun Carry Permit (CHCP) for those wanting reciprocity and access to additional carry locations.", keyStatute: "T.C.A. § 39-17-1307 — unlawful carrying or possession of a weapon. As amended by HB 786, provides permitless carry for eligible persons." },
      { heading: "Who Cannot Carry", content: "In addition to standard federal prohibitions, Tennessee's permitless carry law requires that the person: has not been convicted of stalking, has not been convicted of DUI within the past five years (or twice within the past ten years), is not the subject of an order of protection, and has not been adjudicated as a mental defective. These additional conditions make Tennessee's version more restrictive than most constitutional carry states." },
      { heading: "Prohibited Locations", content: "Tennessee prohibits carry in: schools and school grounds, judicial buildings, government buildings with posted prohibitions, any property where notice is posted prohibiting weapons, establishments that serve alcohol (unless the person has a valid EHCP and is not consuming alcohol), and hospitals and similar facilities (with posted notice)." },
      { heading: "Purchase Requirements", content: "No permit is required to purchase a firearm. All FFL sales require a federal NICS background check. Private sales do not require a background check. There is no waiting period, no state firearms registry, and no assault weapons ban or magazine restriction." },
    ],
    citations: "T.C.A. Title 39, Chapter 17, Part 13 (weapons); HB 786 (2021).",
  },
  {
    stateSlug: "indiana",
    effectiveDate: "July 1, 2022",
    effectiveLaw: "HB 1296, constitutional carry",
    sections: [
      { heading: "Concealed & Open Carry", content: "Indiana adopted constitutional carry under HB 1296, effective July 1, 2022. Persons aged 18 and older who can legally possess a firearm may carry a handgun without a permit. Indiana continues to issue the License to Carry a Handgun for reciprocity purposes, available free of charge.", keyStatute: "Indiana Code § 35-47-2-1 — carrying a handgun without a license. As amended by HB 1296, this section no longer applies to persons who are not otherwise prohibited from carrying." },
      { heading: "Who Cannot Carry", content: "Prohibited persons include: convicted felons, persons adjudicated as mentally incompetent (unless rights restored), persons under 18, persons with active protective orders, persons convicted of domestic battery, and persons who are the subject of an active arrest warrant." },
      { heading: "Prohibited Locations", content: "Indiana prohibits firearms in: school property (IC § 35-47-9), commercial aircraft, and the secure areas of airports. Indiana is notably permissive compared to many states — there is no statutory prohibition on carry in government buildings, hospitals, or establishments serving alcohol (individual property owners may still prohibit carry)." },
      { heading: "Purchase Requirements", content: "No permit is required to purchase a firearm. All FFL sales require a NICS background check. Private sales do not require a background check. There is no waiting period, no state firearms registry, no assault weapons ban, and no magazine restriction. Indiana has a red flag law (enacted 2005, one of the earliest in the nation)." },
    ],
    citations: "Indiana Code Title 35, Article 47 (weapons and instruments of violence); HB 1296 (2022).",
  },
  {
    stateSlug: "missouri",
    effectiveDate: "January 1, 2017",
    effectiveLaw: "constitutional carry under SB 656",
    sections: [
      { heading: "Concealed & Open Carry", content: "Missouri adopted constitutional carry under SB 656, effective January 1, 2017. Persons aged 19 and older (military at 18) who can legally possess a firearm may carry concealed without a permit. Open carry is legal for anyone who can legally possess a firearm. Missouri issues a Concealed Carry Permit (CCP) through county sheriffs for reciprocity purposes.", keyStatute: "RSMo § 571.030 — unlawful use of weapons. As amended, this section does not apply to constitutional carry by eligible persons. RSMo § 571.101 through 571.121 — governs the concealed carry permit system." },
      { heading: "Second Amendment Preservation Act", content: "In 2021, Missouri enacted the Second Amendment Preservation Act (HB 85), which declares federal gun laws that do not have a state equivalent to be unenforceable in Missouri and prohibits state and local cooperation with federal enforcement of those laws. This law has been subject to legal challenges." },
      { heading: "Who Cannot Carry", content: "Prohibited persons under Missouri law include: convicted felons, fugitives from justice, persons habitually intoxicated, persons currently adjudicated as mentally incompetent, and persons under 19 (18 for military). Federal prohibitions also apply." },
      { heading: "Prohibited Locations", content: "Missouri prohibits firearms in: any police, sheriff, or highway patrol office, within 25 feet of a polling place on election day, jails and prisons, courthouses, government meetings with posted prohibition, school property (with exceptions for concealed carry on school grounds by persons with a valid CCP), churches (unless authorized), establishments that post notice prohibiting firearms, and certain amusement parks." },
      { heading: "Purchase Requirements", content: "No permit is required to purchase any firearm. All FFL sales require a NICS background check. Private sales do not require a background check. There is no waiting period, no firearms registry, no assault weapons ban, and no magazine restriction." },
    ],
    citations: "RSMo Chapter 571 (weapons offenses); SB 656 (2016); HB 85 (Second Amendment Preservation Act, 2021).",
  },
  {
    stateSlug: "maryland",
    effectiveDate: "October 1, 2023",
    effectiveLaw: "SB 1, Firearm Safety Act amendments post-Bruen",
    sections: [
      { heading: "Concealed Carry", content: "Maryland requires a Wear and Carry Permit for concealed carry, issued by the Maryland State Police. Following Bruen, Maryland transitioned from may-issue to shall-issue. Applicants must complete 16 hours of classroom training and range qualification, pass a background check, and be at least 21 years old. The permit is valid for two years (three years for renewals).", keyStatute: "Maryland Criminal Law § 4-203 — wearing, carrying, or transporting a handgun. Maryland Public Safety § 5-306 — qualifications for a wear and carry permit." },
      { heading: "Open Carry", content: "Open carry is legal only with a valid Wear and Carry Permit. Without a permit, open carry is prohibited." },
      { heading: "Who Cannot Carry", content: "Prohibited persons include: convicted felons, persons convicted of certain misdemeanors (including assault, domestic violence), persons under 21, fugitives from justice, habitual drunkards, persons addicted to controlled substances, persons with mental disorders, persons under protective orders, and persons convicted of a crime of violence." },
      { heading: "Prohibited Locations", content: "Maryland prohibits carry in: public demonstrations, legislative buildings, schools and institutions of higher education, government buildings (certain ones), establishments licensed to sell alcohol for on-premises consumption, childcare centers, and any location with posted prohibition." },
      { heading: "Purchase Requirements", content: "Maryland requires a Handgun Qualification License (HQL) to purchase a handgun (requires training and background check). All sales require a background check — Maryland conducts its own state check in addition to NICS. There is a seven-day waiting period for all regulated firearms purchases. Maryland has an assault weapons ban (Firearm Safety Act of 2013) and a magazine capacity limit of 10 rounds. A person may purchase only one regulated firearm per 30 days." },
    ],
    citations: "Maryland Criminal Law Title 4, Subtitle 2 (handguns); Maryland Public Safety Title 5 (firearms); Firearm Safety Act of 2013; SB 1 (2023, post-Bruen amendments).",
  },
  {
    stateSlug: "wisconsin",
    effectiveDate: "November 1, 2011",
    effectiveLaw: "concealed carry enacted under Act 35",
    sections: [
      { heading: "Concealed Carry", content: "Wisconsin requires a Concealed Carry Weapon (CCW) license for concealed carry, issued by the Department of Justice. Wisconsin is a shall-issue state. Applicants must complete a firearms training course and be at least 21 years old. The license is valid for five years and costs $40.", keyStatute: "Wisconsin Statutes § 175.60 — license to carry a concealed weapon." },
      { heading: "Open Carry", content: "Open carry is legal in Wisconsin without a permit for anyone who can legally possess a firearm. However, some municipalities may have local ordinances affecting open carry in certain circumstances." },
      { heading: "Who Cannot Carry", content: "Prohibited persons include: convicted felons, persons adjudicated as mentally defective or committed to a mental institution, persons subject to domestic abuse or harassment injunctions, persons convicted of misdemeanor domestic violence, persons under 21 (for CCW), unlawful users of controlled substances, and illegal aliens." },
      { heading: "Prohibited Locations", content: "Wisconsin prohibits carry in: police stations and sheriff offices, prisons and jails, courthouses, the state capitol, mental health facilities, school grounds (K-12), secure areas of airports, taverns (locations where more than 50% of revenue comes from alcohol sales), and university buildings (institutional policy). Federal buildings are also prohibited under federal law." },
      { heading: "Purchase Requirements", content: "Wisconsin requires a background check for all handgun sales from licensed dealers through the state DOJ Handgun Hotline. There is a 48-hour waiting period for handgun purchases. Private sales do not require a background check. There is no state firearms registry, no assault weapons ban, and no magazine capacity restriction." },
    ],
    citations: "Wisconsin Statutes Chapter 175 (miscellaneous police provisions, including § 175.60 CCW); Wisconsin Statutes Chapter 941 (crimes against public peace, order, and other interests — including weapons offenses).",
  },
  {
    stateSlug: "minnesota",
    effectiveDate: "Various; most recent significant changes 2023",
    effectiveLaw: "Multiple bills including universal background checks and red flag law",
    sections: [
      { heading: "Concealed Carry", content: "Minnesota requires a Permit to Carry a Pistol for concealed carry, issued by the county sheriff. Minnesota is a shall-issue state. Applicants must complete a firearms training course approved by the Bureau of Criminal Apprehension, be at least 21, and pass a background check. The permit is valid for five years.", keyStatute: "Minnesota Statutes § 624.714 — carrying of pistols, permit requirements." },
      { heading: "Open Carry", content: "Open carry is legal in Minnesota with a valid Permit to Carry. Without a permit, open carry is prohibited. The same permit covers both concealed and open carry." },
      { heading: "Who Cannot Carry", content: "Prohibited persons include: convicted felons (within 10 years for crimes of violence; lifetime for certain offenses), persons convicted of certain gross misdemeanors within the preceding three years, persons who are mentally ill and dangerous to the public, persons chemically dependent, minors under 21, and persons subject to an active order for protection." },
      { heading: "Prohibited Locations", content: "Minnesota prohibits carry in: schools and school grounds (with vehicle exceptions), childcare centers, courthouses (posted), state correctional facilities, federal buildings, and any private establishment with posted prohibition. Minnesota's list of prohibited locations is relatively short compared to many states." },
      { heading: "Purchase Requirements", content: "In 2023, Minnesota enacted universal background checks requiring a background check for all firearms transfers including private sales. Minnesota also enacted a red flag law (Extreme Risk Protection Order) in 2023. A Permit to Purchase or a Permit to Carry is required to buy a handgun or semi-automatic military-style assault weapon from any seller. There is no waiting period beyond permit processing, no state assault weapons ban (though a permit is required to purchase), and no magazine capacity restriction." },
    ],
    citations: "Minnesota Statutes Chapter 624 (firearms); 2023 Session Laws (universal background checks and red flag law).",
  },
  {
    stateSlug: "south-carolina",
    effectiveDate: "March 7, 2024",
    effectiveLaw: "H. 3594, constitutional carry",
    sections: [
      { heading: "Concealed & Open Carry", content: "South Carolina enacted constitutional carry under H. 3594, effective March 7, 2024. Persons aged 18 and older who can legally possess a firearm may carry a handgun openly or concealed without a permit. South Carolina continues to issue the Concealed Weapons Permit (CWP) for reciprocity purposes.", keyStatute: "S.C. Code § 16-23-20 — unlawful carrying of handgun. As amended by H. 3594, exempts eligible persons from the licensing requirement." },
      { heading: "Who Cannot Carry", content: "Prohibited persons include: convicted felons, persons convicted of a crime of violence, persons adjudicated as mentally incompetent, persons under 18, fugitives from justice, unlawful users of controlled substances, persons convicted of domestic violence, and members of a subversive organization." },
      { heading: "Prohibited Locations", content: "South Carolina prohibits carry in: schools and school property, courthouses, polling places, government offices or buildings, churches and other houses of worship (unless authorized by the governing body), hospitals and medical facilities, law enforcement facilities, prisons and jails, and establishments that post notice prohibiting firearms. Property owners may prohibit carry on private property." },
      { heading: "Purchase Requirements", content: "No permit is required to purchase a firearm. All FFL sales require a NICS background check. Private sales do not require a background check. There is no waiting period, no state firearms registry, no assault weapons ban, and no magazine restriction." },
    ],
    citations: "S.C. Code Title 16, Chapter 23 (offenses involving weapons); S.C. Code Title 23, Chapter 31 (concealed weapons permits); H. 3594 (2024).",
  },
  {
    stateSlug: "alabama",
    effectiveDate: "January 1, 2023",
    effectiveLaw: "HB 272, constitutional carry",
    sections: [
      { heading: "Concealed & Open Carry", content: "Alabama adopted constitutional carry under HB 272, effective January 1, 2023. Persons aged 19 and older who can legally possess a firearm may carry concealed without a permit. Open carry has been legal in Alabama without a permit for many years. Alabama continues to issue concealed carry permits for reciprocity.", keyStatute: "Alabama Code § 13A-11-73 — license to carry pistol in concealed manner. As amended by HB 272, carrying without a permit is no longer an offense for eligible persons." },
      { heading: "Who Cannot Carry", content: "Prohibited persons include: convicted felons, persons convicted of a crime of violence, persons addicted to alcohol or controlled substances, persons of unsound mind, and persons under 19. Federal prohibitions also apply." },
      { heading: "Prohibited Locations", content: "Alabama prohibits carry in: courthouses (Alabama Code § 13A-11-61.2), police stations and sheriff offices, prisons and jails, and inside the secured area of an airport terminal. Alabama is notably permissive — there is no statutory prohibition on carry in most government buildings, schools (though federal Gun-Free School Zones Act applies), or establishments serving alcohol." },
      { heading: "Purchase Requirements", content: "No permit is required to purchase any firearm. All FFL sales require a NICS background check. Private sales do not require a background check. There is no waiting period, no state firearms registry, no assault weapons ban, and no magazine restriction." },
    ],
    citations: "Alabama Code Title 13A, Article 3 (weapons); HB 272 (2022, effective January 1, 2023).",
  },
  {
    stateSlug: "louisiana",
    effectiveDate: "July 4, 2024",
    effectiveLaw: "HB 12, constitutional carry",
    sections: [
      { heading: "Concealed & Open Carry", content: "Louisiana adopted constitutional carry under HB 12, effective July 4, 2024. Persons aged 18 and older who can legally possess a firearm may carry concealed without a permit. Open carry has been legal in Louisiana without a permit. Louisiana continues to issue the Concealed Handgun Permit (CHP) for reciprocity.", keyStatute: "La. R.S. 40:1379.3 — statewide permits for concealed handguns. As amended by HB 12, carrying without a permit is lawful for eligible persons." },
      { heading: "Who Cannot Carry", content: "Prohibited persons include: convicted felons, fugitives from justice, persons addicted to alcohol or controlled substances, persons who have been involuntarily committed to a mental institution, persons subject to a protective order, persons convicted of domestic abuse battery, and persons convicted of certain misdemeanors within the past five years. Persons carrying without a permit must not be under the influence of alcohol or a controlled dangerous substance." },
      { heading: "Prohibited Locations", content: "Louisiana prohibits firearms in: law enforcement offices, detention facilities, courthouses, the state capitol and its grounds, any portion of a permitted establishment where alcohol is sold for consumption on the premises (but a CHP holder may carry), school property (firearm-free zones per La. R.S. 14:95.2), churches (unless authorized), parades and demonstrations, and airports." },
      { heading: "Purchase Requirements", content: "No permit is required to purchase a firearm. All FFL sales require a NICS background check. Private sales do not require a background check. There is no waiting period, no state firearms registry, no assault weapons ban, and no magazine restriction." },
    ],
    citations: "La. R.S. Title 14 (criminal law, weapons offenses); La. R.S. 40:1379.3 (concealed handgun permits); HB 12 (2024).",
  },
  {
    stateSlug: "kentucky",
    effectiveDate: "June 27, 2019",
    effectiveLaw: "SB 150, constitutional carry",
    sections: [
      { heading: "Concealed & Open Carry", content: "Kentucky adopted constitutional carry under SB 150, effective June 27, 2019. Persons aged 21 and older who can legally possess a firearm may carry concealed without a permit. Open carry is legal for anyone 18 or older who can legally possess a firearm. Kentucky continues to issue the Concealed Carry of Deadly Weapons License (CCDWL) for reciprocity.", keyStatute: "KRS 527.020 — carrying concealed deadly weapon. As amended by SB 150, exempts eligible persons from the licensing requirement." },
      { heading: "Who Cannot Carry", content: "Prohibited persons include: convicted felons, persons under indictment for a felony, fugitives from justice, persons committed involuntarily to a mental institution, unlawful users of controlled substances, persons under 21 (for concealed carry; 18 for open carry), and persons convicted of domestic violence." },
      { heading: "Prohibited Locations", content: "Kentucky prohibits carry in: police stations, sheriff offices, detention facilities, courthouses, schools, childcare facilities, any room where the General Assembly or a committee is in session, an area of an airport to which access is controlled by security measures, and any establishment with posted prohibition. Kentucky generally allows carry in restaurants and bars." },
      { heading: "Purchase Requirements", content: "No permit is required to purchase any firearm. All FFL sales require a NICS background check. Private sales do not require a background check. There is no waiting period, no state firearms registry, no assault weapons ban, and no magazine restriction." },
    ],
    citations: "KRS Chapter 527 (offenses relating to firearms and weapons); KRS 237.110 (CCDWL); SB 150 (2019).",
  },
{
    stateSlug: "alaska",
    effectiveDate: "September 9, 2003",
    effectiveLaw: "SB 102 (constitutional carry)",
    sections: [
      {
        heading: "Concealed & Open Carry",
        content: "Alaska was one of the first states to adopt constitutional carry in 2003. Any person aged 21 or older (18 for military) who can legally possess a firearm may carry concealed without a permit. Open carry is legal for anyone 16 or older who can legally possess a firearm. Alaska continues to issue a Concealed Handgun Permit for reciprocity with other states.",
        keyStatute: "Alaska Stat. § 11.61.220 — misconduct involving weapons in the fifth degree (carrying concealed). Exemptions for eligible persons effectively create constitutional carry.",
      },
      {
        heading: "Who Cannot Carry",
        content: "Prohibited persons include: convicted felons (within 10 years of unconditional discharge for most felonies; lifetime for unclassified or class A felonies), persons convicted of domestic violence misdemeanors within the past six years, persons adjudicated as mentally ill, persons under 21 (for concealed; under 16 for open carry), and persons under the influence of intoxicating liquor or a controlled substance.",
      },
      {
        heading: "Prohibited Locations",
        content: "Alaska prohibits firearms in: school grounds (with vehicle exceptions), courthouses, domestic violence shelters, and any private property with posted prohibition. Alaska has strong state preemption (AS § 29.35.145) preventing local governments from enacting firearms restrictions more stringent than state law.",
      },
      {
        heading: "Purchase Requirements",
        content: "No permit is required to purchase any firearm. All FFL sales require a NICS background check. Private sales do not require a background check. There is no waiting period, no state firearms registry, no assault weapons ban, and no magazine restriction.",
      },
    ],
    citations: "Alaska Statutes Title 11, Chapter 61 (offenses against public order, weapons); SB 102 (2003).",
  },
  {
    stateSlug: "arkansas",
    effectiveDate: "September 1, 2023",
    effectiveLaw: "Act 777 (constitutional carry clarification)",
    sections: [
      {
        heading: "Concealed & Open Carry",
        content: "Arkansas has constitutional carry as clarified by Act 777 (2023), which confirmed that a person who is not otherwise prohibited from possessing a firearm may carry concealed without a license. Open carry is legal. Arkansas issues an Enhanced Concealed Handgun Carry License (E-CHCL) and a standard Concealed Handgun Carry License (CHCL) for reciprocity and access to additional locations.",
        keyStatute: "Arkansas Code § 5-73-120 — carrying a weapon. Exemptions effectively permit constitutional carry for eligible persons.",
      },
      {
        heading: "Who Cannot Carry",
        content: "Prohibited persons include: convicted felons, persons adjudicated as mentally ill, persons committed involuntarily to a mental institution, persons under 18, persons convicted of domestic violence, and persons under the influence of alcohol or controlled substances.",
      },
      {
        heading: "Prohibited Locations",
        content: "Arkansas prohibits carry in: schools and school events, courthouses, state capitol, police stations, any establishment with posted prohibition, bars and restaurants with posted prohibition, churches (unless authorized), any public meeting designated by the governor, and within the passenger terminal of an airport. E-CHCL holders may carry in some locations where standard CHCL holders and unlicensed carriers cannot.",
      },
      {
        heading: "Purchase Requirements",
        content: "No permit is required to purchase any firearm. All FFL sales require a NICS background check. Private sales do not require a background check. There is no waiting period, no state firearms registry, no assault weapons ban, and no magazine restriction.",
      },
    ],
    citations: "Arkansas Code Title 5, Subtitle 6, Chapter 73 (weapons); Act 777 (2023).",
  },
  {
    stateSlug: "connecticut",
    effectiveDate: "October 1, 2023",
    effectiveLaw: "Most recent significant amendments",
    sections: [
      {
        heading: "Concealed Carry",
        content: "Connecticut requires a State Permit to Carry Pistols and Revolvers for concealed carry, issued by the Connecticut Department of Emergency Services and Public Protection (DESPP). Connecticut is effectively shall-issue following statutory amendments but retains some discretion through a \"suitability\" standard. Applicants must complete an approved firearms safety course, be at least 21, and pass a background check. The permit is valid for five years.",
        keyStatute: "C.G.S. § 29-28 — permits to sell at retail or carry pistols and revolvers.",
      },
      {
        heading: "Open Carry",
        content: "Open carry is legal in Connecticut only with a valid State Permit to Carry. Without a permit, open carry is prohibited.",
      },
      {
        heading: "Who Cannot Carry",
        content: "Prohibited persons include: convicted felons, persons convicted of certain misdemeanors (including domestic violence), persons subject to restraining or protective orders, persons adjudicated as mentally ill, persons involuntarily confined to a psychiatric hospital within the past 12 months, persons convicted of certain weapons offenses, and persons under 21.",
      },
      {
        heading: "Prohibited Locations",
        content: "Connecticut prohibits carry in: schools and school grounds, state capitol and legislative office building, and any private property with posted prohibition. Connecticut's list of state-designated prohibited locations is relatively short compared to other restrictive states.",
      },
      {
        heading: "Purchase Requirements",
        content: "Connecticut requires a Certificate of Eligibility for long gun purchases and a State Permit to Carry or eligibility certificate for handgun purchases. All sales (including private) require a background check through the state system and must be conducted through an authorized dealer or with an authorization number. Connecticut has an assault weapons ban, a magazine capacity limit of 10 rounds, a mandatory waiting period of 14 days for long guns (no waiting period for handgun purchases by permit holders), and a prohibition on 3D-printed firearms and ghost guns.",
      },
    ],
    citations: "C.G.S. Title 29 (public safety and state police); C.G.S. Title 53a (penal code, weapons offenses); C.G.S. § 53-202 series (assault weapons).",
  },
  {
    stateSlug: "delaware",
    effectiveDate: "Current through 2025 legislative session",
    effectiveLaw: "Delaware Concealed Deadly Weapons License system",
    sections: [
      {
        heading: "Concealed Carry",
        content: "Delaware requires a Concealed Deadly Weapons License (CDWL) for concealed carry, issued by the Court of Common Pleas in the county of residence. Delaware is a shall-issue state with some discretion. Applicants must be at least 18, complete a firearms training course, submit five character references from the county of residence, publish notice of the application in a local newspaper, and pass a background check. The license is valid for three years.",
        keyStatute: "Delaware Code Title 11, § 1441 — license to carry concealed deadly weapons.",
      },
      {
        heading: "Open Carry",
        content: "Open carry is legal in Delaware without a permit for anyone who can legally possess a firearm. However, local ordinances in Wilmington restrict open carry in certain circumstances.",
      },
      {
        heading: "Who Cannot Carry",
        content: "Prohibited persons include: convicted felons, persons convicted of a crime of violence or felony drug offense, persons convicted of misdemeanor domestic violence, juveniles adjudicated delinquent for a felony, persons committed involuntarily for mental health treatment, and persons subject to a lethal violence or family court protective order.",
      },
      {
        heading: "Prohibited Locations",
        content: "Delaware prohibits firearms in: state parks and forests (with hunting exceptions), schools and school property, courthouses, the state capitol, police stations, and any location with posted prohibition. Delaware enacted a law prohibiting firearms within 1,000 feet of a public demonstration.",
      },
      {
        heading: "Purchase Requirements",
        content: "All firearms sales (including private) require a background check — Delaware is a point-of-contact state conducting its own checks through the State Bureau of Identification. There is no waiting period (beyond the background check processing time). Delaware has an assault weapons ban (enacted 2022), a magazine capacity limit of 17 rounds, and a prohibition on unserialized firearms. There is no state firearms registry.",
      },
    ],
    citations: "Delaware Code Title 11, Chapter 5, Subchapter VII (deadly weapons); Title 11, § 1441-1459 (concealed deadly weapons licensing).",
  },
  {
    stateSlug: "hawaii",
    effectiveDate: "Current through 2025; post-Bruen carry permits being issued",
    effectiveLaw: "HRS Chapter 134 (firearms, ammunition, and dangerous weapons)",
    sections: [
      {
        heading: "Concealed Carry",
        content: "Hawaii requires a license to carry a concealed firearm, issued by the county chief of police. Prior to the Bruen decision, Hawaii was effectively no-issue — permits were almost never granted. Following Bruen, counties have begun issuing permits. Applicants must complete a firearms safety course, demonstrate knowledge of state firearms laws, qualify at a range, and pass a background check. Permits are county-specific and weapon-specific.",
        keyStatute: "HRS § 134-9 — licenses to carry. HRS § 134-2 — permits to acquire firearms.",
      },
      {
        heading: "Open Carry",
        content: "Open carry requires the same license as concealed carry. Practically, open carry remains extremely uncommon in Hawaii.",
      },
      {
        heading: "Who Cannot Carry",
        content: "Hawaii has some of the most restrictive eligibility criteria in the nation. Prohibited persons include: convicted felons, persons indicted for a crime punishable by imprisonment exceeding one year, fugitives from justice, unlawful users of controlled substances (including marijuana, which remains a federal prohibitor), persons adjudicated as mentally defective or committed to a mental institution, persons subject to restraining orders, persons convicted of domestic violence, and persons under 21.",
      },
      {
        heading: "Prohibited Locations",
        content: "Extensive prohibited locations include: schools and school grounds, government buildings, hospitals, places of worship, bars and restaurants serving alcohol, public parks and beaches, public transit, and any property with posted prohibition. Hawaii's sensitive places restrictions are among the broadest in the nation.",
      },
      {
        heading: "Purchase Requirements",
        content: "Hawaii requires a permit to acquire for all firearms, issued by the county police chief after a background check, fingerprinting, and a mandatory waiting period of at least 14 days. All firearms must be registered with the county police chief within five days of acquisition (three days for firearms brought from out of state). Hawaii maintains a comprehensive firearms registry. Hawaii has an assault weapons ban and magazine capacity restrictions.",
      },
    ],
    citations: "HRS Chapter 134 (firearms, ammunition, and dangerous weapons).",
  },
  {
    stateSlug: "idaho",
    effectiveDate: "March 25, 2020",
    effectiveLaw: "HB 516 (constitutional carry expansion)",
    sections: [
      {
        heading: "Concealed & Open Carry",
        content: "Idaho adopted constitutional carry for residents in 2016 and expanded it to all U.S. citizens aged 18 and older in 2020 under HB 516. Open carry is legal without a permit. Idaho issues an Enhanced Concealed Carry License for reciprocity.",
        keyStatute: "Idaho Code § 18-3302 — issuance of licenses to carry concealed weapons. Constitutional carry exemptions under § 18-3302(4).",
      },
      {
        heading: "Who Cannot Carry",
        content: "Prohibited persons include: convicted felons (unless rights restored after five years for non-violent felonies), persons adjudicated as mentally ill, persons under 18, and persons who are otherwise prohibited under federal law.",
      },
      {
        heading: "Prohibited Locations",
        content: "Idaho prohibits firearms in: courthouses (with exceptions for permit holders), juvenile correctional facilities, and school property (K-12). Idaho has strong preemption preventing local firearms regulations under § 18-3302J.",
      },
      {
        heading: "Purchase Requirements",
        content: "No permit is required to purchase any firearm. All FFL sales require a NICS background check. Private sales do not require a background check. There is no waiting period, no state firearms registry, no assault weapons ban, and no magazine restriction.",
      },
    ],
    citations: "Idaho Code Title 18, Chapter 33 (firearms, weapons, and explosives); HB 516 (2020).",
  },
  {
    stateSlug: "iowa",
    effectiveDate: "July 1, 2021",
    effectiveLaw: "HF 756 (constitutional carry)",
    sections: [
      {
        heading: "Concealed & Open Carry",
        content: "Iowa adopted constitutional carry under HF 756, effective July 1, 2021. Persons aged 21 and older who can legally possess a firearm may carry concealed without a permit. Open carry is legal. Iowa continues to issue a Permit to Carry Weapons for reciprocity. Additionally, Iowa voters approved a constitutional amendment in 2022 explicitly protecting the right to keep and bear arms under strict scrutiny.",
        keyStatute: "Iowa Code § 724.4 — carrying weapons. As amended by HF 756, exempts eligible persons from the permit requirement.",
      },
      {
        heading: "Who Cannot Carry",
        content: "Prohibited persons include: convicted felons, persons adjudicated as mentally ill, persons subject to protective orders, persons convicted of certain misdemeanors (including domestic abuse assault), persons under 21, and persons addicted to alcohol or controlled substances.",
      },
      {
        heading: "Prohibited Locations",
        content: "Iowa prohibits carry in: schools and school grounds, the state capitol (with exceptions for permit holders), courthouses, and any location with posted prohibition. Iowa has strong state preemption under § 724.28.",
      },
      {
        heading: "Purchase Requirements",
        content: "No permit is required to purchase a firearm (the former Permit to Acquire a Pistol requirement was eliminated by HF 756). All FFL sales require a NICS background check. Private sales do not require a background check. There is no waiting period, no state firearms registry, no assault weapons ban, and no magazine restriction.",
      },
    ],
    citations: "Iowa Code Chapter 724 (weapons); HF 756 (2021); Iowa Constitution Article I, Section 1A (right to keep and bear arms, 2022 amendment).",
  },
  {
    stateSlug: "kansas",
    effectiveDate: "July 1, 2015",
    effectiveLaw: "SB 45 (constitutional carry)",
    sections: [
      {
        heading: "Concealed & Open Carry",
        content: "Kansas adopted constitutional carry under SB 45, effective July 1, 2015. Persons aged 21 and older who can legally possess a firearm may carry concealed without a license. Open carry is legal for anyone 18 and older. Kansas issues a Concealed Carry Handgun License (CCHL) for reciprocity.",
        keyStatute: "K.S.A. 21-6302 — criminal carrying of a weapon. Exemptions for eligible persons create constitutional carry. K.S.A. 75-7c01 through 75-7c26 — governs the CCHL system.",
      },
      {
        heading: "Who Cannot Carry",
        content: "Prohibited persons include: convicted felons, persons convicted of a domestic violence misdemeanor within the past five years, persons under 21, persons who are mentally ill and subject to involuntary commitment, persons addicted to or unlawful users of controlled substances, and fugitives from justice.",
      },
      {
        heading: "Prohibited Locations",
        content: "Kansas prohibits carry in: state and municipal buildings that provide adequate security measures (metal detectors and armed guards), courthouses, schools and school grounds (if posted), correctional facilities, and any building with posted prohibition (if the building provides adequate security measures, the prohibition is enforceable; otherwise, the posting serves as a trespass notice only). Kansas allows carry in most government buildings that do not provide security.",
      },
      {
        heading: "Purchase Requirements",
        content: "No permit is required to purchase any firearm. All FFL sales require a NICS background check. Private sales do not require a background check. There is no waiting period, no state firearms registry, no assault weapons ban, and no magazine restriction.",
      },
    ],
    citations: "K.S.A. Chapter 21, Article 63 (crimes against the public safety — weapons); K.S.A. Chapter 75, Article 7c (personal and family protection act); SB 45 (2015).",
  },
  {
    stateSlug: "maine",
    effectiveDate: "October 15, 2015",
    effectiveLaw: "LD 652 (constitutional carry)",
    sections: [
      {
        heading: "Concealed & Open Carry",
        content: "Maine adopted constitutional carry under LD 652, effective October 15, 2015. Persons aged 21 and older (18 for military) who can legally possess a firearm may carry concealed without a permit. Open carry is legal. Maine issues a Concealed Handgun Permit for reciprocity.",
        keyStatute: "Maine Revised Statutes Title 25, § 2001-A — carrying concealed weapons. Exemptions for eligible persons.",
      },
      {
        heading: "Who Cannot Carry",
        content: "Prohibited persons include: convicted felons, fugitives from justice, persons adjudicated as mentally ill, persons involuntarily committed to a mental institution, persons under 21 (18 for military), and persons prohibited under federal law.",
      },
      {
        heading: "Prohibited Locations",
        content: "Maine prohibits carry in: courthouses, schools and school grounds, the state capitol (when the legislature is in session), federal buildings, and establishments licensed to serve alcohol (if the person is consuming alcohol). Maine does not broadly restrict carry in government buildings or churches.",
      },
      {
        heading: "Purchase Requirements",
        content: "No permit is required to purchase any firearm. All FFL sales require a NICS background check. Private sales do not require a background check (a 2016 ballot initiative to require universal background checks was defeated). There is no waiting period, no state firearms registry, no assault weapons ban, and no magazine restriction. Maine enacted a yellow flag law (a modified red flag law requiring a medical evaluation) in 2019, strengthened in 2024 following the Lewiston tragedy.",
      },
    ],
    citations: "Maine Revised Statutes Title 25, Chapter 252 (firearms); LD 652 (2015).",
  },
  {
    stateSlug: "massachusetts",
    effectiveDate: "October 23, 2024",
    effectiveLaw: "HD 4420 (comprehensive reform)",
    sections: [
      {
        heading: "Concealed Carry",
        content: "Massachusetts requires a License to Carry (LTC) for concealed carry, issued by the local police chief. Massachusetts has historically been may-issue with significant discretion. Applicants must complete an approved firearms safety course, be at least 21 (or 18 for an FID card for long guns only), and pass a background check. The LTC is valid for six years.",
        keyStatute: "M.G.L. Chapter 140, §§ 131-131P — licensing provisions for firearms.",
      },
      {
        heading: "Open Carry",
        content: "Open carry is technically legal with a valid LTC but is strongly discouraged and may result in revocation of the license by the issuing authority under the \"suitability\" standard.",
      },
      {
        heading: "Who Cannot Carry",
        content: "Massachusetts has extensive disqualifying criteria including: convicted felons, persons convicted of specified misdemeanors (including assault, DUI, drug offenses), persons subject to restraining orders, persons adjudicated as mentally ill, persons who have been committed to a mental health facility, minors, persons convicted of domestic violence, and persons deemed \"unsuitable\" by the licensing authority (a discretionary standard).",
      },
      {
        heading: "Prohibited Locations",
        content: "Massachusetts prohibits carry in: schools and school grounds, courthouses, airports, and any location with posted prohibition. The 2024 reform (HD 4420) added additional restricted locations including government buildings, polling places, hospitals, public transit, parks, and houses of worship.",
      },
      {
        heading: "Purchase Requirements",
        content: "Massachusetts requires an LTC or FID card to purchase any firearm. All sales (including private) must be reported to the state through the Electronic Firearms Transaction System. Massachusetts has an assault weapons ban, a magazine capacity limit of 10 rounds (pre-ban magazines grandfathered), and comprehensive firearms registration through the state transaction system. There is no explicit waiting period beyond licensing. The 2024 reform added a ban on ghost guns and strengthened red flag law provisions.",
      },
    ],
    citations: "M.G.L. Chapter 140 (firearms licensing); M.G.L. Chapter 269 (weapons crimes); HD 4420 (2024 comprehensive reform).",
  },
  {
    stateSlug: "mississippi",
    effectiveDate: "July 1, 2016",
    effectiveLaw: "HB 786 (constitutional carry)",
    sections: [
      {
        heading: "Concealed & Open Carry",
        content: "Mississippi adopted constitutional carry under HB 786, effective July 1, 2016. Persons aged 18 and older who can legally possess a firearm may carry concealed without a permit. Open carry is legal. Mississippi issues an Enhanced Carry Permit for access to additional locations and reciprocity.",
        keyStatute: "Mississippi Code § 97-37-1 — deadly weapons, carrying concealed. Exemptions for eligible persons. § 45-9-101 — statewide firearms permit system.",
      },
      {
        heading: "Who Cannot Carry",
        content: "Prohibited persons include: convicted felons, persons adjudicated as mentally incompetent, minors under 18, and persons prohibited under federal law.",
      },
      {
        heading: "Prohibited Locations",
        content: "Mississippi prohibits carry in: courthouses, police and sheriff stations, detention facilities, schools and school events, bars and establishments primarily devoted to dispensing alcoholic beverages, churches and places of worship (unless authorized), government meetings, and any posted private property. Enhanced Carry Permit holders may carry in churches and some other restricted locations.",
      },
      {
        heading: "Purchase Requirements",
        content: "No permit is required to purchase any firearm. All FFL sales require a NICS background check. Private sales do not require a background check. There is no waiting period, no state firearms registry, no assault weapons ban, and no magazine restriction.",
      },
    ],
    citations: "Mississippi Code Title 97, Chapter 37 (weapons and explosives); Title 45, Chapter 9 (firearms permit law); HB 786 (2016).",
  },
  {
    stateSlug: "montana",
    effectiveDate: "February 18, 2021",
    effectiveLaw: "HB 102 (constitutional carry)",
    sections: [
      {
        heading: "Concealed & Open Carry",
        content: "Montana adopted constitutional carry under HB 102, effective February 18, 2021. Persons aged 18 and older who can legally possess a firearm may carry concealed without a permit. Open carry has long been legal in Montana. Montana issues a Concealed Weapons Permit for reciprocity.",
        keyStatute: "MCA § 45-8-317 through 45-8-330 — concealed weapons, regulation and permits.",
      },
      {
        heading: "Who Cannot Carry",
        content: "Prohibited persons include: convicted felons (unless pardoned or rights restored after 10 years), persons adjudicated as mentally ill, persons committed involuntarily to a mental health facility, illegal aliens, and persons convicted of certain misdemeanors within the preceding five years.",
      },
      {
        heading: "Prohibited Locations",
        content: "Montana prohibits carry in: government buildings with restricted access and security screening, schools (K-12), the state capitol and the governor's office, financial institutions (banks, credit unions), and bars/restaurants where alcohol is sold (for persons who are under the influence). Under HB 102, concealed carry on university campuses was legalized.",
      },
      {
        heading: "Purchase Requirements",
        content: "No permit is required to purchase any firearm. All FFL sales require a NICS background check. Private sales do not require a background check. There is no waiting period, no state firearms registry, no assault weapons ban, and no magazine restriction.",
      },
    ],
    citations: "MCA Title 45, Chapter 8, Part 3 (weapons); HB 102 (2021).",
  },
  {
    stateSlug: "nebraska",
    effectiveDate: "September 2, 2023",
    effectiveLaw: "LB 77 (constitutional carry)",
    sections: [
      {
        heading: "Concealed & Open Carry",
        content: "Nebraska adopted constitutional carry under LB 77, effective September 2, 2023. Persons aged 21 and older who can legally possess a handgun may carry concealed without a permit. Open carry is legal for anyone 18 or older. Nebraska issues a Concealed Handgun Permit for reciprocity.",
        keyStatute: "Nebraska Revised Statute § 28-1202 — carrying concealed weapon. As amended by LB 77, exempts eligible persons.",
      },
      {
        heading: "Who Cannot Carry",
        content: "Prohibited persons include: convicted felons, fugitives from justice, persons subject to domestic violence protection orders, persons convicted of misdemeanor domestic violence, persons adjudicated as mentally ill or committed involuntarily, persons under 21, and persons otherwise prohibited under federal law.",
      },
      {
        heading: "Prohibited Locations",
        content: "Nebraska prohibits carry in: schools and school grounds, courthouses, police and sheriff stations, financial institutions, places of worship, hospitals, political rallies or fundraisers, establishments with a liquor license that derive more than half of their revenue from alcohol sales, and posted private property. Nebraska also prohibits carry in any building owned by the state, county, or municipality (unless the governing body authorizes carry).",
      },
      {
        heading: "Purchase Requirements",
        content: "LB 77 also eliminated the state's previous handgun purchase permit requirement. All FFL sales require a NICS background check. Private sales do not require a background check. There is no waiting period, no state firearms registry, no assault weapons ban, and no magazine restriction.",
      },
    ],
    citations: "Nebraska Revised Statutes Chapter 28, Article 12 (weapons); Nebraska Concealed Handgun Permit Act (§ 69-2427 through 69-2449); LB 77 (2023).",
  },
  {
    stateSlug: "nevada",
    effectiveDate: "January 2, 2020",
    effectiveLaw: "SB 143 (universal background checks)",
    sections: [
      {
        heading: "Concealed Carry",
        content: "Nevada requires a Concealed Firearms Permit (CFP) for concealed carry, issued by the county sheriff. Nevada is a shall-issue state. Applicants must complete a firearms safety course including live-fire qualification, be at least 21, and pass a background check. The permit is valid for five years.",
        keyStatute: "NRS 202.3653 through 202.369 — concealed firearms permit provisions.",
      },
      {
        heading: "Open Carry",
        content: "Open carry is legal in Nevada without a permit for anyone who can legally possess a firearm. There is no state preemption, so some local ordinances may apply.",
      },
      {
        heading: "Who Cannot Carry",
        content: "Prohibited persons include: convicted felons, fugitives from justice, persons adjudicated as mentally ill, persons committed involuntarily to a mental health facility, persons under the influence of alcohol or controlled substances, persons subject to protection orders, persons convicted of domestic violence, and persons under 21.",
      },
      {
        heading: "Prohibited Locations",
        content: "Nevada prohibits carry in: schools and childcare facilities, the state legislature building and offices, airports (beyond security), and any location with posted prohibition. Nevada law also prohibits the discharge of a firearm within certain distances of structures.",
      },
      {
        heading: "Purchase Requirements",
        content: "Nevada enacted universal background checks under SB 143 (effective January 2, 2020), requiring a background check for all firearms transfers including private sales (conducted through a licensed dealer). Clark County (Las Vegas) has a mandatory registration ordinance for certain firearms. There is no statewide waiting period, no state assault weapons ban, and no magazine restriction. Nevada has a red flag law (Extreme Risk Protection Order) enacted in 2019.",
      },
    ],
    citations: "NRS Chapter 202 (crimes against public health and safety — weapons); SB 143 (2019, universal background checks).",
  },
  {
    stateSlug: "new-hampshire",
    effectiveDate: "February 22, 2017",
    effectiveLaw: "SB 12 (constitutional carry)",
    sections: [
      {
        heading: "Concealed & Open Carry",
        content: "New Hampshire adopted constitutional carry under SB 12, effective February 22, 2017. Any person aged 18 and older who can legally possess a firearm may carry concealed without a license. Open carry is legal. New Hampshire issues a Pistol/Revolver License for reciprocity through the local selectmen or mayor.",
        keyStatute: "RSA 159:4 — carrying without a license (repealed as an offense for eligible persons by SB 12). RSA 159:6 — license to carry.",
      },
      {
        heading: "Who Cannot Carry",
        content: "Prohibited persons include: convicted felons, fugitives from justice, persons convicted of certain violent misdemeanors, persons under 18, and persons prohibited under federal law. New Hampshire has relatively few state-level prohibitions beyond federal law.",
      },
      {
        heading: "Prohibited Locations",
        content: "New Hampshire prohibits firearms in: courthouses (RSA 159:19) and school grounds (with exceptions for secured vehicles and CPL holders). New Hampshire has strong state preemption (RSA 159:26) preventing local firearms regulations.",
      },
      {
        heading: "Purchase Requirements",
        content: "No permit is required to purchase any firearm. All FFL sales require a NICS background check. Private sales do not require a background check. There is no waiting period, no state firearms registry, no assault weapons ban, and no magazine restriction.",
      },
    ],
    citations: "RSA Chapter 159 (pistols and revolvers); SB 12 (2017).",
  },
  {
    stateSlug: "new-mexico",
    effectiveDate: "Various; most recent significant changes 2023-2024",
    effectiveLaw: "Concealed Handgun Carry Act (NMSA § 29-19-1 through 29-19-14)",
    sections: [
      {
        heading: "Concealed Carry",
        content: "New Mexico requires a Concealed Handgun License (CHL) for concealed carry, issued by the Department of Public Safety. New Mexico is a shall-issue state. Applicants must complete a 15-hour firearms training course, be at least 21, and pass a background check. The license is valid for four years (two years for initial license).",
        keyStatute: "NMSA § 29-19-1 through 29-19-14 — Concealed Handgun Carry Act.",
      },
      {
        heading: "Open Carry",
        content: "Open carry is legal in New Mexico without a permit for anyone who can legally possess a firearm.",
      },
      {
        heading: "Who Cannot Carry",
        content: "Prohibited persons include: convicted felons, persons adjudicated as mentally incompetent, persons addicted to alcohol or controlled substances, persons convicted of domestic violence, persons under 21, and fugitives from justice.",
      },
      {
        heading: "Prohibited Locations",
        content: "New Mexico prohibits carry in: schools and school grounds, courthouses, and on tribal land (subject to tribal law). The governor issued an emergency public health order in September 2023 temporarily suspending carry in Albuquerque, which was blocked by federal courts. New Mexico does not have comprehensive sensitive-place restrictions beyond schools and courts.",
      },
      {
        heading: "Purchase Requirements",
        content: "All firearms sales (including private) require a background check under legislation enacted in 2019. There is no waiting period. New Mexico does not have an assault weapons ban, a magazine capacity restriction, or a state firearms registry. The state enacted a red flag law (Extreme Risk Firearm Protection Order) in 2020.",
      },
    ],
    citations: "NMSA Chapter 29, Article 19 (Concealed Handgun Carry Act); NMSA Chapter 30, Article 7 (weapons and explosives).",
  },
  {
    stateSlug: "north-dakota",
    effectiveDate: "August 1, 2017",
    effectiveLaw: "HB 1169 (constitutional carry)",
    sections: [
      {
        heading: "Concealed & Open Carry",
        content: "North Dakota adopted constitutional carry under HB 1169, effective August 1, 2017, for North Dakota residents only. Residents aged 18 and older who can legally possess a firearm may carry concealed without a permit. Non-residents must hold a valid concealed carry permit from their home state. Open carry is legal. North Dakota issues a Concealed Weapons License (CWL) for reciprocity.",
        keyStatute: "NDCC § 62.1-04-02 — license to carry a firearm or dangerous weapon concealed. Constitutional carry exemptions for residents under § 62.1-04-02(13).",
      },
      {
        heading: "Who Cannot Carry",
        content: "Prohibited persons include: convicted felons (within 10 years), persons convicted of a class A misdemeanor involving violence within the past five years, persons under court order for treatment of mental illness, persons adjudicated as mentally ill, persons under 18, and persons prohibited under federal law.",
      },
      {
        heading: "Prohibited Locations",
        content: "North Dakota prohibits carry in: schools (K-12) and school events, courthouses, churches and places of worship (unless authorized by the governing body), liquor establishments (bars), publicly owned or operated buildings with posted prohibition, gaming sites, athletic and sporting events (at professional or collegiate level), and political rallies and political fundraising events.",
      },
      {
        heading: "Purchase Requirements",
        content: "No permit is required to purchase any firearm. All FFL sales require a NICS background check. Private sales do not require a background check. There is no waiting period, no state firearms registry, no assault weapons ban, and no magazine restriction.",
      },
    ],
    citations: "NDCC Title 62.1 (weapons); HB 1169 (2017).",
  },
  {
    stateSlug: "oklahoma",
    effectiveDate: "November 1, 2019",
    effectiveLaw: "HB 2597 (constitutional carry)",
    sections: [
      {
        heading: "Concealed & Open Carry",
        content: "Oklahoma adopted constitutional carry under HB 2597, effective November 1, 2019. Persons aged 21 and older (18 for military) who can legally possess a firearm may carry concealed or openly without a license. Oklahoma issues a Self-Defense Act (SDA) license through OSBI for reciprocity.",
        keyStatute: "21 O.S. § 1290.2 — Oklahoma Self-Defense Act. HB 2597 creates permitless carry for eligible persons.",
      },
      {
        heading: "Who Cannot Carry",
        content: "Prohibited persons include: convicted felons, persons adjudicated as mentally incompetent, persons convicted of domestic abuse, persons subject to protection orders, persons convicted of assault and battery, persons under 21 (18 for military), and persons otherwise prohibited under federal or state law.",
      },
      {
        heading: "Prohibited Locations",
        content: "Oklahoma prohibits carry in: government buildings (with certain exceptions), schools and school property, courthouses, prisons and jails, bars and establishments where the primary purpose is the serving of alcohol, sporting events (professional or collegiate), and any posted private property. Property owner signage restrictions and penalties are specified in the Self-Defense Act.",
      },
      {
        heading: "Purchase Requirements",
        content: "No permit is required to purchase any firearm. All FFL sales require a NICS background check. Private sales do not require a background check. There is no waiting period, no state firearms registry, no assault weapons ban, and no magazine restriction.",
      },
    ],
    citations: "21 O.S. §§ 1271-1290.26 (Oklahoma Firearms Act / Self-Defense Act); HB 2597 (2019).",
  },
  {
    stateSlug: "oregon",
    effectiveDate: "Various; Measure 114 (2022) subject to ongoing litigation",
    effectiveLaw: "ORS Chapter 166; Ballot Measure 114 (2022, pending litigation)",
    sections: [
      {
        heading: "Concealed Carry",
        content: "Oregon requires a Concealed Handgun License (CHL) for concealed carry, issued by the county sheriff. Oregon is a shall-issue state. Applicants must demonstrate competence with a handgun through an approved course, be at least 21, and pass a background check. The license is valid for four years.",
        keyStatute: "ORS 166.291 through 166.295 — concealed handgun licensing.",
      },
      {
        heading: "Open Carry",
        content: "Open carry is generally legal in Oregon without a permit, though some cities (including Portland) have local ordinances restricting open carry of loaded firearms in public places.",
      },
      {
        heading: "Ballot Measure 114 (2022)",
        content: "Oregon voters approved Measure 114 in November 2022, which would require a permit to purchase any firearm (including training and background check), ban magazines holding more than 10 rounds, and impose additional requirements. As of early 2025, the measure's implementation has been blocked by state court litigation. The Oregon Supreme Court heard arguments in 2024. Check current status before relying on these provisions.",
      },
      {
        heading: "Who Cannot Carry",
        content: "Prohibited persons include: convicted felons, persons found to be mentally ill and subject to commitment, persons convicted of a misdemeanor involving violence within the past four years, persons subject to a restraining order, minors, and persons prohibited under federal law.",
      },
      {
        heading: "Prohibited Locations",
        content: "Oregon prohibits firearms in: the state capitol, court facilities, schools (K-12), and federal buildings. Oregon state law preempts most local firearms regulations under ORS 166.170, with limited exceptions allowing cities to regulate loaded carry in public places.",
      },
      {
        heading: "Purchase Requirements",
        content: "All firearms sales require a background check (Oregon enacted universal background checks in 2015 under SB 941). There is no waiting period under current law (Measure 114's permit-to-purchase system remains enjoined). There is no state firearms registry. Measure 114's magazine ban and permit-to-purchase are pending litigation.",
      },
    ],
    citations: "ORS Chapter 166 (offenses against public order — weapons); SB 941 (2015, universal background checks); Ballot Measure 114 (2022, pending litigation).",
  },
  {
    stateSlug: "rhode-island",
    effectiveDate: "June 21, 2022",
    effectiveLaw: "Magazine ban and assault weapons restrictions",
    sections: [
      {
        heading: "Concealed Carry",
        content: "Rhode Island has a dual-track licensing system. A License to Carry Concealed Weapons can be issued by the local police chief or by the Attorney General. Local police chief issuance is effectively may-issue; the AG track is shall-issue for qualified applicants. Applicants must complete a firearms safety course, be at least 21, and pass a background check.",
        keyStatute: "R.I.G.L. § 11-47-11 — license to carry concealed pistol or revolver (AG issuance). § 11-47-18 — license to carry concealed weapons (local chief issuance).",
      },
      {
        heading: "Open Carry",
        content: "The legality of open carry in Rhode Island is ambiguous. There is no statute expressly prohibiting open carry with a valid license, but the practical interpretation and enforcement vary. Most legal guidance recommends obtaining a concealed carry license.",
      },
      {
        heading: "Who Cannot Carry",
        content: "Prohibited persons include: convicted felons, persons convicted of a crime of violence, persons addicted to controlled substances or habitual drunkards, persons who are mentally incompetent, persons under 21, and persons subject to domestic violence restraining orders.",
      },
      {
        heading: "Prohibited Locations",
        content: "Rhode Island prohibits carry in: schools and school grounds, state buildings, courthouses, and any location with posted prohibition.",
      },
      {
        heading: "Purchase Requirements",
        content: "Rhode Island requires a safety course or existing license for handgun purchases. A mandatory seven-day waiting period applies to all handgun purchases. All FFL sales require a background check through the state system. Rhode Island enacted a magazine capacity limit of 10 rounds and restrictions on assault weapons in 2022. Private long gun sales do not require a background check.",
      },
    ],
    citations: "R.I.G.L. Title 11, Chapter 47 (weapons).",
  },
  {
    stateSlug: "south-dakota",
    effectiveDate: "July 1, 2019",
    effectiveLaw: "SB 47 (constitutional carry)",
    sections: [
      {
        heading: "Concealed & Open Carry",
        content: "South Dakota adopted constitutional carry under SB 47, effective July 1, 2019. Persons aged 18 and older who can legally possess a firearm may carry concealed without a permit. Open carry is legal. South Dakota issues a Concealed Pistol Permit for reciprocity.",
        keyStatute: "SDCL § 22-14-9 — carrying concealed pistol or revolver without a permit (repealed as an offense for eligible persons).",
      },
      {
        heading: "Who Cannot Carry",
        content: "Prohibited persons include: convicted felons, persons adjudicated as mentally incompetent, persons who have been committed to a mental institution, persons under 18, and persons prohibited under federal law.",
      },
      {
        heading: "Prohibited Locations",
        content: "South Dakota prohibits carry in: courthouses, the state capitol (when the legislature is in session), schools and school grounds, and any location with posted prohibition. South Dakota's list of prohibited locations is among the shortest in the nation.",
      },
      {
        heading: "Purchase Requirements",
        content: "No permit is required to purchase any firearm. All FFL sales require a NICS background check. Private sales do not require a background check. There is no waiting period, no state firearms registry, no assault weapons ban, and no magazine restriction.",
      },
    ],
    citations: "SDCL Title 22, Chapter 14 (weapons); SDCL Chapter 23-7 (concealed pistol permits); SB 47 (2019).",
  },
  {
    stateSlug: "utah",
    effectiveDate: "May 5, 2021",
    effectiveLaw: "HB 60 (constitutional carry)",
    sections: [
      {
        heading: "Concealed & Open Carry",
        content: "Utah adopted constitutional carry under HB 60, effective May 5, 2021. Persons aged 21 and older (18 for provisional permit holders) who can legally possess a firearm may carry concealed without a permit. Open carry of unloaded firearms (two actions from firing) has been legal without a permit since 2012. Utah issues a Concealed Firearm Permit for reciprocity, which is widely recognized by other states.",
        keyStatute: "Utah Code § 76-10-504 — carrying concealed dangerous weapon. Constitutional carry exemptions under § 76-10-523.",
      },
      {
        heading: "Who Cannot Carry",
        content: "Prohibited persons include: convicted felons, persons adjudicated as mentally defective, persons committed involuntarily to a mental institution, persons under 21 (without a provisional permit), persons convicted of domestic violence, illegal aliens, and persons who are unlawful users of controlled substances.",
      },
      {
        heading: "Prohibited Locations",
        content: "Utah prohibits carry in: secure areas of airports, courthouses (with security screening), mental health facilities, and federal buildings. Notably, Utah does not prohibit carry in schools (concealed carry permit holders may carry on school grounds), churches, government buildings without security screening, or establishments serving alcohol. Utah has broad state preemption under § 76-10-500.",
      },
      {
        heading: "Purchase Requirements",
        content: "No permit is required to purchase any firearm. All FFL sales require a NICS background check through the state Bureau of Criminal Identification (BCI), which conducts its own check in addition to NICS. Private sales do not require a background check. There is no waiting period, no state firearms registry, no assault weapons ban, and no magazine restriction.",
      },
    ],
    citations: "Utah Code Title 76, Chapter 10, Part 5 (weapons); HB 60 (2021).",
  },
  {
    stateSlug: "vermont",
    effectiveDate: "Constitutional carry since statehood (1791); magazine restrictions enacted 2018",
    effectiveLaw: "Vermont Constitution; S. 55 (2018, magazine restrictions)",
    sections: [
      {
        heading: "Concealed & Open Carry",
        content: "Vermont is the original constitutional carry state — it has never required a permit to carry concealed. Any person who can legally possess a firearm may carry openly or concealed without a permit. Vermont does not issue a state carry permit, which means Vermont residents cannot obtain reciprocity through a home state permit (some residents obtain non-resident permits from other states).",
        keyStatute: "Vermont has no specific statute authorizing or prohibiting concealed carry for non-prohibited persons. The Vermont Supreme Court affirmed this right in State v. Rosenthal (1903).",
      },
      {
        heading: "Who Cannot Carry",
        content: "Prohibited persons under Vermont law include: convicted felons, persons adjudicated as mentally defective, and persons prohibited under federal law. Vermont's state-level prohibitions are minimal.",
      },
      {
        heading: "Prohibited Locations",
        content: "Vermont prohibits carry in: school buildings and school buses (with limited exceptions for certain authorized persons), courthouses, and state buildings with posted prohibition. In 2018, Vermont enacted restrictions prohibiting persons under 21 from purchasing handguns and expanded background check requirements.",
      },
      {
        heading: "Purchase Requirements",
        content: "No permit is required to purchase any firearm. All FFL sales require a NICS background check. Private sales do not require a background check. Vermont enacted a magazine capacity limit of 10 rounds for long guns and 15 rounds for handguns in 2018 (S. 55), along with a bump stock ban and an expansion of domestic violence-related firearms prohibitions. There is no waiting period, no state firearms registry, and no assault weapons ban.",
      },
    ],
    citations: "Vermont Statutes Title 13, Chapter 85 (weapons); S. 55 (2018, magazine restrictions and related provisions); State v. Rosenthal, 75 Vt. 295 (1903).",
  },
  {
    stateSlug: "west-virginia",
    effectiveDate: "May 24, 2016",
    effectiveLaw: "SB 347 (constitutional carry)",
    sections: [
      {
        heading: "Concealed & Open Carry",
        content: "West Virginia adopted constitutional carry under SB 347, effective May 24, 2016. Persons aged 21 and older (18 for military) who can legally possess a firearm may carry concealed without a permit. Open carry is legal for anyone who can legally possess a firearm. West Virginia issues a Concealed Handgun License for reciprocity.",
        keyStatute: "W. Va. Code § 61-7-3 — carrying a deadly weapon without a license. Exemptions for eligible persons under § 61-7-7.",
      },
      {
        heading: "Who Cannot Carry",
        content: "Prohibited persons include: convicted felons, persons convicted of a misdemeanor crime of violence within the past five years, persons subject to domestic violence protective orders, persons adjudicated as mentally incompetent, persons committed involuntarily to a mental institution, persons addicted to alcohol, persons under 21 (18 for military), and persons who have been convicted of a misdemeanor offense of assault or battery involving a family or household member.",
      },
      {
        heading: "Prohibited Locations",
        content: "West Virginia prohibits carry in: courthouses and court areas, schools (K-12), school buses, the state capitol complex (with exceptions for CHL holders), and any private property with posted prohibition. West Virginia allows carry in churches, restaurants serving alcohol, and most government buildings.",
      },
      {
        heading: "Purchase Requirements",
        content: "No permit is required to purchase any firearm. All FFL sales require a NICS background check. Private sales do not require a background check. There is no waiting period, no state firearms registry, no assault weapons ban, and no magazine restriction.",
      },
    ],
    citations: "W. Va. Code Chapter 61, Article 7 (dangerous weapons); SB 347 (2016).",
  },
  {
    stateSlug: "wyoming",
    effectiveDate: "July 1, 2021",
    effectiveLaw: "HB 116 (expanded constitutional carry)",
    sections: [
      {
        heading: "Concealed & Open Carry",
        content: "Wyoming adopted constitutional carry for residents in 2011 and expanded it to all U.S. citizens in 2021 under HB 116. Any person aged 21 and older (18 for residents) who can legally possess a firearm may carry concealed without a permit. Open carry is legal. Wyoming issues a Concealed Firearm Permit through the Division of Criminal Investigation for reciprocity.",
        keyStatute: "Wyo. Stat. § 6-8-104 — wearing or carrying concealed weapons; permit. Constitutional carry provisions under § 6-8-104(b).",
      },
      {
        heading: "Who Cannot Carry",
        content: "Prohibited persons include: convicted felons, persons adjudicated as mentally defective, persons committed involuntarily to a mental institution, persons who are unlawful users of controlled substances, persons convicted of domestic violence, illegal aliens, and persons under 21 (18 for Wyoming residents).",
      },
      {
        heading: "Prohibited Locations",
        content: "Wyoming prohibits carry in: government meetings (if posted), schools (K-12), athletic events (professional, semi-professional, or collegiate), and bars and establishments primarily selling alcohol for on-premises consumption. The Wyoming Repeal Gun Free Zones Act (effective July 1, 2025) allows concealed carry in most state-owned buildings, with exceptions for correctional facilities.",
      },
      {
        heading: "Purchase Requirements",
        content: "No permit is required to purchase any firearm. All FFL sales require a NICS background check. Private sales do not require a background check. There is no waiting period, no state firearms registry, no assault weapons ban, and no magazine restriction.",
      },
    ],
    citations: "Wyo. Stat. Title 6, Chapter 8 (weapons offenses); HB 116 (2021); Repeal Gun Free Zones Act (2025).",
  },
  {
    stateSlug: "district-of-columbia",
    effectiveDate: "Various; most recent significant changes post-Bruen 2022-2023",
    effectiveLaw: "Post-Bruen carry reform",
    sections: [
      {
        heading: "Concealed Carry",
        content: "The District of Columbia requires a Concealed Carry Pistol License (CCPL) for concealed carry, issued by the Metropolitan Police Department. Following Bruen, DC transitioned from may-issue to shall-issue. Applicants must complete a firearms training course (classroom and range qualification), be at least 21, and pass a background check. The license is valid for two years.",
        keyStatute: "D.C. Code § 22-4506 — issuance of concealed carry pistol licenses.",
      },
      {
        heading: "Open Carry",
        content: "Open carry is prohibited in the District of Columbia.",
      },
      {
        heading: "Who Cannot Carry",
        content: "DC has extensive disqualifying criteria including: convicted felons, persons convicted of weapons offenses, persons convicted of certain misdemeanors within the past five years, persons who have been voluntarily or involuntarily committed to a mental institution, persons addicted to alcohol or controlled substances, persons subject to protection orders, and persons under 21.",
      },
      {
        heading: "Prohibited Locations",
        content: "DC prohibits carry in extensive locations including: the U.S. Capitol grounds, the White House and its grounds, the Supreme Court building and grounds, any building or grounds of the National Mall, the National Zoo, all public and private schools and universities, childcare facilities, libraries, hospitals and mental health facilities, public transit vehicles and facilities, government buildings, bars and nightclubs, stadiums, and any private property not displaying signage permitting firearms.",
      },
      {
        heading: "Purchase Requirements",
        content: "DC requires registration of all firearms with the Metropolitan Police Department. All sales must go through a licensed dealer. DC has an assault weapons ban, a magazine capacity limit of 10 rounds, a mandatory 10-day waiting period, and allows only one handgun registration per 30 days. Background checks are required for all transfers. DC also has a red flag law (Extreme Risk Protection Order).",
      },
    ],
    citations: "D.C. Code Title 7, Chapter 25 (firearms control); D.C. Code Title 22, Chapter 45 (weapons).",
  },
];

export const getStateLawDetail = (stateSlug: string): StateLawDetail | undefined =>
  stateLawDetails.find((d) => d.stateSlug === stateSlug);
