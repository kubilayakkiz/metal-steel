'use client';

import { useState } from 'react';
import { useTranslations } from '@/lib/i18n/hooks';
import { getPathWithLocale } from '@/lib/i18n/translations';

export default function TeklifAlPageEN() {
  const { t, locale } = useTranslations();
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
            alt={t.getQuote.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#261dcf]/90 to-[#1a1a5e]/90"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            {t.getQuote.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            {t.getQuote.subtitle}
          </p>
        </div>
      </section>

      {/* Teklif Formu */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl md:text-3xl font-bold text-[#261dcf] mb-6 text-center">
                {t.getQuote.formTitle}
              </h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    ✓ {t.getQuote.success}
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-semibold">
                    ✗ {t.getQuote.error}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Kişisel Bilgiler */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#261dcf] mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t.getQuote.name} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none"
                        placeholder={t.getQuote.name}
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t.getQuote.company}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none"
                        placeholder={t.getQuote.company}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t.getQuote.phone} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none"
                        placeholder={t.getQuote.phone}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t.getQuote.email} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none"
                        placeholder={t.getQuote.email}
                      />
                    </div>
                  </div>
                </div>

                {/* Ürün/Hizmet Bilgileri */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#261dcf] mb-4">Product/Service Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="productType" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t.getQuote.productType} <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="productType"
                        name="productType"
                        required
                        value={formData.productType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none bg-white"
                      >
                        <option value="">Select</option>
                        <optgroup label={t.common.products}>
                          <option value="zam">{t.home.productsList.zam}</option>
                          <option value="sicak-haddelenmis-sac">{t.home.productsList.sicakHaddelenmisSac}</option>
                          <option value="galvanizli-sac">{t.home.productsList.galvanizliSac}</option>
                          <option value="boyali-sac">{t.home.productsList.boyaliSac}</option>
                          <option value="soguk-haddelenmis-sac">{t.home.productsList.sogukHaddelenmisSac}</option>
                          <option value="asitlenmis-sac">{t.home.productsList.asitlenmisSac}</option>
                          <option value="silisli-sac">{t.home.productsList.silisliSac}</option>
                          <option value="boru-ve-profil">{t.home.productsList.boruProfil}</option>
                          <option value="insaat-demiri">{t.home.productsList.insaatDemiri}</option>
                        </optgroup>
                        <optgroup label={t.common.services}>
                          <option value="celik-servis-hizmetleri">{t.home.servicesList.celikServis}</option>
                          <option value="musteri-teknik-hizmetleri">{t.home.servicesList.musteriTeknik}</option>
                        </optgroup>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t.getQuote.quantity}
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none"
                        placeholder="E.g: 100 tons, 500 m², etc."
                      />
                    </div>
                    <div>
                      <label htmlFor="deliveryAddress" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t.getQuote.deliveryAddress}
                      </label>
                      <textarea
                        id="deliveryAddress"
                        name="deliveryAddress"
                        rows={3}
                        value={formData.deliveryAddress}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none resize-none"
                        placeholder={t.getQuote.deliveryAddress}
                      />
                    </div>
                  </div>
                </div>

                {/* Ek Bilgiler */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#261dcf] mb-4">Additional Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t.getQuote.message}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none resize-none"
                        placeholder={t.getQuote.message}
                      />
                    </div>
                    <div>
                      <label htmlFor="file" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t.getQuote.fileUploadWithDesc || t.getQuote.fileUpload}
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          id="file"
                          name="file"
                          accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div className="flex items-center gap-3 border border-gray-300 rounded-lg bg-white p-3">
                          <button
                            type="button"
                            onClick={() => document.getElementById('file')?.click()}
                            className="px-4 py-2 bg-[#261dcf] text-white text-sm font-semibold rounded-lg hover:bg-[#1a16a8] transition-colors flex-shrink-0"
                          >
                            {t.getQuote.chooseFile || 'Choose File'}
                          </button>
                          <span className="text-sm text-gray-500 flex-1">
                            {formData.file ? formData.file.name : (t.getQuote.noFileChosen || 'No file chosen')}
                          </span>
                        </div>
                      </div>
                      {formData.file && (
                        <p className="mt-2 text-sm text-gray-600">
                          {t.getQuote.selectedFile || 'Selected file:'} {formData.file.name}
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
                    {isSubmitting ? t.getQuote.sending : t.getQuote.send}
                  </button>
                  <a
                    href={getPathWithLocale('/iletisim', locale)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-4 px-8 rounded-lg transition-colors text-center"
                  >
                    {t.common.contact}
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
                Why Work With Us?
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  As Metal X Endüstriyel San. ve Tic. LTD. ŞTİ., we offer our customers the highest quality products and services with years of experience in the steel sector. To prepare a special quote for you, just fill out the form above.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Quick Response</h3>
                      <p className="text-sm text-gray-600">We prepare a special quote for you within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Quality Products</h3>
                      <p className="text-sm text-gray-600">Quality guarantee in accordance with international standards</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Competitive Prices</h3>
                      <p className="text-sm text-gray-600">We are at your service with the best price guarantee</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Fast Delivery</h3>
                      <p className="text-sm text-gray-600">On-time and safe delivery guarantee</p>
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
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#261dcf]/80"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have Questions?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              If you prefer to contact us directly instead of filling out the quote form, click the button below.
            </p>
            <a href={getPathWithLocale('/iletisim', locale)} className="inline-block px-8 py-4 bg-white text-[#261dcf] font-bold rounded-lg hover:bg-gray-100 transition-colors">
              Go to Contact Page
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

