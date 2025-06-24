# Ultima Franchise Archive

A content-rich, visually styled website that presents a detailed overview of every major game in the Ultima RPG series (1979–1994). Built using Next.js 14 App Router, Tailwind CSS, and custom animations, this project functions as an interactive timeline and tribute to one of the most influential RPG franchises in video game history.

---

## **Features**

- Individual pages for every Ultima title from Akalabeth through Ultima VIII
- Historical summaries including release year, story overview, and platforms
- Custom backgrounds, animations, and responsive layouts per game
- Accessible navigation menu with organized dropdown structure
- Clean, semantic markup and component-based architecture

---

## **Installation**

### Requirements:

- Node.js version 18 or newer
- Either npm or pnpm package manager

### Steps:

1. Clone the repository to your local machine and navigate into the project folder
2. Install all required dependencies using npm or pnpm
3. Start the development server
4. Open your browser and go to `http://localhost:3000` to view the project

---

## **Usage**

The homepage allows you to explore the full archive. Each game is accessible via its own route. Examples include:

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

yaml
Copy
Edit

Each page includes:

- Title and release information
- Overview of the story and historical context
- Platforms the game was released on
- Notable innovations in gameplay or technology
- A styled layout with screenshots and background images

---

## **Project Structure Overview**

Each page is built as a standalone React component. Content is displayed inside a styled section with an overlay for legibility. Pages include headings, paragraphs, and platform info in consistent format.

The layout is powered by Tailwind utility classes and customized with background images that reflect each game’s visual style.

---

## **Contributing**

If you’d like to contribute to this project:

1. Fork the repository
2. Create a new branch for your changes
3. Make your edits
4. Commit them with a clear message
5. Push to your forked branch
6. Submit a pull request for review

Keep your code style consistent with the existing project. Use clear and descriptive commit messages.

---

## **Troubleshooting / FAQ**

### Dropdown menu looks broken

You can simplify or disable CSS transitions on the dropdown to eliminate animation issues.

### Images don’t appear

Check that all game background images are present in the public folder and that the path matches.

### Page styles are missing

Verify that each page applies the correct body class in the layout for Tailwind styling to take effect.

---

## **License**

This project is released under the MIT License. See the LICENSE file in the root directory for full terms.

---

## **Changelog**

### Version 1.0.0

- Initial project setup with Next.js App Router
- Tailwind CSS configured with custom themes and background support
- Pages created for all games from Akalabeth through Ultima VIII
- Custom animated hero sections added to each page
- Responsive dropdown navigation implemented

---

## **Educational Context**

This project was created as part of a school assignment with the following goals:

- Demonstrating iterative, prompt-based development with AI tools
- Building a responsive frontend using modern frameworks
- Applying accessible design and semantic HTML principles
- Practicing clean documentation and user guidance

Development steps, prompt history, and process notes are recorded in the `development-log.md` file.
