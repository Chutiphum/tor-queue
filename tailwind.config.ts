import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // primary: '#EEA650',
        // secondary: '#FFDAC6',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        main: {
          primary: '#eea650',
          secondary: '#ffdac6',
          accent: '#f16322',
          neutral: '#191b16',
          'base-100': '#f3f4f6',
          info: '#0ea5e9',
          success: '#22c55e',
          warning: '#f87171',
          error: '#dc2626',
        },
      },
    ],
  },
}
export default config
