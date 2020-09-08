module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      'sans': ['"Work Sans"'],
      'display': ['MuseoModerno']
    },
    extend: {
      screens: {
        'dark': {'raw': '(prefers-color-scheme: dark)'}
      }
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
