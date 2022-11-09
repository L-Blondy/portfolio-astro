const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

   theme: {
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
   ],
};
