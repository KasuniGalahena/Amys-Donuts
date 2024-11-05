/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '10rem',
      },
    },
    colors: {
      primary: '#f59e0b',
      secondary: '#ee3a97',
      lightyellow: '#fef3c7',
      lightpink: '#fbcfe8',
      darkyellow: '#fcb541',
      darkpink: '#db2777',
      darkblue: '#172554',
      darkgreen: '#134e4a'
    },
    fontFamily: {
      mali: ['Mali', 'cursive']
    },
    backgroundImage: {
      banner: "url('../src/assets/images/banner.jpg')",
      themegiftcard: "url('../src/assets/images/themed-background.png)",
      login: "linear-gradient(rgba(245, 245, 245, 0.9), rgba(245, 245, 245, 0.9)),url('../src/assets/images/login-bg.png')"
    },
    contrast: {
      25: '.25',
    },
    extend: {},
  },
  plugins: []
}
