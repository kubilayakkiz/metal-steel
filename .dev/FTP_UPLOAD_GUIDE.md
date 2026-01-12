# FTP/SFTP ile Proje Yükleme Rehberi

## FileZilla ile Yükleme

### 1. FileZilla'yı İndirin ve Kurun
- https://filezilla-project.org/download.php?type=client

### 2. Bağlantı Bilgileri
- **Host:** sftp://92.113.31.26 (veya VPS IP adresiniz)
- **Username:** root (veya Cloud Panel'den aldığınız kullanıcı adı)
- **Password:** VPS şifreniz
- **Port:** 22 (SFTP için)

### 3. Bağlanın ve Dosyaları Yükleyin

1. FileZilla'da "Site Manager" (Ctrl+S) açın
2. "New Site" oluşturun
3. Bağlantı bilgilerini girin
4. "Connect" butonuna tıklayın

### 4. Dosya Yükleme

**Sol taraf (Local):** Yerel bilgisayarınızdaki proje klasörü
- `C:\Users\kakkiz\metal`

**Sağ taraf (Remote):** VPS'deki hedef klasör
- `/home/metalxsteel/htdocs/metalxsteel.com.tr/`

### 5. Yüklenecek Dosyalar

**YÜKLEYİN:**
- `app/` klasörü (tüm içeriği)
- `components/` klasörü (tüm içeriği)
- `lib/` klasörü (tüm içeriği)
- `public/` klasörü (tüm içeriği)
- `data/` klasörü (varsa, tüm içeriği)
- `package.json`
- `package-lock.json`
- `tsconfig.json`
- `tailwind.config.ts`
- `next.config.ts`
- `postcss.config.mjs`
- `.gitignore`
- `README.md`
- `DEPLOYMENT.md`
- `VPS_DEPLOY_STEPS.md`
- `ecosystem.config.js`

**YÜKLEMEYİN (VPS'de oluşturulacak):**
- `node_modules/` klasörü
- `.next/` klasörü
- `.git/` klasörü (eğer varsa)
- `.env.local` dosyası (varsa)

### 6. Yükleme İşlemi

1. Sol tarafta `C:\Users\kakkiz\metal` klasörüne gidin
2. Sağ tarafta `/home/metalxsteel/htdocs/metalxsteel.com.tr/` klasörüne gidin
3. Yüklenecek dosya ve klasörleri seçin
4. Sağ tıklayın → "Upload" seçin
5. Yükleme tamamlanana kadar bekleyin (birkaç dakika sürebilir)

### 7. Dosya İzinlerini Ayarlayın (SSH'de)

Yükleme tamamlandıktan sonra SSH'de:

```bash
cd /home/metalxsteel/htdocs/metalxsteel.com.tr
chmod -R 755 .
chown -R metalxsteel:metalxsteel .
```

## WinSCP ile Yükleme

### 1. WinSCP'yi İndirin
- https://winscp.net/eng/download.php

### 2. Bağlantı
- **File protocol:** SFTP
- **Host name:** 92.113.31.26
- **User name:** root
- **Password:** VPS şifreniz
- **Port:** 22

### 3. Dosya Yükleme
- Sol panel: Yerel klasör (`C:\Users\kakkiz\metal`)
- Sağ panel: Uzak klasör (`/home/metalxsteel/htdocs/metalxsteel.com.tr/`)
- Dosyaları sürükle-bırak ile yükleyin

## Yükleme Sonrası Kontrol

SSH'de kontrol edin:

```bash
cd /home/metalxsteel/htdocs/metalxsteel.com.tr
ls -la

# package.json dosyasının varlığını kontrol edin
cat package.json
```

Eğer dosyalar görünüyorsa, devam edebilirsiniz!


