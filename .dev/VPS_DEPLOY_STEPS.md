# VPS Deployment Adımları

## 1. Projeyi VPS'e Yükleme

### Yöntem A: Git ile (Önerilen)

```bash
# SSH ile VPS'e bağlanın
ssh root@your-vps-ip
# veya
ssh username@your-vps-ip

# Cloud Panel'in oluşturduğu site klasörüne gidin
# Genellikle şu yolda olur:
cd /home/username/domains/yourdomain.com/public_html

# Eğer Git repository'niz varsa:
git clone https://github.com/yourusername/metal.git .

# Veya mevcut klasöre:
git clone https://github.com/yourusername/metal.git metal
cd metal
```

### Yöntem B: FTP/SFTP ile

1. FileZilla veya WinSCP ile VPS'e bağlanın
2. Tüm proje dosyalarını şu klasöre yükleyin:
   `/home/username/domains/yourdomain.com/public_html`
3. `.git`, `node_modules`, `.next` klasörlerini yüklemeyin (bunlar VPS'de oluşturulacak)

## 2. Node.js ve NPM Kontrolü

```bash
# Node.js versiyonunu kontrol edin
node -v
# 18.x veya 20.x olmalı

# NPM versiyonunu kontrol edin
npm -v
```

## 3. Bağımlılıkları Yükleme

```bash
# Proje klasörüne gidin
cd /home/username/domains/yourdomain.com/public_html
# veya
cd /home/username/domains/yourdomain.com/public_html/metal

# Production bağımlılıklarını yükleyin
npm install --production

# Eğer build hatası alırsanız, tüm bağımlılıkları yükleyin:
npm install
```

## 4. Production Build

```bash
# Build oluşturun
npm run build

# Build başarılı olursa şu mesajı göreceksiniz:
# ✓ Compiled successfully
```

## 5. PM2 Kurulumu ve Başlatma

```bash
# PM2'yi global olarak kurun
npm install -g pm2

# Uygulamayı başlatın
pm2 start npm --name "metal-website" -- start

# PM2'yi sistem başlangıcında otomatik başlatın
pm2 startup
# Çıkan komutu çalıştırın (sudo ile başlayan komut)

# PM2 durumunu kaydedin
pm2 save
```

## 6. Port ve Nginx Kontrolü

Cloud Panel genellikle Nginx'i otomatik yapılandırır, ancak kontrol edin:

```bash
# PM2'nin çalıştığını kontrol edin
pm2 status

# Port 3000'in dinlendiğini kontrol edin
netstat -tulpn | grep 3000
# veya
ss -tulpn | grep 3000

# Nginx durumunu kontrol edin
sudo systemctl status nginx
```

## 7. Cloud Panel'de Port Ayarları

Cloud Panel'de Node.js site ayarlarına gidin:
- Port: 3000 olarak ayarlanmış olmalı
- Start Command: `npm start` veya `node server.js` (Cloud Panel otomatik ayarlar)
- Working Directory: `/home/username/domains/yourdomain.com/public_html`

## 8. Test

Tarayıcıda sitenizi açın:
- `https://yourdomain.com` (SSL ile)
- `https://www.yourdomain.com`

## Sorun Giderme

### Uygulama çalışmıyor

```bash
# PM2 loglarını kontrol edin
pm2 logs metal-website

# Son 50 satır log
pm2 logs metal-website --lines 50

# PM2'yi yeniden başlatın
pm2 restart metal-website
```

### Build hatası

```bash
# Node modules'ü temizleyip yeniden yükleyin
rm -rf node_modules package-lock.json .next
npm install
npm run build
```

### Port hatası

```bash
# 3000 portunu kontrol edin
sudo lsof -i :3000

# Eğer başka bir uygulama kullanıyorsa, onu durdurun
# veya Cloud Panel'de farklı bir port seçin
```

### Memory hatası

```bash
# PM2 memory limit'i artırın
pm2 delete metal-website
pm2 start npm --name "metal-website" --max-memory-restart 1G -- start
pm2 save
```

## Güncelleme Süreci

```bash
# Proje klasörüne gidin
cd /home/username/domains/yourdomain.com/public_html

# Git'ten son değişiklikleri çekin (Git kullanıyorsanız)
git pull origin main

# Bağımlılıkları güncelleyin
npm install --production

# Yeni build oluşturun
npm run build

# PM2'yi yeniden başlatın
pm2 restart metal-website
```


