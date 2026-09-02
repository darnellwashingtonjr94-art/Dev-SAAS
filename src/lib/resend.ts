import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

export const sendWelcomeEmail = async (to: string, name: string) => {
  try {
    await resend.emails.send({
      from: 'Dev-SaaS <onboarding@yourdomain.com>',
      to,
      subject: 'Welcome to Dev-SaaS!',
      html: `<div>
               <h1>Welcome aboard, ${name}!</h1>
               <p>We're thrilled to have you here. Let us know if you need help getting set up.</p>
             </div>`,
    });
  } catch (error) {
    console.error('FAILED_TO_SEND_EMAIL', error);
  }
};
