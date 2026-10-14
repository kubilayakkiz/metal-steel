export type LegalDocumentId = 'kvkk' | 'cerez' | 'bilgi';

export interface LegalDocument {
  title: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
}

const tr: Record<LegalDocumentId, LegalDocument> = {
  kvkk: {
    title: 'KVKK Aydınlatma Metni',
    intro:
      '6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca, web sitemiz ve iletişim formlarımız üzerinden toplanan kişisel verilerin işlenmesine ilişkin bilgilendirme.',
    sections: [
      {
        heading: 'Veri sorumlusu',
        paragraphs: [
          'Veri sorumlusu: Metal X Endüstriyel San. ve Tic. LTD. ŞTİ. İletişim: info@metalxsteel.com.tr · +90 (212) 345 67 89.',
        ],
      },
      {
        heading: 'İşlenen veriler ve amaç',
        paragraphs: [
          'Ad soyad, telefon, e-posta, şirket unvanı, teslimat adresi ve mesaj içeriği; teklif, iletişim, bülten ve iş başvurusu süreçlerinin yürütülmesi, yasal yükümlülüklerin yerine getirilmesi ve ticari iletişimin sağlanması amacıyla işlenir.',
          'İş başvurusunda özgeçmiş ve eğitim bilgileri yalnızca aday değerlendirme süreci için kullanılır.',
        ],
      },
      {
        heading: 'Hukuki sebep ve aktarım',
        paragraphs: [
          'Veriler KVKK m.5 kapsamında açık rıza, sözleşmenin kurulması/ifası ve meşru menfaat hukuki sebeplerine dayanarak işlenir. Hizmet alınan e-posta ve barındırma altyapısı sağlayıcılarına, yurt içinde ve gerekli hallerde yurt dışında aktarılabilir.',
        ],
      },
      {
        heading: 'Haklarınız',
        paragraphs: [
          'KVKK m.11 uyarınca verilerinizin işlenip işlenmediğini öğrenme, düzeltme, silme, aktarıldığı üçüncü kişileri bilme ve itiraz etme haklarına sahipsiniz. Taleplerinizi info@metalxsteel.com.tr adresine iletebilirsiniz.',
        ],
      },
    ],
  },
  cerez: {
    title: 'Çerez Politikası',
    intro: 'Bu site, çalışması için zorunlu çerezler ve site deneyimini iyileştirmek için isteğe bağlı çerezler kullanabilir.',
    sections: [
      {
        heading: 'Çerez nedir?',
        paragraphs: [
          'Çerezler, tarayıcınız aracılığıyla cihazınızda saklanan küçük metin dosyalarıdır. Oturumun sürdürülmesi, dil tercihi ve güvenlik için kullanılır.',
        ],
      },
      {
        heading: 'Kullandığımız çerez türleri',
        paragraphs: [
          'Zorunlu çerezler: Sitenin açılması, formların gönderilmesi ve güvenlik için gereklidir.',
          'İşlevsel çerezler: Dil seçimi gibi tercihlerinizi hatırlamak için kullanılabilir.',
          'Analitik çerezler: Trafik ve sayfa kullanımını anonim olarak ölçmek için kullanılabilir. Bunları tarayıcı ayarlarınızdan reddedebilirsiniz.',
        ],
      },
      {
        heading: 'Yönetim',
        paragraphs: [
          'Tarayıcınızın ayarlarından çerezleri silebilir veya engelleyebilirsiniz. Zorunlu çerezler engellenirse bazı formlar çalışmayabilir.',
          'Sorularınız için info@metalxsteel.com.tr adresinden bize ulaşabilirsiniz.',
        ],
      },
    ],
  },
  bilgi: {
    title: 'Bilgi Toplumu Hizmetleri',
    intro: '6563 sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun kapsamında ticari kimlik bilgilerimiz.',
    sections: [
      {
        heading: 'Ticari unvan',
        paragraphs: [
          'Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
          'Faaliyet: Yassı çelik, boru-profil ve hadde ürünlerinin tedariki; çelik servis ve müşteri teknik hizmetleri.',
        ],
      },
      {
        heading: 'İletişim',
        paragraphs: [
          'E-posta: info@metalxsteel.com.tr',
          'Yurt içi satış: sales@metalxsteel.com.tr · İhracat: export@metalxsteel.com.tr · İthalat: import@metalxsteel.com.tr',
          'Telefon: +90 (212) 345 67 89',
        ],
      },
      {
        heading: 'Ticaret sicili sorgusu',
        paragraphs: [
          'Şirket unvanı, sicil ve MERSİS kayıtları T.C. Ticaret Bakanlığı MERSİS sistemi üzerinden sorgulanabilir.',
          'MERSİS: https://www.mersis.gtb.gov.tr',
        ],
      },
    ],
  },
};

