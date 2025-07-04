# Settings Page Demo

A modern, responsive settings page built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.  
This project demonstrates a clean UI for user profile and settings management, including sidebar navigation, tabbed settings, and editable forms.

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Heroicons](https://heroicons.com/) (for SVG icons)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/settings-page-demo.git
   cd settings_page_demo
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
settings_page_demo/
├── public/
├── src/
│   ├── components/
│   ├── index.css
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.js
├── vite.config.ts
└── ...
```

## Customization

- **Fonts:**  
  The project uses a custom font (`FranieVariableTest`) and Google Fonts (`Public Sans`).  
  To change fonts, update `src/index.css` and `tailwind.config.js`.

- **Theme:**  
  Tailwind's theme can be extended in `tailwind.config.js`.

- **Icons:**  
  SVG icons are located in `src/components/Icons.tsx`.

## Linting & Formatting

- ESLint is configured for TypeScript and React.
- Lint code: `npm run lint`
- Format code: `npm run format`

## License

This project is for demonstration purposes only.
