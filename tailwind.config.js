module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
        height: "height",
        borderWidth: "borderWidth",
      },
      colors: {
        yellow: {
          primary: "#FFB703",
          secondary: "#FFD66F",
        },
        red: {
          primary: "#D62828",
        },
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["focus"],
    },
  },
  plugins: [],
};
