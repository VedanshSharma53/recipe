/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6EC071",
        primaryLight: "#4CAF50",
        light: "#fffefc",
      },
      backgroundImage: {
        login:
          "url('https://images.pexels.com/photos/2454533/pexels-photo-2454533.jpeg?auto=compress&cs=tinysrgb&w=720&dpr=1')",
        hero: "url('https://i.ibb.co/TxSqBrQ9/homeimg.jpg')",
      },
    },
  },
  plugins: [],
};

