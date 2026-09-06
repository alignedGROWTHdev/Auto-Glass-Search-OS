/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy:    '#0B1F30',
        graphite:'#263746',
        slate:   {
          DEFAULT: '#647583',
          100: '#F7F8F6',
          200: '#D8DEE3',
          300: '#AAB4BC',
          400: '#8A97A0',
          500: '#647583',
          600: '#506070',
          700: '#3C4D5A',
          800: '#263746',
          900: '#0B1F30',
        },
        blue:    {
          DEFAULT: '#3182F6',
          50:  '#EBF2FE',
          100: '#DCEBFA',
          200: '#BADBF9',
          300: '#7CB8F5',
          400: '#4F9AF3',
          500: '#3182F6',
          600: '#1E6FE6',
          700: '#1559C4',
          800: '#1048A0',
          900: '#0C3680',
        },
        'off-white': '#F7F8F6',
        border:      '#D8DEE3',
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        mono:  ['"IBM Plex Mono"', 'Menlo', 'monospace'],
      },
      fontSize: {
        'h1-mobile': ['clamp(2.375rem, 6vw, 2.75rem)', { lineHeight: '1.05', fontWeight: '700' }],
        'h1-desktop': ['clamp(3.5rem, 5vw, 4rem)', { lineHeight: '1.05', fontWeight: '700' }],
        'h2-mobile': ['clamp(1.875rem, 5vw, 2.125rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'h2-desktop': ['clamp(2.375rem, 4vw, 2.75rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'h3-desktop': ['clamp(1.5rem, 2.5vw, 1.75rem)', { lineHeight: '1.2', fontWeight: '600' }],
        'body': ['1.0625rem', { lineHeight: '1.65' }],
      },
      maxWidth: {
        'site':  '1280px',
        'prose': '720px',
        'form':  '680px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      letterSpacing: {
        'label': '0.1em',
        'widest': '0.14em',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0, 0, 1)',
      },
    },
  },
  plugins: [],
};