const en: Record<LegalDocumentId, LegalDocument> = {
  kvkk: {
    title: 'Privacy Notice',
    intro:
      'This notice explains how Metal X processes personal data collected through this website and our contact, quote, newsletter and career forms.',
    sections: [
      {
        heading: 'Data controller',
        paragraphs: [
          'Controller: Metal X Endüstriyel San. ve Tic. LTD. ŞTİ. Contact: info@metalxsteel.com.tr · +90 (212) 345 67 89.',
        ],
      },
      {
        heading: 'Data and purposes',
        paragraphs: [
          'Name, phone, email, company name, delivery address and message content are processed to handle enquiries, quotations, newsletters, job applications, legal obligations and business communications.',
          'CVs and education details submitted with applications are used only for candidate evaluation.',
        ],
      },
      {
        heading: 'Legal basis and transfers',
        paragraphs: [
          'Processing is based on consent, performance of a contract and legitimate interests. Data may be transferred to email and hosting providers in Turkey and, where required, abroad.',
        ],
      },
      {
        heading: 'Your rights',
        paragraphs: [
          'You may request access, correction, deletion and information about third-party recipients. Please write to info@metalxsteel.com.tr.',
        ],
      },
    ],
  },
  cerez: {
    title: 'Cookie Policy',
    intro: 'This website uses essential cookies to operate and may use optional cookies to improve your experience.',
    sections: [
      {
        heading: 'What are cookies?',
        paragraphs: [
          'Cookies are small text files stored on your device. They help maintain sessions, language preference and security.',
        ],
      },
      {
        heading: 'Cookie types',
        paragraphs: [
          'Essential cookies are required for the site and forms to work.',
          'Functional cookies may remember preferences such as language.',
          'Analytics cookies may measure anonymous traffic. You can refuse them in your browser settings.',
        ],
      },
      {
        heading: 'Management',
        paragraphs: [
          'You can delete or block cookies in your browser. Blocking essential cookies may prevent some forms from working.',
          'Questions: info@metalxsteel.com.tr',
        ],
      },
    ],
  },
  bilgi: {
    title: 'Information Society Services',
    intro: 'Commercial identity information of Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
    sections: [
      {
        heading: 'Legal name',
        paragraphs: [
          'Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
          'Activity: supply of flat steel, pipe/profile and rolled products; steel service and customer technical services.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [
          'Email: info@metalxsteel.com.tr',
          'Domestic sales: sales@metalxsteel.com.tr · Export: export@metalxsteel.com.tr · Import: import@metalxsteel.com.tr',
          'Phone: +90 (212) 345 67 89',
        ],
      },
      {
        heading: 'Trade registry',
        paragraphs: [
          'Company title, registry and MERSIS records can be queried via the Republic of Türkiye Ministry of Trade MERSIS system.',
          'MERSIS: https://www.mersis.gtb.gov.tr',
        ],
      },
    ],
  },
};

export function getLegalDocument(id: LegalDocumentId, locale: string): LegalDocument {
  return locale === 'tr' ? tr[id] : en[id];
}
