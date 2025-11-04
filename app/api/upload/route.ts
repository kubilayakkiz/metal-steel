import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { requireAuth } from '@/lib/auth';

export async function POST(request: NextRequest) {
  // Authentication kontrolü
  const auth = requireAuth(request);
  if (!auth.authorized) {
    return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'Dosya bulunamadı' }, { status: 400 });
    }

    // Dosya tipi kontrolü - daha sıkı kontrol
    const allowedMimeTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedMimeTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Sadece JPEG, PNG, GIF ve WebP görselleri yüklenebilir' }, { status: 400 });
    }

    // Dosya uzantısı kontrolü
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
    if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
      return NextResponse.json({ error: 'Geçersiz dosya uzantısı' }, { status: 400 });
    }

    // Dosya boyutu kontrolü (5MB)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: 'Dosya boyutu 5MB\'dan büyük olamaz' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Dosya adını oluştur (timestamp + orijinal ad)
    const timestamp = Date.now();
    const originalName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const fileName = `${timestamp}_${originalName}`;

    // Public klasörüne kaydet
    const publicPath = join(process.cwd(), 'public', 'uploads', 'blog');
    
    // Klasör yoksa oluştur (basit kontrol)
    try {
      await writeFile(join(publicPath, fileName), buffer);
    } catch (error: any) {
      // Klasör yoksa oluştur
      if (error.code === 'ENOENT') {
        const { mkdir } = await import('fs/promises');
        await mkdir(publicPath, { recursive: true });
        await writeFile(join(publicPath, fileName), buffer);
      } else {
        throw error;
      }
    }

    // URL'yi döndür
    const imageUrl = `/uploads/blog/${fileName}`;
    return NextResponse.json({ url: imageUrl });
  } catch (error) {
    console.error('Yükleme hatası:', error);
    return NextResponse.json({ error: 'Dosya yüklenemedi' }, { status: 500 });
  }
}

