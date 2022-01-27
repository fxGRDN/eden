module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend : {
      colors: {
        eden_gold : '#d8b455',
        eden_red : '#480000',
        eden_black : '#100c08',
      },
      spacing: {
        '128': '32rem',
        '160': '40rem',
        '192': '48rem',
        '256': '64rem',
        '320': '80rem',
      },
      fontFamily: {
        'vudo': ['Vudo', 'sans-serif'],
      }
    }
  },
  plugins: []
};