import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit', // Just-In-Time mode enabled for faster builds

    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        './resources/js/**/**/*.vue', // Additional nested paths in case of deep structure
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'custom-gray': '#d3ad7f', // Example custom color based on your usage in Layout.vue
            },
        },
    },

    plugins: [forms],

    // Optionally, enable safelisting for specific classes that might be dynamically added
    safelist: [
        'text-gray-500', // Example safelisting to prevent purging
        'font-bold', 
        'hover:underline',
    ],
};
