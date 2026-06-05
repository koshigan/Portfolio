/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark AI / Developer OS Theme
        'ai-bg': '#0A0A0F',           // Primary background
        'ai-bg-secondary': '#12121A', // Secondary background
        'ai-card': '#181825',         // Card background
        'ai-text': '#F5F5F7',         // Primary text
        'ai-text-secondary': '#A1A1AA', // Secondary text
        'ai-purple': '#8B5CF6',       // Accent purple
        'ai-blue': '#3B82F6',         // Accent blue
        'ai-cyan': '#06B6D4',         // Accent cyan
        'ai-green': '#22C55E',        // Success green
        'ai-border': '#27272A',       // Borders
        // Fallback HR colors (kept for compatibility)
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
