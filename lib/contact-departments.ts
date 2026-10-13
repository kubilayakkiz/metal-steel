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

const DEPARTMENT_BY_SUBJECT: Record<string, string> = {
  corporate: 'info@metalxsteel.com.tr',
  sales: 'sales@metalxsteel.com.tr',
  export: 'export@metalxsteel.com.tr',
  import: 'import@metalxsteel.com.tr',
};

const SUBJECT_LABELS: Record<string, string> = {
  corporate: 'Genel İletişim',
  sales: 'Yurt İçi Satış',
  export: 'İhracat / Yurt Dışı Satış',
  import: 'İthalat / Yurt Dışı Satın Alma',
  quote: 'Teklif Talebi',
  other: 'Diğer',
};

export function getEmailForSubject(subject: string): string {
  return DEPARTMENT_BY_SUBJECT[subject] || 'info@metalxsteel.com.tr';
}

export function getSubjectLabel(subject: string): string {
  return SUBJECT_LABELS[subject] || subject;
}
