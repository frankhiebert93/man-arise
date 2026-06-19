const FACTS = [
  { label: "Program", value: "5 Months" },
  { label: "Starts", value: "July 11, 2026" },
  { label: "Who", value: "Men 18+" },
  { label: "Language", value: "English" },
];

export default function Details() {
  return (
    <section id="details" className="bg-ink px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-center font-display text-sm uppercase tracking-[0.3em] text-gold">
          The Commitment
        </p>
        <h2 className="mt-2 text-center font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
          What to Expect
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-400">
          A powerful brotherhood with Bible studies, workouts, challenges, and
          great company. An exciting competition and a special graduation
          celebration await those who finish strong.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden border border-zinc-800 bg-zinc-800 sm:grid-cols-4">
          {FACTS.map((f) => (
            <div key={f.label} className="bg-steel px-6 py-8 text-center">
              <div className="font-display text-2xl font-bold uppercase text-white">
                {f.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-zinc-400">
                {f.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-px flex flex-col items-center justify-center gap-2 border border-t-0 border-zinc-800 bg-steel px-6 py-10 text-center sm:flex-row sm:gap-6">
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-400">
            Investment per man
          </span>
          <span className="font-display text-5xl font-bold text-gold">
            $2,000 <span className="text-2xl text-zinc-300">MXN</span>
          </span>
        </div>
      </div>
    </section>
  );
}
