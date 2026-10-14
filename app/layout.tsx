import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import {
  COMPANY_BRAND,
  COMPANY_NAME,
  COMPANY_PHONE_TEL,
  FORM_INBOX_EMAIL,
  SITE_URL,
} from "@/lib/contact-departments";

const defaultTitle = `${COMPANY_BRAND} | Yassı Çelik Tedarik`;
const defaultDescription =
  "Metal X Endüstriyel San. ve Tic. LTD. ŞTİ. — yassı çelik, galvaniz, Magnelis ve çelik servis hizmetleri.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: defaultTitle,
  description: defaultDescription,
  applicationName: COMPANY_BRAND,
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: COMPANY_BRAND,
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  alternates: {
    canonical: "/",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_NAME,
  alternateName: COMPANY_BRAND,
  url: SITE_URL,
  logo: `${SITE_URL}/LogoMetalSteelWhite.png`,
  telephone: COMPANY_PHONE_TEL,
  email: FORM_INBOX_EMAIL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingButton />
        <WhatsAppButton />
        <ScrollToTopButton />
      </body>
    </html>
  );
}

