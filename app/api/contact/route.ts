import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        // Nodemailer transporter yapılandırması
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER, // Gönderen her zaman yetkilendirilmiş hesap olmalı
            replyTo: email, // Kullanıcının e-postası yanıt adresi olarak eklenir
            to: 'ahmetcaliskan.dev@gmail.com',
            subject: `Portfolio [${subject}]: ${name}`,
            text: `Gönderen: ${name} (${email})\n\nMesaj: ${message}`,
        };

        // E-posta gönderimini gerçekleştir
        await transporter.sendMail(mailOptions);
        console.log('E-posta başarıyla gönderildi:', subject);

        return NextResponse.json({ message: 'E-posta başarıyla gönderildi.' }, { status: 200 });
    } catch (error) {
        console.error('SMTP Hatası Detayları:', error);
        return NextResponse.json({ error: 'E-posta gönderilemedi.' }, { status: 500 });
    }
}
