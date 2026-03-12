# Hostinger VPS Deployment Guide

## 1. Cloud Panel'de Site Oluşturma
- Cloud Panel'de "Add Site" butonuna tıklayın
- **"Create a Node.js Site"** seçeneğini seçin
- Domain adınızı girin (örn: metalx.com veya subdomain)
- Node.js versiyonu seçin (18.x veya 20.x önerilir)

## 2. Projeyi VPS'e Yükleme

### SSH ile Bağlanma
```bash
ssh root@your-vps-ip
# veya
ssh username@your-vps-ip
```

### Projeyi Yükleme Yöntemleri

#### Yöntem 1: Git ile (Önerilen)
```bash
# Proje klasörüne gidin (Cloud Panel genellikle /home/username/domains/yourdomain.com/public_html kullanır)
cd /home/username/domains/yourdomain.com/public_html

# Git repository'nizi clone edin
git clone https://github.com/yourusername/metal.git .

# veya mevcut bir klasöre
git clone https://github.com/yourusername/metal.git metal
cd metal
```

#### Yöntem 2: FTP/SFTP ile
- FileZilla veya WinSCP kullanarak tüm proje dosyalarını yükleyin
- Hedef klasör: `/home/username/domains/yourdomain.com/public_html`

## 3. Bağımlılıkları Yükleme

```bash
# Proje klasörüne gidin
cd /home/username/domains/yourdomain.com/public_html
# veya
cd /home/username/domains/yourdomain.com/public_html/metal

# Node.js modüllerini yükleyin (build için devDependencies gerekir)
npm install
```

## 4. Production Build

```bash
# Production build oluşturun
npm run build
```

## 5. PM2 ile Çalıştırma

### PM2 Kurulumu (eğer yoksa)
```bash
npm install -g pm2
```

### PM2 ile Uygulamayı Başlatma

```bash
# Proje klasöründe
pm2 start npm --name "metal-website" -- start

# veya package.json'daki start script'ini kullanarak
pm2 start npm --name "metal-website" -- run start
```

### PM2 Ayarları
```bash
# PM2'yi sistem başlangıcında otomatik başlatmak için
pm2 startup
pm2 save

# PM2 durumunu kontrol etmek için
pm2 status

# Logları görmek için
pm2 logs metal-website

# Uygulamayı yeniden başlatmak için
pm2 restart metal-website

# Uygulamayı durdurmak için
pm2 stop metal-website
```

## 6. Nginx Reverse Proxy Kurulumu (Önerilir)

Cloud Panel genellikle Nginx'i otomatik yapılandırır, ancak manuel ayar gerekirse:

### Nginx Konfigürasyonu
```bash
sudo nano /etc/nginx/sites-available/yourdomain.com
```

Aşağıdaki konfigürasyonu ekleyin:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Nginx'i yeniden yükleyin:
```bash
sudo nginx -t  # Konfigürasyonu test et
sudo systemctl reload nginx
```

## 7. SSL Sertifikası (HTTPS)

Cloud Panel genellikle Let's Encrypt SSL'i otomatik kurar. Manuel kurulum için:

```bash
# Certbot kurulumu
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx

# SSL sertifikası al
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## 8. Environment Variables (Gerekirse)

Eğer `.env` dosyası kullanıyorsanız:
```bash
# Proje klasöründe .env dosyası oluşturun
nano .env

# Gerekli değişkenleri ekleyin
# Örnek:
# NODE_ENV=production
# NEXT_PUBLIC_API_URL=https://yourdomain.com/api
```

## 9. Port Kontrolü

Next.js varsayılan olarak 3000 portunda çalışır. Cloud Panel'de Node.js site oluştururken port ayarlarını kontrol edin.

## 10. Firewall Ayarları

```bash
# 3000 portunu açmak için (eğer firewall aktifse)
sudo ufw allow 3000/tcp
```

## Sorun Giderme

### Internal Server Error (500) - Site açılmıyor
Build başarılı ama siteye girildiğinde "Internal Server Error" alıyorsanız:

1. **PM2 loglarını kontrol edin** (en önemli adım):
```bash
pm2 logs metal-website --lines 100
# veya hata detayı için:
pm2 logs metal-website --err --lines 50
```

2. **Node.js versiyonu**: Next.js 16 için Node 18.18+ veya 20+ gerekir:
```bash
node -v
# 18.18+ veya 20.x olmalı
```

3. **npm install sırası**: Önce tam kurulum, sonra build:
```bash
npm install          # --production KULLANMAYIN (build için devDependencies gerekir)
npm run build
pm2 restart metal-website
```

4. **Environment variables**: `.env.local` sunucuya yüklenmez. Gerekli değişkenleri sunucuda tanımlayın:
```bash
# Proje klasöründe
nano .env.local
# SMTP_USER, SMTP_PASSWORD, ADMIN_PASSWORD vb. ekleyin
```

5. **Bellek**: Düşük RAM'de çalıştırıyorsanız:
```bash
pm2 start npm --name "metal-website" --max-memory-restart 500M -- start
```

### Uygulama çalışmıyor
```bash
# PM2 loglarını kontrol edin
pm2 logs metal-website

# Node.js versiyonunu kontrol edin
node -v

# Port kullanımını kontrol edin
netstat -tulpn | grep 3000
```

### Build hatası
```bash
# Node modules'ü temizleyip yeniden yükleyin
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Memory hatası
```bash
# PM2 memory limit'i artırın
pm2 start npm --name "metal-website" --max-memory-restart 500M -- start
```

## Güncelleme Süreci

```bash
# Proje klasörüne gidin
cd /home/username/domains/yourdomain.com/public_html/metal

# Git'ten son değişiklikleri çekin
git pull origin main

# Bağımlılıkları güncelleyin
npm install

# Yeni build oluşturun
npm run build

# PM2'yi yeniden başlatın
pm2 restart metal-website
```

## Notlar

- Cloud Panel'in kendi Node.js yönetim paneli varsa, oradan da yönetebilirsiniz
- PM2 yerine Cloud Panel'in kendi process manager'ını da kullanabilirsiniz
- Production'da `NODE_ENV=production` olduğundan emin olun
- Static dosyalar (`public` klasörü) otomatik olarak serve edilir


