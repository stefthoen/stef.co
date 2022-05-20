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
    extend: {}
  },

  plugins: []
};

module.exports = config;
