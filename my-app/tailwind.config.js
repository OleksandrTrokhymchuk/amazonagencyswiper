/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
  "./*.{js,ts,jsx,tsx,mdx}", 
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'sans-serif'],
        staatliches: ['var(--font-staatliches)', 'sans-serif'],
        spinnaker: ['var(--font-spinnaker)', 'sans-serif'],
      },
      rotate: {
        '270': '270deg',
      },
      screens: {
        'vsm': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'desktop-xl': '1440px',
      }
    },
  },
  plugins: [],
}

