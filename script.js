// Blog data
const blogPosts = [
    {
        id: 1,
        title: "2025 Yılında Web Master Trendleri ve Site Yönetimi",
        excerpt: "2025 yılında web master'ların dikkat etmesi gereken trendler ve site yönetimi ipuçları.",
        content: `
            <p>Web sitenizin yönetimi ve bakımı 2025'te daha da kritik hale geliyor. Yeni web teknolojileri, performans optimizasyonları ve güvenlik trendlerini takip etmek zorundayız.</p>
            
            <h2>1. Site Hızı ve Performans</h2>
            <p>Site hızı, kullanıcı deneyimi ve SEO açısından kritik bir faktördür. Web master olarak Core Web Vitals metriklerini düzenli takip etmelisiniz.</p>
            
            <h3>Önerilen İyileştirmeler:</h3>
            <ul>
                <li>Görselleri optimize edin (WebP, lazy-loading)</li>
                <li>JS ve CSS dosyalarını minify edin</li>
                <li>CDN kullanarak global hız optimizasyonu</li>
                <li>Cache mekanizmalarını etkinleştirin</li>
            </ul>
            
            <h2>2. Güvenlik ve SSL</h2>
            <p>HTTPS, güvenli hosting ve düzenli güncellemeler web sitenizi saldırılardan korur.</p>
            
            <h3>Web Master İçin Önemli Güvenlik Adımları:</h3>
            <ul>
                <li>SSL sertifikalarını güncel tutun</li>
                <li>CMS ve eklentileri güncelleyin</li>
                <li>Düzenli yedekleme yapın</li>
                <li>Güvenlik duvarı (WAF) kullanın</li>
            </ul>
            
            <h2>3. Teknik SEO ve Yapılandırılmış Veri</h2>
            <p>Site mimarisi, URL yapısı ve schema markup, web master'ın sorumluluk alanındadır.</p>
            
            <ul>
                <li>Temiz URL yapısı ve hiyerarşi oluşturun</li>
                <li>XML sitemap ve robots.txt dosyalarını güncel tutun</li>
                <li>Schema.org işaretlemeleri ile zengin snippet elde edin</li>
                <li>404 ve yönlendirmeleri kontrol edin</li>
            </ul>
            
            <h2>4. Mobil Uyumluluk</h2>
            <p>Mobile-first indexing ile birlikte web sitenizin mobil performansı kritik hale geldi.</p>
            
            <h3>Kontrol Noktaları:</h3>
            <ul>
                <li>Responsive tasarım doğruluğu</li>
                <li>Touch elementleri ve font boyutları</li>
                <li>Mobilde hız optimizasyonu</li>
            </ul>
            
            <h2>5. İçerik Yönetimi ve CMS İpuçları</h2>
            <p>Web master olarak içerik yönetimi ve CMS optimizasyonu, site performansı için önemli.</p>
            
            <ul>
                <li>WordPress, Joomla veya diğer CMS'lerin güncel sürümlerini kullanın</li>
                <li>Temalar ve eklentiler performans odaklı olsun</li>
                <li>İçeriklerin SEO ve okunabilirlik açısından optimize edilmesi</li>
            </ul>
            
            <h2>Sonuç</h2>
            <p>2025 yılında web master'lar için başarı, site performansı, güvenlik, teknik SEO ve içerik yönetimini dengeli şekilde yönetmekten geçiyor.</p>
        `,
        category: "webmaster-trends",
        date: "15 Ağustos 2025",
        readTime: "8 dk",
        author: "Web Master",
        tags: ["Web Master", "Site Yönetimi", "Performans", "Güvenlik", "SEO"],
        popular: true
    },
    {
        id: 2,
        title: "Teknik Kontroller: Web Sitenizi Optimize Edin",
        excerpt: "Web sitenizi yöneten web master'lar için 20 maddelik teknik kontrol listesi.",
        content: `
            <p>Bir web master olarak sitenizin teknik altyapısını düzenli kontrol etmek, performans ve güvenlik açısından kritik öneme sahiptir.</p>
            
            <h2>1. Site Hızı ve Cache</h2>
            <ul>
                <li>PageSpeed Insights ve GTMetrix ile performans kontrolü</li>
                <li>Lazy-loading ve CDN kullanımı</li>
                <li>CSS/JS minify ve önbellekleme</li>
            </ul>
            
            <h2>2. Mobil Uyumluluk</h2>
            <ul>
                <li>Responsive tasarım testleri</li>
                <li>Touch elementleri boyutları ve font</li>
                <li>Mobil hız optimizasyonu</li>
            </ul>
            
            <h2>3. URL ve Site Mimarisi</h2>
            <ul>
                <li>Temiz ve kısa URL yapısı</li>
                <li>Kategori ve sayfa hiyerarşisi</li>
                <li>Redirect ve 404 kontrolü</li>
            </ul>
            
            <h2>4. Güvenlik ve Backup</h2>
            <ul>
                <li>SSL kontrolü</li>
                <li>CMS ve eklenti güncellemeleri</li>
                <li>Günlük yedeklemeler</li>
                <li>Güvenlik duvarı ve firewall</li>
            </ul>
            
            <h2>5. Teknik SEO Araçları</h2>
            <ul>
                <li>Google Search Console</li>
                <li>Ahrefs ve Semrush</li>
                <li>Screaming Frog</li>
                <li>XML sitemap ve robots.txt kontrolü</li>
            </ul>
            
            <h2>Sonuç</h2>
            <p>Web master olarak bu teknik kontrolleri düzenli yapmak, sitenizin performans ve güvenliğini garanti eder.</p>
        `,
        category: "technical-seo",
        date: "12 Ağustos 2025",
        readTime: "10 dk",
        author: "Web Master",
        tags: ["Web Master", "Teknik SEO", "Site Hızı", "Güvenlik"],
        popular: true
    },
    {
        id: 3,
        title: "Web Master İçin İçerik ve SEO Yönetimi",
        excerpt: "Web master'lar için içerik optimizasyonu ve SEO yönetimi rehberi.",
        content: `
            <p>Web sitenizin performansını artırmak sadece teknik değil, aynı zamanda içerik ve SEO yönetimini gerektirir.</p>
            
            <h2>İçerik Yönetimi</h2>
            <ul>
                <li>CMS üzerinden içerik düzenleme</li>
                <li>Meta title ve description optimizasyonu</li>
                <li>Heading yapısı ve anahtar kelime kullanımı</li>
                <li>İç bağlantılar ve link yönetimi</li>
            </ul>
            
            <h2>SEO Yönetimi</h2>
            <ul>
                <li>Site haritası ve robots.txt yönetimi</li>
                <li>Backlink analiz ve yönetimi</li>
                <li>Google Analytics ve Search Console takibi</li>
                <li>Performans ve CTR analizleri</li>
            </ul>
            
            <h2>Sonuç</h2>
            <p>Web master olarak içerik ve SEO yönetimini optimize etmek, sitenizin kullanıcı deneyimi ve arama motoru başarısını artırır.</p>
        `,
        category: "content-seo",
        date: "10 Ağustos 2025",
        readTime: "7 dk",
        author: "Web Master",
        tags: ["Web Master", "İçerik Yönetimi", "SEO", "Analytics"],
        popular: false
    },
    {
        id: 4,
        title: "Local SEO ve Yerel Site Yönetimi",
        excerpt: "Yerel işletmeler için web master odaklı local SEO ve site yönetimi ipuçları.",
        content: `
            <p>Yerel SEO, web master'ların siteyi yerel kullanıcılar için optimize etmesini gerektirir. Google My Business ve NAP yönetimi kritik önemdedir.</p>
            
            <h2>Google My Business Yönetimi</h2>
            <ul>
                <li>Profil bilgilerinin güncel ve doğru olması</li>
                <li>Yerel kategori seçimi</li>
                <li>Fotoğraf ve içerik yönetimi</li>
                <li>Müşteri yorumlarına cevap verme</li>
            </ul>
            
            <h2>Yerel SEO Teknikleri</h2>
            <ul>
                <li>Mobile-first local optimizasyon</li>
                <li>Yerel backlink ve dizin kayıtları</li>
                <li>Yerel içerik ve etkinlik yazıları</li>
            </ul>
            
            <h2>Sonuç</h2>
            <p>Web master olarak local SEO yönetimi, yerel aramalarda başarı ve müşteri erişimini artırır.</p>
        `,
        category: "local-seo",
        date: "8 Ağustos 2025",
        readTime: "6 dk",
        author: "Web Master",
        tags: ["Web Master", "Local SEO", "Google My Business", "NAP"],
        popular: true
    },
    {
        id: 5,
        title: "Web Master için SEO Analizi ve Performans Ölçümü",
        excerpt: "Web sitenizin performansını ölçmek için web master odaklı SEO analiz rehberi.",
        content: `
            <p>Web master olarak sitenizin SEO performansını düzenli analiz etmek, sürekli iyileştirme için gereklidir.</p>
            
            <h2>Teknik Analiz</h2>
            <ul>
                <li>Site hızı ve Core Web Vitals kontrolü</li>
                <li>Mobile uyumluluk testi</li>
                <li>URL yapısı ve 404 yönlendirmeleri</li>
            </ul>
            
            <h2>On-Page Analiz</h2>
            <ul>
                <li>Meta title ve description</li>
                <li>Heading yapısı (H1, H2, H3)</li>
                <li>İç link ve anchor text kontrolü</li>
                <li>İçerik kalitesi ve uzunluğu</li>
            </ul>
            
            <h2>Araçlar</h2>
            <ul>
                <li>Google Search Console ve Analytics</li>
                <li>Semrush, Ahrefs</li>
                <li>Screaming Frog</li>
            </ul>
            
            <h2>Raporlama</h2>
            <ul>
                <li>Aylık SEO raporları</li>
                <li>Performans trendleri</li>
                <li>Teknik sorun ve çözüm önerileri</li>
            </ul>
            
            <h2>Sonuç</h2>
            <p>Düzenli SEO analizi, web master'ın sitenin görünürlüğünü ve performansını sürekli artırmasını sağlar.</p>
        `,
        category: "seo-basics",
        date: "5 Ağustos 2025",
        readTime: "9 dk",
        author: "Web Master",
        tags: ["Web Master", "SEO Analizi", "Performans", "Araçlar"],
        popular: false
    },
    {
        id: 6,
        title: "Yeni Web Master'lar İçin Başlangıç Rehberi",
        excerpt: "Web master dünyasına yeni girenler için temel bilgiler ve ipuçları.",
        content: `
            <p>Web master olarak başarı, teknik bilgi, site yönetimi ve SEO bilgisi ile başlar. Bu rehber yeni başlayanlar için temel ipuçlarını sunar.</p>
            
            <h2>Temel Bileşenler</h2>
            <ul>
                <li>Site hızı optimizasyonu</li>
                <li>Mobile uyumluluk</li>
                <li>SSL ve güvenlik</li>
                <li>CMS ve içerik yönetimi</li>
                <li>On-Page ve Off-Page SEO</li>
            </ul>
            
            <h2>Anahtar Araçlar</h2>
            <ul>
                <li>Google Search Console & Analytics</li>
                <li>PageSpeed Insights ve GTMetrix</li>
                <li>Semrush ve Ahrefs</li>
                <li>Screaming Frog</li>
            </ul>
            
            <h2>İlk 30 Gün Planı</h2>
            <ul>
                <li>Web sitenizi analiz edin ve teknik kontrolleri yapın</li>
                <li>İçerik ve SEO stratejisi oluşturun</li>
                <li>Güvenlik ve backup mekanizmalarını kurun</li>
                <li>Raporlama ve takip sistemleri oluşturun</li>
            </ul>
            
            <h2>Sonuç</h2>
            <p>Yeni web master'lar için temel becerileri edinmek, uzun vadeli başarı için kritik önemdedir. Sürekli öğrenmek ve uygulamak en iyi stratejidir.</p>
        `,
        category: "webmaster-basics",
        date: "1 Ağustos 2025",
        readTime: "12 dk",
        author: "Web Master",
        tags: ["Web Master", "Başlangıç", "SEO", "Site Yönetimi", "Performans"],
        popular: true
    },
    {
        id: 7,
        title: "2025'te Yapay Zeka Destekli SEO Stratejileri",
        excerpt: "AI tabanlı araçlarla SEO süreçlerinizi nasıl güçlendirebileceğinizi öğrenin.",
        content: `
            <p>Yapay zeka, 2025 yılında SEO dünyasını kökten değiştirdi. Artık içerik optimizasyonundan anahtar kelime analizine kadar pek çok alanda AI tabanlı sistemler aktif olarak kullanılıyor.</p>
            <h2>AI Tabanlı SEO Araçları</h2>
            <ul>
                <li>Doğal dil işleme ile içerik analizi</li>
                <li>Makine öğrenimi tabanlı backlink analizi</li>
                <li>Kullanıcı davranışı tahmin algoritmaları</li>
                <li>Otomatik içerik öneri sistemleri</li>
            </ul>
            <h2>Avantajları</h2>
            <p>AI kullanımı, hem zamandan tasarruf sağlar hem de daha doğru stratejiler geliştirmenize yardımcı olur. Ayrıca, manuel analizlerde gözden kaçabilecek detayları da yakalar.</p>
            <h2>Sonuç</h2>
            <p>2025’te başarılı bir SEO stratejisi oluşturmak için yapay zekadan faydalanmak artık bir seçenek değil, zorunluluk haline geldi.</p>
        `,
        category: "ai-seo",
        date: "20 Ağustos 2025",
        readTime: "12 dk",
        author: "Web Master",
        tags: ["SEO", "Yapay Zeka", "Performans", "Otomasyon"],
        popular: true
    },
    {
        id: 8,
        title: "E-Ticaret Siteleri İçin Performans İyileştirme",
        excerpt: "E-ticaret sitelerinde hız, güvenlik ve kullanıcı deneyimi artırma yöntemleri.",
        content: `
            <p>E-ticaret siteleri için hız ve kullanıcı deneyimi kritik bir faktördür. Yavaş açılan sayfalar hem arama motoru sıralamanızı düşürür hem de potansiyel müşterileri kaybetmenize yol açar.</p>
            <h2>Performans İpuçları</h2>
            <ul>
                <li>Sunucu yanıt süresini kısaltmak için CDN kullanın</li>
                <li>Görselleri WebP formatına dönüştürün</li>
                <li>Kritik CSS ve JS dosyalarını öncelikli yükleyin</li>
            </ul>
            <h2>Mobil Deneyimi İyileştirme</h2>
            <p>Mobil kullanıcıların çoğunlukta olduğunu unutmayın. Responsive tasarım ve hızlı ödeme süreçleri mobil dönüşümleri artırır.</p>
            <h2>Sonuç</h2>
            <p>Performans optimizasyonu, 2025’te e-ticaret başarısının en önemli anahtarıdır.</p>
        `,
        category: "ecommerce-performance",
        date: "22 Ağustos 2025",
        readTime: "14 dk",
        author: "Web Master",
        tags: ["E-Ticaret", "Performans", "UX", "SEO"],
        popular: true
    },
    {
        id: 9,
        title: "2025'te Blog Siteleri İçin Yeni İçerik Trendleri",
        excerpt: "Blog yazarları için yeni nesil içerik stratejileri ve yayınlama teknikleri.",
        content: `
            <p>2025 yılı, blog içeriklerinde devrim niteliğinde değişimlerin yaşandığı bir yıl oldu. Artık yalnızca metin tabanlı içerikler yeterli değil; kullanıcılar daha interaktif ve zengin içerikler bekliyor.</p>
            <h2>Yeni Trendler</h2>
            <ul>
                <li>Video içerikleri ve podcast serileri</li>
                <li>Interaktif quiz ve anketlerle etkileşim</li>
                <li>AI destekli içerik üretim ve planlama</li>
            </ul>
            <h2>SEO ile Entegrasyon</h2>
            <p>İçerikler yalnızca kullanıcılar için değil, arama motorları için de optimize edilmeli. Doğru anahtar kelime stratejileri, görsel optimizasyonu ve schema işaretlemeleri önemini koruyor.</p>
            <h2>Sonuç</h2>
            <p>Blog yazarları için başarı, kaliteli içerik ile modern trendleri harmanlayabilmekten geçiyor.</p>
        `,
        category: "blog-content",
        date: "25 Ağustos 2025",
        readTime: "13 dk",
        author: "Web Master",
        tags: ["Blog", "İçerik", "Trendler", "SEO"],
        popular: false
    },
    {
        id: 10,
        title: "Gelişmiş Güvenlik Protokolleri ile Site Koruması",
        excerpt: "2025'te siber tehditlere karşı gelişmiş güvenlik önlemleri.",
        content: `
            <p>Siber saldırıların artması, güvenlik konusunu web master’lar için en öncelikli alan haline getirdi. Artık basit SSL sertifikası ile yetinmek mümkün değil.</p>
            <h2>Yeni Nesil Güvenlik Adımları</h2>
            <ul>
                <li>İki faktörlü doğrulama (2FA)</li>
                <li>Gelişmiş güvenlik duvarları (WAF)</li>
                <li>DDoS saldırılarına karşı proaktif önlemler</li>
                <li>Düzenli güvenlik testleri ve log takibi</li>
            </ul>
            <h2>Yedekleme Stratejisi</h2>
            <p>Düzenli ve otomatik yedekleme sistemleri, olası veri kayıplarına karşı en iyi korumadır.</p>
            <h2>Sonuç</h2>
            <p>2025’te başarılı bir site yönetimi, güçlü bir güvenlik stratejisi ile mümkündür.</p>
        `,
        category: "site-security",
        date: "28 Ağustos 2025",
        readTime: "15 dk",
        author: "Web Master",
        tags: ["Güvenlik", "SSL", "Firewall", "WAF"],
        popular: true
    },
    {
        id: 11,
        title: "2025'te Mobil Uygulama Entegrasyonu",
        excerpt: "Web siteleri için mobil uygulama entegrasyonunun avantajları ve püf noktaları.",
        content: `
            <p>Mobil uygulamalarla entegre web siteleri, kullanıcı deneyimini üst düzeye çıkarıyor. Artık kullanıcılar sadece siteye girmekle yetinmiyor; aynı ekosistem içinde mobil uygulamalara da ihtiyaç duyuyor.</p>
            <h2>Avantajlar</h2>
            <ul>
                <li>Push bildirimleri ile kullanıcı etkileşimini artırma</li>
                <li>Daha hızlı erişim ve offline kullanım imkanı</li>
                <li>Kullanıcı sadakatini artırma</li>
            </ul>
            <h2>Başarılı Entegrasyon İçin İpuçları</h2>
            <p>API entegrasyonlarının sorunsuz çalışması, kullanıcı deneyimini büyük ölçüde etkiler. Ayrıca uygulama arayüzünün web sitesi tasarımı ile uyumlu olması kritik önem taşır.</p>
        `,
        category: "mobile-integration",
        date: "30 Ağustos 2025",
        readTime: "10 dk",
        author: "Web Master",
        tags: ["Mobil", "Uygulama", "UX", "Performans"],
        popular: false
    },
    {
        id: 12,
        title: "Core Web Vitals 2025: Yeni Ölçütler ve İpuçları",
        excerpt: "Google'ın yeni metrikleri ile sitenizin performansını artırın.",
        content: `
            <p>Google, 2025'te Core Web Vitals metriklerinde güncellemeler yaptı. Bu güncellemeler, kullanıcı deneyimini daha doğru ölçmeye ve optimize etmeye yardımcı oluyor.</p>
            <h2>Yeni Metrikler</h2>
            <ul>
                <li>Kapsamlı yükleme süresi (Total Load)</li>
                <li>Dinamik içerik etkileşim hızı</li>
                <li>Kullanıcı odaklı görsel kararlılık</li>
            </ul>
            <h2>Optimizasyon Teknikleri</h2>
            <p>Render önceliğini düzenlemek, görselleri sıkıştırmak ve gereksiz kodları kaldırmak bu metriklerde daha yüksek puan almanıza yardımcı olur.</p>
            <h2>Sonuç</h2>
            <p>Yeni Core Web Vitals ölçütleri, web master’lar için site kalitesini artırma fırsatı sunuyor.</p>
        `,
        category: "core-web-vitals",
        date: "2 Eylül 2025",
        readTime: "14 dk",
        author: "Web Master",
        tags: ["Core Web Vitals", "SEO", "Performans", "Google"],
        popular: true
    },
    {
        id: 13,
        title: "Sosyal Medya ile Web Trafiğini Artırma Yöntemleri",
        excerpt: "Sosyal platformlardan web sitenize daha fazla ziyaretçi çekmenin etkili yolları.",
        content: `
            <p>Sosyal medya, web trafiğini artırmak için güçlü bir araçtır. Doğru stratejilerle hem marka bilinirliğinizi hem de organik ziyaretçi sayınızı artırabilirsiniz.</p>
            <h2>Stratejiler</h2>
            <ul>
                <li>Düzenli ve ilgi çekici paylaşımlar hazırlayın</li>
                <li>Trendleri takip ederek hashtag stratejileri geliştirin</li>
                <li>Influencer iş birlikleri ile kitlenizi büyütün</li>
            </ul>
            <h2>Platform Bazlı İpuçları</h2>
            <p>Instagram için görsel optimizasyon, LinkedIn için profesyonel içerik, YouTube için eğitici videolar hazırlamak önemlidir.</p>
            <h2>Sonuç</h2>
            <p>Sosyal medya entegrasyonu, web sitenizin trafik kaynağını çeşitlendirir ve daha geniş bir kitleye ulaşmanızı sağlar.</p>
        `,
        category: "social-traffic",
        date: "5 Eylül 2025",
        readTime: "12 dk",
        author: "Web Master",
        tags: ["Sosyal Medya", "Trafik", "SEO", "Marketing"],
        popular: false
    }
];


// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initializePageContent();
    initFAQ();
    initForms();
});

// Navigation functionality
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on links
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize page-specific content


// Load blog preview for homepage
function loadBlogPreview() {
    const blogPreview = document.getElementById('blogPreview');
    if (blogPreview) {
        const latestPosts = blogPosts.slice(0, 3);
        blogPreview.innerHTML = latestPosts.map(post => `
            <a href="blog-detail.html?id=${post.id}" class="blog-card">
                <div class="blog-card-content">
                    <h3>${post.title}</h3>
                    <p>${post.excerpt}</p>
                    <div class="blog-meta">
                        <span class="blog-date">${post.date}</span>
                        <span class="blog-category">${getCategoryName(post.category)}</span>
                    </div>
                </div>
            </a>
        `).join('');
    }
}

// Load blog posts for blog page
function loadBlogPosts() {
    const blogPosts_container = document.getElementById('blogPosts');
    if (blogPosts_container) {
        displayBlogPosts(blogPosts);
        
        const loadMore = document.getElementById('loadMore');
        if (loadMore) {
            loadMore.addEventListener('click', function() {
                // Simulate loading more posts
                this.textContent = 'Tüm yazılar yüklendi';
                this.disabled = true;
            });
        }
    }
}

// Display blog posts
function displayBlogPosts(posts) {
    const blogPosts_container = document.getElementById('blogPosts');
    if (blogPosts_container) {
        blogPosts_container.innerHTML = posts.map(post => `
            <article class="blog-post-card">
                <a href="blog-detail.html?id=${post.id}" style="text-decoration: none; color: inherit;">
                    <h2>${post.title}</h2>
                    <div class="blog-meta">
                        <span class="blog-date">${post.date}</span>
                        <span class="blog-category">${getCategoryName(post.category)}</span>
                        <span class="read-time">${post.readTime}</span>
                    </div>
                    <p>${post.excerpt}</p>
                </a>
            </article>
        `).join('');
    }
}

