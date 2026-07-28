/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#faf3e3',
          light: '#fffdf7',
          dark: '#f0e6cc',
        },
        ink: {
          DEFAULT: '#2c2a26',
          soft: '#55504a',
        },
        bulb: {
          DEFAULT: '#ffb703',
          light: '#ffd166',
          dark: '#f18701',
        },
        teal: {
          DEFAULT: '#2ec4b6',
          dark: '#1f9c90',
        },
        marker: '#e5533d',
        indigo: {
          DEFAULT: '#5b5fef',
          dark: '#4346c2',
        },
      },
      fontFamily: {
        hand: ['"Kalam"', 'cursive'],
        script: ['"Caveat"', 'cursive'],
        body: ['"Nunito"', 'sans-serif'],
      },
      boxShadow: {
        sketch: '3px 3px 0 rgba(44, 42, 38, 0.9)',
        'sketch-lg': '6px 6px 0 rgba(44, 42, 38, 0.9)',
        pin: '0 6px 14px rgba(44, 42, 38, 0.25)',
      },
      rotate: {
        1: '1deg',
        2: '2deg',
        3: '3deg',
        '-1': '-1deg',
        '-2': '-2deg',
        '-3': '-3deg',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: 1, filter: 'drop-shadow(0 0 18px rgba(255,183,3,0.65))' },
          '50%': { opacity: 0.85, filter: 'drop-shadow(0 0 28px rgba(255,183,3,0.9))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
      },
      animation: {
        flicker: 'flicker 2.4s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
        wiggle: 'wiggle 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
