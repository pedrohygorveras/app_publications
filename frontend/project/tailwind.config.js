/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        app: {
          primary: "#072854",
          secondary: "#2cbd62",
          "base-100": "#ffffff",
          "base-200": "#f1f3f4",
        },
      },
    ],
  },
};
