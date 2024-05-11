/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {},
      colors: {
         primary: "#008248",
         secondary: "rgba(0,0,0,.87)",
         "primary-hover": "rgba(0,168,98,.9)",
         "secondary-hover": "rgba(0,0,0,.7)",
         "outlined-hover": "rgba(0,0,0,.06)",
         "card-color": "#6c6c6c",
      },
      fontSize: {
         xl: ["1.4rem", "1.2"],
         "4xl": ["2rem", "2.7rem"],
      },
   },
   plugins: [],
   important: true,
};
