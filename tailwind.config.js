const theme = require("tailwindcss/defaultTheme")

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
    content: ["./src/**/*.tsx"],
    presets: [require("tailwind-config")],
    theme: {
        extend: {
            colors: {
                primary: "#6d28d9",
                secondary: "#fcd34d",
            },
        },
    },
    plugins: [],
}
