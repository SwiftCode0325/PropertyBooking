/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#01204E',
        secondary: '#EBF4F6',
        accent: '#5994D4',
      },
    },
  },
  plugins: [],
};
