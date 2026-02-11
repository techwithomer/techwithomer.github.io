   



        let currentPage = 1;

        const postsPerPage = 6;



        function showPage(pageId) {

            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

            document.getElementById(pageId).classList.add('active');

            window.scrollTo(0,0);

            if(pageId === 'blog') renderBlog();

        }



        function renderBlog() {
    const blogGrid = document.getElementById('blog-grid');
    blogGrid.innerHTML = "";
    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    const paginatedPosts = posts.slice(start, end);

    paginatedPosts.forEach(post => {
        const slug = createSlug(post.title);
        const card = `
            <div class="card" style="margin-bottom: 16px;">
                <span class="category-badge" style="background:${getCatColor(post.cat)}">${post.cat}</span>
                <h3>${post.title}</h3>
                <p style="font-size:0.9rem; color:var(--text-mid); margin-bottom:20px;">${post.desc}</p>
               
                <div style="display:flex; justify-content:space-between; align-items:center; margin-top: auto;">
                    <small style="display: flex; align-items: center; gap: 5px;">
                        <i class="far fa-calendar-alt"></i> ${post.date}
                    </small>
                    <!-- Tıklama fonksiyonuna slug ekledik -->
                    <a href="${slug}.html" style="font-size: 13px;">
  Oku <i class="fas fa-arrow-right"></i>
</a>

                </div>
            </div>
        `;
        blogGrid.innerHTML += card;
    });
    renderPagination();
}

function createSlug(text) {
    const trMap = {
        'ç': 'c', 'ğ': 'g', 'ş': 's', 'ü': 'u', 'ı': 'i', 'ö': 'o',
        'Ç': 'C', 'Ğ': 'G', 'Ş': 'S', 'Ü': 'U', 'İ': 'I', 'Ö': 'O'
    };
    for (let key in trMap) {
        text = text.replace(new RegExp(key, 'g'), trMap[key]);
    }
    return text.toLowerCase()
        .replace(/[^\w\s-]/g, '') // Alfanumerik olmayanları sil
        .replace(/\s+/g, '-')      // Boşlukları tire yap
        .replace(/--+/g, '-')      // Çift tireleri tek yap
        .trim();
}

        function renderPagination() {

            const paginationDiv = document.getElementById('pagination');

            paginationDiv.innerHTML = "";

            const pageCount = Math.ceil(posts.length / postsPerPage);

            for (let i = 1; i <= pageCount; i++) {

                const btn = document.createElement('div');

                btn.className = `page-num ${i === currentPage ? 'active' : ''}`;

                btn.innerText = i;

                btn.onclick = () => { currentPage = i; renderBlog(); window.scrollTo(0, 400); };

                paginationDiv.appendChild(btn);

            }

        }



        function getCatColor(cat) {

            switch(cat) {

                case 'SEO': return 'var(--primary-blue)';

                case 'Teknik SEO': return 'var(--dark-black)';

                case 'Strateji': return 'var(--primary-green)';

                case 'Yerel SEO': return 'var(--primary-yellow)';

                default: return 'var(--text-mid)';

            }

        }



        function viewBlogDetail(id, slug) {
    const post = posts.find(p => p.id === id);
    if (!slug) slug = createSlug(post.title);

    // URL'yi değiştirme (Tarayıcı çubuğunda gözükecek olan)
    const newUrl = window.location.origin + '/blog/' + slug;
    window.history.pushState({ postId: id }, '', newUrl);

    const contentDiv = document.getElementById('blog-detail-content');
    
    // İçerik oluşturma kısmı (Sizin mevcut kodunuz aynen kalabilir)
    contentDiv.innerHTML = `
        <div class="back-btn" onclick="goBackToBlog()">
            <i class="fas fa-chevron-left"></i> Blog Listesine Dön
        </div>
        <div class="category-badge" style="background:${getCatColor(post.cat)}">${post.cat}</div>
        <h1 style="margin-bottom: 25px; line-height: 1.3;">${post.title}</h1>
        <!-- ... Diğer içerik alanlarınız ... -->
        <div class="content-body">
             <p>${post.desc}</p>
             <div>${post.content}</div>
        </div>
    `;
    
    showPage('blog-detail');
}

// Geri dönüşte URL'yi temizlemek için
function goBackToBlog() {
    window.history.pushState({}, '', window.location.origin + '/blog');
    showPage('blog');
}





        // Mobil Menü Toggle Fonksiyonu

const menuToggle = document.getElementById('mobile-menu');

const navLinks = document.getElementById('nav-list');



menuToggle.addEventListener('click', () => {

    navLinks.classList.toggle('active');

    // İkonu değiştir (bars <-> times)

    const icon = menuToggle.querySelector('i');

    icon.classList.toggle('fa-bars');

    icon.classList.toggle('fa-times');

});



// Menü linklerine tıklandığında menüyü otomatik kapat

function showPage(pageId) {

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    document.getElementById(pageId).classList.add('active');

   

    // Mobil menü açıksa kapat

    if (navLinks.classList.contains('active')) {

        navLinks.classList.remove('active');

        const icon = menuToggle.querySelector('i');

        icon.classList.add('fa-bars');

        icon.classList.remove('fa-times');

    }

   

    window.scrollTo(0,0);

    if(pageId === 'blog') renderBlog();

}

document.addEventListener('DOMContentLoaded', function() {
    const blogGrid = document.querySelector('.blog-grid');
    const items = blogGrid.querySelectorAll('.card');
    const paginationContainer = document.getElementById('pagination');
    
    const itemsPerPage = 6; // Her sayfada kaç yazı görünsün?
    let currentPage = 1;
    const totalPages = Math.ceil(items.length / itemsPerPage);

    function showPage(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        items.forEach((item, index) => {
            if (index >= start && index < end) {
                item.style.display = 'flex'; // Kartlar flex olduğu için
            } else {
                item.style.display = 'none';
            }
        });

        updatePaginationButtons(page);
        // Sayfa değiştiğinde en yukarı (blog kısmına) yumuşak geçiş yap
        document.getElementById('blog').scrollIntoView({ behavior: 'smooth' });
    }

    function updatePaginationButtons(page) {
        paginationContainer.innerHTML = '';

        // Geri Butonu
        const prevBtn = document.createElement('span');
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevBtn.className = `page-num ${page === 1 ? 'disabled' : ''}`;
        prevBtn.addEventListener('click', () => {
            if (page > 1) showPage(page - 1);
        });
        paginationContainer.appendChild(prevBtn);

        // Sayfa Numaraları
        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('span');
            pageBtn.innerText = i;
            pageBtn.className = `page-num ${i === page ? 'active' : ''}`;
            pageBtn.addEventListener('click', () => showPage(i));
            paginationContainer.appendChild(pageBtn);
        }

        // İleri Butonu
        const nextBtn = document.createElement('span');
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextBtn.className = `page-num ${page === totalPages ? 'disabled' : ''}`;
        nextBtn.addEventListener('click', () => {
            if (page < totalPages) showPage(page + 1);
        });
        paginationContainer.appendChild(nextBtn);
    }

    // İlk sayfayı başlat
    showPage(1);
});