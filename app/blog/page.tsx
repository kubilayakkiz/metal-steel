import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Metal X Endüstriyel San. ve Tic. LTD. ŞTİ. blog yazıları. Güncel haberler, etkinlikler ve sektörden haberler.',
};

async function getBlogPosts() {
  try {
    const { promises: fs } = await import('fs');
    const path = await import('path');
    const blogDataPath = path.join(process.cwd(), 'data', 'blog.json');
    const fileContents = await fs.readFile(blogDataPath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Blog yazıları yüklenemedi:', error);
    return [];
  }
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden text-white">
        <div className="absolute inset-0">
          <img 
            src="https://placehold.co/1920x600/261dcf/ffffff?text=Blog" 
            alt="Blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#261dcf]/90 to-[#1a1a5e]/90"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Güncel haberler, etkinlikler ve sektörden haberleri buradan takip edin
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <a 
                key={post.id}
                href={`/blog/${post.slug}`}
                className="relative group overflow-hidden rounded-lg cursor-pointer bg-white shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-[#261dcf] text-white px-3 py-1 rounded text-sm font-semibold">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="font-bold text-gray-900 mb-3 text-xl group-hover:text-[#261dcf] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-[#261dcf] font-semibold text-sm group-hover:gap-2 transition-all">
                    Devamını Oku
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
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
              Blog yazılarımız hakkında daha fazla bilgi almak veya bizimle iletişime geçmek için aşağıdaki butona tıklayın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/iletisim" className="px-8 py-4 bg-white text-[#261dcf] font-bold rounded-lg hover:bg-gray-100 transition-colors">
                İletişime Geç
              </a>
              <a href="/teklif-al" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                Teklif Al
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

