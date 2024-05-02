import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roobert': ['Roobert', 'sans-serif'],
        'roobert-trial': ['RoobertTRIAL', 'sans-serif'],
      },
      letterSpacing: {
        'very-tight': '-0.07em'
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(.08,.5,.44,.96)',
      },
      rotate: {
        '135': '135deg',
      },
      scale: {
        '80': '0.8',
      }
    },
  },
  plugins: [],
};
export default config;
