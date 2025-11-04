'use client';

import { useState } from 'react';

export default function BasvuruPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    education: '',
    coverLetter: '',
    resume: null as File | null,
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
        resume: e.target.files[0],
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
        email: '',
        phone: '',
        position: '',
        experience: '',
        education: '',
        coverLetter: '',
        resume: null,
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
            src="https://placehold.co/1200x400/261dcf/ffffff?text=Basvuru" 
            alt="Başvuru"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#261dcf]/90 to-[#1a1a5e]/90"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            Başvuru Formu
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Kariyerinize yeni bir yön verin, bizimle çalışın
          </p>
        </div>
      </section>

      {/* Başvuru Formu */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#261dcf] mb-4">
                İş Başvuru Formu
              </h2>
              <p className="text-gray-700 mb-6">
                Aşağıdaki formu doldurarak başvurunuzu yapabilirsiniz. Başvurularınız yetenek havuzumuza eklenir ve 
                uygun pozisyonlar için değerlendirilir. Pozisyon belirtmek zorunlu değildir, genel başvuru da yapabilirsiniz.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Kişisel Bilgiler */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#261dcf] mb-4">Kişisel Bilgiler</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <label htmlFor="position" className="block text-sm font-semibold text-gray-700 mb-2">
                      Başvurulan Pozisyon <span className="text-gray-500 text-xs">(Opsiyonel)</span>
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none bg-white"
                    >
                      <option value="">Genel Başvuru (Yetenek Havuzu)</option>
                      <option value="uretim-muhendisi">Üretim Mühendisi</option>
                      <option value="satis-temsilcisi">Satış Temsilcisi</option>
                      <option value="kalite-kontrol">Kalite Kontrol Uzmanı</option>
                      <option value="muhendis">Mühendis</option>
                      <option value="teknisyen">Teknisyen</option>
                      <option value="yonetici">Yönetici</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Eğitim ve Deneyim */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#261dcf] mb-4">Eğitim ve Deneyim</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="education" className="block text-sm font-semibold text-gray-700 mb-2">
                      Eğitim Bilgileri <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="education"
                      name="education"
                      required
                      rows={4}
                      value={formData.education}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none resize-none"
                      placeholder="Mezun olduğunuz okul, bölüm, mezuniyet yılı ve varsa lisansüstü eğitim bilgileriniz..."
                    />
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                      İş Deneyimi <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="experience"
                      name="experience"
                      required
                      rows={4}
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none resize-none"
                      placeholder="Önceki iş deneyimleriniz, görevleriniz ve sorumluluklarınız..."
                    />
                  </div>
                </div>
              </div>

              {/* Ön Yazı */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#261dcf] mb-4">Ön Yazı</h3>
                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-semibold text-gray-700 mb-2">
                    Neden Bizimle Çalışmak İstiyorsunuz? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    required
                    rows={6}
                    value={formData.coverLetter}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Kendinizi tanıtın ve neden bizimle çalışmak istediğinizi açıklayın..."
                  />
                </div>
              </div>

              {/* CV Yükleme */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#261dcf] mb-4">Özgeçmiş (CV)</h3>
                <div>
                  <label htmlFor="resume" className="block text-sm font-semibold text-gray-700 mb-2">
                    Özgeçmiş Dosyası <span className="text-red-500">*</span>
                    <span className="text-gray-500 text-xs ml-2">(PDF, DOC, DOCX - Max 5MB)</span>
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#261dcf] file:text-white hover:file:bg-[#1a16a8]"
                  />
                  {formData.resume && (
                    <p className="mt-2 text-sm text-gray-600">
                      Seçili dosya: {formData.resume.name}
                    </p>
                  )}
                </div>
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
                  {isSubmitting ? 'Gönderiliyor...' : 'BAŞVURUYU GÖNDER'}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                  ✓ Başvurunuz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
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
      </section>
    </div>
  );
}

