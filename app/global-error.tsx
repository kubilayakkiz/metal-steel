'use client';

/**
 * Root layout seviyesinde hataları yakalar.
 * Production'da Internal Server Error yerine daha anlamlı bilgi gösterir.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="tr">
      <body suppressHydrationWarning>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <h1 className="text-2xl font-bold text-[#3d4f5f] mb-4">
              Bir Hata Oluştu
            </h1>
            <p className="text-gray-600 mb-6">
              Sayfa yüklenirken beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.
            </p>
            {process.env.NODE_ENV === 'development' && (
              <pre className="text-left text-sm text-red-600 bg-red-50 p-4 rounded mb-6 overflow-auto max-h-40">
                {error.message}
              </pre>
            )}
            <button
              onClick={() => reset()}
              className="px-6 py-3 bg-[#3d4f5f] text-white font-semibold rounded hover:bg-[#1a16a8] transition-colors"
            >
              Tekrar Dene
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
