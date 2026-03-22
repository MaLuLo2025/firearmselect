"use client";

import { useRouter } from "next/navigation";

interface StateOption {
  name: string;
  slug: string;
}

export default function LawSearch({ states }: { states: StateOption[] }) {
  const router = useRouter();

  const handleChange = (slug: string) => {
    if (slug) {
      router.push(`/${slug}/gun-laws`);
    }
  };

  return (
    <div className="flex justify-center">
      <select
        onChange={(e) => handleChange(e.target.value)}
        defaultValue=""
        className="font-serif text-sm px-5 py-3 border-2 border-ink-900 bg-white text-ink-900 appearance-none pr-10 min-w-[220px]"
      >
        <option value="">Select your state</option>
        {states.map((s) => (
          <option key={s.slug} value={s.slug}>
            {s.name}
          </option>
        ))}
      </select>
    </div>
  );
}
