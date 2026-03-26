"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Video } from "@/lib/videos";
import { getYoutubeThumbnail, getYoutubeUrl } from "@/lib/videos";

interface VideoHubProps {
  videos: Video[];
  categories: string[];
}

export default function VideoHub({ videos, categories }: VideoHubProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!activeCategory) return videos;
    return videos.filter((v) => v.category === activeCategory);
  }, [activeCategory, videos]);

  return (
    <div>
      {/* Category filter pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 text-xs uppercase tracking-widest font-sans font-medium border-2 transition-colors ${
            activeCategory === null
              ? "border-ink-900 bg-ink-900 text-white"
              : "border-ink-200 text-ink-500 hover:border-ink-900 hover:text-ink-900"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
            className={`px-4 py-2 text-xs uppercase tracking-widest font-sans font-medium border-2 transition-colors ${
              activeCategory === cat
                ? "border-ink-900 bg-ink-900 text-white"
                : "border-ink-200 text-ink-500 hover:border-ink-900 hover:text-ink-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Video grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="font-serif text-heading text-ink-900 mb-2">No videos in this category</p>
          <p className="text-sm text-ink-500">
            Select a different category or view all videos.
          </p>
        </div>
      )}
    </div>
  );
}

function VideoCard({ video }: { video: Video }) {
  return (
    <div className="border-2 border-ink-200 hover:border-ink-900 transition-colors group">
      {/* Thumbnail */}
      <a
        href={getYoutubeUrl(video.youtubeId)}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative aspect-video bg-ink-50 overflow-hidden"
      >
        <img
          src={getYoutubeThumbnail(video.youtubeId)}
          alt={video.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-ink-900/20 group-hover:bg-ink-900/40 transition-colors">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            className="drop-shadow-lg"
          >
            <circle cx="24" cy="24" r="22" fill="white" fillOpacity="0.9" />
            <polygon points="20,16 34,24 20,32" fill="#111110" />
          </svg>
        </div>
      </a>

      {/* Content */}
      <div className="p-4">
        <span className="inline-block font-sans text-[11px] uppercase tracking-widest text-steel-700 font-medium mb-2">
          {video.category}
        </span>
        <h3 className="font-serif text-base text-ink-900 font-semibold leading-snug mb-1">
          {video.title}
        </h3>
        <p className="font-sans text-xs text-ink-500 mb-3">{video.source}</p>
        <p className="text-sm text-ink-500 leading-relaxed mb-4">{video.summary}</p>

        <div className="flex items-center justify-between pt-3 border-t border-ink-100">
          <a
            href={getYoutubeUrl(video.youtubeId)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs uppercase tracking-widest text-ink-900 font-medium hover:text-steel-700 transition-colors"
          >
            Watch on YouTube &rarr;
          </a>

          {video.relatedFaqIds.length > 0 && (
            <Link
              href="/resources/faq"
              className="font-sans text-[11px] text-steel-700 hover:text-ink-900 transition-colors"
            >
              Related FAQ
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
