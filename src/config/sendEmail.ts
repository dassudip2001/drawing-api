import nodemailer = require("nodemailer");
import { TransportOptions } from 'nodemailer';
export const sendEmail = async (to: string, subject: string, text: string) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) ,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    }as TransportOptions);
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      text,
    });
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
