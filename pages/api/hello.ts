// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { mailOptions, transporter } from '../../services/nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);

  if (req.method === 'POST') {
    const { email, name, message } = req.body
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: 'This is a test',
        text: 'This is test message',
        html: `<h1>Hello World motherfucker ${email}</h1>`,
      });

      return res.status(200).json({ msg: 'Sent Successfully' });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ msg: 'Internal Problem In TryAndCatch block' });
    }
  }
  return res.status(400).json({ msg: 'Internal Problem in Entirely' });
}
