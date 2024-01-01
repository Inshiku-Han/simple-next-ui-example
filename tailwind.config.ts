import { type Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'
import plugin from 'tailwindcss/plugin'

export default {
  content: [
    './src/app/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui(),
    plugin(({ addComponents }) => {
      addComponents({
        '.custom-container': {
          '@apply mx-auto max-w-screen-lg px-6': {},
        },
      })
    }),
  ],
} satisfies Config
