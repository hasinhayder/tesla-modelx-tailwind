# Tesla ModelX Hero Section Using Tailwind CSS

[![Netlify Status](https://api.netlify.com/api/v1/badges/28bf5911-0906-4dec-91bc-e87a194596e9/deploy-status)](https://app.netlify.com/sites/modelx-tailwind/deploys)

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

### Where are the styles/classes?

Everything is moved to `style.css` which takes advantages of tailwind's `@apply` directive. This sacrifies the readability, but keeps your markup clean. Tree-shaking works flawlessly for the production build :)

```css
.logo {
  @apply lg:w-48 pl-4 pt-1;
}

.nav{
  @apply flex w-full h-8 pt-4 font-semibold text-sm uppercase text-gray-800 ;
  letter-spacing: 0px;
}

.middle-menu{
  @apply invisible xl:visible text-center flex-auto;
}

.middle-menu a{
  @apply hover:text-white;
}

.right-menu{
  @apply pr-4 space-x-5 right-0 flex align-middle;
}

.middle-menu>div{
  @apply hidden xl:block space-x-5;
}

.hamburger{
  @apply w-4 h-4 mt-0.25;
}

.header{
  @apply mt-11 md:mt-30 text-center;
}

.header .title{
  @apply text-4.5xl font-medium;
}

.header .subtitle{
  @apply -mt-1;
}

.items{
  @apply absolute bottom-20 md:bottom-6 w-full flex flex-wrap justify-center;
}

.item{
  @apply text-white w-32 md:w-40 text-center;
}

.item h1{
  @apply text-2xl md:text-3xl;
}

.item span{
  @apply text-xs;
}

.item h1 span {
  @apply text-sm md:text-2xl -ml-1 font-semibold;
}

.button-item{
  @apply text-white ml-2 mr-4 md:m-0 md:w-40 w-full text-center sm:flex-nowrap
}

.rounded-button{
  @apply text-xs rounded-3xl border-3 border-white p-2 uppercase mt-3 md:mt-1.5  ml-3 font-medium;
}
```

