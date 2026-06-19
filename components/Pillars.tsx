const PILLARS = [
  {
    title: "Faith",
    desc: "Rooted in the Word. Building men who lead with conviction and walk by the Spirit.",
  },
  {
    title: "Family",
    desc: "Becoming present husbands and fathers who protect, provide, and disciple at home.",
  },
  {
    title: "Fitness",
    desc: "Stewarding the body as a temple — strength, discipline, and endurance for the fight.",
  },
  {
    title: "Finance",
    desc: "Wisdom and integrity with money. Building, giving, and providing for generations.",
  },
];

export default function Pillars() {
  return (
    <section id="pillars" className="bg-ink px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
          The Four Pillars
        </h2>
        <div className="mx-auto mt-3 h-1 w-20 bg-gold" />

        <div className="mt-16 grid gap-px overflow-hidden border border-zinc-800 bg-zinc-800 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <div key={p.title} className="group bg-steel p-8 transition hover:bg-zinc-900">
              <span className="font-display text-5xl font-bold text-gold/30 transition group-hover:text-gold">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold uppercase text-white">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
