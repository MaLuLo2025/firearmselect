import { City } from "./types";

export const cities: City[] = [
  // Texas
  { name: "Austin", slug: "austin", stateSlug: "texas" },
  { name: "San Antonio", slug: "san-antonio", stateSlug: "texas" },
  { name: "Fort Worth", slug: "fort-worth", stateSlug: "texas" },
  // Florida
  { name: "Tampa", slug: "tampa", stateSlug: "florida" },
  { name: "Miami", slug: "miami", stateSlug: "florida" },
  // Arizona
  { name: "Scottsdale", slug: "scottsdale", stateSlug: "arizona" },
  { name: "Mesa", slug: "mesa", stateSlug: "arizona" },
  // Colorado
  { name: "Lakewood", slug: "lakewood", stateSlug: "colorado" },
  // Ohio
  { name: "Columbus", slug: "columbus", stateSlug: "ohio" },
  { name: "Cincinnati", slug: "cincinnati", stateSlug: "ohio" },
  { name: "Cleveland", slug: "cleveland", stateSlug: "ohio" },
  // Georgia
  { name: "Atlanta", slug: "atlanta", stateSlug: "georgia" },
];

export const getCitiesByState = (stateSlug: string): City[] =>
  cities.filter((c) => c.stateSlug === stateSlug);

export const getCityBySlug = (stateSlug: string, citySlug: string): City | undefined =>
  cities.find((c) => c.stateSlug === stateSlug && c.slug === citySlug);