// Load blog sidebar content
function loadBlogSidebar() {
    const popularPosts = document.getElementById('popularPosts');
    if (popularPosts) {
        const popular = blogPosts.filter(post => post.popular).slice(0, 5);
        popularPosts.innerHTML = popular.map(post => `
            <a href="blog-detail.html?id=${post.id}" class="popular-post">
                <h4>${post.title}</h4>
                <p>${post.date}</p>
            </a>
        `).join('');
    }
}

// Initialize blog filters
function initBlogFilters() {
    const categoryLinks = document.querySelectorAll('.category-link');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active state
            categoryLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.category;
            const filteredPosts = category === 'all' ? 
                blogPosts : 
                blogPosts.filter(post => post.category === category);
            
            displayBlogPosts(filteredPosts);
        });
    });
}

// Load blog detail
function loadBlogDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));
    const post = blogPosts.find(p => p.id === postId);
    
    if (post) {
        // Update page title and meta
        document.title = `${post.title} - SEO Uzmanı`;
        document.getElementById('blogTitle').textContent = `${post.title} - SEO Uzmanı`;
        document.getElementById('blogDescription').content = post.excerpt;
        
        // Update content
        document.getElementById('breadcrumbTitle').textContent = post.title;
        document.getElementById('articleTitle').textContent = post.title;
        document.getElementById('articleDate').textContent = post.date;
        document.getElementById('articleCategory').textContent = getCategoryName(post.category);
        document.getElementById('articleReadTime').textContent = post.readTime;
        document.getElementById('articleContent').innerHTML = post.content;
        
        // Update tags
        const tagsContainer = document.getElementById('articleTags');
        if (tagsContainer && post.tags) {
            tagsContainer.innerHTML = '<h4>Etiketler:</h4>' + 
                post.tags.map(tag => `<a href="#" class="tag">${tag}</a>`).join('');
        }
        
        // Update share buttons
        updateShareButtons(post);
        
        // Load related posts
        loadRelatedPosts(post);
        
        // Load popular posts in sidebar
        loadBlogSidebar();
    } else {
        document.getElementById('articleContent').innerHTML = '<p>Blog yazısı bulunamadı.</p>';
    }
}

