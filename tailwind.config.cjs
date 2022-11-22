/**
 * @format
 * @type {import('tailwindcss').Config}
 */

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
    keyframes: {
      "open-menu": {
        "0%": { transform: "scaleY(0)" },
        "80%": { transform: "scaleY(1.2)" },
        "100%": { transform: "scaleY(1)" },
      },
      rotateY: {
        "0%": {
          transform: "rotateY(0deg)",
        },

        "100%": {
          transform: "rotateY(360deg)",
        },
      },
    },
    animation: {
      "open-menu": "open-menu 0.5s ease-in-out forwards",
      rotateY: "rotateY 0.8s ease-in forwards",
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
}
