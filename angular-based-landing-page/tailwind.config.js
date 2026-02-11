/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        obsidian: '#09090b',
        'taillight-amber': '#f59e0b',
        'taillight-rose': '#e11d48',
      },
      letterSpacing: {
        'ultra': '0.25em',
        'mega': '0.4em',
      },
      borderWidth: {
        '0.5': '0.5px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