// Update social share buttons
function updateShareButtons(post) {
    const currentUrl = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post.title);
    
    const shareTwitter = document.getElementById('shareTwitter');
    const shareFacebook = document.getElementById('shareFacebook');
    const shareLinkedIn = document.getElementById('shareLinkedIn');
    
    if (shareTwitter) {
        shareTwitter.href = `https://twitter.com/intent/tweet?text=${title}&url=${currentUrl}`;
    }
    
    if (shareFacebook) {
        shareFacebook.href = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
    }
    
    if (shareLinkedIn) {
        shareLinkedIn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`;
    }
}

// Load related posts
function loadRelatedPosts(currentPost) {
    const relatedPosts = document.getElementById('relatedPosts');
    if (relatedPosts) {
        const related = blogPosts
            .filter(post => post.id !== currentPost.id && post.category === currentPost.category)
            .slice(0, 3);
        
        relatedPosts.innerHTML = related.map(post => `
            <a href="blog-detail.html?id=${post.id}" class="related-post">
                <h4>${post.title}</h4>
                <p>${post.date}</p>
            </a>
        `).join('');
    }
}

// Get category display name
function getCategoryName(category) {
    const categories = {
        'seo-basics': 'SEO Temelleri',
        'technical-seo': 'Teknik SEO',
        'content-seo': 'İçerik SEO',
        'local-seo': 'Local SEO'
    };
    return categories[category] || category;
}

// Initialize FAQ functionality
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                
                // Close all FAQ items
                faqItems.forEach(faq => faq.classList.remove('active'));
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });
}

// Initialize forms
function initForms() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission
            alert('Mesajınız alındı! 24 saat içinde size dönüş yapacağım.');
            this.reset();
        });
    }
    
    const newsletterForms = document.querySelectorAll('#newsletterForm');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert('Newsletter aboneliğiniz başarıyla oluşturuldu!');
            this.reset();
        });
    });
}

function matchFeaturedHeight() {
  const featured = document.querySelector('.featured-post');
  const smallPosts = document.querySelector('.small-posts');
  const p = featured.querySelector('p');
  const readMoreText = ' Devamını Oku';

  if (!featured || !smallPosts) return;

  // Sağdaki alanın yüksekliğini al
  const height = smallPosts.offsetHeight;
  featured.style.height = height + 'px';

  // Satır yüksekliğini al
  const lineHeight = parseFloat(getComputedStyle(p).lineHeight);

  // Maksimum satır sayısı (son satır için link alanı bırak)
  const maxLines = Math.floor(height / lineHeight) - 1;

  // Kelime bazlı kesme
  const words = p.innerText.split(' ');
  const approxWordsPerLine = 10; // yaklaşık kelime sayısı
  if (words.length > maxLines * approxWordsPerLine) {
    const truncated = words.slice(0, maxLines * approxWordsPerLine).join(' ');
    p.innerHTML = truncated + '<a href="#" class="read-more">' + ' ...' + '</a>';
  } else {
    p.innerHTML = p.innerText + '<a href="#" class="read-more">' + ' ...' + '</a>';
  }
}

// Sayfa yüklendiğinde ve yeniden boyutlandırıldığında çalıştır
window.addEventListener('load', matchFeaturedHeight);
window.addEventListener('resize', matchFeaturedHeight);

const sliderData = [
    {
        id: 1,
        title: "Web Sitenizi Hızlandırın",
        subtitle: "Performans Optimizasyonu ile Ziyaretçilerinizi Memnun Edin",
        buttonText: "Hemen Başlayın",
        buttonLink: "#",
        bgColor: "#1abc9c", // Mor
        textColor: "black"
    },
    {
        id: 2,
        title: "2025 SEO Trendleri",
        subtitle: "Arama Motorlarında Zirveye Çıkmanın Yolları",
        buttonText: "Trendleri Keşfet",
        buttonLink: "#",
        bgColor: "#E9B1C2", // Sarı
        textColor: "black"
    },
    {
        id: 3,
        title: "Mobil Uyumlu Tasarım",
        subtitle: "Responsive Tasarımın Temelleri ve İpuçları",
        buttonText: "Detayları Gör",
        buttonLink: "#",
        bgColor: "#3498db", // Açık Mavi
        textColor: "black"
    }
];

// Slider'ı başlatma fonksiyonu (index.html'de çalışacak)
function initHeroSlider() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    // Slaytları ve navigasyonu HTML'e ekle
    heroSection.innerHTML = `
        <div class="hero-slider" id="heroSlider">
            ${sliderData.map((slide, index) => `
                <div class="slide" data-index="${index}" style="background-color: ${slide.bgColor}; color: ${slide.textColor};">
                    <div class="container">
                        <h2 style="color: ${slide.textColor}; font-size: 28px;">${slide.title}</h2>
                        <br />
                        <a href="${slide.buttonLink}" class="btn btn-primary" style="background-color: ${slide.textColor}; color: ${slide.bgColor};">${slide.buttonText}</a>
                    </div>
                </div>
            `).join('')}
        </div>
        <button class="slider-nav-btn" id="prevSlide"><i class="fas fa-chevron-left"></i></button>
        <button class="slider-nav-btn" id="nextSlide"><i class="fas fa-chevron-right"></i></button>
        <div class="slider-dots" id="sliderDots">
            ${sliderData.map((_, index) => `<span class="dot" data-index="${index}"></span>`).join('')}
        </div>
    `;

    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        // Döngüsel geçiş (circular)
        currentSlide = (index + slides.length) % slides.length; 

        // Slaytları güncelle
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === currentSlide) {
                slide.classList.add('active');
            }
        });

        // Dotları güncelle
        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === currentSlide) {
                dot.classList.add('active');
            }
        });
    }

    // Otomatik oynatmayı başlat
    function startAutoSlide() {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000); // 5 saniyede bir slayt değiştir
    }

    // Olay Dinleyicileri
    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
        startAutoSlide(); // Kullanıcı etkileşiminden sonra zamanlayıcıyı sıfırla
    });

    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
        startAutoSlide(); // Kullanıcı etkileşiminden sonra zamanlayıcıyı sıfırla
    });

    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            showSlide(index);
            startAutoSlide(); // Kullanıcı etkileşiminden sonra zamanlayıcıyı sıfırla
        });
    });

    // Başlangıçta ilk slaytı göster ve otomatik oynatmayı başlat
    showSlide(0);
    startAutoSlide();
}

// initializePageContent'i güncelleyin
function initializePageContent() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch (currentPage) {
        case 'index.html':
        case '':
            initHeroSlider(); // Ana sayfa için slider'ı çağır
            loadBlogPreview();
            break;
        case 'blog.html':
            loadBlogPosts();
            loadBlogSidebar();
            initBlogFilters();
            break;
        case 'blog-detail.html':
            loadBlogDetail();
            break;
    }
}