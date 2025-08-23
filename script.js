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
function initializePageContent() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch (currentPage) {
        case 'index.html':
        case '':
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