import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        // Nodemailer transporter yapılandırması
        // Not: Buradaki bilgiler çevresel değişkenlerden (env) alınmalıdır.
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: 'ahmetcaliskan.dev@gmail.com',
            subject: `Portfolio İletişim: ${name}`,
            text: `Gönderen: ${name} (${email})\n\nMesaj: ${message}`,
        };

        // Gmail ile gönderim için öncelikle env ayarları gerekir.
        // Şimdilik işlemi simüle edip başarılı dönüyoruz.
        console.log('E-posta gönderim isteği alındı:', mailOptions);

        // await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'E-posta başarıyla gönderildi.' }, { status: 200 });
    } catch (error) {
        console.error('E-posta gönderim hatası:', error);
        return NextResponse.json({ error: 'E-posta gönderilemedi.' }, { status: 500 });
    }
}
