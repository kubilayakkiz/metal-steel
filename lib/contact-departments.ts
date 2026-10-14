export const DEPARTMENT_EMAILS = [
  {
    id: 'corporate' as const,
    email: 'info@metalxsteel.com.tr',
  },
  {
    id: 'sales' as const,
    email: 'sales@metalxsteel.com.tr',
  },
  {
    id: 'export' as const,
    email: 'export@metalxsteel.com.tr',
  },
  {
    id: 'import' as const,
    email: 'import@metalxsteel.com.tr',
  },
];

export type DepartmentId = (typeof DEPARTMENT_EMAILS)[number]['id'];

/** Tüm form gönderimleri bu Office 365 kutusuna düşer. */
export const FORM_INBOX_EMAIL = 'info@metalxsteel.com.tr';

const SUBJECT_LABELS: Record<string, string> = {
  corporate: 'Genel İletişim',
  sales: 'Yurt İçi Satış',
  export: 'İhracat / Yurt Dışı Satış',
  import: 'İthalat / Yurt Dışı Satın Alma',
  quote: 'Teklif Talebi',
  other: 'Diğer',
};

export function getEmailForSubject(): string {
  return FORM_INBOX_EMAIL;
}

export function getSubjectLabel(subject: string): string {
  return SUBJECT_LABELS[subject] || subject;
}
