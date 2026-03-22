import { City } from "./types";

export const cities: City[] = [
  // New York MSA
  { name: "New York City", slug: "new-york-city", stateSlug: "new-york" },
  { name: "Newark", slug: "newark", stateSlug: "new-jersey" },
  // Los Angeles MSA
  { name: "Los Angeles", slug: "los-angeles", stateSlug: "california" },
  { name: "Long Beach", slug: "long-beach", stateSlug: "california" },
  { name: "Anaheim", slug: "anaheim", stateSlug: "california" },
  // Chicago MSA
  { name: "Chicago", slug: "chicago", stateSlug: "illinois" },
  // Dallas-Fort Worth MSA
  { name: "Dallas", slug: "dallas", stateSlug: "texas" },
  { name: "Fort Worth", slug: "fort-worth", stateSlug: "texas" },
  // Houston MSA
  { name: "Houston", slug: "houston", stateSlug: "texas" },
  // Washington DC MSA
  { name: "Arlington", slug: "arlington", stateSlug: "virginia" },
  { name: "Alexandria", slug: "alexandria", stateSlug: "virginia" },
  // Philadelphia MSA
  { name: "Philadelphia", slug: "philadelphia", stateSlug: "pennsylvania" },
  // Miami MSA
  { name: "Miami", slug: "miami", stateSlug: "florida" },
  { name: "Fort Lauderdale", slug: "fort-lauderdale", stateSlug: "florida" },
  // Atlanta MSA
  { name: "Atlanta", slug: "atlanta", stateSlug: "georgia" },
  // Boston MSA
  { name: "Boston", slug: "boston", stateSlug: "massachusetts" },
  // Phoenix MSA
  { name: "Phoenix", slug: "phoenix", stateSlug: "arizona" },
  { name: "Mesa", slug: "mesa", stateSlug: "arizona" },
  { name: "Scottsdale", slug: "scottsdale", stateSlug: "arizona" },
  // San Francisco MSA
  { name: "San Francisco", slug: "san-francisco", stateSlug: "california" },
  { name: "Oakland", slug: "oakland", stateSlug: "california" },
  { name: "San Jose", slug: "san-jose", stateSlug: "california" },
  // Riverside MSA
  { name: "Riverside", slug: "riverside", stateSlug: "california" },
  // Detroit MSA
  { name: "Detroit", slug: "detroit", stateSlug: "michigan" },
  // Seattle MSA
  { name: "Seattle", slug: "seattle", stateSlug: "washington" },
  { name: "Tacoma", slug: "tacoma", stateSlug: "washington" },
  // Minneapolis MSA
  { name: "Minneapolis", slug: "minneapolis", stateSlug: "minnesota" },
  { name: "Saint Paul", slug: "saint-paul", stateSlug: "minnesota" },
  // San Diego MSA
  { name: "San Diego", slug: "san-diego", stateSlug: "california" },
  // Tampa MSA
  { name: "Tampa", slug: "tampa", stateSlug: "florida" },
  { name: "Saint Petersburg", slug: "saint-petersburg", stateSlug: "florida" },
  // Denver MSA
  { name: "Denver", slug: "denver", stateSlug: "colorado" },
  { name: "Aurora", slug: "aurora", stateSlug: "colorado" },
  { name: "Lakewood", slug: "lakewood", stateSlug: "colorado" },
  // Saint Louis MSA
  { name: "Saint Louis", slug: "saint-louis", stateSlug: "missouri" },
  // Baltimore MSA
  { name: "Baltimore", slug: "baltimore", stateSlug: "maryland" },
  // Orlando MSA
  { name: "Orlando", slug: "orlando", stateSlug: "florida" },
  // Charlotte MSA
  { name: "Charlotte", slug: "charlotte", stateSlug: "north-carolina" },
  // San Antonio MSA
  { name: "San Antonio", slug: "san-antonio", stateSlug: "texas" },
  // Portland MSA
  { name: "Portland", slug: "portland", stateSlug: "oregon" },
  // Sacramento MSA
  { name: "Sacramento", slug: "sacramento", stateSlug: "california" },
  // Pittsburgh MSA
  { name: "Pittsburgh", slug: "pittsburgh", stateSlug: "pennsylvania" },
  // Austin MSA
  { name: "Austin", slug: "austin", stateSlug: "texas" },
  // Las Vegas MSA
  { name: "Las Vegas", slug: "las-vegas", stateSlug: "nevada" },
  // Cincinnati MSA
  { name: "Cincinnati", slug: "cincinnati", stateSlug: "ohio" },
  // Columbus MSA
  { name: "Columbus", slug: "columbus", stateSlug: "ohio" },
  // Cleveland MSA
  { name: "Cleveland", slug: "cleveland", stateSlug: "ohio" },
  // Kansas City MSA
  { name: "Kansas City", slug: "kansas-city", stateSlug: "missouri" },
  // Indianapolis MSA
  { name: "Indianapolis", slug: "indianapolis", stateSlug: "indiana" },
  // Nashville MSA
  { name: "Nashville", slug: "nashville", stateSlug: "tennessee" },
];

export const getCitiesByState = (stateSlug: string): City[] =>
  cities.filter((c) => c.stateSlug === stateSlug);

export const getCityBySlug = (stateSlug: string, citySlug: string): City | undefined =>
  cities.find((c) => c.stateSlug === stateSlug && c.slug === citySlug);
