"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoSection() {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  // Autoplay (muted) when scrolled into view; pause when it leaves.
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 },
    );
    obs.observe(video);
    return () => obs.disconnect();
  }, []);

  const toggleSound = () => {
    const video = ref.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    if (!video.muted) video.play().catch(() => {});
  };

  return (
    <section id="watch" className="bg-ink px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-center font-display text-sm uppercase tracking-[0.3em] text-gold">
          See It For Yourself
        </p>
        <h2 className="mt-2 text-center font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
          Watch
        </h2>

        <div
          onClick={toggleSound}
          className="group relative mt-10 cursor-pointer overflow-hidden rounded-lg border border-zinc-800"
        >
          <video
            ref={ref}
            src="/men-arise.mp4"
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full"
          />

          <div className="pointer-events-none absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
            {muted ? (
              <>
                <svg
                  className="h-4 w-4 text-gold"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.8 8.8 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.9 8.9 0 0 0 3.69-1.81L19.73 21 21 19.73 4.27 3z" />
                </svg>
                Tap for sound
              </>
            ) : (
              <>
                <svg
                  className="h-4 w-4 text-gold"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05A4.5 4.5 0 0 0 16.5 12zM14 3.23v2.06A9 9 0 0 1 14 18.7v2.06A9 9 0 0 0 14 3.23z" />
                </svg>
                Tap to mute
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
