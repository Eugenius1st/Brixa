// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brixa-brown": "#5D2D00", // 새로운 색상 추가
      },
      animation: {
        blink: "blink 0.5s ease-in-out infinite", // 1초 간격으로 깜빡임
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 }, // 완전히 보임
          "50%": { opacity: 0 }, // 투명해짐
        },
      },
    },
  },
  plugins: [],
};
