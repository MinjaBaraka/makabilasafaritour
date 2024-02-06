/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-green": "#279E72",
        "custom-gray": "#808080",
      },
    },
  },
  plugins: [],
};
