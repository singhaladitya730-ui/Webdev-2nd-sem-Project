/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#B9FF66',
                'black-custom': '#191A23',
                gray: {
                    custom: '#F3F3F3',
                }
            },
            fontFamily: {
                sans: ['Arial', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
