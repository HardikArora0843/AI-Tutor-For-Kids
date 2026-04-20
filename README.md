# AI Kids Tutor

An interactive browser-based learning app for children, built with vanilla JavaScript and packaged with Vite for local development and production deployment.

This project combines bright, playful UI design with simple educational activities across multiple learning areas such as alphabet recognition, counting, shapes, colors, language practice, quizzes, story generation, and drawing.

## Highlights

- 8 interactive learning modules
- Kid-friendly visual design with animated cards, gradients, and playful feedback
- Speech synthesis for pronunciation and read-aloud features
- Sound effects using the Web Audio API
- Local progress tracking with stars and simple completion feedback
- Canvas-based coloring and drawing activities
- Static-site friendly architecture suitable for Vercel deployment

## Live App Model

This is a fully client-side application:

- No backend server
- No database
- No API routes
- No authentication layer
- No environment variables required

Everything runs in the browser, and user progress is stored locally using `localStorage`.

## Features

### 1. Alphabet Module

- Letter flashcards from `A` to `Z`
- Word association for each letter
- Emoji-based visual reinforcement
- Pronunciation support
- Matching game mode

### 2. Numbers Module

- Counting from `0` to `10`
- Tap-to-count interactions
- Visual counting objects
- Number game for selecting the correct quantity

### 3. Shapes Module

- Shape learning cards
- Shape tracing mode using SVG paths
- Shape hunt activity
- Real-world examples for each shape

### 4. Colors Module

- Color recognition lessons
- Coloring activity with a paint canvas
- Brush size adjustment
- Color quiz mode

### 5. Language Module

- Flashcards for multiple languages
- Word matching interactions
- Listening-based recognition activity
- Speech synthesis with language codes

Currently included:

- Spanish
- French
- German
- Italian

### 6. Quiz Module

- Category-based quiz selection
- Multiple-choice questions
- Score tracking and feedback
- End-of-quiz results screen

### 7. Stories Module

- Theme-based story generation
- Character selection
- Client-side story templates
- Read-aloud mode using browser speech synthesis

### 8. Drawing Module

- Freehand drawing canvas
- Brush and eraser tools
- Preset shapes
- Drawing prompts and challenges
- Save/share interactions

## Tech Stack

- HTML5
- CSS
- Vanilla JavaScript
- Vite
- Tailwind CSS via CDN in the current UI
- Browser APIs:
  - `localStorage`
  - `SpeechSynthesis`
  - `AudioContext`
  - `Canvas`
  - `navigator.share`
  - `navigator.clipboard`

## Project Structure

```text
AI_KIDS_TUTOR/
|-- index.html
|-- main.js
|-- package.json
|-- package-lock.json
|-- vercel.json
|-- .vercelignore
|-- modules/
|   |-- alphabet.js
|   |-- numbers.js
|   |-- shapes.js
|   |-- colors.js
|   |-- language.js
|   |-- quiz.js
|   |-- stories.js
|   |-- drawing.js
|-- public/
|   |-- vite.svg
|-- counter.js
|-- style.css
|-- javascript.svg
|-- ai-tutor.zip
```

## Core Files Explained

### `index.html`

The main application shell. It defines:

- The app layout
- Module selection cards
- Progress bar
- Sound toggle
- Base page styles and inline Tailwind configuration

### `main.js`

The central controller for the app. It handles:

- Global app setup
- Progress tracking
- Star rewards
- Sound toggling
- Speech playback
- Confetti animation
- Module switching
- Shared drag helper behavior

### `modules/*.js`

Each file in `modules/` owns one learning area. These modules are imported into `main.js` and invoked when a user opens a section of the app.

## Module Responsibilities

### `modules/alphabet.js`

- Alphabet flashcards
- Letter pronunciation
- Matching game logic

### `modules/numbers.js`

- Number display
- Counting interactions
- Quantity game

### `modules/shapes.js`

- Shape content
- Shape tracing with SVG
- Shape matching / hunt activity

### `modules/colors.js`

- Color learning cards
- Painting canvas
- Color quiz interactions

### `modules/language.js`

- Language word sets
- Translation flashcards
- Listening game
- Matching game

### `modules/quiz.js`

- Quiz categories
- Multiple-choice flow
- Results feedback

### `modules/stories.js`

- Story theme selection
- Character selection
- Story template rendering
- Read-aloud mode

### `modules/drawing.js`

- Free drawing canvas
- Tool controls
- Drawing challenges
- Save and share behavior

