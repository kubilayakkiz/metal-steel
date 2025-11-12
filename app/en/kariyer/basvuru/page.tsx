'use client';

import { useState } from 'react';
import { useTranslations } from '@/lib/i18n/hooks';
import { getPathWithLocale } from '@/lib/i18n/translations';

export default function BasvuruPage() {
  const { t, locale } = useTranslations();
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
            src="https://placehold.co/1200x400/261dcf/ffffff?text=Application" 
            alt={t.career.basvuru.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#261dcf]/90 to-[#1a1a5e]/90"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            {t.career.basvuru.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            {t.career.basvuru.subtitle}
          </p>
        </div>
      </section>

      {/* Başvuru Formu */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#261dcf] mb-4">
                {t.career.basvuru.formTitle}
              </h2>
              <p className="text-gray-700 mb-6">
                {t.career.basvuru.formDesc}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Kişisel Bilgiler */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#261dcf] mb-4">{t.career.basvuru.personalInfo}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.career.basvuru.name} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none"
                      placeholder={t.career.basvuru.name}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.career.basvuru.email} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.career.basvuru.phone} <span className="text-red-500">*</span>
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
                      {t.career.basvuru.position} <span className="text-gray-500 text-xs">{t.career.basvuru.optional}</span>
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none bg-white"
                    >
                      <option value="">{t.career.basvuru.generalApplication}</option>
                      <option value="uretim-muhendisi">{t.career.basvuru.productionEngineer}</option>
                      <option value="satis-temsilcisi">{t.career.basvuru.salesRepresentative}</option>
                      <option value="kalite-kontrol">{t.career.basvuru.qualityControl}</option>
                      <option value="muhendis">{t.career.basvuru.engineer}</option>
                      <option value="teknisyen">{t.career.basvuru.technician}</option>
                      <option value="yonetici">{t.career.basvuru.manager}</option>
                      <option value="diger">{t.career.basvuru.other}</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Eğitim ve Deneyim */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#261dcf] mb-4">{t.career.basvuru.educationExperience}</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="education" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.career.basvuru.educationInfo} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="education"
                      name="education"
                      required
                      rows={4}
                      value={formData.education}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none resize-none"
                      placeholder={t.career.basvuru.educationPlaceholder}
                    />
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.career.basvuru.workExperience} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="experience"
                      name="experience"
                      required
                      rows={4}
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none resize-none"
                      placeholder={t.career.basvuru.workExperiencePlaceholder}
                    />
                  </div>
                </div>
              </div>

              {/* Ön Yazı */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#261dcf] mb-4">{t.career.basvuru.coverLetter}</h3>
                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.career.basvuru.coverLetterQuestion} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    required
                    rows={6}
                    value={formData.coverLetter}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent transition-all outline-none resize-none"
                    placeholder={t.career.basvuru.coverLetterPlaceholder}
                  />
                </div>
              </div>

              {/* CV Yükleme */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#261dcf] mb-4">{t.career.basvuru.resume}</h3>
                <div>
                  <label htmlFor="resume" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.career.basvuru.resumeFile} <span className="text-red-500">*</span>
                    <span className="text-gray-500 text-xs ml-2">{t.career.basvuru.resumeFormat}</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="flex items-center gap-3 border border-gray-300 rounded-lg bg-white p-3">
                      <button
                        type="button"
                        onClick={() => document.getElementById('resume')?.click()}
                        className="px-4 py-2 bg-[#261dcf] text-white text-sm font-semibold rounded-lg hover:bg-[#1a16a8] transition-colors flex-shrink-0"
                      >
                        {t.career.basvuru.chooseFile || 'Choose File'}
                      </button>
                      <span className="text-sm text-gray-500 flex-1">
                        {formData.resume ? formData.resume.name : (t.career.basvuru.noFileChosen || 'No file chosen')}
                      </span>
                    </div>
                  </div>
                  {formData.resume && (
                    <p className="mt-2 text-sm text-gray-600">
                      {t.career.basvuru.selectedFile} {formData.resume.name}
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
                  {isSubmitting ? t.career.basvuru.submitting : t.career.basvuru.submit}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                  ✓ {t.career.basvuru.success}
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  {t.career.basvuru.error}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

