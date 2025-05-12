/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF4500', // Laranja Avermelhado para destaque
        'primary-dark': '#E03E00', // Tom mais escuro no hover
        'secondary': '#FFD700', // Amarelo para destaque alternativo
        'secondary-dark': '#E6C200', // Tom mais escuro no hover
        'dark': '#121212', // Preto/Cinza Grafite Escuro
        'dark-light': '#1C1C1C', // Um pouco mais claro que o body
        'dark-medium': '#222222', // Cinza Grafite médio
        'dark-card': '#2A2A2A', // Cinza escuro para cards
        'text': '#E0E0E0', // Cinza Claro para texto
        'text-light': '#FFFFFF', // Branco para títulos
        'text-faded': '#B0B0B0', // Texto mais claro
      },
      fontFamily: {
        'sans': ['Montserrat', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 