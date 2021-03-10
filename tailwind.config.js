const colors = require('tailwindcss/colors')
module.exports = {
  // purge: {
  //   enabled: true,
  //   content:['./*.html']
  // },
  purge:['./index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        fuchsia:colors.fuchsia,
        cyan:colors.cyan,
        emerald:colors.emerald,
        teal:colors.teal
      },
      fontSize:{
        '4.5xl':'2.5rem', /*40px*/
      },
      margin:{
        30:'7.625rem' /*122px*/
      },
      width:{
        26:'6.5rem' /*104px*/
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
