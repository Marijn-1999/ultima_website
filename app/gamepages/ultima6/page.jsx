"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    document.body.classList.add("ultima6-page");
    return () => document.body.classList.remove("ultima6-page");
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay">
          <h1>Ultima VI: The False Prophet</h1>
          <p>
            Peace through understanding, not conquest. Truth lies beyond
            appearances.
          </p>
        </div>
      </section>

      {/* Introduction to The False Prophet */}
      <section className="section grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>A Shift in Perspective</h2>
          <p>
            Released in 1990, <strong>Ultima VI: The False Prophet</strong>{" "}
            challenged players to reconsider the assumptions they'd carried
            through the series. Initially released for MS-DOS, the game was
            later ported to platforms including the Apple II, Commodore 64,
            Atari ST, and Amiga. Britannia is under attack by gargoyles—but the
            truth behind the conflict reveals a startling reversal.
          </p>
          <p>
            What begins as a call to arms soon transforms into a plea for peace,
            empathy, and mutual understanding.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima6_box.png"
            alt="Ultima VI box art"
            className="rounded"
          />
        </div>
      </section>

      {/* Technical Evolution */}
      <section className="section alt grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>One World, No Segments</h2>
          <p>
            Ultima VI introduced a seamless, tile-based world—no longer split
            between overworld and towns. This was a major technical leap powered
            by the Ultima VI engine, with fully integrated mouse support and a
            refined user interface.
          </p>
          <p>
            The game’s visual fidelity and quality-of-life improvements marked
            the dawn of a new era for RPGs.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima6_ui.png"
            alt="Ultima VI user interface"
            className="rounded"
          />
        </div>
      </section>

      {/* The Gargoyle Perspective */}
      <section className="section grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>The Enemy is Not the Enemy</h2>
          <p>
            Initially seen as invaders, the gargoyles are revealed to be a
            deeply spiritual race trying to protect their own world. Their
            actions stem from desperation, not malice.
          </p>
          <p>
            The player must question colonial assumptions and find a path to
            peaceful resolution—offering one of the first mainstream RPG
            narratives to foreground empathy and cultural relativism.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima6_gargoyles.png"
            alt="Gargoyles from Ultima VI"
            className="rounded"
          />
        </div>
      </section>

      {/* Themes of Unity */}
      <section className="section alt grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>Harmony, Not Conquest</h2>
          <p>
            Ultima VI brings the Age of Enlightenment trilogy to a close, urging
            players to embody the Virtues not just in battle, but in diplomacy
            and understanding.
          </p>
          <p>
            It was a mature, nuanced entry that laid the groundwork for deeper
            moral storytelling in games—well ahead of its time.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima6_statue.png"
            alt="The Avatar and the Codex"
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
