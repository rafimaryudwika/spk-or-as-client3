const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

    safelist: [
        'w-64',
        'w-1/2',
        'rounded-l-lg',
        'rounded-r-lg',
        'bg-gray-200',
        'grid-cols-4',
        'grid-cols-7',
        'h-6',
        'leading-6',
        'h-9',
        'leading-9',
        'shadow-lg',
    ],

    darkMode: 'class',

    content: [],

    theme: {
        extend: {
            colors: {
                green: colors.emerald,
                yellow: colors.amber,
                purple: colors.violet,
                gray: colors.neutral,
            },
            spacing: {
                'h-custom': '90hv',
            },
        },
    },
    plugins: [require('flowbite/plugin'), require('@vueform/slider/tailwind')],
}
