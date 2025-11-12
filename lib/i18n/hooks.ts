'use client';

import { usePathname } from 'next/navigation';
import { getLocaleFromPath, getTranslations, type Locale } from './translations';

export function useTranslations() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const t = getTranslations(locale);
  
  return { t, locale };
}

export function useLocale(): Locale {
  const pathname = usePathname();
  return getLocaleFromPath(pathname);
}

