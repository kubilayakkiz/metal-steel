import { NextRequest } from 'next/server';

// Admin şifresi - Environment variable'dan alınmalı
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'metalx2025';

// Basit token oluşturma (production'da JWT kullanılmalı)
export function generateToken(): string {
  return Buffer.from(`${Date.now()}-${Math.random()}`).toString('base64');
}

// Token doğrulama
export function verifyToken(token: string): boolean {
  try {
    // Basit kontrol - production'da JWT kullanılmalı
    const decoded = Buffer.from(token, 'base64').toString();
    const [timestamp] = decoded.split('-');
    const tokenAge = Date.now() - parseInt(timestamp);
    
    // Token 24 saat geçerli
    return tokenAge < 24 * 60 * 60 * 1000;
  } catch {
    return false;
  }
}

// Şifre kontrolü
export function verifyPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}

// Request'ten token al
export function getAuthToken(request: NextRequest): string | null {
  // Önce header'dan kontrol et
  const authHeader = request.headers.get('authorization');
  if (authHeader?.startsWith('Bearer ')) {
    return authHeader.substring(7);
  }
  
  // Sonra cookie'den kontrol et
  return request.cookies.get('admin_token')?.value || null;
}

// Authentication middleware
export function requireAuth(request: NextRequest): { authorized: boolean; token?: string } {
  const token = getAuthToken(request);
  
  if (!token || !verifyToken(token)) {
    return { authorized: false };
  }
  
  return { authorized: true, token };
}

