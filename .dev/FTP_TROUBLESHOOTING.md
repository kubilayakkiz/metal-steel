# FileZilla Bağlantı Sorunu Çözümleri

## Sorun: "Sunucu ile bağlantı kurulamıyor"

### Çözüm 1: Cloud Panel'de SSH Erişimini Kontrol Edin

1. Cloud Panel'de **"SSH/FTP"** sekmesine gidin
2. **"SSH Users"** bölümüne bakın
3. Eğer "No users found" görüyorsanız:
   - **"Add User"** butonuna tıklayın
   - SSH kullanıcısı oluşturun (FTP kullanıcısından farklı olabilir)
   - Bu kullanıcı ile SFTP bağlantısı yapın

### Çözüm 2: FTP Protokolünü Deneyin (Port 21)

FileZilla Site Manager'da:

```
Protocol: FTP - File Transfer Protocol
Host: 92.113.31.26
Port: 21
Encryption: Use explicit FTP over TLS if available
Logon Type: Normal
User: rootmetal
Password: [FTP şifresi]
```

**Not:** FTP daha az güvenlidir ama genellikle çalışır.

### Çözüm 3: Cloud Panel File Manager Kullanın (En Kolay)

1. Cloud Panel'de **"File Manager"** sekmesine gidin
2. `/home/metalxsteel/htdocs/metalxsteel.com.tr/` klasörüne gidin
3. **"Upload"** butonuna tıklayın
4. Dosyaları seçip yükleyin

**Avantaj:** Tarayıcı üzerinden çalışır, ekstra yazılım gerekmez.

### Çözüm 4: SSH ile Bağlanıp SCP Kullanın

Eğer SSH erişiminiz varsa:

```bash
# Windows'ta PowerShell veya CMD'de
# Proje klasörüne gidin
cd C:\Users\kakkiz\metal

# Tüm dosyaları yükleyin (node_modules hariç)
scp -r -o "StrictHostKeyChecking=no" ^
  app components lib public data ^
  package.json package-lock.json ^
  tsconfig.json tailwind.config.ts next.config.ts ^
  postcss.config.mjs .gitignore ^
  root@92.113.31.26:/home/metalxsteel/htdocs/metalxsteel.com.tr/
```

### Çözüm 5: WinSCP Deneyin

FileZilla yerine WinSCP kullanın:

1. WinSCP'yi indirin: https://winscp.net/
2. Bağlantı ayarları:
   - **File protocol:** SFTP
   - **Host name:** 92.113.31.26
   - **Port number:** 22
   - **User name:** rootmetal
   - **Password:** [FTP şifresi]

### Çözüm 6: Cloud Panel'de SSH Açın

1. Cloud Panel'de **"Security"** sekmesine gidin
2. **"SSH Access"** bölümünü bulun
3. SSH erişimini aktif edin
4. Port 22'nin açık olduğundan emin olun

## Hızlı Test: SSH Bağlantısı

SSH ile bağlanabiliyor musunuz?

```bash
ssh root@92.113.31.26
```

Eğer SSH çalışıyorsa ama SFTP çalışmıyorsa, Cloud Panel'de SFTP ayarlarını kontrol edin.

## Önerilen Yöntem

**En kolay ve hızlı çözüm:** Cloud Panel File Manager kullanın. Tarayıcı üzerinden çalışır ve ekstra yazılım gerektirmez.


