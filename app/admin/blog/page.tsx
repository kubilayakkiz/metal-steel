'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import RichTextEditor from '@/components/RichTextEditor';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  slug: string;
  content: string;
}

export default function AdminBlog() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    date: '',
    category: '',
    image: '',
    content: '',
    slug: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [imagePreview, setImagePreview] = useState<string>('');

  useEffect(() => {
    // Authentication kontrolü
    const auth = localStorage.getItem('admin_authenticated');
    if (auth !== 'true') {
      router.push('/admin/login');
    } else {
      setIsAuthenticated(true);
      fetchBlogs();
    }
  }, [router]);

  const fetchBlogs = async () => {
    try {
      const token = localStorage.getItem('admin_token');
      const response = await fetch('/api/blog', {
        headers: token ? {
          'Authorization': `Bearer ${token}`,
        } : {},
      });
      
      if (response.status === 401) {
        // Token geçersiz, login'e yönlendir
        localStorage.removeItem('admin_authenticated');
        localStorage.removeItem('admin_token');
        router.push('/admin/login');
        return;
      }
      
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error('Blog yazıları yüklenemedi:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Bu blog yazısını silmek istediğinizden emin misiniz?')) {
      return;
    }

    try {
      const token = localStorage.getItem('admin_token');
      const response = await fetch(`/api/blog/${id}`, {
        method: 'DELETE',
        headers: token ? {
          'Authorization': `Bearer ${token}`,
        } : {},
      });
      
      if (response.status === 401) {
        localStorage.removeItem('admin_authenticated');
        localStorage.removeItem('admin_token');
        router.push('/admin/login');
        return;
      }

      if (response.ok) {
        fetchBlogs();
      } else {
        alert('Blog yazısı silinemedi');
      }
    } catch (error) {
      console.error('Silme hatası:', error);
      alert('Blog yazısı silinemedi');
    }
  };

  const handleEdit = (blog: BlogPost) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      excerpt: blog.excerpt,
      date: blog.date,
      category: blog.category,
      image: blog.image,
      content: blog.content,
      slug: blog.slug,
    });
    setImagePreview(blog.image);
    setShowForm(true);
  };

  // Tarihi Türkçe formata çevir
  const formatDateToTurkish = (dateString: string): string => {
    if (!dateString) return '';
    
    // Eğer zaten Türkçe format ise, olduğu gibi döndür
    if (dateString.includes('Ocak') || dateString.includes('Şubat') || dateString.includes('Mart')) {
      return dateString;
    }
    
    // ISO formatından Türkçe'ye çevir
    try {
      const date = new Date(dateString);
      const months = [
        'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
        'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
      ];
      return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    } catch {
      return dateString;
    }
  };

  // Türkçe tarihi Date objesine çevir
  const parseTurkishDate = (turkishDate: string): string => {
    if (!turkishDate) return new Date().toISOString().split('T')[0];
    
    // Eğer zaten ISO format ise, olduğu gibi döndür
    if (turkishDate.match(/^\d{4}-\d{2}-\d{2}$/)) {
      return turkishDate;
    }
    
    // Türkçe formatı parse et
    const months: { [key: string]: number } = {
      'ocak': 0, 'şubat': 1, 'mart': 2, 'nisan': 3, 'mayıs': 4, 'haziran': 5,
      'temmuz': 6, 'ağustos': 7, 'eylül': 8, 'ekim': 9, 'kasım': 10, 'aralık': 11
    };
    
    const parts = turkishDate.split(' ');
    if (parts.length === 3) {
      const day = parseInt(parts[0]);
      const month = months[parts[1].toLowerCase()];
      const year = parseInt(parts[2]);
      
      if (!isNaN(day) && month !== undefined && !isNaN(year)) {
        const date = new Date(year, month, day);
        return date.toISOString().split('T')[0];
      }
    }
    
    return new Date().toISOString().split('T')[0];
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Dosya tipi kontrolü
    if (!file.type.startsWith('image/')) {
      alert('Sadece görsel dosyaları yüklenebilir');
      e.target.value = ''; // Input'u temizle
      return;
    }

    setIsUploadingImage(true);

    try {
      const uploadFormData = new FormData();
      uploadFormData.append('file', file);

      const token = localStorage.getItem('admin_token');
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: token ? {
          'Authorization': `Bearer ${token}`,
        } : {},
        body: uploadFormData,
      });
      
      if (response.status === 401) {
        localStorage.removeItem('admin_authenticated');
        localStorage.removeItem('admin_token');
        router.push('/admin/login');
        return;
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Yükleme başarısız' }));
        throw new Error(errorData.error || 'Yükleme başarısız');
      }

      const data = await response.json();
      
      // State'i güncelle
      setFormData(prev => ({ ...prev, image: data.url }));
      setImagePreview(data.url);
    } catch (error: any) {
      console.error('Yükleme hatası:', error);
      alert(error.message || 'Görsel yüklenemedi. Lütfen tekrar deneyin.');
      e.target.value = ''; // Hata durumunda input'u temizle
    } finally {
      setIsUploadingImage(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validasyon - Görsel kontrolü
    if (!formData.image || formData.image.trim() === '') {
      alert('Lütfen bir görsel yükleyin veya görsel URL girin');
      return;
    }

    // Özet kontrolü
    if (!formData.excerpt || formData.excerpt.trim() === '') {
      alert('Lütfen özet alanını doldurun');
      return;
    }

    setIsSubmitting(true);

    try {
      const url = editingBlog ? `/api/blog/${editingBlog.id}` : '/api/blog';
      const method = editingBlog ? 'PUT' : 'POST';

      const token = localStorage.getItem('admin_token');
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(formData),
      });
      
      if (response.status === 401) {
        localStorage.removeItem('admin_authenticated');
        localStorage.removeItem('admin_token');
        router.push('/admin/login');
        return;
      }

      if (response.ok) {
        setShowForm(false);
        setEditingBlog(null);
        setFormData({
          title: '',
          excerpt: '',
          date: '',
          category: '',
          image: '',
          content: '',
          slug: '',
        });
        setImagePreview('');
        fetchBlogs();
      } else {
        alert('Blog yazısı kaydedilemedi');
      }
    } catch (error) {
      console.error('Kaydetme hatası:', error);
      alert('Blog yazısı kaydedilemedi');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingBlog(null);
    setFormData({
      title: '',
      excerpt: '',
      date: '',
      category: '',
      image: '',
      content: '',
      slug: '',
    });
    setImagePreview('');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Yükleniyor...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="text-gray-600 hover:text-[#261dcf] transition-colors">
              ← Geri
            </Link>
            <h1 className="text-2xl font-bold text-[#261dcf]">Blog Yönetimi</h1>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-[#261dcf] hover:bg-[#1a16a8] text-white rounded-lg transition-colors"
          >
            + Yeni Blog Ekle
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Blog Listesi */}
        {!showForm && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Başlık</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tarih</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">İşlemler</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {blogs.map((blog) => (
                    <tr key={blog.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{blog.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-[#261dcf]/10 text-[#261dcf]">
                          {blog.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {blog.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(blog)}
                            className="text-[#261dcf] hover:text-[#1a16a8] transition-colors"
                          >
                            Düzenle
                          </button>
                          <button
                            onClick={() => handleDelete(blog.id)}
                            className="text-red-600 hover:text-red-800 transition-colors"
                          >
                            Sil
                          </button>
                          <a
                            href={`/blog/${blog.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:text-green-800 transition-colors"
                          >
                            Görüntüle
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Blog Formu */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#261dcf] mb-6">
              {editingBlog ? 'Blog Düzenle' : 'Yeni Blog Ekle'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Başlık <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Kategori <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent outline-none bg-white"
                    required
                  >
                    <option value="">Seçiniz</option>
                    <option value="Haberler">Haberler</option>
                    <option value="Sektör">Sektör</option>
                    <option value="Ödüller">Ödüller</option>
                    <option value="Teknoloji">Teknoloji</option>
                    <option value="Sürdürülebilirlik">Sürdürülebilirlik</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tarih <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={formData.date ? parseTurkishDate(formData.date) : ''}
                    onChange={(e) => {
                      const selectedDate = e.target.value;
                      const turkishDate = formatDateToTurkish(selectedDate);
                      setFormData({ ...formData, date: turkishDate });
                    }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent outline-none"
                    required
                  />
                  {formData.date && (
                    <p className="mt-2 text-sm text-gray-600">
                      Seçilen tarih: {formData.date}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Slug (URL)
                  </label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    placeholder="Otomatik oluşturulur"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Görsel <span className="text-red-500">*</span>
                </label>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Görsel Yükle
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={isUploadingImage}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    {isUploadingImage && (
                      <p className="mt-2 text-sm text-blue-600">Yükleniyor...</p>
                    )}
                  </div>
                  <div className="relative">
                    <label className="block text-sm text-gray-600 mb-2">
                      veya Görsel URL Gir
                    </label>
                    <input
                      type="url"
                      value={formData.image}
                      onChange={(e) => {
                        const url = e.target.value;
                        setFormData(prev => ({ ...prev, image: url }));
                        setImagePreview(url);
                      }}
                      placeholder="https://example.com/image.jpg"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent outline-none"
                    />
                  </div>
                  {imagePreview && (
                    <div className="mt-4">
                      <p className="text-sm text-gray-600 mb-2">Önizleme:</p>
                      <div className="relative w-full h-64 border border-gray-300 rounded-lg overflow-hidden">
                        <img
                          src={imagePreview}
                          alt="Önizleme"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Özet <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#261dcf] focus:border-transparent outline-none resize-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  İçerik <span className="text-red-500">*</span>
                </label>
                <RichTextEditor
                  value={formData.content}
                  onChange={(value) => setFormData({ ...formData, content: value })}
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-[#261dcf] hover:bg-[#1a16a8] text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Kaydediliyor...' : editingBlog ? 'Güncelle' : 'Kaydet'}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  İptal
                </button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}

