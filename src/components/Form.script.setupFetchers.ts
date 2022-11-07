export const setupFetchers = () => {
   let isSubmitting = false;

   const submitFormFetcher = ({
      url,
      method,
      formData,
   }: {
      url: string;
      method: string;
      formData: FormData;
   }) => {
      if (isSubmitting) return;
      isSubmitting = true;
      let ok = false;
      function request() {
         // GET does not have a request body, params are passed in the search query string
         if (method.toLowerCase() === 'get') {
            const search = new URLSearchParams(formData as any).toString();
            return fetch(`${url}?${search}`, {
               method,
               credentials: 'same-origin',
            });
         }
         // For other methods, just use the body
         else {
            return fetch(url, {
               method,
               body: formData,
               credentials: 'same-origin',
            });
         }
      }
      return request()
         .then((res) => {
            ok = res.ok;
            return res.json();
         })
         .then((data) => {
            isSubmitting = false;
            if (ok) {
               return Promise.resolve(data);
            } else {
               return Promise.reject(data);
            }
         });
   };
   document
      .querySelectorAll<HTMLFormElement>('[data-enhanced-form]')
      .forEach((form) => {
         form.addEventListener('submit', (e) => {
            e.preventDefault();
            const url = form.action;
            const method = form.method;
            const formData = new FormData(form);
            submitFormFetcher({ url, formData, method })
               ?.then((data) => {
                  if (!form) return;
                  const successEvent = new CustomEvent('submit-success', {
                     detail: data,
                  });
                  form.dispatchEvent(successEvent);
               })
               .catch((error) => {
                  if (!form) return;
                  const errorEvent = new CustomEvent('submit-error', {
                     detail: error,
                  });
                  form.dispatchEvent(errorEvent);
               });
         });
      });
};
