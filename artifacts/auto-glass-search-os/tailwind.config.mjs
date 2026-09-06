/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand palette
        obsidian:      '#0B0F19',
        'carbon-slate': {
          DEFAULT: '#131B2E',
          2: '#1A2540',
          3: '#1F2D4A',
        },
        'laser-cyan':  '#00D2FF',
        cobalt: {
          DEFAULT: '#1E40AF',
          hover:   '#2563EB',
          active:  '#1D4ED8',
        },
        'fleet-amber': '#F59E0B',
        // Legacy aliases
        navy:    '#0B0F19',
        graphite:'#1A2540',
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
          DEFAULT: '#00D2FF',
          50:  '#E0F9FF',
          100: '#B3F1FF',
          200: '#66E3FF',
          300: '#33DCFF',
          400: '#00D2FF',
          500: '#00B8E0',
          600: '#009BBD',
          700: '#007A96',
          800: '#005A6F',
          900: '#003A48',
        },
        'off-white': '#F7F8F8',
        border:      '#253150',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans:    ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono:    ['"IBM Plex Mono"', 'Menlo', '"Courier New"', 'monospace'],
      },
      fontSize: {
        'h1-mobile':  ['clamp(2.5rem, 6vw, 3rem)', { lineHeight: '1.02', fontWeight: '800' }],
        'h1-desktop': ['clamp(3.5rem, 5.5vw, 4.25rem)', { lineHeight: '1.0', fontWeight: '800' }],
        'h2-mobile':  ['clamp(1.875rem, 5vw, 2.25rem)', { lineHeight: '1.08', fontWeight: '700' }],
        'h2-desktop': ['clamp(2.25rem, 3.5vw, 2.875rem)', { lineHeight: '1.08', fontWeight: '700' }],
        'h3-desktop': ['clamp(1.25rem, 2vw, 1.625rem)', { lineHeight: '1.2', fontWeight: '600' }],
        'body':       ['1.0625rem', { lineHeight: '1.65' }],
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
        'sm':  '0.125rem',
        'md':  '0.375rem',
        'lg':  '0.5rem',
        'xl':  '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      letterSpacing: {
        'label':   '0.1em',
        'widest':  '0.14em',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0, 0, 1)',
      },
    },
  },
  plugins: [],
};
