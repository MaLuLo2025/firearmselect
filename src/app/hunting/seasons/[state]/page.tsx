import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getStateBySlug, states } from "@/lib/states";
import { getHuntingData, huntingStates, HuntingSeason } from "@/lib/hunting-data";

export function generateStaticParams() {
  return huntingStates.map((h) => ({ state: h.stateSlug }));
}

export function generateMetadata({
  params,
}: {
  params: { state: string };
}): Metadata {
  const data = getHuntingData(params.state);
  if (!data) return {};
  const title = `${data.stateName} Hunting Seasons & Licensing 2025–2026 | FirearmSelect`;
  const description = `${data.stateName} hunting season dates, license costs, tag requirements, and harvest reporting. Updated for 2025–2026.`;
  return { title, description, openGraph: { title, description } };
}

function SeasonTable({ seasons, title }: { seasons: HuntingSeason[]; title: string }) {
  if (seasons.length === 0) return null;
  return (
    <div className="mb-8">
      <h3 className="font-serif text-subheading text-ink-900 mb-3">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-ink-900">
              <th className="text-left font-sans text-[10px] uppercase tracking-wider text-ink-500 py-2 pr-3">Species</th>
              <th className="text-left font-sans text-[10px] uppercase tracking-wider text-ink-500 py-2 pr-3">Season</th>
              <th className="text-left font-sans text-[10px] uppercase tracking-wider text-ink-500 py-2 pr-3">Dates</th>
              <th className="text-left font-sans text-[10px] uppercase tracking-wider text-ink-500 py-2 pr-3">Bag Limit</th>
              <th className="text-left font-sans text-[10px] uppercase tracking-wider text-ink-500 py-2">Methods</th>
            </tr>
          </thead>
          <tbody>
            {seasons.map((s, i) => (
              <tr key={i} className="border-b border-ink-100">
                <td className="py-2.5 pr-3 text-ink-900 font-medium">{s.species}</td>
                <td className="py-2.5 pr-3 text-ink-500">{s.seasonType}</td>
                <td className="py-2.5 pr-3 text-ink-500 whitespace-nowrap">{s.dates}</td>
                <td className="py-2.5 pr-3 text-ink-500">{s.bagLimit}</td>
                <td className="py-2.5 text-ink-500">{s.legalMethods}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {seasons.some((s) => s.notes) && (
        <div className="mt-2 space-y-1">
          {seasons
            .filter((s) => s.notes)
            .map((s, i) => (
              <p key={i} className="text-xs text-ink-400 italic">
                {s.species} ({s.seasonType}): {s.notes}
              </p>
            ))}
        </div>
      )}
    </div>
  );
}

export default function HuntingStatePage({
  params,
}: {
  params: { state: string };
}) {
  const data = getHuntingData(params.state);
  if (!data) notFound();

  const stateInfo = getStateBySlug(params.state);

  return (
    <>
      {/* Header */}
      <section className="py-12 sm:py-16 border-b border-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-ink-300">
              <li>
                <Link href="/" className="hover:text-ink-900 transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/hunting" className="hover:text-ink-900 transition-colors">Hunting</Link>
              </li>
              <li>/</li>
              <li className="text-ink-500">{data.stateName}</li>
            </ol>
          </nav>
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-steel-500 mb-3">
            Hunting Seasons &amp; Licensing &middot; {data.stateAbbr}
          </p>
          <h1 className="font-serif text-display-sm text-ink-900">
            {data.stateName} Hunting Seasons &amp; Licensing
          </h1>
          <div className="w-10 h-0.5 bg-ink-900 mt-6 mb-4" />
          <span className="font-sans text-[10px] uppercase tracking-wider px-3 py-1 bg-cream-200 text-ink-500">
            2025–2026 Season
          </span>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Overview */}
          <div>
            <p className="text-sm text-ink-500 leading-relaxed">{data.overview}</p>
            <p className="text-xs text-ink-400 italic mt-3">
              Dates shown are for the 2025–2026 season based on the most recent
              published regulations. Always verify current dates with the{" "}
              <a
                href={data.wildlifeAgencyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-steel-500 hover:underline"
              >
                {data.wildlifeAgency}
              </a>{" "}
              before hunting.
            </p>
          </div>

          {/* Season Dates */}
          <div>
            <h2 className="font-serif text-heading text-ink-900 mb-6">
              Season Dates by Game Type
            </h2>
            <SeasonTable seasons={data.seasons.bigGame} title="Big Game" />
            <SeasonTable seasons={data.seasons.turkey} title="Turkey" />
            <SeasonTable seasons={data.seasons.upland} title="Upland Game Birds" />
            <SeasonTable seasons={data.seasons.waterfowl} title="Waterfowl" />
            <SeasonTable seasons={data.seasons.smallGame} title="Small Game" />
          </div>

          {/* Licensing */}
          <div>
            <h2 className="font-serif text-heading text-ink-900 mb-4">
              Licensing
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-ink-900">
                    <th className="text-left font-sans text-[10px] uppercase tracking-wider text-ink-500 py-2 pr-3">License Type</th>
                    <th className="text-left font-sans text-[10px] uppercase tracking-wider text-ink-500 py-2 pr-3">Cost</th>
                    <th className="text-left font-sans text-[10px] uppercase tracking-wider text-ink-500 py-2">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {data.licenses.map((lic, i) => (
                    <tr key={i} className="border-b border-ink-100">
                      <td className="py-2.5 pr-3 text-ink-900 font-medium">{lic.type}</td>
                      <td className="py-2.5 pr-3 text-ink-500 whitespace-nowrap">{lic.cost}</td>
                      <td className="py-2.5 text-ink-400 text-xs">{lic.notes || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Tags, Draws, Lotteries */}
          <div>
            <h2 className="font-serif text-heading text-ink-900 mb-4">
              Tags, Draws &amp; Lotteries
            </h2>
            <p className="text-sm text-ink-500 leading-relaxed">
              {data.tagsAndDraws}
            </p>
          </div>

          {/* Harvest Reporting */}
          <div>
            <h2 className="font-serif text-heading text-ink-900 mb-4">
              Harvest Reporting
            </h2>
            <p className="text-sm text-ink-500 leading-relaxed">
              {data.harvestReporting}
            </p>
          </div>

          {/* State Resources */}
          <div>
            <h2 className="font-serif text-heading text-ink-900 mb-4">
              {data.stateName} Wildlife Resources
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href={data.wildlifeAgencyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-steel-500 hover:underline"
                >
                  {data.wildlifeAgency} — Hunting Home →
                </a>
              </li>
              <li>
                <a
                  href={data.regulationsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-steel-500 hover:underline"
                >
                  Current Hunting Regulations →
                </a>
              </li>
              <li>
                <a
                  href={data.hunterEdUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-steel-500 hover:underline"
                >
                  Hunter Education →
                </a>
              </li>
              {data.violationHotline && (
                <li className="text-sm text-ink-500">
                  Violation Hotline: <strong className="text-ink-900">{data.violationHotline}</strong>
                </li>
              )}
              <li>
                <a
                  href="https://www.fws.gov/birds/management/managed-species/waterfowl.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-steel-500 hover:underline"
                >
                  USFWS Waterfowl Frameworks →
                </a>
              </li>
            </ul>
          </div>

          {/* Cross-links */}
          <div className="flex flex-col sm:flex-row gap-4">
            {stateInfo && (
              <Link
                href={`/${data.stateSlug}/gun-laws`}
                className="flex-1 block px-5 py-4 border border-ink-100 hover:border-ink-300 hover:bg-cream-100 transition-colors"
              >
                <span className="font-sans text-[10px] uppercase tracking-wider text-steel-500">
                  Gun Laws
                </span>
                <span className="block font-serif text-sm text-ink-900 mt-1">
                  {data.stateName} Firearms Laws →
                </span>
              </Link>
            )}
            <Link
              href={`/dealers/${data.stateSlug}`}
              className="flex-1 block px-5 py-4 border border-ink-100 hover:border-ink-300 hover:bg-cream-100 transition-colors"
            >
              <span className="font-sans text-[10px] uppercase tracking-wider text-steel-500">
                Shops &amp; Ranges
              </span>
              <span className="block font-serif text-sm text-ink-900 mt-1">
                Find Dealers in {data.stateName} →
              </span>
            </Link>
          </div>

          {/* Disclaimer */}
          <div
            className="rounded-sm"
            style={{
              background: "rgba(90,106,122,0.06)",
              borderLeft: "3px solid #5a6a7a",
              padding: "16px 20px",
            }}
          >
            <p className="font-sans text-xs text-ink-400 leading-relaxed">
              <strong className="text-ink-500">Disclaimer:</strong> This page is
              for informational purposes only. Season dates, bag limits, license
              fees, and regulations shown here are based on the most recently
              published data from the{" "}
              <a
                href={data.wildlifeAgencyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-steel-500 hover:underline"
              >
                {data.wildlifeAgency}
              </a>{" "}
              and may not reflect last-minute changes, emergency closures, or
              special regulations. Always verify current regulations directly with
              your state wildlife agency before hunting. FirearmSelect does not
              provide legal advice and is not responsible for actions taken based
              on this information.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
