import type { Config } from 'tailwindcss';

// Système de tokens du dashboard MotoSafe.
// Les couleurs de risque reprennent volontairement celles des diagrammes
// de conception (teal = sain, ambre = attention, rouge = urgence) pour que
// le vocabulaire visuel reste identique entre la doc et le produit.
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: '#0E1210',
          900: '#151A18',
          800: '#1E2523',
          700: '#2B332F',
        },
        brand: {
          50: '#E1F5EE',
          200: '#8FD4BB',
          500: '#0F6E56',
          700: '#085041',
          900: '#04342C',
        },
        risque: {
          faible: '#2F9E58',
          modere: '#C88A1D',
          eleve: '#D2691E',
          critique: '#B23A3A',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        sans: ['var(--font-body)', 'sans-serif'],
      },
      borderRadius: {
        xl: '14px',
      },
    },
  },
  plugins: [],
};

export default config;
