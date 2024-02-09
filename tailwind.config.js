/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-green": "#279E72",
        "custom-gray": "#808080",
        "Custom-yellow": "#FFFF00",
      },
      boxShadow: {
        "shadow_container": "shadow-[0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)]"
      }
    },
  },
  plugins: [],
};
