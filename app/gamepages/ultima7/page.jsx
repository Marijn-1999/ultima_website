"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    document.body.classList.add("ultima7-2-page");
    return () => document.body.classList.remove("page-home");
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero ultima">
        <div className="overlay">
          <h1>Ultima VII: The Black Gate</h1>
          <p>The Return of the Avatar—and a New Darkness</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>A World Reimagined</h2>
          <p>
            Released in 1992, <strong>Ultima VII: The Black Gate</strong>{" "}
            redefined what RPGs could be. It introduced a richly detailed,
            seamless world with unprecedented interactivity, nonlinear
            storytelling, and a more mature tone. Widely considered one of the
            greatest RPGs ever made, it was originally released for MS-DOS and
            later ported to the Super Nintendo Entertainment System (SNES),
            although the console version was heavily modified and censored.
          </p>
          <p>
            This was the beginning of the two-part "Age of Armageddon" arc,
            which tackled themes of cult influence, free will, and morality
            through the emergence of a mysterious organization known as The
            Fellowship.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima7_cover.png"
            alt="Ultima VII cover art"
            className="rounded"
          />
        </div>
      </section>

      {/* The Fellowship’s Grip */}
      <section className="section alt grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>The Fellowship’s Grip</h2>
          <p>
            Britannia seems at peace, but something sinister lies beneath the
            surface. The Fellowship, a philosophical society preaching unity and
            self-empowerment, is gaining influence. As the Avatar, players must
            uncover the truth behind its teachings and the gruesome ritualistic
            murders spreading across the land.
          </p>
          <p>
            The game’s tone was darker, its narrative sharper, and its world
            more immersive than anything seen before in the series—or in most
            games of its time.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima7_fellowship.png"
            alt="The Fellowship symbol from Ultima VII"
            className="rounded"
          />
        </div>
      </section>

      {/* Gameplay Evolution */}
      <section className="section grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>Gameplay Evolution</h2>
          <p>
            Ultima VII introduced a new interface system that eliminated command
            parsing in favor of point-and-click interaction, making the game
            more intuitive and accessible. The world of Britannia was alive with
            day/night cycles, NPC schedules, and usable objects ranging from
            loaves of bread to magical artifacts.
          </p>
          <p>
            Combat was real-time for the first time in the series, a
            controversial shift that placed greater emphasis on positioning and
            party strategy. Meanwhile, the journal system and dialog trees
            brought greater depth to character interaction and quest
            progression.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima7_interface.png"
            alt="Ultima VII gameplay interface"
            className="rounded"
          />
        </div>
      </section>

      {/* Legacy and Influence */}
      <section className="section alt grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>Legacy and Influence</h2>
          <p>
            Ultima VII is often cited as the pinnacle of the series, influencing
            countless future RPGs—including the <em>Baldur’s Gate</em> and{" "}
            <em>Divinity</em> series. Its open-ended structure, immersive
            simulation, and philosophical themes set a new bar for interactive
            storytelling.
          </p>
          <p>
            The game was followed by an expansion,{" "}
            <strong>Forge of Virtue</strong>, and a direct sequel,{" "}
            <strong>Ultima VII Part Two: Serpent Isle</strong>, which continued
            the Age of Armageddon saga.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima7_legacy.png"
            alt="Ultima VII legacy image"
            className="rounded"
          />
        </div>
      </section>

      {/* Platforms and Re-releases */}
      <section className="section grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-12 lg:col-span-12">
          <h2>Platform Availability</h2>
          <p>
            <strong>Ultima VII: The Black Gate</strong> was originally released
            for MS-DOS in 1992, with a modified SNES version following in 1994.
            Due to its complex systems, the console version removed or
            simplified many core features, limiting its appeal. The game has
            since been re-released as part of the <em>Ultima Collection</em> and
            is available on modern systems via DOSBox through services like GOG.
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
