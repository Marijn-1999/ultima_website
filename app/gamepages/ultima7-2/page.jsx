"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    document.body.classList.add("ultima7-part2-page");
    return () => document.body.classList.remove("page-home");
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero ultima">
        <div className="overlay">
          <h1>Ultima VII Part Two: Serpent Isle</h1>
          <p>The Avatar’s Journey into a Mysterious New Land</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>A Darker, Stranger Britannia</h2>
          <p>
            Released in 1993, <strong>Ultima VII Part Two: Serpent Isle</strong>{" "}
            continues the epic “Age of Armageddon” saga, sending the Avatar to
            an isolated and enigmatic land torn apart by the lingering fallout
            of ancient wars and powerful sorcery.
          </p>
          <p>
            The game expands on the systems of its predecessor, offering a
            larger, more atmospheric world with multiple factions, diverse
            cultures, and moral ambiguity. Originally released for MS-DOS, it
            retained the real-time gameplay and immersive detail that defined
            Ultima VII.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima7-serpent_isle_cover.png"
            alt="Ultima VII Part Two: Serpent Isle cover art"
            className="rounded"
          />
        </div>
      </section>

      {/* The Isle’s Mysteries */}
      <section className="section alt grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>The Isle’s Mysteries</h2>
          <p>
            Serpent Isle is a land steeped in mystery, with its own legends,
            gods, and dangers. Players explore ancient ruins, confront vengeful
            spirits, and interact with complex NPCs whose motivations are rarely
            clear-cut. The game emphasizes exploration, puzzle-solving, and deep
            narrative choices.
          </p>
          <p>
            The fractured societies and shifting alliances challenge the Avatar
            to weigh each decision carefully, as actions carry lasting
            consequences.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima7-serpent_isle_map.png"
            alt="Map of Serpent Isle"
            className="rounded"
          />
        </div>
      </section>

      {/* Gameplay and Features */}
      <section className="section grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>Gameplay and Features</h2>
          <p>
            Building on the innovations of Ultima VII, Serpent Isle introduces
            enhanced graphics, improved AI, and a more refined user interface.
            The game continues the real-time combat and detailed environmental
            interactions, with expanded crafting and magic systems.
          </p>
          <p>
            Players must solve intricate puzzles, negotiate with factions, and
            unravel a multilayered story that challenges traditional notions of
            good and evil.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima7-serpent_isle_gameplay.png"
            alt="Gameplay screenshot from Ultima VII Part Two: Serpent Isle"
            className="rounded"
          />
        </div>
      </section>

      {/* Legacy and Reception */}
      <section className="section alt grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>Legacy and Reception</h2>
          <p>
            Although not as universally acclaimed as its predecessor,{" "}
            <strong>Serpent Isle</strong> remains beloved for its rich
            storytelling and atmospheric worldbuilding. It deepened the Ultima
            series’ exploration of complex themes and moral dilemmas,
            influencing later RPGs that value narrative depth.
          </p>
          <p>
            The game is often praised for its ambitious scope and its
            willingness to take risks in both gameplay and storytelling.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima7-serpent_isle_legacy.png"
            alt="Ultima VII Part Two: Serpent Isle legacy image"
            className="rounded"
          />
        </div>
      </section>

      {/* Platforms and Availability */}
      <section className="section grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12">
          <h2>Platform Availability</h2>
          <p>
            <strong>Ultima VII Part Two: Serpent Isle</strong> was released
            exclusively for MS-DOS in 1993. Like its predecessor, it is
            available today via digital distribution platforms with DOS
            emulation, allowing modern players to experience this complex
            chapter of the Ultima saga.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer mt-16">
        <p>Site by Marijn Meeuwesen – For Educational Use</p>
      </footer>
    </main>
  );
}
