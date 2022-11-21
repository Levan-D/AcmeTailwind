/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "540px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      widescreen: { raw: "(min-aspect-ratio: 3/2)" },
      tallscreen: { raw: "(min-aspect-ratio: 1/2)" },
    },
    extend: {
      colors: {
        ACMERed: "#a92227",
        ACMEBlack: "#2a1710",
        ACMEWhite: "#ffcbaa",
      },
    },
  },
  plugins: [],
};
