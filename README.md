# Chinonso Kalu — Personal Portfolio Website

A clean, modern, and technically credible personal portfolio website for **Chinonso Kalu**, Software Engineer / Application Support Engineer. Built with **React**, **Vite**, and **Tailwind CSS**.

The site emphasizes real-world engineering problem solving, backend development (Laravel/PHP), database design, application support, production incident recovery, security remediation, and system integrations.

---

## Key Features

- **Credible & Authentic**: Zero exaggerated buzzwords, no fake metrics or testimonials, focused strictly on practical engineering responsibilities and problem/solution architecture.
- **Central Data Architecture**: All content (profile, projects, experience, skills, principles, education, social links) is maintained in a single structured file at `src/data/portfolioData.js`.
- **Dark & Light Mode**: Tasteful, high-contrast light and dark themes with persistent user state via `localStorage`.
- **Minimal Technical Visual**: Subtle terminal/system inspection widget showcasing engineering focus and operational status.
- **Resilient GitHub Integration**: Live public repository showcase leveraging GitHub's REST API with an automated, offline-friendly fallback.
- **Ready for Resume**: Built-in `/resume.pdf` support. Replace `public/resume.pdf` with your official resume document anytime.
- **Mobile Responsive & Accessible**: Semantic HTML5, accessible color contrast ratios, keyboard navigation support, and reduced-motion media query compliance.
- **Production Ready for Render**: One-click static deployment using `render.yaml`.

---

## Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Render](https://render.com/) (Static Site)

---

## Project Structure

```text
chinonso-kalu-portfolio/
├── public/
│   ├── favicon.svg          # Minimal code-prompt favicon
│   ├── resume.pdf           # Drop-in location for your official resume
│   ├── robots.txt           # Search engine directives
│   └── sitemap.xml          # XML sitemap
├── src/
│   ├── components/          # Modular UI components
│   │   ├── About.jsx        # Conversational engineering background
│   │   ├── Approach.jsx     # 5 core engineering principles
│   │   ├── Contact.jsx      # Direct communication & mailto action
│   │   ├── Education.jsx    # Degree & Continuous Learning
│   │   ├── Experience.jsx   # Production support & engineering timeline
│   │   ├── FocusAreas.jsx   # 6 domain focus cards (What I Work On)
│   │   ├── Footer.jsx       # Minimalist footer
│   │   ├── GitHubSection.jsx# Live GitHub repos with graceful fallback
│   │   ├── Hero.jsx         # Intro headline, CTAs & terminal widget
│   │   ├── Navbar.jsx       # Sticky responsive navigation with theme toggle
│   │   ├── Projects.jsx     # Selected projects with Problem/Solution
│   │   └── Skills.jsx       # Grouped technical competencies (no fake %)
│   ├── context/
│   │   └── ThemeContext.jsx # Light/dark mode provider & state
│   ├── data/
│   │   └── portfolioData.js # Central single-source-of-truth data file
│   ├── App.jsx              # Main application layout
│   ├── index.css            # Tailwind directives & base styles
│   └── main.jsx             # React entry point
├── .env.example             # Example environment variables
├── .gitignore               # Git ignored patterns
├── index.html               # Semantic HTML with SEO meta tags
├── package.json             # NPM dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── render.yaml              # Render static deployment blueprint
├── tailwind.config.js       # Tailwind theme configuration
├── vite.config.js           # Vite build config
└── README.md                # Documentation
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.0 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone or navigate into the project directory:
   ```bash
   cd chinonso-kalu-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To create an optimized production build in the `dist/` directory:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## Updating Your Content

To customize or update the website text, projects, experience, or links, simply edit:
👉 **`src/data/portfolioData.js`**

### Updating Your Resume
Place your updated resume file directly into:
👉 **`public/resume.pdf`**
The "View Resume" buttons across the site link directly to `/resume.pdf`.

---

## Deploying to Render

This website is designed for zero-config static hosting on [Render](https://render.com/).

### Method 1: Render Blueprint (Recommended)
1. Push this repository to your GitHub account.
2. Log into [Render Dashboard](https://dashboard.render.com/).
3. Click **New +** -> **Blueprint**.
4. Connect your GitHub repository (`chinonso-kalu-portfolio`).
5. Render will automatically detect `render.yaml` and configure the static site.
6. Click **Apply**.

### Method 2: Manual Static Site Setup
1. In Render, select **New +** -> **Static Site**.
2. Connect your GitHub repository.
3. Configure the build parameters:
   - **Name**: `chinonso-kalu-portfolio`
   - **Branch**: `main`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
4. Click **Create Static Site**.

---

## License

This project is open source and available under the [MIT License](LICENSE).
