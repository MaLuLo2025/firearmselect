import { Metadata } from "next";
import Link from "next/link";
import { videos, videoCategories } from "@/lib/videos";
import VideoHub from "@/components/VideoHub";

export const metadata: Metadata = {
  title: "Firearms Education Video Library",
  description:
    "Curated educational firearms videos from trusted sources including NSSF, Project ChildSafe, Lucky Gunner, and Honest Outlaw. Safety, concealed carry, caliber guides, and more.",
  keywords: [
    "firearms education videos",
    "gun safety videos",
    "concealed carry videos",
    "shooting range tips",
    "firearm cleaning",
    "first-time gun buyer",
  ],
};

export default function VideosPage() {
  return (
    <>
      {/* Header */}
      <section className="py-10 sm:py-14 border-b-2 border-ink-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-ink-500">
              <li>
                <Link href="/" className="hover:text-ink-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-ink-900">Video Library</li>
            </ol>
          </nav>
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-steel-700 font-medium mb-3">
            Resources
          </p>
          <h1 className="font-serif text-display-sm sm:text-display text-ink-900">
            Firearms Education Video Library
          </h1>
          <div className="w-12 h-1 bg-ink-900 mt-6 mb-5" />
          <p className="text-ink-500 text-lg max-w-2xl leading-relaxed">
            Curated educational content from trusted sources. No politics. No opinion. Just knowledge.
          </p>
        </div>
      </section>

      {/* Video Hub (client component) */}
      <section className="py-8 sm:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <VideoHub
            videos={videos}
            categories={[...videoCategories]}
          />
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-4 bg-cream-100 border-t-2 border-ink-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-ink-500 leading-relaxed text-center">
            All videos are produced by third-party creators and hosted on YouTube. FirearmSelect does not
            produce video content and is not responsible for the accuracy of third-party material. Videos
            are selected for educational value and non-political content only.
          </p>
        </div>
      </section>
    </>
  );
}
