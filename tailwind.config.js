/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "footer-blue": "#020024",
      },
      backgroundImage: (theme) => ({
        "custom-gradient":
          "linear-gradient(0deg, rgb(2, 0, 36) 0%, rgb(9, 17, 121) 43%, rgb(0, 212, 255) 98%)",
      }),
    },
  },
  plugins: [],
};
