module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 4s Linear infinite',
        bounce1: 'bounce 4s Linear infinite',
        bounce2: 'bounce 3s Linear infinite',
        notification: 'pulse 2s Linear infinite',
        // pulse: 'pulse 2s Linear infinite',
        spin: 'spin 1s Linear infinite',
        pulse: 'pulse 3s  infinite',
      },
      fontFamily: {
        'poppins-regular': ['Poppins-Regular', 'sans-serif'],
        'poppins-medium': ['Poppins-Medium', 'sans-serif'],
      },
      backgroundImage: {
        bg1: "url('/grad1.jpg')",
        bg2: "url('/grad2.jpg')",
      },
    },
  },
  plugins: [require('daisyui')],
}
