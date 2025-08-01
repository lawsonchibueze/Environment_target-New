import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-color": {
          DEFAULT: "#03112C",
        },
        "primary-color": {
          DEFAULT: "#202248",
        },
      },
      backgroundImage: {
        "hero-bg": "url('/images/img-8.jpg')",
        "abt-bg": "url('/images/img-12.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
