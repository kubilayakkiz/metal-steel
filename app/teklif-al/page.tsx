'use client';

import { useState } from 'react';

export default function TeklifAlPage() {
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
      await new Promise(resolve => setTimeout(resolve, 1500));
      
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
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden text-white">
        <div className="absolute inset-0">
          <img 
            src="/bizimleiletisimegecin.jpg" 
            alt="Teklif Al"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#261dcf]/90 to-[#1a1a5e]/90"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            Teklif Al
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Size özel çözümler ve en uygun fiyat teklifleri için detaylı bilgilerinizi paylaşın
          </p>
        </div>
      </section>

      {/* Teklif Formu */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl md:text-3xl font-bold text-[#261dcf] mb-6 text-center">
                Teklif İstek Formu
              </h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    ✓ Teklif talebiniz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-semibold">
                    ✗ Bir hata oluştu. Lütfen tekrar deneyin veya bizimle iletişime geçin.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Kişisel Bilgiler */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#261dcf] mb-4">Kişisel Bilgiler</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        placeholder="Adınız ve Soyadınız"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Firma/Şirket Adı
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none"
                        placeholder="Firma veya Şirket Adı"
                      />
                    </div>
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
                </div>

                {/* Ürün/Hizmet Bilgileri */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#261dcf] mb-4">Ürün/Hizmet Bilgileri</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="productType" className="block text-sm font-semibold text-gray-700 mb-2">
                        Ürün/Hizmet Türü <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="productType"
                        name="productType"
                        required
                        value={formData.productType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none bg-white"
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
                      <label htmlFor="quantity" className="block text-sm font-semibold text-gray-700 mb-2">
                        Miktar/Tutar
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none"
                        placeholder="Örn: 100 ton, 500 m², vb."
                      />
                    </div>
                    <div>
                      <label htmlFor="deliveryAddress" className="block text-sm font-semibold text-gray-700 mb-2">
                        Teslimat Adresi
                      </label>
                      <textarea
                        id="deliveryAddress"
                        name="deliveryAddress"
                        rows={3}
                        value={formData.deliveryAddress}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none resize-none"
                        placeholder="Teslimat yapılacak adres bilgileri"
                      />
                    </div>
                  </div>
                </div>

                {/* Ek Bilgiler */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#261dcf] mb-4">Ek Bilgiler</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Mesaj/Notlar
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none resize-none"
                        placeholder="Eklemek istediğiniz özel notlar, teknik şartlar, kalite gereksinimleri vb."
                      />
                    </div>
                    <div>
                      <label htmlFor="file" className="block text-sm font-semibold text-gray-700 mb-2">
                        Dosya Ekle (Teknik Çizim, Şartname, vb.)
                      </label>
                      <input
                        type="file"
                        id="file"
                        name="file"
                        accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none bg-white"
                      />
                      {formData.file && (
                        <p className="mt-2 text-sm text-gray-600">
                          Seçilen dosya: {formData.file.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-[#261dcf] hover:bg-[#1a16a8] text-white font-bold py-4 px-8 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Gönderiliyor...' : 'Teklif İste'}
                  </button>
                  <a
                    href="/iletisim"
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-4 px-8 rounded-lg transition-colors text-center"
                  >
                    İletişime Geç
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bilgi Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#261dcf] mb-4">
                Neden Bizimle Çalışmalısınız?
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Metal X Endüstriyel San. ve Tic. LTD. ŞTİ. olarak, çelik sektöründe yılların verdiği deneyimle 
                  müşterilerimize en kaliteli ürünleri ve hizmetleri sunuyoruz. Size özel teklif hazırlamak için 
                  yukarıdaki formu doldurmanız yeterli.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Hızlı Yanıt</h3>
                      <p className="text-sm text-gray-600">24 saat içinde size özel teklif hazırlıyoruz</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Kaliteli Ürünler</h3>
                      <p className="text-sm text-gray-600">Uluslararası standartlarda kalite garantisi</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Rekabetçi Fiyatlar</h3>
                      <p className="text-sm text-gray-600">En uygun fiyat garantisi ile hizmetinizdeyiz</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Hızlı Teslimat</h3>
                      <p className="text-sm text-gray-600">Zamanında ve güvenli teslimat garantisi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/bizimleiletisimegecin.jpg" 
            alt="Bizimle İletişime Geçin"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#261dcf]/80"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sorularınız mı var?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Teklif formunu doldurmak yerine doğrudan bizimle iletişime geçmek isterseniz, aşağıdaki butona tıklayın.
            </p>
            <a href="/iletisim" className="inline-block px-8 py-4 bg-white text-[#261dcf] font-bold rounded-lg hover:bg-gray-100 transition-colors">
              İletişim Sayfasına Git
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

