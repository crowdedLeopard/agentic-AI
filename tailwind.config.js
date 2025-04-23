/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Adjusted typography for the new theme
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'), // Slightly lighter default text
            a: {
              color: theme('colors.indigo.600'),
              '&:hover': {
                color: theme('colors.indigo.800'),
              },
              textDecoration: 'none',
            },
            h1: {
              color: theme('colors.gray.900'),
            },
            h2: {
              color: theme('colors.gray.800'),
            },
            h3: {
              color: theme('colors.gray.800'),
            },
            pre: {
              backgroundColor: theme('colors.gray.100'), // Match global style
              color: theme('colors.gray.800'),
              borderRadius: theme('borderRadius.md'),
              padding: theme('spacing.4'),
            },
            blockquote: {
              borderLeftColor: theme('colors.indigo.200'), // Match global style
              color: theme('colors.gray.600'), // Match global style
              fontStyle: 'italic',
              paddingLeft: theme('spacing.4'),
            },
            code: { // Ensure inline code matches global style
              backgroundColor: theme('colors.gray.100'),
              color: theme('colors.indigo.700'), // Use accent for inline code
              padding: '0.2em 0.4em',
              borderRadius: theme('borderRadius.sm'),
              fontWeight: '500',
            },
            'pre code': { // Reset styles for code within pre blocks
              backgroundColor: 'transparent',
              color: 'inherit',
              padding: '0',
              borderRadius: '0',
              fontWeight: 'inherit',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
