import nodemailer from 'nodemailer';
import { FORM_INBOX_EMAIL } from '@/lib/contact-departments';

export function createMailTransporter() {
  const port = parseInt(process.env.SMTP_PORT || '587', 10);

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.office365.com',
    port,
    secure: port === 465,
    requireTLS: port === 587,
    auth: {
      user: process.env.SMTP_USER || FORM_INBOX_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
}

export function getMailFromAddress() {
  const user = process.env.SMTP_USER || FORM_INBOX_EMAIL;
  return `"Metal X Website" <${user}>`;
}
