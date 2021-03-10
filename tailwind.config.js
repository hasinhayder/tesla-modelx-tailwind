const colors = require('tailwindcss/colors')
module.exports = {
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
        'xss':'0.625rem', /*10px*/
        '4.5xl':'2.5rem', /*40px*/
      },
      margin:{
        0.25:'1px',
        30:'7.625rem' /*122px*/
      },
      width:{
        26:'6.5rem' /*104px*/
      },
      borderWidth:{
        3:'3px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
