/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-65": "linear-gradient(65deg, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
