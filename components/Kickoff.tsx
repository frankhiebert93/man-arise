import Image from "next/image";
import { SIGNUP_URL } from "@/lib/site";

export default function Kickoff() {
  return (
    <section id="kickoff" className="relative overflow-hidden px-6 py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-ink to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(200,155,60,0.15),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">
          The Kickoff Event
        </p>
        <h2 className="mt-3 font-display text-5xl font-bold uppercase leading-none tracking-tight text-white sm:text-7xl">
          Rise Up Kings
          <span className="block text-gold">Ignite</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-300">
          One full day to set the standard. Six intense hours of worship,
          teaching, sweat, and brotherhood that launch every cohort with fire.
        </p>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-px overflow-hidden border border-zinc-800 bg-zinc-800">
          {[
            ["6", "Hours"],
            ["4", "Pillars"],
            ["1", "Brotherhood"],
          ].map(([n, label]) => (
            <div key={label} className="bg-steel py-6">
              <div className="font-display text-4xl font-bold text-gold">{n}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-zinc-400">
                {label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="rounded-md bg-white p-4">
            <Image
              src="/qr-signup.png"
              alt="Scan to sign up for Man Arise"
              width={200}
              height={200}
              className="h-44 w-44"
            />
          </div>
          <p className="text-xs uppercase tracking-widest text-zinc-400">
            Scan to sign up
          </p>
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-gold px-10 py-4 font-display text-sm font-semibold uppercase tracking-widest text-gold transition hover:bg-gold hover:text-ink"
          >
            Reserve Your Spot
          </a>
        </div>
      </div>
    </section>
  );
}
