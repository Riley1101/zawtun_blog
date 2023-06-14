/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#18181B",
        "nav-bt": "#3F3F46",
        "bd-bg": "#38BDF9",
        "bt-bg": "#38BD",
        menu: "#AB68BB",
      },

      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-40px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(40px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        wiggle: {
          "0%": { transform: "scale(.7)" },
          "100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 1.5s ease-out",
        "fade-in-up": "fade-in-up 1.5s ease-out",
        wiggle: "wiggle 1s ease-out",
      },
    },
  },
  plugins: [],
};
