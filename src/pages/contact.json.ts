import type { APIRoute } from 'astro';
import nodemailer, { SentMessageInfo } from 'nodemailer';
import type Mail from 'nodemailer/lib/mailer';

const transporter = nodemailer.createTransport({
   port: 465,
   host: 'smtp.gmail.com',
   secure: true,
   auth: {
      user: import.meta.env.EMAIL_ACCOUNT_USERNAME,
      pass: import.meta.env.EMAIL_ACCOUNT_PASSWORD,
   },
});

function sendMail(mailData: Mail.Options): Promise<SentMessageInfo> {
   return new Promise((resolve, reject) => {
      transporter.sendMail(mailData, (err, info) => {
         if (err) {
            reject(err);
         }
         if (info) {
            resolve(info);
         }
      });
   });
}

export const post: APIRoute = async ({ request }) => {
   const formData = await request.formData();
   const from = formData.get('email')?.toString();
   const fullName = formData.get('fullName')?.toString();
   const message = formData.get('message')?.toString();

   const mail: Mail.Options = {
      from,
      to: import.meta.env.SEND_EMAIL_TO,
      subject: `Portfolio contact from ${fullName}`,
      text: `Message sent by ${from}\n\n${message}`,
   };

   try {
      await sendMail(mail);
      return new Response(JSON.stringify({ success: true }), { status: 200 });
   } catch (error) {
      return new Response(JSON.stringify({ success: false, error }), {
         status: 400,
      });
   }
};
