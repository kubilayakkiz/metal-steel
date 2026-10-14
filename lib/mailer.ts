import nodemailer from 'nodemailer';
import { FORM_INBOX_EMAIL } from '@/lib/contact-departments';

const MAIL_DOMAIN = 'metalxsteel.com.tr';

function normalizeMailbox(value?: string | null): string {
  const raw = (value || '').trim();
  if (!raw) return FORM_INBOX_EMAIL;
  if (raw.endsWith('@')) return `${raw}${MAIL_DOMAIN}`;
  if (!raw.includes('@')) return `${raw}@${MAIL_DOMAIN}`;
  return raw;
}

function getSmtpUser() {
  return normalizeMailbox(process.env.SMTP_USER);
}

function getSmtpPassword() {
  return (process.env.SMTP_PASSWORD || '').trim().replace(/^["']|["']$/g, '');
}

export function createMailTransporter() {
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

export function getMailFromAddress() {
  return `"Metal X Website" <${getSmtpUser()}>`;
}

export function logMailError(context: string, error: unknown) {
  const err = error as { message?: string; code?: string; response?: string; command?: string };
  console.error(`[${context}]`, {
    message: err?.message,
    code: err?.code,
    command: err?.command,
    response: err?.response,
    host: 'smtp.office365.com',
    port: 587,
    user: getSmtpUser(),
    hasPassword: Boolean(getSmtpPassword()),
  });
}

export function getMailErrorPayload(error: unknown) {
  const err = error as { message?: string; response?: string };
  const detail = [err?.message, err?.response].filter(Boolean).join(' — ');
  const text = detail.toLowerCase();

  if (text.includes('smtp_password')) {
    return {
      error: 'SMTP_PASSWORD tanımlı değil. Hostinger ortam değişkenlerini kaydedip siteyi yeniden deploy edin.',
      detail,
    };
  }

  if (
    text.includes('535') ||
    text.includes('5.7.139') ||
    text.includes('5.7.57') ||
    text.includes('authentication unsuccessful') ||
    text.includes('invalid login') ||
    text.includes('smtpclientauthentication')
  ) {
    return {
      error:
        'Office 365 SMTP girişi reddedildi. bulent@ hesabında Authenticated SMTP açık olmalı. MFA varsa uygulama şifresi kullanın.',
      detail,
    };
  }

  if (text.includes('etimedout') || text.includes('econnrefused') || text.includes('esocket')) {
    return {
      error: 'Office 365 SMTP sunucusuna bağlanılamadı (port 587).',
      detail,
    };
  }

  return {
    error: 'E-posta gönderilemedi. Office 365 SMTP ayarlarını kontrol edin.',
    detail,
  };
}
