"use client";

// import Header from "./components/Header";
import Link from "next/link";

export default function Akalabeth() {
  return (
    <main>
      {/* <Header /> */}

      {/* Hero Section */}
      <section className="hero akalabeth">
        <div className="overlay">
          <h1>Akalabeth: World of Doom</h1>
          <p>The first step into the world of Ultima</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>The Genesis of Ultima</h2>
          <p>
            Before there was Ultima, there was <strong>Akalabeth</strong>.
            Released in 1979 and subtitled <em>“World of Doom,”</em> this humble
            dungeon crawler was created by a teenage Richard Garriott as a
            personal experiment—one that unknowingly became the spark for an
            entire genre.
          </p>
          <p>
            Originally coded in BASIC and sold in ziplock bags at a local
            computer shop, it became an underground success. When California
            Pacific Computer Company picked it up, Garriott’s hobby turned into
            a career—and the Ultima legacy was born.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/akalabeth_cover.png"
            alt="Akalabeth game cover"
            className="rounded"
          />
        </div>
      </section>

      {/* Glimpse of the Future */}
      <section className="section alt grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>A Glimpse of the Future</h2>
          <p>
            Though primitive by today’s standards, <strong>Akalabeth</strong>{" "}
            laid the foundation for key Ultima mechanics: a top-down overworld,
            randomly generated dungeons, and character stats rolled like dice.
            The quest? Slay monsters and earn the favor of Lord British.
          </p>
          <p>
            These features foreshadowed the deep, moral storytelling and
            immersive worlds that would come to define the Ultima series.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/dungeon_view.png"
            alt="Akalabeth dungeon screenshot"
            className="rounded"
          />
        </div>
      </section>

      {/* From Experiment to Inspiration */}
      <section className="section grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>From Experiment to Inspiration</h2>
          <p>
            Garriott, inspired by <em>Dungeons & Dragons</em> and Tolkien,
            created Akalabeth during a summer break. He never imagined it would
            sell tens of thousands of copies. But this personal project became a
            prototype for what would evolve into <strong>Ultima I</strong>.
          </p>
          <p>
            The game's title—drawn from Tolkien's legendarium—speaks to
            Garriott’s early passion for worldbuilding. That spirit would become
            a hallmark of the Ultima series.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/garriott_young.png"
            alt="Young Richard Garriott"
            className="rounded"
          />
        </div>
      </section>

      {/* The First Step into Sosaria */}
      <section className="section alt grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>The First Step into Sosaria</h2>
          <p>
            Though not officially an Ultima title, fans often refer to{" "}
            <strong>Akalabeth</strong> as <em>Ultima 0</em>. It marked the debut
            of Lord British and introduced the first glimpse of the world that
            would become Sosaria.
          </p>
          <p>
            It’s not just a game. It’s the opening chapter in the story of a
            world that would span decades.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/sosaria_map.png"
            alt="Map of Sosaria"
            className="rounded"
          />
        </div>
      </section>

      {/* Why Akalabeth Still Matters */}
      <section className="section grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>Why Akalabeth Still Matters</h2>
          <p>
            To modern players, Akalabeth may seem crude. But its significance is
            monumental. It’s the prototype of interactive storytelling—a look at
            how games began turning into entire worlds.
          </p>
          <p>
            It wasn’t just about stats or monsters. It was about the potential
            of games to transport, transform, and tell stories.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/akalabeth_legacy.png"
            alt="Legacy of Akalabeth"
            className="rounded"
          />
        </div>
      </section>

      {/* Return to the Beginning */}
      <section className="section alt grid grid-cols-12 gap-6 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>Return to the Beginning</h2>
          <p>
            Whether you're exploring Ultima’s roots or the early days of RPGs,{" "}
            <strong>Akalabeth</strong> is a key milestone. It’s the first line
            in a story that would span eras and shape generations of
            game-makers.
          </p>
          <p>
            So descend into the dungeon. Face the monsters. And meet Lord
            British—for the very first time.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/meet_lord_british.png"
            alt="Meeting Lord British"
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
