# FileZilla Bağlantı Ayarları

## Doğru Bağlantı Bilgileri

### Yöntem 1: SFTP ile (Önerilen)

1. **FileZilla'yı açın**
2. **Site Manager'ı açın** (Ctrl+S veya üst menüden File → Site Manager)
3. **"New Site"** butonuna tıklayın
4. **Sağ tarafta şu bilgileri girin:**

```
Protocol: SFTP - SSH File Transfer Protocol
Host: 92.113.31.26
Port: 22
Logon Type: Normal
User: rootmetal
Password: [Cloud Panel'de oluşturduğunuz FTP kullanıcısının şifresi]
```

5. **"Connect"** butonuna tıklayın

### Yöntem 2: FTP ile (Eğer SFTP çalışmazsa)

```
Protocol: FTP - File Transfer Protocol
Host: 92.113.31.26
Port: 21
Encryption: Use explicit FTP over TLS if available
Logon Type: Normal
User: rootmetal
Password: [FTP kullanıcı şifresi]
```

## Yaygın Hatalar ve Çözümleri

### Hata 1: "Connection refused" veya "Connection timed out"
**Çözüm:**
- Port 22 (SFTP) veya 21 (FTP) açık olmalı
- Cloud Panel'de Firewall ayarlarını kontrol edin
- VPS IP adresini doğru girdiğinizden emin olun

### Hata 2: "Authentication failed"
**Çözüm:**
- Kullanıcı adı: `rootmetal` (root değil!)
- Şifreyi Cloud Panel'den kontrol edin
- Şifrede özel karakterler varsa dikkatli yazın

### Hata 3: "Server sent unexpected reply"
**Çözüm:**
- Protocol olarak **SFTP** kullanın (FTP değil)
- Port: 22 kullanın

### Hata 4: "ECONNREFUSED"
**Çözüm:**
- Cloud Panel'de FTP servisinin çalıştığını kontrol edin
- SSH ile bağlanıp şunu deneyin:
  ```bash
  sudo systemctl status sshd
  ```

## Bağlantı Ayarları (Gelişmiş)

FileZilla Site Manager'da "Advanced" sekmesine gidin:

```
Transfer settings:
- Transfer mode: Passive (PASV)
- Limit number of simultaneous connections: 2
```

## Alternatif: Cloud Panel File Manager

Eğer FileZilla çalışmazsa:
1. Cloud Panel'de "File Manager" sekmesine gidin
2. `/home/metalxsteel/htdocs/metalxsteel.com.tr/` klasörüne gidin
3. "Upload" butonuna tıklayın
4. Dosyaları yükleyin (daha yavaş ama çalışır)

## Bağlantı Testi

SSH ile bağlanıp FTP servisini kontrol edin:

```bash
ssh root@92.113.31.26

# FTP servisini kontrol et
sudo systemctl status vsftpd
# veya
sudo systemctl status proftpd
```

## Güvenlik Notu

- SFTP (port 22) daha güvenlidir, FTP (port 21) yerine kullanın
- Şifrenizi güvenli tutun
- İşiniz bitince bağlantıyı kapatın


