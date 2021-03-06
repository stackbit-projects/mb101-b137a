const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
const themeStyle = require('./content/data/style.json');

module.exports = {
    presets: [require('@stackbit/components/styles/tailwind.default.config.js')],
    mode: 'jit',
    purge: {
        enabled: true,
        content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/@stackbit/components/src/{base,layouts,components,utils}/**/*.{js,ts,jsx,tsx}', './content/**'],
        safelist: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e', 'colors-f', 'colors-g', 'colors-h', 'colors-i']
    },
    darkMode: false,
    theme: {
        extend: {
            colors: {
                body: themeStyle.body,
                headlines: themeStyle.headlines,
                primary: themeStyle.primary,
                secondary: themeStyle.secondary,
                neutral: themeStyle.neutral,
                complementary: themeStyle.complementary,
                'complementary-alt': themeStyle.complementaryAlt
            },
            fontFamily: {
                body:  themeStyle.fontBody,
                headlines: themeStyle.fontHeadlines
            },
        }
    },
    variants: {
        extend: {}
    },
    plugins: [
        plugin(function ({ addBase, addComponents }) {
            addBase({
                'h1': {
                    fontWeight: themeStyle.h1.weight,
                    textDecoration: themeStyle.h1.decoration,
                    textTransform: themeStyle.h1.case,
                    letterSpacing: themeStyle.h1.letterSpacing,
                },
                'h2': {
                    fontWeight: themeStyle.h2.weight,
                    textDecoration: themeStyle.h2.decoration,
                    textTransform: themeStyle.h2.case,
                    letterSpacing: themeStyle.h2.letterSpacing,
                },
                'h3': {
                    fontWeight: themeStyle.h3.weight,
                    textDecoration: themeStyle.h3.decoration,
                    textTransform: themeStyle.h3.case,
                    letterSpacing: themeStyle.h3.letterSpacing,
                }
            }),
            addComponents({
                '.sb-component-button-primary': {
                    borderRadius: themeStyle.buttonPrimary.radius,
                    textTransform: themeStyle.buttonPrimary.case
                },
                '.sb-component-button-secondary': {
                    borderRadius: themeStyle.buttonSecondary.radius,
                    textTransform: themeStyle.buttonSecondary.case
                }
            })
        })
    ]
};
