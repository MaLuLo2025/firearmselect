import { DealerCategory } from "./types";

export const categories: DealerCategory[] = [
  { id: 1, name: "Gun Shops", slug: "gun-shops", description: "Local firearms retailers offering new and used handguns, rifles, shotguns, and accessories. Browse shops by location, inventory specialties, and customer ratings.", shortDescription: "Buy & browse firearms" },
  { id: 2, name: "FFL Dealers", slug: "ffl-dealers", description: "Licensed Federal Firearms License holders offering transfers, sales, and compliance services. Find FFL dealers for online purchase transfers and private sale facilitation.", shortDescription: "Licensed transfers & sales" },
  { id: 3, name: "Shooting Ranges", slug: "ranges", description: "Indoor and outdoor shooting ranges offering lane rentals, memberships, and practice facilities. Compare ranges by caliber restrictions, distance, and amenities.", shortDescription: "Shoot & practice" },
  { id: 4, name: "Firearms Instructors", slug: "instructors", description: "Certified firearms instructors offering concealed carry courses, basic safety training, advanced tactical courses, and state-specific permit classes.", shortDescription: "Classes & certifications" },
];

export const getCategoryBySlug = (slug: string): DealerCategory | undefined =>
  categories.find((c) => c.slug === slug);
