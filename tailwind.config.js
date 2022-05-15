module.exports = {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      "colors": {
        "blanc": "#ffffff",
        "Gris/foncé": "#111827",
        "indigo/500": "#6366f1",
        "indigo/900": "#312e81"
      },
      "fontFamily": { "inter": 'Inter, sans-serif', },
      "fontFamily": { "mulish": 'Mulish, sans-serif', }
    },
  },
  plugins: [],
}

