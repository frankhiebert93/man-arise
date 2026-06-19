const MONTHS = [
  {
    month: "Month 1",
    title: "Ignite",
    desc: "Kickoff with the Rise Up Kings Ignite event. Vision cast, brotherhood formed, commitments made.",
  },
  {
    month: "Month 2",
    title: "Foundation",
    desc: "Faith first. Anchoring identity in Scripture and establishing daily spiritual disciplines.",
  },
  {
    month: "Month 3",
    title: "Discipline",
    desc: "Fitness and habits. Training the body and forging the consistency that carries every area of life.",
  },
  {
    month: "Month 4",
    title: "Stewardship",
    desc: "Family and finance. Leading at home and building with wisdom and integrity.",
  },
  {
    month: "Month 5",
    title: "Commission",
    desc: "Sent out. Reflection, testimony, and equipping each man to lead the next cohort.",
  },
];

export default function Program() {
  return (
    <section id="program" className="bg-steel px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-center font-display text-sm uppercase tracking-[0.3em] text-gold">
          The Cohort
        </p>
        <h2 className="mt-2 text-center font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
          A 5-Month Cycle
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-400">
          Men move through the journey together — a fixed cohort, start to finish.
          No spectators. Every man committed for the full five months.
        </p>

        <ol className="mt-16 space-y-px border-l-2 border-gold/40 pl-0">
          {MONTHS.map((m) => (
            <li key={m.month} className="relative pl-10 pb-10">
              <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-gold bg-ink" />
              <span className="font-display text-xs uppercase tracking-widest text-gold">
                {m.month}
              </span>
              <h3 className="font-display text-2xl font-semibold uppercase text-white">
                {m.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-zinc-400">{m.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
