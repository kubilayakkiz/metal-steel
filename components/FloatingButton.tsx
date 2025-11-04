'use client';

import { useState } from 'react';

export default function FloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
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
        product: '',
        message: '',
      });
      setTimeout(() => {
        setIsOpen(false);
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Button - Sağa bitişik dikey, şık tasarım */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-gradient-to-b from-[#261dcf] to-[#1a16a8] hover:from-[#1a16a8] hover:to-[#261dcf] text-white font-bold shadow-[0_4px_20px_rgba(38,29,207,0.4)] hover:shadow-[0_6px_30px_rgba(38,29,207,0.6)] transition-all duration-300 transform hover:translate-x-[-4px] group px-4 py-12 rounded-l-2xl border-l-2 border-white/20 backdrop-blur-sm"
        aria-label="Teklif Al"
      >
        <div className="flex flex-col items-center justify-center gap-3 h-full">
          {/* Icon - Form/Quote icon */}
          <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          
          {/* Vertical Text - Tek satır halinde */}
          <div 
            className="flex items-center justify-center whitespace-nowrap"
            style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
          >
            <span className="text-sm md:text-base font-bold tracking-[0.15em] leading-none">TEKLİF AL</span>
          </div>
        </div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-out Panel */}
      <div
        className={`fixed right-0 top-0 h-full w-full md:w-1/2 shadow-2xl z-50 transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="relative h-full">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/bizimleiletisimegecin.jpg" 
              alt="Bizimle İletişime Geçin"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/95"></div>
          </div>
          
          {/* Content */}
          <div className="relative p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#261dcf]">
              Teklif Al
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Kapat"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="teklif-name" className="block text-sm font-semibold text-gray-700 mb-2">
                Ad Soyad <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="teklif-name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none"
                placeholder="Adınız Soyadınız"
              />
            </div>

            <div>
              <label htmlFor="teklif-email" className="block text-sm font-semibold text-gray-700 mb-2">
                E-posta <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="teklif-email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none"
                placeholder="ornek@email.com"
              />
            </div>

            <div>
              <label htmlFor="teklif-phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Telefon <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="teklif-phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none"
                placeholder="0 (5XX) XXX XX XX"
              />
            </div>

            <div>
              <label htmlFor="teklif-company" className="block text-sm font-semibold text-gray-700 mb-2">
                Şirket (Opsiyonel)
              </label>
              <input
                type="text"
                id="teklif-company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none"
                placeholder="Şirket Adı"
              />
            </div>

            <div>
              <label htmlFor="teklif-product" className="block text-sm font-semibold text-gray-700 mb-2">
                Ürün/Service <span className="text-red-500">*</span>
              </label>
              <select
                id="teklif-product"
                name="product"
                required
                value={formData.product}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none bg-white"
              >
                <option value="">Ürün/Hizmet Seçiniz</option>
                <option value="sicak-haddelenmis">Sıcak Haddelenmiş Asitlenmiş Sac</option>
                <option value="soguk-haddelenmis">Soğuk Haddelenmiş Sac</option>
                <option value="galvanizli">Galvanizli Sac</option>
                <option value="boyali">Boyalı Sac</option>
                <option value="celik-servis">Çelik Servis Hizmetleri</option>
                <option value="teknik-hizmet">Müşteri Teknik Hizmetleri</option>
                <option value="laboratuvar">Metal Steel Laboratuvarları</option>
                <option value="diger">Diğer</option>
              </select>
            </div>

            <div>
              <label htmlFor="teklif-message" className="block text-sm font-semibold text-gray-700 mb-2">
                Mesajınız (Opsiyonel)
              </label>
              <textarea
                id="teklif-message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none resize-none"
                placeholder="Ek bilgiler, notlar..."
              />
            </div>

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
                {isSubmitting ? 'Gönderiliyor...' : 'TEKLİF TALEBİ GÖNDER'}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                ✓ Teklif talebiniz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                Bir hata oluştu. Lütfen tekrar deneyin.
              </div>
            )}
          </form>
          </div>
        </div>
      </div>
    </>
  );
}

