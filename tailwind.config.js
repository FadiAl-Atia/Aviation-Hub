/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",                // React components
    "./node_modules/@tanstack/**/*.{js,ts,jsx,tsx}",  // Tanstack packages if used directly
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",   // Custom primary color
        accent: "#10B981",    // Custom accent color
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),      // Optional: for better styled inputs
    require('@tailwindcss/typography'), // Optional: for prose-rich content
  ],
}