## How It Works

When the app starts:

1. `index.html` loads the app shell.
2. `main.js` imports all module loaders.
3. A `KidsTutor` instance initializes progress and sound settings.
4. When a user selects a module, `showModule()` loads that module into the shared content area.
5. Interactions award stars and persist progress in `localStorage`.

## Local Development

### Prerequisites

- Node.js 18 or newer
- npm

### Install

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Vite will start a local development server and provide a URL such as:

```text
http://localhost:5173
```

Open that URL in your browser.

### Important

Do not test the app by double-clicking `index.html` and opening it with `file://`.

Why:

- ES modules behave differently under `file://`
- browsers enforce stricter local file security rules
- some features may fail due to local origin restrictions

Always run the app through Vite or another local HTTP server.

## Production Build

To create a production build:

```bash
npm run build
```

Vite will output the production-ready static files into:

```text
dist/
```

To preview the built app locally:

```bash
npm run preview
```

## Vercel Deployment

This project is suitable for Vercel because it is a static frontend app.

### Option 1: Deploy with GitHub, GitLab, or Bitbucket

1. Push this project to your Git repository.
2. Go to Vercel.
3. Click `Add New Project`.
4. Import your repository.
5. Vercel should detect the framework as `Vite`.
6. Deploy.

### Option 2: Deploy with Vercel CLI

```bash
vercel
```

For a production deployment:

```bash
vercel --prod
```

### Vercel Config

This repository includes:

- `vercel.json` with framework set to `vite`
- `.vercelignore` to avoid uploading unnecessary files like `ai-tutor.zip`

### Expected Vercel Build Settings

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

## Browser APIs Used

The app depends on several browser capabilities.

### `localStorage`

Used for:

- progress storage
- sound preference
- simple persistence between sessions

### `SpeechSynthesis`

Used for:

- alphabet pronunciation
- number and shape voice support
- language practice
- story read-aloud

### `AudioContext`

Used for:

- click sound
- reward sound
- error sound
- success feedback

### `Canvas`

Used for:

- coloring activity
- free drawing module

### `navigator.share` and `navigator.clipboard`

Used in the drawing module for share behavior with a clipboard fallback.

## Educational Design Notes

This project is designed to be:

- highly visual
- low-friction for young learners
- feedback-rich
- self-guided

The learning pattern is intentionally simple:

- introduce a concept
- reinforce it visually
- add interaction
- reward participation

## Current Limitations

These are not blockers for learning or deployment, but they are useful to know:

- Tailwind is currently loaded from the CDN, which is fine for prototyping but not the best long-term production setup.
- All data is hardcoded in the frontend.
- Progress is stored only in the current browser and device.
- Story generation is template-based, not AI-backed.
- There is no parent/admin dashboard.
- There are no automated tests yet.

## Recommended Future Improvements

- Move Tailwind from CDN to a proper Vite/PostCSS setup
- Add responsive polish for smaller mobile screens
- Add accessibility improvements such as keyboard support and ARIA labels
- Add real drag-and-drop APIs where appropriate
- Add unit and integration tests
- Add analytics or learning progress summaries
- Add more languages, quiz sets, and story templates
- Add optional backend persistence for shared accounts or teacher dashboards

## Unused or Starter Files

Some files in the repository appear to be leftover from the original Vite starter or from manual packaging:

- `counter.js`
- `style.css`
- `javascript.svg`
- `public/vite.svg`
- `ai-tutor.zip`

They are not central to the current app flow.

## Scripts

Defined in `package.json`:

```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

## Who This Project Is For

This project is a good fit for:

- student capstone demos
- front-end portfolio projects
- children’s learning prototypes
- classroom demo apps
- static deployments on Vercel

## Authoring Notes

The application currently favors:

- fast iteration
- playful interaction
- readable module-level code

It does not yet aim for:

- framework-heavy architecture
- enterprise-grade state management
- backend-driven personalization

## License

No license file is currently included in the repository.

If you want to open-source the project, consider adding one of:

- MIT
- Apache-2.0
- GPL-3.0

## Quick Start

```bash
npm install
npm run dev
```

## Deployment Summary

If you want the shortest version:

1. Install dependencies
2. Run locally with `npm run dev`
3. Build with `npm run build`
4. Deploy the repo to Vercel

---

Built as a colorful, interactive learning experience for children with a static deployment path that is simple enough for demos, coursework, and early-stage product prototypes.
