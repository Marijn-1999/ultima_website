"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    document.body.classList.remove("ultima1-page", "akalabeth-page"); // cleanup other classes
    document.body.classList.add("ultima2-page");

    return () => document.body.classList.remove("ultima2-page");
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero ultima2">
        <div className="overlay">
          <h1>Ultima II: The Revenge of the Enchantress</h1>
          <p>Time, magic, and vengeance collide</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>A Sequel with Cosmic Ambition</h2>
          <p>
            Released in 1982, <strong>Ultima II</strong> raised the stakes and
            scope of the Ultima series. The villain this time? Minax, the
            vengeful apprentice and lover of Mondain, seeking retribution for
            her fallen master. The game was originally released for the Apple
            II, and later ported to a wide range of systems including the Atari
            8-bit family, Commodore 64, IBM PC (MS-DOS), Macintosh, and FM-7. It
            even received a Japan-exclusive version for the PC-88 and Sharp X1.
          </p>
          <p>
            With an expanded overworld, time-travel mechanics, and even
            interplanetary exploration,
            <em>Ultima II</em> pushed the boundaries of what a computer RPG
            could be.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima2_cover.png"
            alt="Ultima II game cover"
            className="rounded"
          />
        </div>
      </section>

      {/* Through Time and Space */}
      <section className="section alt grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>Through Time and Space</h2>
          <p>
            One of the most innovative aspects of <em>Ultima II</em> was its use
            of time gates, allowing players to travel across five different time
            periods—from the Age of Legends to a post-apocalyptic future Earth.
          </p>
          <p>
            The game even let players explore planets in the solar system,
            including Mars, Venus, and a fantastical version of Earth.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima2_timegate.png"
            alt="Time gate concept from Ultima II"
            className="rounded"
          />
        </div>
      </section>

      {/* Meet Minax */}
      <section className="section grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>Meet Minax</h2>
          <p>
            Minax wasn’t just Ultima’s first female villain—she was a powerful
            sorceress who took control of the cosmos in Mondain’s absence. Her
            hatred for Earth and humanity made her a dangerous threat across
            timelines.
          </p>
          <p>
            Defeating her meant traversing time, building strength, and
            ultimately storming her lair at the core of space-time.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima2_minax.png"
            alt="Minax, the Enchantress"
            className="rounded"
          />
        </div>
      </section>

      {/* Bold and Bizarre */}
      <section className="section alt grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>Bold, Bizarre, and Brilliant</h2>
          <p>
            <em>Ultima II</em> featured unexpected elements—from flying cars and
            space shuttles to fast food shops on the moon. It was experimental,
            eccentric, and wildly imaginative.
          </p>
          <p>
            This blend of sci-fi, satire, and medieval fantasy gave the game a
            tone unlike anything before or since in the Ultima series.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima2_weirdness.png"
            alt="Ultima II's strange sci-fi elements"
            className="rounded"
          />
        </div>
      </section>

      {/* Impact and Reception */}
      <section className="section grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>Impact and Legacy</h2>
          <p>
            Though polarizing due to its oddities and balance issues,{" "}
            <strong>Ultima II</strong> sold well and proved Richard Garriott’s
            reputation as a visionary game creator.
          </p>
          <p>
            It paved the way for the more grounded Ultima III and established
            time travel as a unique narrative device in games long before it
            became popular.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima2_legacy.png"
            alt="Legacy of Ultima II"
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
