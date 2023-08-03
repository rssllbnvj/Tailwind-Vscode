/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./dist/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                lgurey: "#9d9d9d",
                gurey: "#2c2c32",
                dark: "#25252b",
                asul: "#0066b8",
                light: "#ffffff",
                asuldark: "#0055a0",
            },
            screens: {
                'sm': '500px',
            },
        },
    purge:{
        enabled: true,
        content: ["./dist/**/*.{html,js}"],
    }
    },
    plugins: ["prettier-plugin-tailwindcss"],
};
