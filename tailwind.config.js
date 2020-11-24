module.exports = {
  purge: ["./**/*.{html,vue}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      xs: "614px",
      sm: "1002px",
      md: "1022px",
      lg: "1092px",
      xl: "1280px",
    },
    extend: {
      animation: {
        "spin-fast": "spin 0.7s linear infinite",
      },
      colors: {
        dim: {
          50: "#5F99F7",
          100: "#5F99F7",
          200: "#38444d",
          300: "#202e3a",
          400: "#253341",
          500: "#5F99F7",
          600: "#5F99F7",
          700: "#192734",
          800: "#162d40",
          900: "#15202b",
        },
      },
      width: {
        68: "68px",
        88: "88px",
        275: "275px",
        290: "290px",
        350: "350px",
        600: "600px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
