const SCHEDULE = [
  {
    date: "July 11",
    time: "7:00 – 9:00 AM",
    items: ["Workout", "Devotional", "Coffee + Snacks"],
  },
  {
    date: "August 8",
    time: "7:00 – 9:00 AM",
    items: ["Workout", "Devotional", "Coffee + Snacks"],
  },
  {
    date: "September 12",
    time: "7:00 – 9:00 AM",
    items: ["Workout", "Devotional", "Coffee + Snacks"],
  },
  {
    date: "October 10",
    time: "7:00 – 9:00 AM",
    items: ["Workout", "Devotional", "Coffee + Snacks"],
  },
  {
    date: "November 14",
    time: "Graduation",
    items: ["Morning Workout Competition", "Grad Dinner with Spouse / Date"],
  },
];

export default function Program() {
  return (
    <section id="schedule" className="bg-steel px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-center font-display text-sm uppercase tracking-[0.3em] text-gold">
          Men Arise 2026
        </p>
        <h2 className="mt-2 text-center font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
          The Schedule
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-400">
          One gathering a month, start to finish. Every man committed for the
          full five months.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden border border-zinc-800 bg-zinc-800 sm:grid-cols-3 lg:grid-cols-5">
          {SCHEDULE.map((s) => (
            <div key={s.date} className="flex flex-col bg-ink p-6">
              <div className="font-display text-2xl font-bold uppercase text-white">
                {s.date}
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-gold">
                {s.time}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                {s.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm italic text-zinc-500">
          Each Men&apos;s Small Group will determine their own schedule for Bible
          studies.
        </p>
      </div>
    </section>
  );
}
