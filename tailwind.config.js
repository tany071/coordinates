/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bb: "rgb(var(--color-bg)/0.95)",
        list: "#BDC7C9",
        hbg: "#1E1E1E54",
        mapping: "#EAD3CB",
        secondary: "#845460",
      },
    
    },
  },
  plugins: [],
};