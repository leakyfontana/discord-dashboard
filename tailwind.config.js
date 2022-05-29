module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'discord-blue': '#7289da',
        'discord-light-grey': '#424549',
        'discord-grey': '#36393e',
        'discord-dark-grey': '#282b30',
        'discord-darker-grey': '#1e2124',
        'discord-text': '#2F3136'
      },
    },
  },
  plugins: [],
}
