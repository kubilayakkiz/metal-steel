import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export const metadata: Metadata = {
  title: "Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.",
  description: "Metal X Endüstriyel San. ve Tic. LTD. ŞTİ. - Kaliteli Çelik Üretimi ve Hizmetleri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body suppressHydrationWarning>
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

