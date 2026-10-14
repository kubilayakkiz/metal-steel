import { NextRequest, NextResponse } from 'next/server';
import { FORM_INBOX_EMAIL } from '@/lib/contact-departments';
import { createMailTransporter, getMailFromAddress, logMailError, getMailErrorPayload } from '@/lib/mailer';

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
    const transporter = createMailTransporter();

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
      from: getMailFromAddress(),
      to: FORM_INBOX_EMAIL,
      replyTo: email,
      subject: `Teklif Talebi: ${productType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3d4f5f;">Yeni Teklif Talebi</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #3d4f5f; margin-top: 0;">Kişisel Bilgiler</h3>
            <p><strong>Ad Soyad:</strong> ${name}</p>
            ${company ? `<p><strong>Firma/Şirket:</strong> ${company}</p>` : ''}
            <p><strong>E-posta:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone}</p>
            
            <h3 style="color: #3d4f5f; margin-top: 20px;">Ürün/Hizmet Bilgileri</h3>
            <p><strong>Ürün/Hizmet Türü:</strong> ${productType}</p>
            ${quantity ? `<p><strong>Miktar/Tutar:</strong> ${quantity}</p>` : ''}
            ${deliveryAddress ? `<p><strong>Teslimat Adresi:</strong><br>${deliveryAddress.replace(/\n/g, '<br>')}</p>` : ''}
            
            ${message ? `
              <h3 style="color: #3d4f5f; margin-top: 20px;">Ek Bilgiler</h3>
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
    logMailError('Quote form error', error);
    return NextResponse.json(getMailErrorPayload(error), { status: 500 });
  }
}
