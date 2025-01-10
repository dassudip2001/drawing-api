import nodemailer = require('nodemailer');
export const sendEmail = async (to: string, subject: string, text: string) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'SMTP',
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT ,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        });
        await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to,
            subject,
            text
        });
        console.log('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};
