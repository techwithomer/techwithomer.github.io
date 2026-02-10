   



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