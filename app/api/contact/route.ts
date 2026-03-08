import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// SMTP transporter oluştur
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: process.env.SMTP_PORT === '465', // 465 için true, 587 için false
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, subject, message } = body;

    // Validation
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Tüm zorunlu alanları doldurunuz.' },
        { status: 400 }
      );
    }

    // SMTP transporter oluştur
    const transporter = createTransporter();

    // Email gönder
    const info = await transporter.sendMail({
      from: `"Metal X Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `İletişim Formu: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3d4f5f;">Yeni İletişim Formu Mesajı</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Ad Soyad:</strong> ${name}</p>
            <p><strong>E-posta:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone}</p>
            ${company ? `<p><strong>Şirket:</strong> ${company}</p>` : ''}
            <p><strong>Konu:</strong> ${subject}</p>
            <p><strong>Mesaj:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Bu mesaj Metal X Endüstriyel San. ve Tic. LTD. ŞTİ. web sitesinden gönderilmiştir.
          </p>
        </div>
      `,
      text: `
Yeni İletişim Formu Mesajı

Ad Soyad: ${name}
E-posta: ${email}
Telefon: ${phone}
${company ? `Şirket: ${company}` : ''}
Konu: ${subject}

Mesaj:
${message}
      `.trim(),
    });

    return NextResponse.json(
      { message: 'Mesajınız başarıyla gönderildi!', messageId: info.messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Bir hata oluştu. Lütfen tekrar deneyin.' },
      { status: 500 }
    );
  }
}
