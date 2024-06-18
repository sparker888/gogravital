module.exports = {
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    maxWidth: {
      "max-w-8xl": "max-width: 84rem",
    },
    fontFamily: {
      sans: ["interstate-condensed", "sans-serif"],
      serif: ["ff-meta-serif-web-pro", "serif"],
      body: ["open-sans", "sans-serif"],
      mono: ["base-mono-wide", "monospace"],
      logo: ["myriad-pro"],
    },
    extend: {
      height: {
        150: "38rem",
      },
    },
  },
  plugins: [],
}
