export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2f8ff",
          100: "#e6f1ff",
          200: "#cfe4ff",
          300: "#a6cdff",
          400: "#6eacff",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2, 6, 23, 0.08)",
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem'
      }
    }
  },
  plugins: []
}
