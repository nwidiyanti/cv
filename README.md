# Nabila Widiyanti - Personal Portfolio

This is a modern, static, single-page personal portfolio website built with React JS and Vite. 
It showcases skills, experiences, projects, education, and certifications.

## Technologies Used
- React JS
- Vite
- HTML5 & CSS3
- react-icons

## Installation & Local Development

1. **Clone the repository** (if from remote):
   ```bash
   git clone <your-repo-url>
   cd <repo-folder>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

## Building for Production

To build the static files for production, run:
```bash
npm run build
```
The optimized files will be located in the `dist` folder.

## Deployment to GitHub Pages

This project is pre-configured for deployment to GitHub Pages.

1. Ensure the `homepage` URL in `package.json` matches your GitHub Pages URL (e.g., `https://<username>.github.io/<repository-name>`).
2. Run the deploy script:
   ```bash
   npm run deploy
   ```
   This command will automatically build the project and push the `dist` folder to the `gh-pages` branch.

## How to Customize
- **Images**: Replace placeholder images in `src/assets/images`.
- **Data**: Update texts, skills, and links in `src/data/*.js` files.
- **Styling**: Colors and typography can be customized in `src/index.css`.
