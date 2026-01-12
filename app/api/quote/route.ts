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
    const company = formData.get('company') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const productType = formData.get('productType') as string;
    const quantity = formData.get('quantity') as string;
    const deliveryAddress = formData.get('deliveryAddress') as string;
    const message = formData.get('message') as string;
    const file = formData.get('file') as File | null;

    // Validation
    if (!name || !email || !phone || !productType) {
      return NextResponse.json(
        { error: 'Tüm zorunlu alanları doldurunuz.' },
        { status: 400 }
      );
    }

    // SMTP transporter oluştur
    const transporter = createTransporter();

    // File attachment için buffer
    let attachments = [];
    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    // Email gönder
    const info = await transporter.sendMail({
      from: `"Metal X Website" <${process.env.SMTP_USER}>`,
      to: process.env.QUOTE_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `Teklif Talebi: ${productType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #261dcf;">Yeni Teklif Talebi</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #261dcf; margin-top: 0;">Kişisel Bilgiler</h3>
            <p><strong>Ad Soyad:</strong> ${name}</p>
            ${company ? `<p><strong>Firma/Şirket:</strong> ${company}</p>` : ''}
            <p><strong>E-posta:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone}</p>
            
            <h3 style="color: #261dcf; margin-top: 20px;">Ürün/Hizmet Bilgileri</h3>
            <p><strong>Ürün/Hizmet Türü:</strong> ${productType}</p>
            ${quantity ? `<p><strong>Miktar/Tutar:</strong> ${quantity}</p>` : ''}
            ${deliveryAddress ? `<p><strong>Teslimat Adresi:</strong><br>${deliveryAddress.replace(/\n/g, '<br>')}</p>` : ''}
            
            ${message ? `
              <h3 style="color: #261dcf; margin-top: 20px;">Ek Bilgiler</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            ` : ''}
            
            ${file ? `<p style="margin-top: 20px;"><strong>Ek Dosya:</strong> ${file.name} (${(file.size / 1024).toFixed(2)} KB)</p>` : ''}
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Bu mesaj Metal X Endüstriyel San. ve Tic. LTD. ŞTİ. web sitesinden gönderilmiştir.
          </p>
        </div>
      `,
      text: `
Yeni Teklif Talebi

Kişisel Bilgiler:
Ad Soyad: ${name}
${company ? `Firma/Şirket: ${company}` : ''}
E-posta: ${email}
Telefon: ${phone}

Ürün/Hizmet Bilgileri:
Ürün/Hizmet Türü: ${productType}
${quantity ? `Miktar/Tutar: ${quantity}` : ''}
${deliveryAddress ? `Teslimat Adresi: ${deliveryAddress}` : ''}

${message ? `Ek Bilgiler:\n${message}` : ''}
      `.trim(),
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    return NextResponse.json(
      { message: 'Teklif talebiniz başarıyla gönderildi!', messageId: info.messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error('Quote form error:', error);
    return NextResponse.json(
      { error: 'Bir hata oluştu. Lütfen tekrar deneyin.' },
      { status: 500 }
    );
  }
}
