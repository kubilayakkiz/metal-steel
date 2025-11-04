'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simüle edilmiş abonelik - Gerçek projede API endpoint'e gönderilir
    try {
      // TODO: API endpoint'e e-posta gönder
      // const response = await fetch('/api/newsletter', { ... });
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
        <div className="flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="E-posta adresiniz"
            className="w-full px-6 py-4 rounded-lg border-2 border-gray-300 focus:border-[#261dcf] focus:ring-2 focus:ring-[#261dcf]/20 outline-none transition-all text-gray-900 placeholder-gray-400"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-8 py-4 bg-[#261dcf] text-white font-bold rounded-lg transition-all whitespace-nowrap ${
            isSubmitting
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-[#1a16a8] hover:shadow-lg transform hover:scale-105'
          }`}
        >
          {isSubmitting ? 'Gönderiliyor...' : 'Abone Ol'}
        </button>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center">
          ✓ Başarıyla abone oldunuz! Teşekkür ederiz.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">
          Bir hata oluştu. Lütfen tekrar deneyin.
        </div>
      )}
    </form>
  );
}

