const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    colors: {
      'grey': '#ccc',
      'white': '#fffbef',
      'brown': '#333'
    },
    fontFamily: {
      'display': ['"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif"'],
      'body': ['"avenir next, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif"'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
      },
      screens: {
        sm: "100%",
        md: "768px",
        lg: "768px",
        xl: "768px"
      }
    },
    extend: {}
  },

  plugins: []
};

module.exports = config;
