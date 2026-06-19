const ACTIVITIES = [
  {
    title: "Group Workouts",
    desc: "Weekly training sessions to build strength, discipline, and accountability side by side.",
  },
  {
    title: "Bible Study",
    desc: "Digging deep into the Word together — conviction, clarity, and growth.",
  },
  {
    title: "Fellowship Breakfasts",
    desc: "Breaking bread as brothers. Honest conversation and connection over a shared table.",
  },
  {
    title: "Small Group Reading",
    desc: "Working through a book together in small groups — sharpening minds and hearts.",
  },
];

export default function Activities() {
  return (
    <section id="activities" className="bg-ink px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-center font-display text-sm uppercase tracking-[0.3em] text-gold">
          Every Month
        </p>
        <h2 className="mt-2 text-center font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
          The Rhythm
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {ACTIVITIES.map((a) => (
            <div
              key={a.title}
              className="flex gap-5 border border-zinc-800 bg-steel p-6 transition hover:border-gold/50"
            >
              <span className="mt-1 h-3 w-3 shrink-0 rotate-45 bg-gold" />
              <div>
                <h3 className="font-display text-xl font-semibold uppercase text-white">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
