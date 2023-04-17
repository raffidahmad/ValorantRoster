module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'valorant-red': "url('/bg-2.png')"
      },
      animation: {
        rotate: 'rotate 60s linear infinite',
        'fade-in': 'fade-in 1s ease-in-out',
        'fade-out': 'fade-out 1s ease-in-out',
        'swipe-left': 'swipe-left 0.5s ease-in-out',
        'swipe-right': 'swipe-right  0.5s ease-in-out'
      },
      keyframes: {
        rotate: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(360deg)' },
          '75%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 }
        },
        'swipe-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        'swipe-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        }
      }
    }
  },
  plugins: []
};
