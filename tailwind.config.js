/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "primary": ["Inter"],
        "title": ["Playfair Display"],
      },
      colors: {
        "c-orange": "#FD665E",
        "c-gray": "rgba(0, 0, 0, 0.03)"
      },
      aspectRatio: {
        "special": "305 / 432",
        "architects": "342 / 500",
        "dream": "497 / 684",
      },
    },
  },
  plugins: [],
}
