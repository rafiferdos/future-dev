/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: '"Inter", serif',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        foodCycle: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#224084",
          secondary: "#FFF8E1",
          ".btn-primary": {
            color: "#fff",
          },
          ".btn-outline.btn-primary:hover": {
            color: "#fff",
          },
        },
      },
    ],
  },
};
