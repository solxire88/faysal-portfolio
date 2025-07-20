import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { firstName, lastName, email, phone, object, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        });

        try {
            await transporter.sendMail({
                from: email,
                to: 'benarbiafaysal444@gmail.com',
                subject: object,
                text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,

            });
            res.status(200).json({ success: true })

        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Failed to send email' })
        }
    }


}
