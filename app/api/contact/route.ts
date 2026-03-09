import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        // 1. Alan Doğrulaması
        if (!name || !email || !subject || !message) {
            return NextResponse.json({ error: 'Lütfen tüm alanları doldurun.' }, { status: 400 });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: 'Geçersiz e-posta formatı.' }, { status: 400 });
        }

        // 2. Çevresel Değişken Kontrolü
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error('Sunucu Hatası: EMAIL_USER veya EMAIL_PASS yapılandırılmamış.');
            return NextResponse.json({ error: 'Sunucu yapılandırma hatası. Lütfen daha sonra tekrar deneyin.' }, { status: 500 });
        }

        // 3. Nodemailer Yapılandırması
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            replyTo: email,
            to: 'ahmetcaliskan.dev@gmail.com',
            subject: `Portfolio [${subject}]: ${name}`,
            text: `Gönderen: ${name} (${email})\n\nMesaj: ${message}`,
        };

        // 4. Gönderim ve Hata Yakalama
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'E-posta başarıyla gönderildi.' }, { status: 200 });

    } catch (error: any) {
        console.error('SMTP/API Hatası:', error);

        // Özel SMTP hata mesajları
        if (error.code === 'EAUTH') {
            return NextResponse.json({ error: 'E-posta kimlik doğrulaması başarısız. Uygulama şifresini kontrol edin.' }, { status: 500 });
        }
        if (error.code === 'ESOCKET' || error.syscall === 'getaddrinfo') {
            return NextResponse.json({ error: 'Sunucuya bağlanılamadı. İnternet bağlantısını kontrol edin.' }, { status: 503 });
        }

        return NextResponse.json({ error: 'E-posta gönderilirken beklenmeyen bir hata oluştu.' }, { status: 500 });
    }
}
