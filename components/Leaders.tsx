"use client";

import { useEffect, useState } from "react";

const LEADERS = [
  { name: "Ruben Dyck", phone: "625-118-9807", img: "/team/ruben-dyck.jpg" },
  { name: "Frank Hiebert", phone: "625-152-5972", img: "/team/frank-hiebert.jpg" },
  { name: "Aron Guenter", phone: "625-100-0285", img: "/team/aron-guenter.jpg" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

function Avatar({ name, img }: { name: string; img: string }) {
  // Default to initials; swap to the photo only once it's confirmed to load.
  // This avoids a broken-image flash before the photos are added.
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const probe = new window.Image();
    probe.onload = () => setLoaded(true);
    probe.onerror = () => setLoaded(false);
    probe.src = img;
  }, [img]);

  if (!loaded) {
    return (
      <div className="flex h-40 w-40 items-center justify-center rounded-full border-2 border-gold/40 bg-ink font-display text-4xl font-bold text-gold">
        {initials(name)}
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={img}
      alt={name}
      className="h-40 w-40 rounded-full border-2 border-gold/40 object-cover"
    />
  );
}

export default function Leaders() {
  return (
    <section id="contact" className="bg-steel px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-center font-display text-sm uppercase tracking-[0.3em] text-gold">
          Have Questions?
        </p>
        <h2 className="mt-2 text-center font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
          Talk to a Leader
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-400">
          Reach out to any of the men below for more information about the
          program.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {LEADERS.map((l) => (
            <div
              key={l.name}
              className="flex flex-col items-center rounded-md border border-zinc-800 bg-ink p-8 text-center"
            >
              <Avatar name={l.name} img={l.img} />
              <h3 className="mt-6 font-display text-2xl font-semibold uppercase text-white">
                {l.name}
              </h3>
              <a
                href={`tel:+52${l.phone.replace(/\D/g, "")}`}
                className="mt-2 font-display text-lg tracking-wide text-gold transition hover:text-amber-400"
              >
                {l.phone}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
