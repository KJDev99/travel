/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        "title-color": "rgba(17, 43, 60, 1)",
        "text-color": "rgba(189, 142, 43, 1)",
        "tabs-bg": "rgba(217, 217, 217, 1)",
      },
    },
  },
  plugins: [],
};
