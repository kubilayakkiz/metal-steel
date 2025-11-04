import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blogs = await getBlogPosts();
  const post = blogs.find((b: any) => b.slug === slug);
  
  if (!post) {
    return {
      title: 'Blog Yazısı Bulunamadı - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
    };
  }

  return {
    title: `${post.title} - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blogs = await getBlogPosts();
  const post = blogs.find((b: any) => b.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden text-white">
        <div className="absolute inset-0">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#261dcf]/90 to-[#1a1a5e]/90"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-block bg-[#261dcf] text-white px-4 py-2 rounded mb-4 text-sm font-semibold">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {post.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-4">
              {post.date}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="blog-content-wrapper">
              <article 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] text-center mb-8">
            İlgili Blog Yazıları
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs
              .filter((p: any) => p.id !== post.id)
              .slice(0, 3)
              .map((relatedPost: any) => (
                <a 
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="relative group overflow-hidden rounded-lg cursor-pointer bg-white shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-[#261dcf] text-white px-3 py-1 rounded text-sm font-semibold">
                      {relatedPost.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-gray-500 mb-2">{relatedPost.date}</p>
                    <h3 className="font-bold text-gray-900 mb-3 text-xl group-hover:text-[#261dcf] transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center text-[#261dcf] font-semibold text-sm">
                      Devamını Oku →
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
              Blog yazımız hakkında daha fazla bilgi almak veya bizimle iletişime geçmek için aşağıdaki butona tıklayın.
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

