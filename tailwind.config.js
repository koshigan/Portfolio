/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hr-navy': '#1a3a52',
        'hr-navy-light': '#2d5a7b',
        'hr-green': '#6B8E6F',
        'hr-green-light': '#8ba88a',
        'hr-teal': '#0E7490',
        'hr-cream': '#F9F7F4',
        'hr-gray': '#E8E4D9',
        'hr-dark': '#2C3E50',
        'hr-gold': '#D4A574',
      },
      fontFamily: {
        'sora': 'Sora, sans-serif',
        'inter': 'Inter, sans-serif',
        'mono': 'Space Mono, monospace',
      },
    },
  },
  plugins: [],
}
