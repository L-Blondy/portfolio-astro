export const cn = (template: TemplateStringsArray, ...args: string[]) => {
   let res = '';

   for (let i = 0; i < template.length; i++) {
      res += `${template[i]}${args[i] || ''} `;
   }
   return res.replace(/([\r\n\s]+)/gm, ' ').trim();
};
