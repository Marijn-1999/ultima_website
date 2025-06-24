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

**Requirements:**

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

4. Open the app
Visit http://localhost:3000 in your browser.


Usage
You can browse the full archive via the homepage. Each game has its own route, for example:

/akalabeth

/ultima1

/ultima2

/ultima3

/ultima4

/ultima5

/ultima6

/ultima7

/ultima7part2

/ultima8

Each route presents:

Game title and release year

Plot summary and historical context

Platform availability

Technical or gameplay innovations

Screenshots and themed background

Code Example
Example layout of a game page component:

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
If you'd like to contribute:

Fork the repository

Create a new branch

bash
Copy
Edit
git checkout -b feature/your-feature
Make your changes and commit

bash
Copy
Edit
git commit -m "Add feature"
Push to your fork

bash
Copy
Edit
git push origin feature/your-feature
Open a Pull Request

Please follow consistent formatting and use descriptive commit messages.



Troubleshooting / FAQ
Dropdown animations look glitchy
Disable transition for dropdown links in CSS:

css
Copy
Edit
.dropdown-content a {
  transition: none;
}
Background images not loading
Ensure images like /public/ultima1_background.png are correctly placed and paths are correct.

Styles not applying on certain pages
Confirm that the correct <body> class is set. Example:

tsx
Copy
Edit
<body className="ultima1-page">
License
This project is licensed under the MIT License. See the LICENSE file for details.

Changelog
v1.0.0 – Initial release

Project setup with Next.js App Router

Tailwind CSS integration with custom color variables

Routes for Akalabeth through Ultima VIII

Animated hero sections and themed pages

Responsive dropdown navigation

Educational Context
This project was developed as part of a school assignment and demonstrates:

Prompt-based iterative coding with ChatGPT

Component-driven architecture with Next.js

Use of Tailwind for styling and layout

Documentation and semantic markup best practices

Full development history and prompt logs are available in development-log.md.

yaml
Copy
Edit

---
```
