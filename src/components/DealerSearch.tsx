"use client";

import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";

interface CityOption {
  name: string;
  slug: string;
  stateSlug: string;
}

interface StateOption {
  name: string;
  slug: string;
}

export default function DealerSearch({
  states,
  cities,
}: {
  states: StateOption[];
  cities: CityOption[];
}) {
  const router = useRouter();
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const statesWithCities = useMemo(
    () => states.filter((s) => cities.some((c) => c.stateSlug === s.slug)),
    [states, cities]
  );

  const availableCities = useMemo(
    () => cities.filter((c) => c.stateSlug === selectedState),
    [cities, selectedState]
  );

  const handleStateChange = (slug: string) => {
    setSelectedState(slug);
    setSelectedCity("");
  };

  const handleCityChange = (slug: string) => {
    setSelectedCity(slug);
    if (slug && selectedState) {
      router.push(`/dealers/${selectedState}/${slug}`);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
      <select
        value={selectedState}
        onChange={(e) => handleStateChange(e.target.value)}
        className="font-serif text-sm px-5 py-3 border-2 border-ink-900 bg-white text-ink-900 appearance-none pr-10 min-w-[220px]"
      >
        <option value="">Select your state</option>
        {statesWithCities.map((s) => (
          <option key={s.slug} value={s.slug}>
            {s.name}
          </option>
        ))}
      </select>
      <select
        value={selectedCity}
        onChange={(e) => handleCityChange(e.target.value)}
        disabled={!selectedState}
        className={`font-serif text-sm px-5 py-3 border-2 border-ink-900 bg-white text-ink-900 appearance-none pr-10 min-w-[220px] ${
          !selectedState ? "opacity-40 cursor-not-allowed" : ""
        }`}
      >
        <option value="">
          {selectedState ? "Select your city" : "Select a state first"}
        </option>
        {availableCities.map((c) => (
          <option key={c.slug} value={c.slug}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
}
