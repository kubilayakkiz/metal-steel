import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { requireAuth } from '@/lib/auth';

const blogDataPath = path.join(process.cwd(), 'data', 'blog.json');

async function readBlogData() {
  try {
    const fileContents = await fs.readFile(blogDataPath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    return [];
  }
}

async function writeBlogData(data: any[]) {
  await fs.writeFile(blogDataPath, JSON.stringify(data, null, 2), 'utf8');
}

// GET - Tüm blog yazılarını getir
export async function GET() {
  try {
    const blogs = await readBlogData();
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json({ error: 'Blog yazıları yüklenemedi' }, { status: 500 });
  }
}

// POST - Yeni blog yazısı ekle
export async function POST(request: NextRequest) {
  // Authentication kontrolü
  const auth = requireAuth(request);
  if (!auth.authorized) {
    return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const blogs = await readBlogData();
    
    // Slug oluştur (Türkçe karakterleri dönüştür)
    const slug = body.slug || body.title
      .toLowerCase()
      .replace(/ş/g, 's')
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/ı/g, 'i')
      .replace(/İ/g, 'i')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    // Yeni ID oluştur
    const newId = blogs.length > 0 ? Math.max(...blogs.map((b: any) => b.id)) + 1 : 1;

    const newBlog = {
      id: newId,
      title: body.title,
      excerpt: body.excerpt,
      date: body.date || new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }),
      category: body.category,
      image: body.image,
      slug: slug,
      content: body.content,
    };

    blogs.push(newBlog);
    await writeBlogData(blogs);

    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Blog yazısı eklenemedi' }, { status: 500 });
  }
}

