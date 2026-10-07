# MUHAFIZ — Üç Ekranlı Etkileşimli Demo

## Çalıştırma
ZIP dosyasını çıkarın ve index.html dosyasını tarayıcıda açın. Paket kurulumu gerekmez.
Belge depolama dosya adreslerinde tarayıcıya göre farklı davranabilir. Özellikle belge yükleme için aynı klasörde `python -m http.server 8000` komutunu çalıştırıp http://localhost:8000 adresini kullanabilirsiniz.

## Dosyalar
- index.html: Üst menü ve uygulama iskeleti.
- style.css: Masaüstü ve mobil düzenler. Özet kutularında ikon ve değer ayrı sütunlardadır; açıklama değerin altındadır.
- data.js: Paylaşılan ekran görüntülerindeki 5 USD ve 12 EUR muhabir adı; örnek skorlar ve alıcı BIC listesi.
- app.js: Ekran geçişleri, filtreler, işlem listesi popup'ları ve simülasyon hesaplamaları.
- contracts.js: Banka ve para birimi ile ilişkilendirilen belge yükleme, listeleme ve indirme. Belgelerin içerikleri IndexedDB ile tarayıcıda saklanır.

## Güncellemeler
Genel Bakış: Özet kutularındaki mini grafikler ve yeşil yüzde etiketleri kaldırıldı. İkonun yanında rakam, rakamın altında açıklama gösterilir. Para birimi select/combobox'tır.
Muhabir Karnesi: Para birimi combobox'ı, Sözleşme Yükle butonu, belge listesi ve indirme işlevi eklendi. Anomali Tespiti'nde İşlemleri İncele butonları ilgili kayıtları popup'ta açar; listede tüm örnek kayıtlar gösterilir.
İşlem Simülasyonu: Para birimi ve alıcı banka SWIFT/BIC alanları combobox'tır. İşlem türü ve alıcı ülke alanları kaldırıldı. Kartlardaki İncele/İnceleniyor butonları kaldırıldı. Nihai banka seçimi kartların altındaki Uzman Seçimi combobox'ıyla yapılır.

## Sınırlar ve entegrasyon
Belge yükleme bu cihazın tarayıcısında kalıcıdır; sunucuya gönderilmez. Tarayıcı verileri silinirse belgeler silinir. Yüklenen belge üzerinden OCR veya AI kural çıkarımı yapılmaz. Sözleşme kuralları ve AI önerileri örnek içeriktir.
Skorlar, masraflar ve süreler demo verileridir. Gerçek banka bağlantısı, canlı kur veya AI servisi içermez. Alıcı BIC listesi örnek bir listedir; paylaşılan görsellerde BIC değerleri görünmediği için muhabir SQL çıktısından türetilmemiştir.
GBP muhabir listesi paylaşılmadığı için GBP seçiminde açık bir boş durum gösterilir. data.js içindeki correspondentLists.GBP alanına gerçek kayıtlar eklenebilir.
Gerçek sisteme entegrasyonda availableBanks/banks ve compute işlevlerini API verileriyle besleyin; ContractStore modülünü sunucu yükleme ve listeleme çağrılarıyla değiştirin. Uzman değerlendirmeleri JSON dosyası olarak indirilir.
Masraf türü OUR olduğunda örnek ücret gönderen tarafındadır; SHA/BEN için örnek masraf alıcıya net tutardan düşülür.

## Örnek alıcı BIC kaynakları
- HSBC MRMDUS33: https://www.hsbc.com.sg/ways-to-bank/transfers/swift-code/
- Chase CHASUS33: https://www.chase.com/es/digital/wire-transfer/faqs
- Bank of America BOFAUS3N: https://info.bankofamerica.com/en/digital-banking/wire-transfers
- Deutsche Bank DEUTDEFF: https://corporates.db.com/files/documents/legal-resources/ssi/2025/Standard-Settlement-Instructions-for-Deutsche-Bank-AG-Frankfurt-covering-Collateral-Management-and-valuation-Listed-Derivative.pdf?language_id=1
- Yapı Kredi YAPITRISXXX: https://www.yapikredi.com.tr/bireysel-bankacilik/odemeler-ve-hizmetler/swift-transfer

## 7 Ekim ekran düzenlemeleri
Arama alanı Ara olarak değiştirildi. Masraf farkı 1.750 USD, başlık Sözleşme değişikliği oldu. Özet kart ikonları büyütüldü. Sıralama tablosu için rankingMinutes alanı eklendi: en fazla 60 dakika olan demo değerlerdir; mevcut ortalama iletim/simülasyon saat verileri korunmuştur. Genel Skor ve Skor Bileşenleri tek kartta birleşti; skordaki yeşil artış kaldırıldı. Müşteri Uyruk Kontrolü halka grafiği 4 yabancı uyruklu / 96 diğer müşteri; 2.Muhabir Kullanma Oranı parçalı gösterimi 2 / 10 örneğini içerir. Anomali kartı daraltıldı. Uzman Seçimi ve Not alanları hizalandı. Kaydet butonu mevcut JSON değerlendirme dosyası indirme işlevini korur.
