/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      "width":{
        "contained": "1240px"
      },
      "colors":{
        "darkPurple": "#340061"
      } 
    },

  },
  plugins: [],
}
