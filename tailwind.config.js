module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#e3dcfe",
          200: "#c7b8fc",
          300: "#ab95fb",
          400: "#8f71f9",
          500: "#734ef8",
          600: "#5c3ec6",
          700: "#452f95",
          800: "#2e1f63",
          900: "#171032",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
