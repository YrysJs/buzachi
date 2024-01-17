/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx}',
    './src/shared/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      gray_50: '#F9FAFB',
      gray_100: '#F3F4F6',
      gray_200: '#E5E7EB',
      gray_300: '#D1D5DB',
      gray_400: '#9CA3AF',
      gray_500: '#6B7280',
      gray_600: '#4B5563',
      gray_800: '#1F2937',
      gray_900: '#111827'
    },
    extend: {
      screens: {
        xl: '1236px',
        smd: '850px',
        xss: '640px'
      },
      backgroundImage: {
        'main-hero' : "url('/assets/img/main-hero.png')",
        'about-hero-ds' : "url('/assets/img/g1.png')",
        'about-hero-mb' : "url('/assets/img/g2.png')",
      },
      fontFamily: {
        'Mon': 'Montserrat, sans-serif',
        'Int': 'Inter, sans-serif'
      }
    }
  },
  plugins: [],
}
