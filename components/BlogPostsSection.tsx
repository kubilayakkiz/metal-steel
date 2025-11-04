'use client';

import { useEffect, useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  slug: string;
}

export default function BlogPostsSection() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blog');
        if (response.ok) {
          const data = await response.json();
          // En son 3 blog yazısını al
          setBlogPosts(data.slice(0, 3));
        }
      } catch (error) {
        console.error('Blog yazıları yüklenemedi:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-gray-200 animate-pulse rounded-lg h-80"></div>
        ))}
      </div>
    );
  }

  if (blogPosts.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {blogPosts.map((blog) => (
        <a 
          key={blog.id} 
          href={`/blog/${blog.slug}`}
          className="relative group overflow-hidden rounded-lg cursor-pointer bg-white shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
        >
          <div className="aspect-[4/3] overflow-hidden relative">
            <img 
              src={blog.image} 
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4 bg-[#261dcf] text-white px-3 py-1 rounded text-sm font-semibold">
              {blog.category}
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
            <h3 className="font-bold text-gray-900 mb-3 text-xl group-hover:text-[#261dcf] transition-colors">
              {blog.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
              {blog.excerpt}
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
  );
}

