/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#008248",
        secondary: "rgba(0,0,0,.87)",
        "primary-hover": "rgba(0,168,98,.9)",
        "secondary-hover": "rgba(0,0,0,.7)",
        "primary-outlined-hover": "rgba(0,168,98,.1)",
        "outlined-hover": "rgba(0,0,0,.06)",
        "card-color": "#6c6c6c",
        "video-color": "rgb(220, 240, 227)",
        "caret-hover": "#edebe9",
      },
      fontSize: {
        "sb-xl": ["1.4rem", "1.2"],
        "sb-2xl": ["2rem", "2.7rem"],
        "sb-3xl": ["2.3rem", "3.1rem"],
        "sb-4xl": ["2.7rem", "3.7rem"],
        "sb-header-l": ["28px", "2rem"],
      },
    },
  },
  plugins: [],
};
