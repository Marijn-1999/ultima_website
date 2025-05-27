// components/Header.js
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link href="/">
          <img
            src="/Ultima_Logo.png" // Replace with your actual image path
            alt="Ultima Series Logo"
            className="h-12 md:h-16 cursor-pointer"
          />
        </Link>
      </div>

      <nav className="nav">
        <Link href="#overview">Series Overview</Link>

        {/* Dropdown for Ultima Games */}
        <div className="dropdown">
          <button className="dropbtn">Games</button>
          <div className="dropdown-content">
            <Link href="/gamepages/akalabeth">Akalabeth: World of Doom</Link>
            <Link href="/gamepages/ultima4">
              Ultima IV: Quest of the Avatar
            </Link>
            <Link href="/gamepages/ultima7-2">
              Ultima VII Part Two: Serpent Isle
            </Link>
            <Link href="/gamepages/ultima1">
              Ultima I: The First Age of Darkness
            </Link>
            <Link href="/gamepages/ultima5">Ultima V: Warriors of Destiny</Link>
            <Link href="/ultima8">Ultima VIII: Pagan</Link>
            <Link href="/gamepages/ultima2">
              Ultima II: The Revenge of the Enchantress
            </Link>
            <Link href="/gamepages/ultima6">Ultima VI: The False Prophet</Link>
            <Link href="/ultima9">Ultima IX: Ascension</Link>
            <Link href="/gamepages/ultima3">Ultima III: Exodus</Link>
            <Link href="/gamepages/ultima7">Ultima VII: The Black Gate</Link>
          </div>
        </div>

        <Link href="#characters">Key Characters</Link>
        <Link href="#virtues">Virtues & Lore</Link>
        <Link href="#legacy">Legacy</Link>
      </nav>
    </header>
  );
};

export default Header;
