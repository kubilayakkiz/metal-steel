'use client';

import { useState } from 'react';

export default function FloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    productType: '',
    quantity: '',
    deliveryAddress: '',
    message: '',
    file: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        file: e.target.files[0],
      });
    }
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
        company: '',
        phone: '',
        email: '',
        productType: '',
        quantity: '',
        deliveryAddress: '',
        message: '',
        file: null,
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
      {/* Floating Button - Küçük ikon butonu, sağa bitişik */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 group">
        {/* Icon Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-b from-[#261dcf]/30 to-[#1a16a8]/30 hover:from-[#261dcf] hover:to-[#1a16a8] text-white/70 hover:text-white shadow-[0_4px_20px_rgba(38,29,207,0.2)] hover:shadow-[0_6px_30px_rgba(38,29,207,0.6)] transition-all duration-300 transform hover:translate-x-[-4px] group rounded-l-2xl border-l-2 border-white/10 hover:border-white/30 backdrop-blur-sm px-4 py-6 flex flex-col items-center gap-3"
          aria-label="Teklif Al"
        >
          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span 
            className="text-sm font-semibold"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            TEKLİF AL
          </span>
        </button>
      </div>

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
          <div className="relative h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 md:p-8 pb-4 border-b border-gray-200 flex-shrink-0">
            <h2 className="text-xl md:text-2xl font-bold text-[#261dcf]">
              Teklif Al
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Kapat"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Form Container - Scrollable */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 pt-4">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {submitStatus === 'success' && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-semibold text-sm">
                  ✓ Teklif talebiniz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-semibold text-sm">
                  ✗ Bir hata oluştu. Lütfen tekrar deneyin veya bizimle iletişime geçin.
                </p>
              </div>
            )}

            {/* Kişisel Bilgiler */}
            <div className="bg-gray-50 p-3 rounded-lg">
              <h3 className="text-base font-bold text-[#261dcf] mb-2">Kişisel Bilgiler</h3>
              <div className="grid grid-cols-1 gap-2">
                <div>
                  <label htmlFor="teklif-name" className="block text-xs font-semibold text-gray-700 mb-1">
                    Ad Soyad <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="teklif-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none"
                    placeholder="Adınız ve Soyadınız"
                  />
                </div>
                <div>
                  <label htmlFor="teklif-company" className="block text-xs font-semibold text-gray-700 mb-1">
                    Firma/Şirket Adı
                  </label>
                  <input
                    type="text"
                    id="teklif-company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none"
                    placeholder="Firma veya Şirket Adı"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label htmlFor="teklif-phone" className="block text-xs font-semibold text-gray-700 mb-1">
                      Telefon <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="teklif-phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none"
                      placeholder="0 (5XX) XXX XX XX"
                    />
                  </div>
                  <div>
                    <label htmlFor="teklif-email" className="block text-xs font-semibold text-gray-700 mb-1">
                      E-posta <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="teklif-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Ürün/Hizmet Bilgileri */}
            <div className="bg-gray-50 p-3 rounded-lg">
              <h3 className="text-base font-bold text-[#261dcf] mb-2">Ürün/Hizmet Bilgileri</h3>
              <div className="space-y-2">
                <div>
                  <label htmlFor="teklif-productType" className="block text-xs font-semibold text-gray-700 mb-1">
                    Ürün/Hizmet Türü <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="teklif-productType"
                    name="productType"
                    required
                    value={formData.productType}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none bg-white"
                  >
                    <option value="">Seçiniz</option>
                    <optgroup label="Ürünler">
                      <option value="zam">ZAM (Min 25 Yıl Yüksek Korozyon Dayanımı)</option>
                      <option value="sicak-haddelenmis-sac">Sıcak Haddelenmiş Sac</option>
                      <option value="galvanizli-sac">Galvanizli Sac</option>
                      <option value="boyali-sac">Boyalı Sac</option>
                      <option value="soguk-haddelenmis-sac">Soğuk Haddelenmiş Sac</option>
                      <option value="asitlenmis-sac">Asitlenmiş Sac</option>
                      <option value="silisli-sac">Silisli Sac</option>
                      <option value="boru-ve-profil">Boru ve Profil</option>
                      <option value="insaat-demiri">İnşaat Demiri</option>
                    </optgroup>
                    <optgroup label="Hizmetler">
                      <option value="celik-servis-hizmetleri">Çelik Servis Hizmetleri</option>
                      <option value="musteri-teknik-hizmetleri">Müşteri Teknik Hizmetleri</option>
                    </optgroup>
                  </select>
                </div>
                <div>
                  <label htmlFor="teklif-quantity" className="block text-xs font-semibold text-gray-700 mb-1">
                    Miktar/Tutar
                  </label>
                  <input
                    type="text"
                    id="teklif-quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none"
                    placeholder="Örn: 100 ton, 500 m², vb."
                  />
                </div>
                <div>
                  <label htmlFor="teklif-deliveryAddress" className="block text-xs font-semibold text-gray-700 mb-1">
                    Teslimat Adresi
                  </label>
                  <textarea
                    id="teklif-deliveryAddress"
                    name="deliveryAddress"
                    rows={2}
                    value={formData.deliveryAddress}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Teslimat yapılacak adres bilgileri"
                  />
                </div>
              </div>
            </div>

            {/* Ek Bilgiler */}
            <div className="bg-gray-50 p-3 rounded-lg">
              <h3 className="text-base font-bold text-[#261dcf] mb-2">Ek Bilgiler</h3>
              <div className="space-y-2">
                <div>
                  <label htmlFor="teklif-message" className="block text-xs font-semibold text-gray-700 mb-1">
                    Mesaj/Notlar
                  </label>
                  <textarea
                    id="teklif-message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Eklemek istediğiniz özel notlar, teknik şartlar, kalite gereksinimleri vb."
                  />
                </div>
                <div>
                  <label htmlFor="teklif-file" className="block text-xs font-semibold text-gray-700 mb-1">
                    Dosya Ekle
                  </label>
                  <input
                    type="file"
                    id="teklif-file"
                    name="file"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none bg-white"
                  />
                  {formData.file && (
                    <p className="mt-1 text-xs text-gray-600">
                      Seçilen: {formData.file.name}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#261dcf] hover:bg-[#1a16a8] text-white font-bold py-2.5 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Teklif İste'}
              </button>
              <a
                href="/iletisim"
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2.5 px-6 rounded-lg transition-colors text-center text-sm"
              >
                İletişime Geç
              </a>
            </div>
          </form>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

