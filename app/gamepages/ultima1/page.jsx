"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    document.body.classList.remove("akalabeth-page"); // remove other backgrounds
    document.body.classList.add("ultima1-page");

    return () => document.body.classList.remove("ultima1-page");
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero ultima1">
        <div className="overlay">
          <h1>Ultima I: The First Age of Darkness</h1>
          <p>The birth of a genre-defining saga</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>Welcome to Sosaria</h2>
          <p>
            Released in 1981, <strong>Ultima I</strong> marked the official
            beginning of the Ultima series. Building on the foundations of
            <em>Akalabeth</em>, it offered a richer world, deeper gameplay, and
            a bold narrative that stretched across time and space. Originally
            launched for the Apple II, Ultima I was later ported to several
            other platforms including the Atari 8-bit family, Commodore 64, IBM
            PC (MS-DOS), and Macintosh. A remade version with updated graphics
            and interface was also released in 1986 for modernized PCs.
          </p>
          <p>
            With a blend of medieval fantasy and surprising sci-fi elements,{" "}
            <em>Ultima I</em> set the tone for the ambitious storytelling the
            series would become known for.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima1_cover.png"
            alt="Ultima I game cover"
            className="rounded"
          />
        </div>
      </section>

      {/* Innovation and Scope */}
      <section className="section alt grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>Innovation and Scope</h2>
          <p>
            <strong>Ultima I</strong> was groundbreaking in both design and
            vision. Players explored an open world, visited towns and castles,
            dove into dungeons, and eventually—spoiler alert—launched into
            space.
          </p>
          <p>
            It introduced non-linear progression, character stats, equipment
            upgrades, and even an economy. These were features far ahead of
            their time and laid the groundwork for the RPG genre.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima1_gameplay.png"
            alt="Ultima I gameplay screenshot"
            className="rounded"
          />
        </div>
      </section>

      {/* The Story Begins */}
      <section className="section grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>The Story Begins</h2>
          <p>
            In <em>Ultima I</em>, the evil wizard Mondain threatens the land of
            Sosaria with an artifact of immortality: the Gem of Immortality. The
            player, a hero summoned through time, must gather strength and
            ultimately destroy the gem to restore peace.
          </p>
          <p>
            This tale of power, resistance, and transcendence would become a
            recurring motif in the series’ later entries.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima1_mondain.png"
            alt="The evil wizard Mondain"
            className="rounded"
          />
        </div>
      </section>

      {/* Legacy and Re-release */}
      <section className="section alt grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>Legacy and Re-release</h2>
          <p>
            Originally released for the Apple II, <em>Ultima I</em> was later
            remade in 1986 with updated graphics and more balanced gameplay. It
            became a cult classic and is still studied today as a milestone in
            RPG design.
          </p>
          <p>
            The game's blend of genres—fantasy, sci-fi, and time
            travel—demonstrated that games could break conventions and still
            succeed.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima1_remake.png"
            alt="Ultima I remake graphics"
            className="rounded"
          />
        </div>
      </section>

      {/* Why It Matters */}
      <section className="section grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>Why It Still Matters</h2>
          <p>
            <strong>Ultima I</strong> was more than a sequel—it was a
            declaration that games could tell epic stories, inspire moral
            questions, and challenge players to think critically about their
            actions.
          </p>
          <p>
            Its legacy continues through countless RPGs that followed, from{" "}
            <em>Final Fantasy</em> to <em>Mass Effect</em>. It set a standard
            for ambition, scale, and imagination.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima1_legacy.png"
            alt="Legacy of Ultima I"
            className="rounded"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer mt-16">
        <p>Site by Marijn Meeuwesen – For Educational Use</p>
      </footer>
    </main>
  );
}
