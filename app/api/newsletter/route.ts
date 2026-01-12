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
    const { email } = body;

    // Validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Geçerli bir e-posta adresi giriniz.' },
        { status: 400 }
      );
    }

    // SMTP transporter oluştur
    const transporter = createTransporter();

    // Email gönder
    const info = await transporter.sendMail({
      from: `"Metal X Website" <${process.env.SMTP_USER}>`,
      to: process.env.NEWSLETTER_EMAIL || process.env.SMTP_USER,
      subject: 'Yeni Newsletter Aboneliği',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #261dcf;">Yeni Newsletter Aboneliği</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>E-posta:</strong> ${email}</p>
            <p><strong>Abonelik Tarihi:</strong> ${new Date().toLocaleString('tr-TR')}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Bu mesaj Metal X Endüstriyel San. ve Tic. LTD. ŞTİ. web sitesinden gönderilmiştir.
          </p>
        </div>
      `,
      text: `
Yeni Newsletter Aboneliği

E-posta: ${email}
Abonelik Tarihi: ${new Date().toLocaleString('tr-TR')}
      `.trim(),
    });

    return NextResponse.json(
      { message: 'Başarıyla abone oldunuz!', messageId: info.messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter form error:', error);
    return NextResponse.json(
      { error: 'Bir hata oluştu. Lütfen tekrar deneyin.' },
      { status: 500 }
    );
  }
}
