export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e9ecf3",
          100: "#dde2ed",
          200: "#bac3da",
          600: "#1f3d88",
          700: "#1c367a",
          800: "#19306d",
          900: "#0b1530",
        },
        success: "#2ecc71",
        warning: "#f4b400",
        danger: "#e74c3c",
        info: "#4277ff",

        neutral: {
          50: "#fdfdfe",
          100: "#fafafa",
          200: "#f5f5f5",
          300: "#ececec",
          400: "#e0e0e0",
          500: "#c3c3c3",
          600: "#b5b5b5",
          700: "#555555",
          800: "#3b3a3a",
          900: "#1c1b1b",
        },
      },
    },
  },
  plugins: [],
};
