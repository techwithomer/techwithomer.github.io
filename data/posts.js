const blogPosts = [
  {
    slug: "web-tasarim-nedir",
    title: "Web Tasarım Nedir? Modern Bir Sitenin Temelleri",
    description: "Web tasarımın temelleri ve profesyonel bir web sitesinin sahip olması gereken özellikler.",
    excerpt: "Web tasarım nedir, işletmenizin dijital dünyadaki yüzü neden bu kadar önemlidir?",
    content: "<p>Web tasarım, bir web sitesinin görünümünü, düzenini ve kullanıcı deneyimini (UX) planlama sürecidir...</p>",
    date: "06 Şubat 2026",
    category: "Web Tasarım"
  },
  {
    slug: "seo-nedir",
    title: "SEO Nedir? Arama Motoru Optimizasyonu Rehberi",
    description: "SEO rehberi ile Google'da üst sıralara çıkmanın yollarını keşfedin.",
    excerpt: "SEO nedir, web sitenizin trafiğini artırmak için nasıl yapılır?",
    content: "<p>SEO (Search Engine Optimization), web sitelerinin arama motoru sonuçlarında daha görünür olması için yapılan çalışmaların bütünüdür...</p>",
    date: "06 Şubat 2026",
    category: "SEO"
  },
  {
    slug: "responsive-tasarim-onemi",
    title: "Responsive Tasarım Neden Önemlidir?",
    description: "Mobil uyumlu (responsive) web sitelerinin kullanıcı deneyimi ve SEO üzerindeki etkileri.",
    excerpt: "Mobil trafiğin masaüstünü geçtiği günümüzde, responsive tasarım artık bir tercih değil zorunluluktur.",
    content: "<p>Responsive tasarım, bir web sitesinin tüm cihaz ekranlarına otomatik olarak uyum sağlamasıdır...</p>",
    date: "06 Şubat 2026",
    category: "Web Tasarım"
  },
  {
    slug: "hizli-yuklenen-web-siteleri",
    title: "Web Sitesi Hızı Nasıl Artırılır? 5 Etkili Yöntem",
    description: "Site hızlandırma teknikleri ile Google Core Web Vitals skorlarınızı iyileştirin.",
    excerpt: "Yavaş açılan bir site kullanıcı kaybına neden olur. İşte hızınızı artıracak altın kurallar.",
    content: "<p>Görsel optimizasyonu, önbellekleme ve gereksiz JS dosyalarının temizlenmesi site hızını artırmada kritik rol oynar...</p>",
    date: "06 Şubat 2026",
    category: "Yazılım"
  },
  {
    slug: "kurumsal-kimlik-ve-web",
    title: "Kurumsal Kimlik Çalışmalarında Web Sitesinin Rolü",
    description: "Marka imajınızı güçlendirmek için dijital ve fiziksel kimliğin uyumu.",
    excerpt: "Markanızın dijitaldeki evi olan web siteniz, kurumsal kimliğinizi nasıl yansıtmalı?",
    content: "<p>Renk paletinden font seçimine kadar her detay markanızın profesyonelliğini simgeler...</p>",
    date: "06 Şubat 2026",
    category: "Marka Yönetimi"
  },
  {
    slug: "react-vs-nextjs-hangisi",
    title: "React mı, Next.js mi? Projeniz İçin Doğru Seçim",
    description: "Modern JavaScript kütüphaneleri ve frameworkleri arasındaki farklar.",
    excerpt: "SPA mı yoksa SSR mı? Projenizin ihtiyacına göre doğru teknolojiyi seçin.",
    content: "<p>Next.js, SEO avantajları ve sunucu taraflı render (SSR) yetenekleriyle React'ın üzerine inşa edilmiş güçlü bir yapıdır...</p>",
    date: "06 Şubat 2026",
    category: "Yazılım"
  },
  {
    slug: "icerik-pazarlamasi-stratejileri",
    title: "İçerik Pazarlaması ile Trafiğinizi Katlayın",
    description: "Kaliteli içerik üretimi ve dağıtımı ile hedef kitlenize ulaşın.",
    excerpt: "Doğru içerik stratejisi ile sadık bir takipçi kitlesi oluşturmanın yollarını öğrenin.",
    content: "<p>İçerik pazarlaması sadece yazı yazmak değil, kullanıcının sorununa çözüm üretmektir...</p>",
    date: "06 Şubat 2026",
    category: "Dijital Pazarlama"
  },
  {
    slug: "e-ticaret-sitesi-kurarken-dikkat",
    title: "E-Ticaret Sitesi Kurarken Dikkat Edilmesi Gerekenler",
    description: "Başarılı bir online mağaza için ödeme sistemlerinden kullanıcı güvenliğine her şey.",
    excerpt: "E-ticarete atılırken teknik altyapı ve güvenlik konularında hata yapmamak için bu rehberi okuyun.",
    content: "<p>SSL sertifikası, kullanıcı dostu ödeme adımları ve hızlı bir ürün listeleme sayfası satışları artırır...</p>",
    date: "06 Şubat 2026",
    category: "E-Ticaret"
  },
  {
    slug: "google-ads-ipuclari",
    title: "Google Ads Reklamlarında Bütçe Yönetimi",
    description: "Daha az harcayarak daha fazla dönüşüm almanın yolları.",
    excerpt: "Reklam bütçenizi optimize ederek ROI (Yatırım Getirisi) oranınızı nasıl yükseltirsiniz?",
    content: "<p>Doğru anahtar kelime eşleşmeleri ve negatif kelime listeleri ile bütçenizi koruyun...</p>",
    date: "06 Şubat 2026",
    category: "Dijital Pazarlama"
  },
  {
    slug: "kullanici-deneyimi-ux-nedir",
    title: "UX (Kullanıcı Deneyimi) Tasarımı Nedir?",
    description: "Kullanıcıların sitenizde daha uzun süre kalmasını sağlayacak tasarım sırları.",
    excerpt: "İyi bir web sitesi sadece güzel görünmez, aynı zamanda kolayca kullanılır.",
    content: "<p>Kullanıcı deneyimi tasarımı, ziyaretçinin site içindeki yolculuğunu pürüzsüz hale getirmeyi amaçlar...</p>",
    date: "06 Şubat 2026",
    category: "Web Tasarım"
  },
  {
    slug: "backlink-nedir-nasil-alinir",
    title: "Backlink Nedir? Kaliteli Bağlantı İnşası Rehberi",
    description: "Site otoritenizi artırmak için kaliteli backlink almanın püf noktaları.",
    excerpt: "Her link faydalı değildir. SEO dünyasında kaliteli ve doğal backlink almanın yolları.",
    content: "<p>Spam linklerden kaçınarak, otoriter sitelerden referans almak sıralamanızı yükseltir...</p>",
    date: "06 Şubat 2026",
    category: "SEO"
  },
  {
    slug: "sosyal-medya-ve-seo",
    title: "Sosyal Medya Paylaşımlarının SEO'ya Etkisi",
    description: "Sosyal sinyallerin arama motoru sıralamaları üzerindeki dolaylı etkileri.",
    excerpt: "Sosyal medyada popüler olmak sitenizin Google sıralamasını etkiler mi?",
    content: "<p>Sosyal medya doğrudan bir sıralama faktörü olmasa da trafik ve marka bilinirliği sağlar...</p>",
    date: "06 Şubat 2026",
    category: "Dijital Pazarlama"
  },
  {
    slug: "web-guvenligi-rehberi",
    title: "Web Sitesi Güvenliği İçin Alınması Gereken Önlemler",
    description: "Hacker saldırılarına ve veri sızıntılarına karşı sitenizi koruyun.",
    excerpt: "Sadece SSL yeterli mi? Web sitenizi siber saldırılardan korumak için yapmanız gerekenler.",
    content: "<p>Yazılım güncellemeleri, güçlü şifreleme ve güvenlik duvarları (WAF) sitenizin kalesidir...</p>",
    date: "06 Şubat 2026",
    category: "Yazılım"
  },
  {
    slug: "yapay-zeka-ve-tasarim",
    title: "Yapay Zeka Web Tasarım Dünyasını Nasıl Değiştiriyor?",
    description: "AI araçlarının tasarım süreçlerindeki yeri ve geleceği.",
    excerpt: "Midjourney'den ChatGPT'ye, yapay zeka tasarımcıların yerini mi alacak?",
    content: "<p>Yapay zeka, tekrarlayan işleri hızlandırarak tasarımcılara daha fazla yaratıcılık alanı açıyor...</p>",
    date: "06 Şubat 2026",
    category: "Teknoloji"
  },
  {
    slug: "minimalist-web-tasarim",
    title: "Minimalist Web Tasarım: Az Çoktur Felsefesi",
    description: "Modern web tasarım trendlerinde minimalizmin gücü.",
    excerpt: "Göz yormayan, sade ve etkileyici bir web sitesi tasarlamanın ipuçları.",
    content: "<p>Beyaz alan kullanımı ve sade tipografi, kullanıcıyı doğrudan içeriğe odaklar...</p>",
    date: "06 Şubat 2026",
    category: "Web Tasarım"
  }
];
