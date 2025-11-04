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

// GET - Tek bir blog yazısını getir
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const blogs = await readBlogData();
    const blog = blogs.find((b: any) => b.id === parseInt(params.id));
    
    if (!blog) {
      return NextResponse.json({ error: 'Blog yazısı bulunamadı' }, { status: 404 });
    }
    
    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json({ error: 'Blog yazısı yüklenemedi' }, { status: 500 });
  }
}

// PUT - Blog yazısını güncelle
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Authentication kontrolü
  const auth = requireAuth(request);
  if (!auth.authorized) {
    return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const blogs = await readBlogData();
    const index = blogs.findIndex((b: any) => b.id === parseInt(params.id));
    
    if (index === -1) {
      return NextResponse.json({ error: 'Blog yazısı bulunamadı' }, { status: 404 });
    }

    // Slug oluştur (eğer title değiştiyse)
    let slug = blogs[index].slug;
    if (body.title && body.title !== blogs[index].title) {
      slug = body.title
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
    }

    blogs[index] = {
      ...blogs[index],
      ...body,
      id: parseInt(params.id),
      slug: body.slug || slug,
    };

    await writeBlogData(blogs);
    return NextResponse.json(blogs[index]);
  } catch (error) {
    return NextResponse.json({ error: 'Blog yazısı güncellenemedi' }, { status: 500 });
  }
}

// DELETE - Blog yazısını sil
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Authentication kontrolü
  const auth = requireAuth(request);
  if (!auth.authorized) {
    return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 });
  }

  try {
    const blogs = await readBlogData();
    const filteredBlogs = blogs.filter((b: any) => b.id !== parseInt(params.id));
    
    if (filteredBlogs.length === blogs.length) {
      return NextResponse.json({ error: 'Blog yazısı bulunamadı' }, { status: 404 });
    }

    await writeBlogData(filteredBlogs);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Blog yazısı silinemedi' }, { status: 500 });
  }
}

