"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    document.body.classList.add("ultima4-page");
    return () => document.body.classList.remove("ultima4-page");
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay">
          <h1>Ultima IV: Quest of the Avatar</h1>
          <p>Becoming the hero Britannia deserves</p>
        </div>
      </section>

      {/* The Ethical Shift */}
      <section className="section grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>A New Kind of Quest</h2>
          <p>
            Released in 1985, <strong>Ultima IV: Quest of the Avatar</strong>{" "}
            marked a radical departure from traditional RPG goals. Instead of
            defeating a villain, the player was asked to become a moral
            exemplar—the Avatar—by living according to the Eight Virtues.
            Originally released for the Apple II, it was later ported to
            Commodore 64, Atari 8-bit, Atari ST, Amiga, MS-DOS, Macintosh, and
            even adapted for platforms like the Sega Master System and NES,
            expanding its reach to console audiences.
          </p>
          <p>
            This shift redefined what a role-playing game could be. It wasn’t
            just about winning—it was about reflecting on your actions, making
            ethical decisions, and inspiring a world in turmoil.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima4_box.png"
            alt="Ultima IV game box"
            className="rounded"
          />
        </div>
      </section>

      {/* The Eight Virtues */}
      <section className="section alt grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>The Eight Virtues</h2>
          <p>
            Honesty, Compassion, Valor, Justice, Sacrifice, Honor, Spirituality,
            and Humility. These were not just abstract ideas—they became game
            mechanics. Your actions were tracked and judged against these
            principles.
          </p>
          <p>
            Choosing not to steal from shops, giving to the poor, telling the
            truth—all these shaped your path to Avatarhood. Few games before or
            since have put ethics so firmly at the center of the player
            experience.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima4_virtues.png"
            alt="The Eight Virtues in Ultima IV"
            className="rounded"
          />
        </div>
      </section>

      {/* Dialogue and Discovery */}
      <section className="section grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>Dialogue and Discovery</h2>
          <p>
            Ultima IV deepened its world with keyword-based conversations.
            Players had to pay attention, ask questions, and uncover clues to
            progress.
          </p>
          <p>
            Dungeons weren’t just battlegrounds—they were tests. Shrines to each
            Virtue required introspection and learning. The Codex of Ultimate
            Wisdom awaited those who completed their moral journey.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima4_codex.png"
            alt="The Codex of Ultimate Wisdom"
            className="rounded"
          />
        </div>
      </section>

      {/* A Legacy of Meaning */}
      <section className="section alt grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>A Legacy of Meaning</h2>
          <p>
            Ultima IV is widely regarded as one of the most important RPGs ever
            made. Its emphasis on virtue and internal growth paved the way for
            moral choice systems in later games like <em>Mass Effect</em> and{" "}
            <em>Undertale</em>.
          </p>
          <p>
            More than a game, it was a philosophical journey—and one that
            continues to influence game design to this day.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima4_legacy.png"
            alt="Legacy of Ultima IV"
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
