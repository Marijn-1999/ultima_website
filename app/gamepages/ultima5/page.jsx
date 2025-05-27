"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    document.body.classList.add("ultima5-page");
    return () => document.body.classList.remove("ultima5-page");
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay">
          <h1>Ultima V: Warriors of Destiny</h1>
          <p>
            Virtue is twisted. Lord British is missing. Darkness has fallen.
          </p>
        </div>
      </section>

      {/* The Shadow of Lord Blackthorn */}
      <section className="section grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>Darkness in Britannia</h2>
          <p>
            Released in 1988, <strong>Ultima V: Warriors of Destiny</strong>{" "}
            takes place in a Britannia overshadowed by tyranny. Lord British is
            gone, and Lord Blackthorn has corrupted the Virtues into oppressive
            laws. Originally developed for the Apple II, it was later ported to
            Commodore 64, MS-DOS, Atari ST, Amiga, and even the NES in 1993,
            with notable changes to gameplay and presentation.
          </p>
          <p>
            The player returns as the Avatar—not just to explore and grow, but
            to resist an authoritarian regime that has weaponized morality.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima5_box.png"
            alt="Ultima V game box"
            className="rounded"
          />
        </div>
      </section>

      {/* A World in Rebellion */}
      <section className="section alt grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>Gameplay Deepens</h2>
          <p>
            Ultima V introduced a full day-night cycle, NPC schedules, and a far
            more reactive world. Guards patrolled cities. Townsfolk had jobs and
            routines. Hiding and strategy became essential.
          </p>
          <p>
            Dungeons were longer and more dangerous, and the overworld was
            filled with mystery, secret passageways, and moral nuance.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima5_nightcycle.png"
            alt="Day-Night system in Ultima V"
            className="rounded"
          />
        </div>
      </section>

      {/* The Codex and the Underworld */}
      <section className="section grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>The Codex, Again</h2>
          <p>
            The Codex of Ultimate Wisdom returns—now the object of a power
            struggle between the Avatar, Blackthorn, and the sinister
            Shadowlords: physical manifestations of Falsehood, Hatred, and
            Cowardice.
          </p>
          <p>
            Exploring the Underworld—a massive subterranean realm—adds danger
            and depth. It’s a dark mirror to the surface world and a symbol of
            the spiritual decay in Britannia.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima5_underworld.png"
            alt="The Underworld"
            className="rounded"
          />
        </div>
      </section>

      {/* Resistance and Rebellion */}
      <section className="section alt grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>Legacy of Resistance</h2>
          <p>
            Ultima V was a story of rebellion and responsibility. It warned
            against zealotry and moral absolutism, challenging players to think
            critically about how ideals can be subverted by fear and power.
          </p>
          <p>
            Technically and narratively, it was a leap forward for the
            series—and a defining moment in role-playing game history.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima5_blackthorn.png"
            alt="Lord Blackthorn"
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
