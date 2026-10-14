import { NextRequest, NextResponse } from 'next/server';
import { getSubjectLabel } from '@/lib/contact-departments';
import { sendFormMail, logMailError, getMailErrorPayload } from '@/lib/mailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Tüm zorunlu alanları doldurunuz.' },
        { status: 400 }
      );
    }

    const subjectLabel = getSubjectLabel(subject);

    await sendFormMail({
      replyTo: email,
      subject: `İletişim Formu: ${subjectLabel}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3d4f5f;">Yeni İletişim Formu Mesajı</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Ad Soyad:</strong> ${name}</p>
            <p><strong>E-posta:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone}</p>
            ${company ? `<p><strong>Şirket:</strong> ${company}</p>` : ''}
            <p><strong>Konu:</strong> ${subjectLabel}</p>
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
Konu: ${subjectLabel}

Mesaj:
${message}
      `.trim(),
    });

    return NextResponse.json(
      { message: 'Mesajınız başarıyla gönderildi!' },
      { status: 200 }
    );
  } catch (error) {
    logMailError('Contact form error', error);
    return NextResponse.json(getMailErrorPayload(error), { status: 500 });
  }
}
