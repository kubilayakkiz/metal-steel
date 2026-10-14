'use client';

import { useTranslations } from '@/lib/i18n/hooks';
import { getLegalDocument, type LegalDocumentId } from '@/lib/legalDocuments';

interface LegalPageProps {
  documentId: LegalDocumentId;
}

export default function LegalPage({ documentId }: LegalPageProps) {
  const { locale } = useTranslations();
  const doc = getLegalDocument(documentId, locale);

  return (
    <div className="w-full">
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#3d4f5f] to-[#1a1a5e] text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{doc.title}</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl">{doc.intro}</p>
        </div>
      </section>
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl space-y-10 text-gray-700">
          {doc.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-2xl font-bold text-[#3d4f5f] mb-4">{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 48)} className="mb-3 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          ))}
          <p className="text-sm text-gray-500 pt-6 border-t">
            Metal X Endüstriyel San. ve Tic. LTD. ŞTİ. · 2026
          </p>
        </div>
      </section>
    </div>
  );
}
