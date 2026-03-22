import { Dealer } from "./types";

export const dealers: Dealer[] = [
  // TEXAS
  { id: "tx-001", name: "Central Texas Gun Works", slug: "central-texas-gun-works", categories: ["gun-shops", "ffl-dealers", "ranges"], state: "texas", city: "Austin", address: "1901 S Lamar Blvd, Austin, TX 78704", phone: "(512) 693-3474", rating: 4.7, reviewCount: 312, description: "Full-service gun shop in South Austin offering new and used firearms sales, FFL transfers, and an indoor shooting range. Known for knowledgeable staff and competitive transfer fees.", website: "https://centraltexasgunworks.com", featured: true },
  { id: "tx-002", name: "Adelbridge & Co", slug: "adelbridge-and-co", categories: ["gun-shops", "ffl-dealers"], state: "texas", city: "San Antonio", address: "19070 IH 10 W, San Antonio, TX 78257", phone: "(210) 342-7867", rating: 4.8, reviewCount: 245, description: "San Antonio firearms dealer specializing in premium handguns, sporting rifles, and collectible firearms. Family-owned since 1986 with a large inventory and expert gunsmithing services.", website: "https://adelbridgeandco.com", featured: true },
  { id: "tx-003", name: "The Range at Austin", slug: "the-range-at-austin", categories: ["ranges", "instructors"], state: "texas", city: "Austin", address: "8301 N FM 620, Austin, TX 78726", phone: "(512) 891-4779", rating: 4.6, reviewCount: 198, description: "Indoor shooting facility with 40 lanes at distances up to 25 yards. Offers LTC courses, basic firearm safety classes, and private instruction. Rental firearms available for range use.", website: "https://therangeataustin.com", featured: true },
  { id: "tx-004", name: "Shoot Smart", slug: "shoot-smart-fortworth", categories: ["ranges", "gun-shops", "instructors"], state: "texas", city: "Fort Worth", address: "2440 Ross Ave, Fort Worth, TX 76106", phone: "(817) 624-8400", rating: 4.5, reviewCount: 176, description: "Indoor range and retail store in Fort Worth with 30 shooting lanes, a full firearms inventory, and a comprehensive course schedule including women-only classes and advanced defensive shooting.", website: "https://shootsmart.com" },

  // FLORIDA
  { id: "fl-001", name: "Shoot Straight", slug: "shoot-straight-tampa", categories: ["ranges", "gun-shops", "instructors"], state: "florida", city: "Tampa", address: "3951 W Hillsborough Ave, Tampa, FL 33614", phone: "(813) 879-7867", rating: 4.6, reviewCount: 289, description: "One of Florida's largest gun stores and indoor ranges with multiple Tampa Bay area locations. Extensive inventory of handguns, rifles, and shotguns with competitive pricing and knowledgeable staff.", website: "https://shootstraight.com", featured: true },
  { id: "fl-002", name: "The Gun Range Miami", slug: "gun-range-miami", categories: ["ranges", "instructors"], state: "florida", city: "Miami", address: "1950 NW 7th Ave, Miami, FL 33136", phone: "(305) 573-4867", rating: 4.5, reviewCount: 167, description: "Indoor shooting facility in Miami offering 25-yard lanes, firearms rentals, concealed carry courses, and private instruction in English and Spanish.", website: "https://thegunrangemiami.com" },

  // ARIZONA
  { id: "az-001", name: "Scottsdale Gun Club", slug: "scottsdale-gun-club", categories: ["ranges", "gun-shops", "instructors"], state: "arizona", city: "Scottsdale", address: "14860 N Northsight Blvd, Scottsdale, AZ 85260", phone: "(480) 348-1111", rating: 4.8, reviewCount: 356, description: "Premier indoor shooting range and retail store in Scottsdale with climate-controlled lanes, a large firearms inventory, and expert instruction programs from basic safety to advanced tactical.", website: "https://scottsdalegc.com", featured: true },
  { id: "az-002", name: "Caswells Shooting Range", slug: "caswells-mesa", categories: ["ranges", "gun-shops"], state: "arizona", city: "Mesa", address: "2424 N Mesa Dr, Mesa, AZ 85201", phone: "(480) 461-0411", rating: 4.5, reviewCount: 198, description: "Family-owned indoor shooting range and gun shop in Mesa serving the East Valley. Offers lane rentals, firearms sales, and a selection of rental guns for range use.", website: "https://caswells.com" },

  // COLORADO
  { id: "co-001", name: "Bristlecone Shooting", slug: "bristlecone-shooting", categories: ["ranges", "gun-shops", "instructors"], state: "colorado", city: "Lakewood", address: "12105 W Cedar Dr, Lakewood, CO 80228", phone: "(303) 985-0989", rating: 4.7, reviewCount: 234, description: "Modern indoor shooting facility west of Denver with 20 lanes, retail firearms sales, gunsmithing, and a full curriculum of courses from beginner to advanced. Known for a welcoming atmosphere for new shooters.", website: "https://bristleconeshooting.com", featured: true },

  // OHIO
  { id: "oh-001", name: "Vance Outdoors", slug: "vance-outdoors-columbus", categories: ["gun-shops", "ffl-dealers"], state: "ohio", city: "Columbus", address: "1774 W Morse Rd, Columbus, OH 43229", phone: "(614) 888-4867", rating: 4.6, reviewCount: 287, description: "Large firearms retailer in Columbus carrying an extensive selection of handguns, rifles, shotguns, and ammunition. Licensed FFL dealer offering transfers, layaway, and trade-ins.", website: "https://vanceoutdoors.com", featured: true },
  { id: "oh-002", name: "Point Blank Range & Gun Shop", slug: "point-blank-range-cincinnati", categories: ["ranges", "gun-shops", "instructors"], state: "ohio", city: "Cincinnati", address: "4600 Lake Forest Dr, Cincinnati, OH 45242", phone: "(513) 469-8000", rating: 4.7, reviewCount: 203, description: "Indoor shooting range and retail store in Cincinnati with 25-yard lanes, a full firearms inventory, and a variety of training courses including Ohio CCW certification and basic pistol safety.", website: "https://pointblankrange.com" },
  { id: "oh-003", name: "Stonewall Firearms", slug: "stonewall-firearms-cleveland", categories: ["gun-shops", "ffl-dealers", "instructors"], state: "ohio", city: "Cleveland", address: "6874 Pearl Rd, Middleburg Heights, OH 44130", phone: "(440) 243-4867", rating: 4.5, reviewCount: 164, description: "Family-owned gun shop near Cleveland offering new and used firearms sales, FFL transfers, and Ohio concealed carry classes. Carries handguns, long guns, and accessories from major manufacturers.", website: "https://stonewallfirearms.com" },

  // GEORGIA
  { id: "ga-001", name: "Stoddard's Range and Guns", slug: "stoddards-atlanta", categories: ["ranges", "gun-shops", "instructors"], state: "georgia", city: "Atlanta", address: "4655 Jimmy Carter Blvd, Norcross, GA 30093", phone: "(770) 263-8550", rating: 4.6, reviewCount: 212, description: "Full-service firearms facility in the Atlanta metro offering an indoor range, retail sales, gunsmithing, and courses including Georgia Weapons Carry License classes.", website: "https://stoddards.com", featured: true },
];

export const getDealersByState = (stateSlug: string): Dealer[] =>
  dealers.filter((d) => d.state === stateSlug);

export const getDealersByCategory = (catSlug: string): Dealer[] =>
  dealers.filter((d) => d.categories.includes(catSlug));

export const getDealerBySlug = (slug: string): Dealer | undefined =>
  dealers.find((d) => d.slug === slug);
