/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        main: "#C1DCDC",
        para: "#1E1E1E",
        thinpara: "#6f6f6f",
      },
    },
  },
  plugins: [],
};
