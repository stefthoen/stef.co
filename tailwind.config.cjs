const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    colors: {
      'grey': '#ccc',
      'white': '#fffbef'
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
        sm: "960px",
        md: "960px",
        lg: "960px",
        xl: "960px"
      }
    },
    extend: {}
  },

  plugins: []
};

module.exports = config;
