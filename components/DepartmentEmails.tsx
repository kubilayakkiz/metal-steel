'use client';

import { useTranslations } from '@/lib/i18n/hooks';
import { DEPARTMENT_EMAILS } from '@/lib/contact-departments';

export default function DepartmentEmails() {
  const { t } = useTranslations();
  const labels = t.contact.departments;

  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-[#3d4f5f]/10 rounded-full flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-[#3d4f5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="font-bold text-gray-900 text-lg">{t.contact.departmentsTitle}</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {DEPARTMENT_EMAILS.map((dept) => (
          <a
            key={dept.id}
            href={`mailto:${dept.email}`}
            className="block rounded-lg border border-gray-200 bg-gray-50/70 px-4 py-3 hover:border-[#3d4f5f]/40 hover:bg-[#3d4f5f]/5 transition-colors"
          >
            <h4 className="text-sm font-bold text-gray-900 mb-1">{labels[dept.id]}</h4>
            <span className="text-[#3d4f5f] text-sm break-all">{dept.email}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
