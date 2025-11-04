'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: API endpoint'e form verilerini gönder
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#261dcf] to-[#1a1a5e] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            İletişim
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Size en uygun çözümü sunmak için buradayız. İletişim bilgilerinizi bırakın, en yakın temsilcimiz sizinle iletişime geçsin.
          </p>
        </div>
      </section>

      {/* İletişim Bilgileri ve Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sol Taraf - İletişim Bilgileri */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8">
                İletişim Bilgileri
              </h2>
              
              <div className="space-y-8">
                {/* Telefon */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Telefon</h3>
                    <a href="tel:+902123456789" className="text-[#261dcf] hover:underline block">
                      +90 (212) 345 67 89
                    </a>
                    <a href="tel:+902123456790" className="text-[#261dcf] hover:underline block">
                      +90 (212) 345 67 90
                    </a>
                  </div>
                </div>

                {/* E-posta */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">E-posta</h3>
                    <a href="mailto:info@metalxsteel.com" className="text-[#261dcf] hover:underline block break-all">
                      info@metalxsteel.com
                    </a>
                    <a href="mailto:satis@metalxsteel.com" className="text-[#261dcf] hover:underline block break-all">
                      satis@metalxsteel.com
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Sağ Taraf - İletişim Formu */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8">
                Bize Ulaşın
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Ad Soyad */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Ad Soyad <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      E-posta <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Telefon */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefon <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none"
                      placeholder="0 (5XX) XXX XX XX"
                    />
                  </div>

                  {/* Şirket */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Şirket (Opsiyonel)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none"
                      placeholder="Şirket Adı"
                    />
                  </div>
                </div>

                {/* Konu */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Konu <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none bg-white"
                  >
                    <option value="">Konu Seçiniz</option>
                    <option value="teklif">Teklif Talebi</option>
                    <option value="bilgi">Genel Bilgi</option>
                    <option value="urun">Ürün Hakkında</option>
                    <option value="hizmet">Hizmet Hakkında</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                {/* Mesaj */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mesajınız <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Mesajınızı buraya yazabilirsiniz..."
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-4 bg-[#261dcf] text-white font-bold rounded-lg transition-all ${
                      isSubmitting
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-[#1a16a8] hover:shadow-lg transform hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? 'Gönderiliyor...' : 'MESAJI GÖNDER'}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                    Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                    Bir hata oluştu. Lütfen tekrar deneyin veya bizimle doğrudan iletişime geçin.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

