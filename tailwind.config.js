const { transform } = require('framer-motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      lineClamp: {
        2: '2',
      },
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
        "back-scroll": "back-scroll 50s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" }
        },
        "back-scroll": {
          '0%': { transform: "translateX(-100%)" }, 
          '100%': { transform: "translateX(0%)" }
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
      fontSize: {
        'big-title': '5rem',
        'title': '3rem',
        'meduim': '1.5rem',
        'regular-txt': '1rem',
        'small-txt': '0.875rem'
      },
      borderWidth: {
        'regular': '1.5px'
      },
      maxWidth: {
        'smaller': '18rem'
      },
      backgroundColor: {
        'pink': '#df76a0',
        'hover-pink': '#d45689',
      },
      textColor: {
        'pink': '#df76a0',
        'pink-hover': '#d45689',
        'link-hover': '#545454'
      },
      borderColor: {
        'pink': '#df76a0'
      },
      borderRadius: {
        'big': '3rem'
      }
    },
  },
  variants: {
    lineClamp: ['responsive'],
  },
  plugins: [
    require('@tailwindcss/line-clamp'), 
  ],
}

