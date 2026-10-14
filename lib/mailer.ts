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

function getSmtpHost() {
  const host = (process.env.SMTP_HOST || '').trim();
  if (!host || host.includes('hostinger')) {
    return 'smtp.office365.com';
  }
  return host;
}

function getSmtpPort(host: string) {
  const configured = parseInt(process.env.SMTP_PORT || '', 10);
  if (host.includes('office365') || host.includes('outlook')) {
    return 587;
  }
  if (!Number.isNaN(configured) && configured > 0) {
    return configured;
  }
  return 587;
}

export function createMailTransporter() {
  const user = getSmtpUser();
  const host = getSmtpHost();
  const port = getSmtpPort(host);

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    requireTLS: port === 587,
    auth: {
      user,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
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
    host: getSmtpHost(),
    port: getSmtpPort(getSmtpHost()),
    user: getSmtpUser(),
    hasPassword: Boolean(process.env.SMTP_PASSWORD),
  });
}
