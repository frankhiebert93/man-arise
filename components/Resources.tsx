const BOOKS = [
  {
    title: "Answer with Truth",
    author: "David “Goose” Mills",
    url: "https://www.amazon.com/Answer-Truth-Ambassadors-Leading-Spiritually/dp/B0D6TLLJKK",
  },
  {
    title: "Man Up",
    author: "Mike Winter",
    url: "https://www.amazon.com/Man-Up-Restoring-Biblical-Manhood/dp/B0BSJ4FZPT",
  },
  {
    title: "Call to Arms",
    author: "Chuck Black",
    url: "https://www.amazon.com/Call-Arms-Glory-Courageous-Fatherhood/dp/0967924049",
  },
  {
    title: "Titus Ten",
    author: "J. Josh Smith",
    url: "https://www.amazon.com/Titus-Ten-Foundations-Godly-Manhood/dp/1087752396",
  },
  {
    title: "Wild at Heart",
    author: "John Eldredge",
    url: "https://www.amazon.com/Wild-Heart-Revised-Updated-Discovering/dp/1400200393",
  },
  {
    title: "The Man in the Mirror",
    author: "Patrick Morley",
    url: "https://www.amazon.com/Man-Mirror-Solving-Problems-Anniversary/dp/0310624525",
  },
  {
    title: "Man of God",
    author: "Charles Stanley",
    url: "https://www.amazon.com/Man-God-Leading-Family-Allowing/dp/1610456580",
  },
  {
    title: "Mere Christianity",
    author: "C. S. Lewis",
    url: "https://www.amazon.com/Mere-Christianity-C-S-Lewis/dp/0060652926",
  },
  {
    title: "Knowing God",
    author: "J. I. Packer",
    url: "https://www.amazon.com/Knowing-God-J-I-Packer/dp/0830816518",
  },
  {
    title: "The Pursuit of God",
    author: "A. W. Tozer",
    url: "https://www.amazon.com/Pursuit-God-Updated-W-Tozer/dp/1622452968",
  },
  {
    title: "New Wine in New Wineskins",
    author: "Reginald Wade Lawrence",
    url: "https://www.amazon.com/dp/1597813966",
  },
  {
    title: "Disciplines of a Godly Man",
    author: "R. Kent Hughes",
    url: "https://www.amazon.com/Disciplines-Godly-Man-Kent-Hughes/dp/1433561301",
  },
  {
    title: "Point Man",
    author: "Steve Farrar",
    url: "https://www.amazon.com/Point-Revised-Updated-30th-Anniversary/dp/052565352X",
  },
  {
    title: "Kingdom Men",
    author: "Tony Evans",
    url: "https://www.amazon.com/Kingdom-Men-Rising-Greater-Influence/dp/0764237055",
  },
];

export default function Resources() {
  return (
    <section id="resources" className="bg-steel px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-center font-display text-sm uppercase tracking-[0.3em] text-gold">
          Sharpen Your Mind
        </p>
        <h2 className="mt-2 text-center font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
          Reading List
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-400">
          The books that shape the brotherhood. Read alone, discussed together.
        </p>

        <ul className="mt-14 grid gap-px overflow-hidden border border-zinc-800 bg-zinc-800 sm:grid-cols-2">
          {BOOKS.map((b, i) => (
            <li key={b.title}>
              <a
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full items-baseline gap-4 bg-ink px-6 py-5 transition hover:bg-zinc-900"
              >
                <span className="font-display text-lg font-bold text-gold/40 transition group-hover:text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-lg font-semibold uppercase leading-tight text-white transition group-hover:text-gold">
                    {b.title}
                  </p>
                  {b.author && (
                    <p className="text-sm text-zinc-500">{b.author}</p>
                  )}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
