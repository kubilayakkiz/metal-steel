# Metal X Endustriyel San. ve Tic. LTD. STI.

Modern ve profesyonel kurumsal web sitesi - Next.js ile geliştirilmiş çelik ürünleri ve hizmetleri platformu.

## 🚀 Teknolojiler

- **Next.js 15** - React framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Proxima Nova** - Custom font family

## 📋 Özellikler

- ✅ Responsive tasarım (mobil, tablet, desktop)
- ✅ SEO optimizasyonu
- ✅ Modern slider ve animasyonlar
- ✅ Flip card efektleri
- ✅ WhatsApp iletişim butonu
- ✅ Teklif alma formu (slide-out panel)
- ✅ Newsletter abonelik sistemi
- ✅ Çoklu sayfa yapısı:
  - Ürün sayfaları (9 ürün)
  - Hizmet sayfaları (2 hizmet)
  - Sektör sayfaları (6 sektör)
  - Kurumsal sayfalar (Hakkımızda, Politikalarımız, Kurumsal Kimlik)

## 🏗️ Sayfa Yapısı

```
/
├── app/
│   ├── urunler/          # Ürün sayfaları
│   ├── hizmetler/        # Hizmet sayfaları
│   ├── sektorler/        # Sektör sayfaları
│   ├── kurumsal/         # Kurumsal sayfalar
│   └── iletisim/         # İletişim sayfası
├── components/
│   ├── Header.tsx        # Ana navigasyon
│   ├── Footer.tsx         # Footer
│   ├── Slider.tsx         # Ana slider
│   ├── FloatingButton.tsx # Teklif al butonu
│   └── WhatsAppButton.tsx # WhatsApp iletişim
└── public/               # Statik dosyalar
```

## 🚀 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Environment değişkenlerini ayarla
# .env.local dosyası oluşturun ve aşağıdaki değişkenleri ekleyin:
# RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
# CONTACT_EMAIL=info@metalxsteel.com.tr
# QUOTE_EMAIL=satis@metalxsteel.com.tr
# NEWSLETTER_EMAIL=info@metalxsteel.com.tr
# APPLICATION_EMAIL=ik@metalxsteel.com.tr

# Development server'ı başlat
npm run dev

# Production build
npm run build
npm start
```

## 📧 Form Yapılandırması

Formların çalışması için Hostinger SMTP ayarları gereklidir:

1. Hostinger kontrol panelinden email hesabınızın bilgilerini alın
2. `.env.local` dosyası oluşturun ve aşağıdaki değişkenleri ekleyin:

```env
# SMTP Ayarları (Hostinger)
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=info@metalxsteel.com.tr
SMTP_PASSWORD=your_email_password

# Email adresleri (form gönderimlerinin gideceği adresler)
CONTACT_EMAIL=info@metalxsteel.com.tr
QUOTE_EMAIL=satis@metalxsteel.com.tr
NEWSLETTER_EMAIL=info@metalxsteel.com.tr
APPLICATION_EMAIL=ik@metalxsteel.com.tr
```

**Not:** 
- SMTP_PORT: 465 (SSL) veya 587 (TLS) kullanılabilir
- SMTP_USER: Hostinger'da oluşturduğunuz email adresi
- SMTP_PASSWORD: Email hesabının şifresi

## 📦 Deployment

Bu proje Vercel'de host edilmektedir. Her commit otomatik olarak deploy edilir.

## 📝 Lisans

© 2020 Metal X Endustriyel San. ve Tic. LTD. STI.

