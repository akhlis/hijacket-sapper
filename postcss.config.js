const tailwindcss = require("tailwindcss");

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './**/**/*.html',
    './**/**/*.svelte'
  ],

  whitelistPatterns: [/svelte-/],

  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

const production = process.env.NODE_ENV !== 'development'

module.exports = {
  plugins: [
    tailwindcss("./tailwind.js"),
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-preset-env')({
      stage: 0,
      browsers: 'last 2 versions'
    }),
    ...(production ? [purgecss] : [])
  ]
};