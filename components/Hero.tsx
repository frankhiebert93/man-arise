import { SIGNUP_URL } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-steel via-ink to-ink" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(200,155,60,0.18),transparent_60%)]" />

      <div className="relative z-10 max-w-3xl">
        <p className="mb-4 font-display text-sm uppercase tracking-[0.4em] text-gold">
          Blumenau Mennonite Church &middot; 2026
        </p>
        <h1 className="font-display text-6xl font-bold uppercase leading-none tracking-tight text-white sm:text-8xl">
          Men Arise
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-300 sm:text-xl">
          Iron sharpens iron. A brotherhood that forges men in faith,
          discipline, physical strength, and purpose — Rise to the man God
          called you to be.
        </p>
        <a
          href={SIGNUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block bg-gold px-10 py-4 font-display text-sm font-semibold uppercase tracking-widest text-ink transition hover:bg-amber-400"
        >
          Join the Brotherhood
        </a>
      </div>
    </section>
  );
}
