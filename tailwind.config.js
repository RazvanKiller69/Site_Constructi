/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {animation: {
      jump: "jump 1s",
      block: "block 2.3s infinite linear",
    },
    keyframes: {
      jump: {
        "0%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-15vh)" },
        "100%": { transform: "translateY(0)" },
      },
      block: {
        "0%": { left: "90vw" },
        "100%": { left: "-5vw" },
      },
    },},
  },
  plugins: [],
}
