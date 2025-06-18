// pages/api/send-email.js
import sendgrid from '@sendgrid/mail';

const sendgrid_api_key = process.env.SENDGRID;
sendgrid.setApiKey(sendgrid_api_key || ''); // Set your SendGrid API key

async function POST(req: { method: string; body: { name: any; email: any; message: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; end: { (): any; new(): any; }; send: { (arg0: string): void; new(): any; }; }; }) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { name, email, message } = req.body;

  try {
    await sendgrid.send({
      to: 'gtktorres@gmail.com', // Your email
      from: `${email}`, // Verified sender
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(200).send('Email sent successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email.');
  }
}

export default POST;
