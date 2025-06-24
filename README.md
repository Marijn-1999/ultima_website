# Ultima Franchise Archive

A content-rich, visually styled website that presents a detailed overview of every major game in the _Ultima_ RPG series (1979–1994). Built using **Next.js 14 App Router**, **Tailwind CSS**, and custom animations, this project functions as an interactive timeline and tribute to one of the most influential RPG franchises in video game history.

---

## Features

- Individual pages for every _Ultima_ title from **Akalabeth** through **Ultima VIII**
- Historical summaries including **release year**, **story overview**, and **platforms**
- Custom backgrounds, animations, and responsive layouts per game
- Accessible navigation menu with organized dropdown structure
- Clean, semantic markup and component-based architecture
- Light and dark mode support via `prefers-color-scheme`

---

## Installation

> Requires: `Node.js` (v18 or newer) and `npm` or `pnpm`

1. **Clone the repository**

```bash
git clone https://github.com/your-username/ultima-archive.git
cd ultima-archive
Install dependencies

bash
Copy
Edit
npm install
# or
pnpm install
Run development server

bash
Copy
Edit
npm run dev
Open in your browser

arduino
Copy
Edit
http://localhost:3000
💡 Usage
You can browse the full archive via the homepage. Each game has its own route:

/akalabeth

/ultima1

/ultima2

/ultima3

...

/ultima8

Each route presents:

Game title and release info

Plot summary and historical context

Technical innovations

List of supported platforms

Screenshots and background image

✍️ Code Example
Here’s a simplified example of a game page:

tsx
Copy
Edit
export default function Ultima3Page() {
  return (
    <main className="ultima3-page">
      <section className="hero">
        <div className="overlay">
          <h1>Ultima III: Exodus</h1>
          <p>
            Released in 1983, <strong>Ultima III</strong> was a major leap forward in RPG design.
            It introduced a party-based combat system and was released on Apple II, C64, IBM PC, and NES.
          </p>
        </div>
      </section>
    </main>
  );
}
Contributing
Contributions are welcome! If you'd like to improve this project:

Fork the repository

Create a new branch (git checkout -b feature/your-feature)

Commit your changes (git commit -m 'Add feature')

Push to your branch (git push origin feature/your-feature)

Submit a Pull Request

Please use clear commit messages and follow consistent code formatting.

Troubleshooting / FAQ
Dropdown animations look strange
You can disable animation on the dropdown menu via CSS:

css
Copy
Edit
.dropdown-content a {
  transition: none;
}
Background images not loading
Make sure all image assets (e.g., /public/ultima1_background.png) are correctly placed in the /public folder.

Page styles not applying
Ensure body class is applied in each page:

tsx
Copy
Edit
<body className="ultima1-page">
License
This project is licensed under the MIT License. See LICENSE for details.

🗒️ Changelog
[v1.0.0] – Initial release
Set up project with Next.js App Router

Added Tailwind CSS with custom themes

Created routes for Akalabeth through Ultima VIII

Implemented animated hero sections and game-specific styling

Added dropdown navigation


Educational Context
This project was developed as part of a school assignment to demonstrate:

Iterative development

Prompt-based coding using AI

Responsive frontend architecture

Documentation and accessibility standards

Prompt history, process documentation, and more can be found in development-log.md.
```
