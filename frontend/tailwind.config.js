/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FCFBF9',     // Natural Paper Off-White
        secondary: '#8A827A',   // Warm Gray
        cta: '#25211E',         // Deep Warm Black
        background: '#3B3632',  // Warm Charcoal (Wood Tone from Logo)
        text: '#FCFBF9',        // Off-White
      },
      fontFamily: {
        sans: ['Raleway', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['Raleway', 'Helvetica', 'Arial', 'sans-serif'],
        body: ['Raleway', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0,0,0,0.05)',
        md: '0 4px 6px rgba(0,0,0,0.1)',
        lg: '0 10px 15px rgba(0,0,0,0.1)',
        xl: '0 20px 25px rgba(0,0,0,0.15)',
      },
      borderRadius: {
        'xl': '0.25rem',
        '2xl': '0.5rem',
        '3xl': '0.75rem',
      },
    },
  },
  plugins: [],
}
