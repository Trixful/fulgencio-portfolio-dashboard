# Fulgencio Portfolio Dashboard

A modern Vue 3 portfolio dashboard featuring authentication, responsive design, and a showcase of projects.

## Features
- Vue 3 SPA with Vue Router
- Login authentication (demo credentials)
- Responsive, modern UI
- Portfolio, resume, and contact pages

## Main Frameworks, Libraries, and Tools Used

- **Vue.js 3** — The core JavaScript framework for building the SPA.
- **Vue Router 4** — For client-side routing/navigation between pages.
- **Node.js & npm** — For managing dependencies and running scripts.
- **@vue/cli** — Vue CLI for scaffolding, development server, and build tools.
- **VS Code** — Code Editor used.
- **Scoped CSS** — For component-level styling.
- **Public folder** — For static assets (images, GIFs, etc.).

## Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Visual Studio Code](https://code.visualstudio.com/) (recommended editor)

### 2. Clone the repository
```sh
git clone https://github.com/your-username/fulgencio-portfolio-dashboard.git
cd fulgencio-portfolio-dashboard
```

### 3. Install dependencies
```sh
npm install
```

### 4. Install Vue CLI (if you don't have it)
```sh
npm install -g @vue/cli
```

### 5. Install vue-router (if you don't have it)
```sh
npm install vue-router@4
```

### 6. Open the project in VS Code
```sh
code .
```

### 7. Run the development server
```sh
npm run serve
```

The app will be available at [http://localhost:8080](http://localhost:8080) by default.

## Login Credentials
- **Username:** `admin`
- **Password:** `1234`

## Usage
- Login with the demo credentials above
- Explore the profile, creative resume, showcase, and contact pages

## Project Structure
- `src/views/` — Main page components
- `src/router/` — Vue Router setup
- `public/` — Static assets (images, favicon, etc.)
- `src/assets/` — Optional: global styles or additional assets
- `src/components/` — Reusable Vue components
- `src/pages/` — (If used) Additional page-level components

## Build for Production
```sh
npm run build
```
The production-ready files will be in the `dist/` folder.

## Customization & Notes
- **Showcase Images:** Place your images or GIFs in the `public/` folder and update the project data in `ShowcaseView.vue`.
- **Contact Form:** The contact form currently uses a demo alert. To enable real email sending, integrate with a service like EmailJS, Formspree, or set up a backend (see code comments in `ContactView.vue`).
- **Styling:** Uses scoped CSS in each view/component for modular styles. You can add global styles in `src/assets/universal.css`.
- **Editor:** VS Code is recommended for best development experience. Extensions like Vetur or Volar are helpful for Vue development.

## Troubleshooting
- If you encounter issues with dependencies, try deleting `node_modules` and `package-lock.json` then run `npm install` again.
- Make sure you are using a compatible Node.js version (v14+).
- If you see issues with images, ensure they are in the correct `public/` path and referenced properly in your code.

## License
MIT
