"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="header">
        <div className="logo">
          <img
            src="/Ultima_Logo.png" // Replace with your actual image path
            alt="Ultima Series Logo"
            className="h-12 md:h-16"
          />
        </div>

        <nav className="nav">
          <Link href="#overview">Series Overview</Link>

          {/* Dropdown for Ultima Games */}
          <div className="dropdown">
            <button className="dropbtn">Games</button>
            <div className="dropdown-content">
              <Link href="/akalabeth">Akalabeth: World of Doom</Link>
              <Link href="/ultima1">Ultima I: The First Age of Darkness</Link>
              <Link href="/ultima2">
                Ultima II: The Revenge of the Enchantress
              </Link>
              <Link href="/ultima3">Ultima III: Exodus</Link>
              <Link href="/ultima4">Ultima IV: Quest of the Avatar</Link>
              <Link href="/ultima5">Ultima V: Warriors of Destiny</Link>
              <Link href="/ultima6">Ultima VI: The False Prophet</Link>
              <Link href="/ultima7">Ultima VII: The Black Gate</Link>
              <Link href="/ultima7">Ultima VII Part Two: Serpent Isle</Link>
              <Link href="/ultima8">Ultima VIII: Pagan</Link>
              <Link href="/ultima9">Ultima IX: Ascension</Link>
            </div>
          </div>

          <Link href="#characters">Key Characters</Link>
          <Link href="#virtues">Virtues & Lore</Link>
          <Link href="#legacy">Legacy</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="overlay">
          <h1>Welcome to the Ultima Series</h1>
          <p>"Create worlds, not just games." – Lord British</p>
        </div>
      </section>

      {/* Series Overview */}
      <section id="overview" className="section grid grid-cols-12 gap-6">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>The Legacy of Ultima</h2>
          <p>
            Few game series have shaped the role-playing genre quite like
            Ultima. Conceived by Richard Garriott (aka Lord British), Ultima
            didn’t just create worlds—it created philosophies, systems, and
            stories that redefined what games could be. Spanning from primitive
            dungeon crawlers to deeply moral, living worlds, Ultima evolved over
            two decades into something far greater than a simple fantasy
            franchise.
          </p>
          <p>
            At its heart, the Ultima series is about the journey of the Avatar—a
            character shaped by the player's decisions—through the world of
            Britannia. But it’s also about the evolution of technology,
            narrative ambition, and the relationship between creator and player.
          </p>
          <p>
            From its roots in <em>Akalabeth: World of Doom</em> in 1979, to the
            complex social systems of <em>Ultima Online</em> in 1997, the series
            has influenced every major RPG to follow.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima_games.png"
            alt="Ultima Series Compilation"
            className="rounded"
          />
        </div>
      </section>

      {/* Virtues and Lore Section */}
      <section id="virtues" className="section alt grid grid-cols-12 gap-6">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>Virtues & Lore</h2>
          <p>
            One of Ultima’s most enduring contributions to gaming was its
            introduction of a moral code. Starting with{" "}
            <em>Ultima IV: Quest of the Avatar</em>, the series moved away from
            slaying evil wizards to exploring how one lives virtuously in a
            complex world.
          </p>
          <p>
            Players are judged not by stats alone, but by how they embody values
            like Compassion, Honesty, and Honor. This innovative system
            influenced moral choice systems in RPGs for decades to come.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/virtues.png"
            alt="Eight Virtues of Britannia"
            className="rounded"
          />
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="section grid grid-cols-12 gap-6">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>Key Characters</h2>
          <p>
            The series is rich with recurring figures who evolve along with the
            world itself. Lord British, a stand-in for Garriott, rules Britannia
            with a wise yet sometimes passive hand. Dupre, Iolo, and Shamino
            become trusted companions across multiple titles, each with deep
            backstories.
          </p>
          <p>
            The player, the Avatar, is more than a hero—they are a mirror of the
            player’s ethics, a vessel for self-discovery in a world that often
            reflects real dilemmas.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/avatar.png"
            alt="The Avatar and companions"
            className="rounded"
          />
        </div>
      </section>

      {/* Legacy & Impact Section */}
      <section id="legacy" className="section alt grid grid-cols-12 gap-6">
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <h2>Enduring Influence</h2>
          <p>
            Ultima set standards in worldbuilding, interactivity, and
            storytelling.
            <em>Ultima Online</em>, the first MMORPG to achieve mainstream
            success, laid the foundation for games like{" "}
            <em>World of Warcraft</em> and
            <em>Final Fantasy XIV</em>.
          </p>
          <p>
            The influence can be felt in games like <em>The Elder Scrolls</em>,
            <em>Mass Effect</em>, and <em>Dragon Age</em>—titles where choices
            matter, and morality is more than a meter on the screen.
          </p>
          <p>
            More than a series of games, Ultima became a **philosophy** for how
            games could treat their players: as co-authors in a living, evolving
            world.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/ultima_online.png"
            alt="Ultima Online Screenshot"
            className="rounded"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Site by Marijn Meeuwesen - For Educational Use</p>
      </footer>
    </main>
  );
}
