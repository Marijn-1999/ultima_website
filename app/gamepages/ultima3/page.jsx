"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    document.body.classList.add("ultima3-page");
    return () => document.body.classList.remove("ultima3-page");
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay">
          <h1>Ultima III: Exodus</h1>
          <p>When code becomes the villain</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>A New Evolution</h2>
          <p>
            Released in 1983, <strong>Ultima III: Exodus</strong> was a major
            leap forward in RPG design. It introduced a party-based combat
            system, graphical world map travel, and a deeper story. With this
            installment, Richard Garriott shifted the series from solo dungeon
            crawling to strategic group adventures. Originally developed for the
            Apple II, it was later ported to platforms including the Commodore
            64, Atari 8-bit, Atari ST, MS-DOS, Amiga, Macintosh, FM-7, Sharp X1,
            and even made its way to the Nintendo Entertainment System (NES) and
            MSX, helping establish Ultima’s global popularity.
          </p>
          <p>
            Exodus wasn't a person—but a living computer. This twist broke
            fantasy conventions and gave players a villain unlike anything seen
            before.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima3_box.png"
            alt="Ultima III game box"
            className="rounded"
          />
        </div>
      </section>

      {/* Gameplay Innovations */}
      <section className="section alt grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>Revolution in Gameplay</h2>
          <p>
            For the first time, players could control a full party of
            adventurers—each with distinct classes, races, and stats. Combat
            became turn-based on a tactical grid, requiring positioning and
            planning.
          </p>
          <p>
            The world also became more alive: towns had guards, moongates
            shifted with phases, and monsters behaved more strategically. Ultima
            III laid the groundwork for party-based RPGs that would dominate the
            genre.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima3_combat.png"
            alt="Ultima III battle screen"
            className="rounded"
          />
        </div>
      </section>

      {/* The Rise of Narrative */}
      <section className="section grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>The Rise of Narrative</h2>
          <p>
            Ultima III brought more than just gameplay advancements—it
            introduced moral decisions and plot twists. Instead of defeating a
            single villain, players had to understand Exodus’s nature and shut
            down the machine... with a punch card.
          </p>
          <p>
            This fusion of fantasy and sci-fi made Exodus a memorable and
            genre-bending entry in the series.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima3_exodus.png"
            alt="Exodus as a computer"
            className="rounded"
          />
        </div>
      </section>

      {/* Influence and Legacy */}
      <section className="section alt grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>A Lasting Influence</h2>
          <p>
            <strong>Ultima III</strong> inspired countless games. Its combat
            mechanics influenced everything from <em>Final Fantasy</em> to{" "}
            <em>Dragon Quest</em>. It showed that RPGs could be complex,
            narrative-rich, and deeply strategic.
          </p>
          <p>
            The game’s unique antagonist and ending remain one of the most
            creative twists in gaming history. Even decades later, Exodus is
            remembered as a milestone.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima3_legacy.png"
            alt="Ultima III legacy montage"
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
