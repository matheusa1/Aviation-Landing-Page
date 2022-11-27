/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/styles.ts",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      mdLg: { max: "820px" },
      // => @media (max-width: 820px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "490px" },
      // => @media (max-width: 490px) { ... }
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "Montserrat", "sans-serif"],
      },
      colors: {
        purplePrimary: "#313EF7",
        textSubtitle: "#A7A7A7",
      },
      backgroundImage: {
        mapFooter: "url('/mapFooter.png')",
        gradientPage:
          "radial-gradient(50% 50% at 50% 50%, rgba(18, 20, 78, 0.9) 0%, #010223 50%)",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
}
