/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary" : "var(--bg-primary)",
        "card-primary" : "var(--card-primary)",
        "btn-primary" : "var(--btn-primary)",
        "btn-secondary" : "var(--btn-secondary)",
        "text-primary" : "var(--text-primary)",
        "text-secondary" : "var(--text-secondary)",
        "text-info" : "var(--text-info)",
        "text-highlight" : "var(--text-highlight)",
      },
    },
  },
  plugins: [],
}
