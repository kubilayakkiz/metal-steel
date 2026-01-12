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
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const position = formData.get('position') as string;
    const experience = formData.get('experience') as string;
    const education = formData.get('education') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const resume = formData.get('resume') as File | null;

    // Validation
    if (!name || !email || !phone || !experience || !education || !coverLetter || !resume) {
      return NextResponse.json(
        { error: 'Tüm zorunlu alanları doldurunuz.' },
        { status: 400 }
      );
    }

    // SMTP transporter oluştur
    const transporter = createTransporter();

    // File attachment için buffer
    let attachments = [];
    if (resume && resume.size > 0) {
      const bytes = await resume.arrayBuffer();
      const buffer = Buffer.from(bytes);
      attachments.push({
        filename: resume.name,
        content: buffer,
      });
    }

    // Email gönder
    const info = await transporter.sendMail({
      from: `"Metal X Website" <${process.env.SMTP_USER}>`,
      to: process.env.APPLICATION_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `İş Başvurusu: ${position || 'Genel Başvuru'} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #261dcf;">Yeni İş Başvurusu</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #261dcf; margin-top: 0;">Kişisel Bilgiler</h3>
            <p><strong>Ad Soyad:</strong> ${name}</p>
            <p><strong>E-posta:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone}</p>
            <p><strong>Başvurulan Pozisyon:</strong> ${position || 'Genel Başvuru (Yetenek Havuzu)'}</p>
            
            <h3 style="color: #261dcf; margin-top: 20px;">Eğitim Bilgileri</h3>
            <p style="white-space: pre-wrap;">${education}</p>
            
            <h3 style="color: #261dcf; margin-top: 20px;">İş Deneyimi</h3>
            <p style="white-space: pre-wrap;">${experience}</p>
            
            <h3 style="color: #261dcf; margin-top: 20px;">Ön Yazı</h3>
            <p style="white-space: pre-wrap;">${coverLetter}</p>
            
            ${resume ? `<p style="margin-top: 20px;"><strong>Özgeçmiş Dosyası:</strong> ${resume.name} (${(resume.size / 1024).toFixed(2)} KB)</p>` : ''}
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Bu mesaj Metal X Endüstriyel San. ve Tic. LTD. ŞTİ. web sitesinden gönderilmiştir.
          </p>
        </div>
      `,
      text: `
Yeni İş Başvurusu

Kişisel Bilgiler:
Ad Soyad: ${name}
E-posta: ${email}
Telefon: ${phone}
Başvurulan Pozisyon: ${position || 'Genel Başvuru (Yetenek Havuzu)'}

Eğitim Bilgileri:
${education}

İş Deneyimi:
${experience}

Ön Yazı:
${coverLetter}
      `.trim(),
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    return NextResponse.json(
      { message: 'Başvurunuz başarıyla gönderildi!', messageId: info.messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error('Application form error:', error);
    return NextResponse.json(
      { error: 'Bir hata oluştu. Lütfen tekrar deneyin.' },
      { status: 500 }
    );
  }
}
