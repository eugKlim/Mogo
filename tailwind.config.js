/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        KaushanScripts: ['"KaushanScript-Regular"', 'sans-serif'],
        MontserratBold: ['"Montserrat-Bold"', 'sans-serif'],
        MontserratRegular: ['"Montserrat-Regular"', 'sans-serif'],
        RobotoLightItalic: ['"Roboto-LightItalic"', 'sans-serif'],
        RobotoRegular: ['"Roboto-Regular"', 'sans-serif'],
      },
      backgroundImage: {
        'intro-bg': "url('/image/intro/intro-bg.jpg')",
        'feature-bg': "url('/image/feature/feature-bg.jpg')",
      },
      backgroundSize: {
        full: '100% 100%',
      },
      screens: {
        sm: '320px',
        md: '600px',
        lg: '800px',
        xl: '1000px',
      },
    },
  },
  plugins: [],
};
