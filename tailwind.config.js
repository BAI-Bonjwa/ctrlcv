const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx,md}"],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      sans: ["sans-serif", "system-ui"],
      serif: ["serif", "Georgia"],
      mono: ["monospace", "SFMono-Regular"],
      // "black-bison": "Black Bison",
      // chucklesome: "CHUCKLESOME",
      // "kepler-296": "Kepler 296",
      // "swera-demo": "Swera Demo",
      // thuner: "Thuner",
      audiowide: "Audiowide",
      // "miss-ellen": "Miss Ellen",
    },
    colors: {
      // primary: colors.purple,
      gray: colors.gray,
      primary: colors.indigo,
      // primary: colors.yellow,
      secondary: colors.yellow,
      neutral: colors.gray,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "540px",
          },
          "@screen md": {
            maxWidth: "720px",
          },
          "@screen lg": {
            maxWidth: "960px",
          },
          "@screen xl": {
            maxWidth: "1140px",
          },
        },
      });
    },
  ],
};
