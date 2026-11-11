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
                    emerald: '#10b981',
                    mint: '#34d399',
                    amber: '#f59e0b',
                    orange: '#fb923c',
                    pink: '#ec4899',
                    rose: '#f43f5e'
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
