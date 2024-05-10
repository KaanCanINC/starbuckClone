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
      },
      fontSize: {
         xl: ["1.4rem", "1.2"],
      },
   },
   plugins: [],
   important: true,
};
