const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

   theme: {
      screens: {
         '2xs': '359px',
         xs: '500px',
         sm: '640px',
         md: '768.1px',
         lg: '1024.1px',
         xl: '1280.1px',
         '2xl': '1536.1px',
      },
      container: {
         center: true,
         padding: {
            DEFAULT: '1.25rem',
            sm: '4rem',
            md: '2rem',
            lg: '5rem',
            xl: '11rem',
            '2xl': '18rem',
         },
      },
      extend: {
         colors: {
            primary: {
               light: '#27B4A3',
               dark: '#67ECDC',
               'dark-dimmed': '#00907f',
            },
            bg: {
               light: '#fcfcfc',
               dark: '#002f46',
            },
            text: {
               light: '#4B5563',
               dark: '#c4cad0',
            },
         },
         backgroundImage: {
            landing: 'linear-gradient(90deg, #002138, #001223)',
         },
         boxShadow: {
            emphasis: '0 0 2px 0 #00000016',
         },
         padding: {
            'section-gutter': '20px',
         },
         animation: {
            'slideIn-from-top': 'slideIn-from-top 300ms forwards',
         },
         strokeWidth: {
            3: 3,
         },
         opacity: {
            85: 0.85,
         },
         fontSize: {
            '2xs': '0.625rem',
            md: '1.0625rem',
         },
      },
   },
   plugins: [
      plugin(({ addComponents, theme }) => {
         const buttonBase = {
            borderRadius: theme('borderRadius.DEFAULT'),
            padding: `${theme('spacing[2.5]')} ${theme('spacing[5]')}`,
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 100ms',
         };

         const buttonContained = {
            ...buttonBase,
            padding: `calc(2px + ${theme('spacing[2.5]')}) calc(2px + ${theme(
               'spacing[5]',
            )})`,
            backgroundColor: theme('colors.primary.light'),
            color: theme('colors.bg.light'),
            '&:hover': {
               opacity: '0.75',
            },
         };

         const buttonOutlined = {
            ...buttonBase,
            border: '2px solid currentColor',
            backgroundColor: '#88888800',
            color: theme('colors.primary.light'),
            '&:hover': {
               backgroundColor: '#88888830',
            },
         };

         addComponents({
            '.btn': buttonBase,
            '.btn-contained': buttonContained,
            '.btn-outlined': buttonOutlined,
         });
      }),
      plugin(({ addComponents, theme }) => {
         const buttonBase = {
            borderRadius: theme('borderRadius.DEFAULT'),
            padding: `${theme('spacing[2.5]')} ${theme('spacing[5]')}`,
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 100ms',
         };

         const buttonContained = {
            ...buttonBase,
            padding: `calc(2px + ${theme('spacing[2.5]')}) calc(2px + ${theme(
               'spacing[5]',
            )})`,
            backgroundColor: theme('colors.primary.light'),
            color: theme('colors.bg.light'),
            '&:hover': {
               opacity: '0.75',
            },
         };

         const buttonOutlined = {
            ...buttonBase,
            border: '2px solid currentColor',
            backgroundColor: '#88888800',
            color: theme('colors.primary.light'),
            '&:hover': {
               backgroundColor: '#88888830',
            },
         };

         addComponents({
            '.btn': buttonBase,
            '.btn-contained': buttonContained,
            '.btn-outlined': buttonOutlined,
         });
      }),
      plugin(({ addUtilities }) => {
         addUtilities({
            '.animation-duration-75': {
               'animation-duration': '75ms',
            },
            '.animation-duration-100': {
               'animation-duration': '100ms',
            },
            '.animation-duration-150': {
               'animation-duration': '150ms',
            },
            '.animation-duration-200': {
               'animation-duration': '200ms',
            },
            '.animation-duration-300': {
               'animation-duration': '300ms',
            },
            '.animation-duration-400': {
               'animation-duration': '400ms',
            },
            '.animation-duration-500': {
               'animation-duration': '500ms',
            },
            '.animation-duration-600': {
               'animation-duration': '600ms',
            },
            '.animation-duration-700': {
               'animation-duration': '700ms',
            },
            '.animation-duration-1000': {
               'animation-duration': '1000ms',
            },
            '.animation-duration-1500': {
               'animation-duration': '1500ms',
            },
            '.animation-duration-2000': {
               'animation-duration': '2000ms',
            },
            '.animation-duration-2500': {
               'animation-duration': '2500ms',
            },
            '.animation-duration-3000': {
               'animation-duration': '3000ms',
            },
         });
      }),
   ],
};
