import { cn } from 'src/utils';

export const projects = [
   {
      name: 'H2O.ai',
      description: cn`
			Website built over a 2 weeks Web Dev Challenge. 
			The requirements: build a fully functional website 
			using no UI library.
		`,
      techs: cn`
			Designed with Figma, 
			built with React, 
			I used the formspree API to handle the form submissions.
		`,
      slides: [
         {
            src: '/slides/H2O-1.png',
            alt: 'H2O homepage',
         },
      ],
   },
];
