# Ultima Franchise Archive

A content-rich, visually styled website that presents a detailed overview of every major game in the _Ultima_ RPG series (1979–1994). Built using **Next.js 14 App Router**, **Tailwind CSS**, and custom animations, this project functions as an interactive timeline and tribute to one of the most influential RPG franchises in video game history.

---

## Features

- Individual pages for every _Ultima_ title from **Akalabeth** through **Ultima VIII**
- Historical summaries including release year, story overview, and platforms
- Custom backgrounds, animations, and responsive layouts per game
- Accessible navigation menu with organized dropdown structure
- Clean, semantic markup and component-based architecture

---

## Installation

**Requirements**:

- Node.js (v18 or newer)
- npm or pnpm

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ultima-archive.git
cd ultima-archive
2. Install dependencies
bash
Copy
Edit
npm install
# or
pnpm install
3. Start the development server
bash
Copy
Edit
npm run dev
4. Open the site in your browser
arduino
Copy
Edit
http://localhost:3000
Usage
You can browse the full archive via the homepage. Each game has its own route, for example:

/akalabeth

/ultima1

/ultima2

/ultima3

...

/ultima8

Each page includes:

Game title and release information

Plot summary and historical context

Notable gameplay innovations

List of supported platforms

Screenshots and unique background styling

Code Example
Example layout of a game detail page:

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
To contribute:

Fork the repository

Create a new branch:
git checkout -b feature/your-feature

Make and commit your changes:
git commit -m "Describe your change"

Push to your branch:
git push origin feature/your-feature

Open a pull request on GitHub

Please keep code style consistent and write clear commit messages.

Troubleshooting / FAQ
Q: Dropdown animations look broken or jumpy
A: You can disable transitions for dropdown links:

css
Copy
Edit
.dropdown-content a {
  transition: none;
}
Q: Background images aren't showing up
A: Ensure that all images are placed in the /public folder and the file paths are correct.

Q: Styles aren't applying per page
A: Make sure the appropriate className is applied to the <body> tag, like this:

tsx
Copy
Edit
<body className="ultima1-page">
License
This project is licensed under the MIT License.

Changelog
v1.0.0 – Initial release

Next.js 14 App Router setup

Tailwind CSS configuration

Game routes from Akalabeth to Ultima VIII

Responsive layout and hero banners

Animated navigation and dropdowns

Educational Context
This project was created for a school assignment and demonstrates:

Iterative and prompt-based frontend development

Use of component-driven architecture

CSS animation and responsive design principles

Technical documentation using Markdown

Development notes and prompt history are documented in development-log.md.

yaml
Copy
Edit

---








```
