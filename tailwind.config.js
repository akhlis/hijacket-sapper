module.exports = {
  important: false,
  theme: {
    extend: {
      colors: {
          primary: '#f57224',
          secondary: '#ff9800',
          tertiery: '#ffb916',

          grey: '#eff0f5',
          lightgray: '#f6f6f6',
          'gray-50': '#fbfdff',

          facebook: '#3b5999',
          twitter: '#55acee',
          pinterest: '#bd081c',
          youtube: '#cd201f',
          whatsapp: '#25D366',
          line: '#00c300',
          instagram: '#e4405f',
      },
      spacing: {
          '-100px': '-100px',
          '-65px': '-65px',
          '-18px': '-18px',
          '-20px': '-20px',
          '-px': '-1px',
          '-8': '-2rem',
          '-6': '-1.5rem',
          '-5': '-1.25rem',
          '-4': '-1rem',
          '-3': '-0.75rem',
          '-2': '-0.5rem',
          '-1': '-0.25rem',
          '2px': '2px',
          '3px': '3px',
          '4px': '4px',
          '5px': '5px',
          '6px': '6px',
          '7px': '7px',
          '8px': '8px',
          '9px': '9px',
          '10px': '10px',
          '30px': '30px',
          '50px': '50px',
          '54px': '54px',
          '65px': '65px',
          '75px': '75px',
          '100px': '100px',
          '104px': '104px',
          '125px': '125px',
          '150px': '150px',
          '175px': '175px',
          '200px': '200px',
          '300px': '300px',
          '400px': '400px',
          '1/1': '100%',
          '2/3': '150%',
          '16/9': '56.25%',
          '4/3': '75%',
          '3/2': '66.66%',
          '8/5': '62.5%',
          '4/5': '125%',
          '4/6': '150%',
          '10pr': '10%',
          '15pr': '15%',
          '20pr': '20%',
          '25pr': '25%',
          '30pr': '30%',
          '50pr': '50%',
          '75pr': '75%',
          '80pr': '80%',
          '85pr': '85%',
          '90pr': '90%',
          '30pr-40px': 'calc(30% + 40px)',
      },
      backgroundSize: {
          '100-50': '100% 50%',
      },
      borderWidth: {
          '3': '3px',
          '5': '5px',
          '6': '6px',
          '7': '7px',
          '16': '16px',
      }, 
      cursor: {
          crosshair: 'crosshair',
          'zoom-in': 'zoom-in',
          'n-resize': 'n-resize',
      },
      flexGrow: {
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
      },
      flexShrink: {
          '2': '2',
          '3': '3',
      },
      fontFamily: {
          openSans: ['"Open Sans"', 'sans-serif'],
          heading: ['Poppins', 'sans-serif'],
          body: ['Roboto', 'sans-serif'],
      },
      fontSize: {
          '3xs': '0.5rem',
          '2xs': '0.625rem',
      },
      height: theme => ({
          auto: 'auto',
          ...theme('spacing'),
          '90vh': '90vh',
      }),
      inset: (theme, {
          negative
        }) => ({
          auto: 'auto',
          ...theme('spacing'),
          ...negative(theme('spacing')),
      }),
      listStyleType: {
          circle: 'circle',
          square: 'square',
          'lower-latin': 'lower-latin',
          'lower-roman': 'lower-roman',
          'upper-latin': 'upper-latin',
          'upper-roman': 'upper-roman',
      },
      maxHeight: {
          half: '50%',
      },
      width: theme => ({
          auto: 'auto',
          ...theme('spacing'),
          'full-40px': 'calc(100% + 40px)',
      }),
      zIndex: {
          '60': '60',
          '70': '70',
          '80': '80',
          '90': '90',
      },
    }
  },
  variants: {
    accessibility: ['responsive', 'focus'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus', 'before', 'after'],
    backgroundOpacity: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus', 'before', 'focus-within'],
    borderOpacity: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive', 'before'],
    borderStyle: ['responsive', 'before'],
    borderWidth: ['responsive', 'before', 'focus'],
    boxShadow: ['responsive', 'hover', 'focus'],
    boxSizing: ['responsive'],
    cursor: ['responsive', 'hover'],
    display: ['responsive', 'last', 'before', 'after'],
    divideColor: ['responsive'],
    divideOpacity: ['responsive'],
    divideWidth: ['responsive'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive', 'before'],
    clear: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive', 'hover', 'focus', 'before', 'after'],
    inset: ['responsive', 'hover', 'before', 'after'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive', 'first', 'last', 'before', 'after'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'hover', 'focus'],
    order: ['responsive'],
    outline: ['focus', 'responsive', 'hover'],
    overflow: ['responsive'],
    padding: ['responsive', 'before', 'after', 'first', 'last'],
    placeholderColor: ['responsive', 'focus', 'hover', 'active'],
    placeholderOpacity: ['responsive', 'focus'],
    pointerEvents: ['responsive'],
    position: ['responsive', 'before', 'after', 'focus', 'important'],
    resize: ['responsive'],
    space: ['responsive'],
    stroke: ['responsive'],
    strokeWidth: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus', 'before', 'after'],
    textOpacity: ['responsive', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive', 'hover', 'focus', 'before', 'after'],
    wordBreak: ['responsive'],
    zIndex: ['responsive', 'before', 'after'],
    gap: ['responsive'],
    gridAutoFlow: ['responsive'],
    gridTemplateColumns: ['responsive'],
    gridColumn: ['responsive'],
    gridColumnStart: ['responsive'],
    gridColumnEnd: ['responsive'],
    gridTemplateRows: ['responsive'],
    gridRow: ['responsive'],
    gridRowStart: ['responsive'],
    gridRowEnd: ['responsive'],
    transform: ['responsive', 'hover', 'focus', 'active', 'before', 'after', 'group-hover'],
    transformOrigin: ['responsive'],
    scale: ['responsive', 'hover', 'focus'],
    rotate: ['responsive', 'hover', 'focus', 'active', 'before', 'after'],
    translate: ['responsive', 'hover', 'focus'],
    skew: ['responsive', 'hover', 'focus'],
    transitionProperty: ['responsive', 'hover', 'focus', 'before'],
    transitionTimingFunction: ['responsive', 'hover', 'before'],
    transitionDuration: ['responsive', 'hover', 'before'],
    transitionDelay: ['responsive', 'hover'],
  },
  corePlugins: {},
  plugins: [
    require('tailwindcss-pseudo-elements'),
    require('tailwindcss/plugin'),
    // This plugin is useful in combination with tailwindcss-aspect-ratio.
    function ({
      addBase,
      config
    }) {
      addBase({
        'h1': {
          fontSize: config('theme.fontSize.3xl'),
          fontWeight: config('theme.fontWeight.bold'),
          marginBottom: config('theme.spacing.4'),
          fontFamily: config('theme.fontFamily.heading')
        },
        'h2': {
          fontSize: config('theme.fontSize.2xl'),
          fontWeight: config('theme.fontWeight.bold'),
          marginBottom: config('theme.spacing.4'),
          fontFamily: config('theme.fontFamily.heading')
        },
        'h3': {
          fontSize: config('theme.fontSize.xl'),
          fontWeight: config('theme.fontWeight.bold'),
          marginBottom: config('theme.spacing.4'),
          fontFamily: config('theme.fontFamily.heading')
        },
        'h4': {
          fontSize: config('theme.fontSize.lg')
        },
        'a': {
          color: config('theme.colors.primary')
        },
        'p': {
          marginBottom: config('theme.spacing.6')
        },
        'ol': {
          listStyleType: config('theme.listStyleType.decimal'),
          paddingLeft: config('theme.spacing.6'),
          marginBottom: config('theme.spacing.4')
        },
        'ul': {
          listStyleType: config('theme.listStyleType.disc'),
          paddingLeft: config('theme.spacing.6'),
          marginBottom: config('theme.spacing.4')
        },
        'li': {
          marginBottom: config('theme.spacing.2')
        },
        'table': {
          tableLayout: 'auto',
          marginTop: config('theme.spacing.4'),
          marginBottom: config('theme.spacing.6')
        },
        'table th': {
          paddingLeft: '1rem',
          paddingRight: config('theme.spacing.4'),
          paddingTop: config('theme.spacing.2'),
          paddingBottom: config('theme.spacing.2'),
          borderWidth: config('theme.borderWidth.default'),
          background: config('theme.colors.lightgray')
        },
        'td': {
          paddingLeft: config('theme.spacing.4'),
          paddingRight: config('theme.spacing.4'),
          paddingTop: config('theme.spacing.2'),
          paddingBottom: config('theme.spacing.2'),
          borderWidth: config('theme.borderWidth.default')
        },
      })
    },
    function ({
      addUtilities
    }) {
      const newUtilities = {
        '.empty-content': {
          content: "''",
        },
        '.checked-content': {
          content: "'✓'",
        },
        '.bg-mask': {
          content: "''",
          position: 'absolute',
          top: '0',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(rgba(47,48,50,.2),rgba(47,48,50,.7))',
          'box-shadow': 'inset 0 0 50px rgba(0,0,0,.15)',
          visibility: 'visible',
          transition: 'visibility .35s cubic-bezier(.25,.46,.45,.94),opacity .35s cubic-bezier(.25,.46,.45,.94)',
          opacity: '1',
        },
      }

      addUtilities(newUtilities, ['before', 'after', 'hover', 'important'])
    },
    function({ addVariant }) {
      addVariant('important', ({ container }) => {
        container.walkRules(rule => {
          rule.selector = `.\\!${rule.selector.slice(1)}`
          rule.walkDecls(decl => {
            decl.important = true
          })
        })
      })
    }
  ]
}