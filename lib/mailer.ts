import nodemailer from 'nodemailer';
import { FORM_INBOX_EMAIL } from '@/lib/contact-departments';

const MAIL_DOMAIN = 'metalxsteel.com.tr';

export type FormMailAttachment = {
  filename: string;
  content: Buffer;
};

export type FormMailOptions = {
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
  attachments?: FormMailAttachment[];
};

function normalizeMailbox(value?: string | null): string {
  const raw = (value || '').trim();
  if (!raw) return FORM_INBOX_EMAIL;
  if (raw.endsWith('@')) return `${raw}${MAIL_DOMAIN}`;
  if (!raw.includes('@')) return `${raw}@${MAIL_DOMAIN}`;
  return raw;
}

function getSmtpUser() {
  return normalizeMailbox(process.env.SMTP_USER || process.env.GRAPH_SENDER || 'bulent@metalxsteel.com.tr');
}

function getSmtpPassword() {
  return (process.env.SMTP_PASSWORD || '').trim().replace(/^["']|["']$/g, '');
}

function hasGraphConfig() {
  return Boolean(
    process.env.MICROSOFT_TENANT_ID &&
      process.env.MICROSOFT_CLIENT_ID &&
      process.env.MICROSOFT_CLIENT_SECRET
  );
}

async function getGraphAccessToken() {
  const tenant = process.env.MICROSOFT_TENANT_ID;
  const clientId = process.env.MICROSOFT_CLIENT_ID;
  const clientSecret = process.env.MICROSOFT_CLIENT_SECRET;

  if (!tenant || !clientId || !clientSecret) {
    throw new Error('Microsoft Graph bilgileri eksik (TENANT_ID, CLIENT_ID, CLIENT_SECRET).');
  }

  const response = await fetch(`https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      scope: 'https://graph.microsoft.com/.default',
      grant_type: 'client_credentials',
    }),
  });

  const data = await response.json();
  if (!response.ok || !data.access_token) {
    throw new Error(data.error_description || data.error || 'Microsoft Graph token alınamadı.');
  }

  return data.access_token as string;
}

async function sendViaGraph(options: FormMailOptions) {
  const token = await getGraphAccessToken();
  const sender = getSmtpUser();
  const message: Record<string, unknown> = {
    subject: options.subject,
    body: {
      contentType: 'HTML',
      content: options.html,
    },
    toRecipients: [
      {
        emailAddress: { address: FORM_INBOX_EMAIL },
      },
    ],
  };

  if (options.replyTo) {
    message.replyTo = [{ emailAddress: { address: options.replyTo } }];
  }

  if (options.attachments?.length) {
    message.attachments = options.attachments.map((file) => ({
      '@odata.type': '#microsoft.graph.fileAttachment',
      name: file.filename,
      contentBytes: file.content.toString('base64'),
    }));
  }

  const response = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(sender)}/sendMail`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, saveToSentItems: true }),
    }
  );

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Microsoft Graph sendMail başarısız (${response.status}): ${errorBody}`);
  }

  return { messageId: 'graph' };
}

function createMailTransporter() {
  const user = getSmtpUser();
  const pass = getSmtpPassword();

  if (!pass) {
    throw new Error('SMTP_PASSWORD Hostinger ortam değişkenlerinde boş. Kaydedip siteyi yeniden deploy edin.');
  }

  return nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user,
      pass,
    },
    tls: {
      ciphers: 'TLSv1.2',
      minVersion: 'TLSv1.2',
    },
    connectionTimeout: 20000,
  });
}

async function sendViaSmtp(options: FormMailOptions) {
  const transporter = createMailTransporter();
  return transporter.sendMail({
    from: `"Metal X Website" <${getSmtpUser()}>`,
    to: FORM_INBOX_EMAIL,
    replyTo: options.replyTo,
    subject: options.subject,
    html: options.html,
    text: options.text,
    attachments: options.attachments,
  });
}

export async function sendFormMail(options: FormMailOptions) {
  if (hasGraphConfig()) {
    return sendViaGraph(options);
  }
  return sendViaSmtp(options);
}

export function logMailError(context: string, error: unknown) {
  const err = error as { message?: string; code?: string; response?: string; command?: string };
  console.error(`[${context}]`, {
    message: err?.message,
    code: err?.code,
    command: err?.command,
    response: err?.response,
    via: hasGraphConfig() ? 'graph' : 'smtp',
    user: getSmtpUser(),
    hasPassword: Boolean(getSmtpPassword()),
    hasGraph: hasGraphConfig(),
  });
}

export function getMailErrorPayload(error: unknown) {
  const err = error as { message?: string; response?: string };
  const detail = [err?.message, err?.response].filter(Boolean).join(' — ');
  const text = detail.toLowerCase();

  if (text.includes('graph')) {
    return {
      error:
        'Microsoft Graph ile gönderilemedi. Entra uygulamasında Mail.Send izni ve yönetici onayı olmalı.',
      detail,
    };
  }

  if (
    text.includes('535') ||
    text.includes('5.7.139') ||
    text.includes('5.7.57') ||
    text.includes('5.7.3') ||
    text.includes('authentication unsuccessful') ||
    text.includes('invalid login')
  ) {
    return {
      error:
        'Office 365 SMTP hâlâ kapalı (535). Uygulama şifresi yetmez: Security defaults temel kimliği engelliyor. Microsoft Graph bilgilerini Hostinger’a ekleyin veya Security defaults’u kapatın.',
      detail,
    };
  }

  return {
    error: 'E-posta gönderilemedi. Office 365 ayarlarını kontrol edin.',
    detail,
  };
}
