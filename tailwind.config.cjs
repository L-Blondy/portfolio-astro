/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

   theme: {
      extend: {
         textColor: {
            dark: '#4B5563',
            light: '#c4cad0',
         },
         backgroundColor: {
            light: '#fcfcfc',
         },
         backgroundImage: {
            'landing-gradient': 'linear-gradient(90deg, #002138, #001223)',
         },
      },
   },
};
