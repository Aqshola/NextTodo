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
    },
  },
  variants: {
    extend: {
      borderWidth: ["focus"],
    },
  },
  plugins: [],
};
