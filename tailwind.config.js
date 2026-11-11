/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                cyber: {
                    bg: '#050b14',
                    card: '#0a1424',
                    border: '#112238',
                    teal: '#14b8a6',
                    emerald: '#10b981',
                    cyan: '#06b6d4',
                    blue: '#3b82f6'
                }
            },
            fontFamily: {
                mono: ['"Fira Code"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
                sans: ['Inter', 'system-ui', 'sans-serif']
            }
        }
    },
    plugins: []
};
