# Tesla ModelX Hero Section Using Tailwind CSS

I used the [TailWind CSS Boilerplate](https://github.com/hasinhayder/tailwind-boilerplate) project for this. 

This project shows how to create the Hero section of https://www.tesla.com/modelx using Tailwind CSS :)

Check The Demo Here - https://modelx-tailwind.netlify.app


### start
```sh
git clone this_repository
cd this_directory
yarn
yarn dev
```

### build
```sh
yarn build
```

then grab everything from the dist folder

### change server port
Just change the port number in `vite.config.js` file
```javascript
export default {
    plugins: [],
    server: {
      open: '/index.html',
      port: 3116, //< -change this
    }
}

```

### configure tailwind
There is a `tailwind.config.js` file with `purge` instructions and extra colors, feel free to customize it according to your need
```javascript
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
```

