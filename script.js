function getSlugFromUrl() {
  const path = window.location.pathname;
  
  // /blog/web-tasarim-nedir/   veya   /blog/web-tasarim-nedir
  if (path.startsWith('/blog/')) {
    let slug = path
      .replace(/^\/blog\//, '')
      .replace(/\/$/, '')          // sondaki slash temizle
      .toLowerCase();
    
    if (slug) return slug;
  }
  return null;
}

function loadPost() {
  const slug = getSlugFromUrl();
  const contentDiv = document.getElementById('post-content');
  
  if (!slug || !contentDiv) return;

  // Yazı var mı kontrol et
  const post = blogPosts[slug];

  if (post) {
    // Başlık, description vs. güncelle
    document.title = post.title + " | Tekirdağ SEO & Web Tasarım";
    document.querySelector('meta[name="description"]').setAttribute('content', post.description);
    document.querySelector('meta[property="og:title"]').setAttribute('content', post.title);
    document.querySelector('meta[property="og:description"]').setAttribute('content', post.description);

    // İçeriği yerleştir
    contentDiv.innerHTML = `
      <h1>${post.title}</h1>
      <p style="color: #666; font-size: 0.95rem;">
        <i class="far fa-calendar-alt"></i> ${post.date}
      </p>
      ${post.content}
    `;
  } else {
    contentDiv.innerHTML = `
      <div style="text-align:center; padding: 100px 20px;">
        <h2>❌ Yazı bulunamadı</h2>
        <p>Aradığınız içerik silinmiş ya da adres yanlış yazılmış olabilir.</p>
        <a href="blog.html" class="btn" style="margin-top: 20px;">Blog'a Dön</a>
      </div>
    `;
  }
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', loadPost);

// Tarayıcı geri/ileri tuşu desteği
window.addEventListener('popstate', loadPost);

function renderBlogPosts() {
  const grid = document.getElementById("blog-grid");
  if (!grid) return;

  grid.innerHTML = "";

  blogPosts.forEach(post => {
    const card = document.createElement("a");
    card.href = `/blog/${post.slug}/`;
    card.className = "blog-card";
    card.innerHTML = `
      <div class="card-content">
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <span class="date">${post.date}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderBlogPosts();
});

// Mobil Menü Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // İkonu değiştir (Hamburger / X)
        const icon = mobileMenu.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}

// Scroll effect for Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.padding = '15px 0';
        header.style.boxShadow = 'none';
    }
});

const POSTS_PER_PAGE = 6;
let currentPage = 1;

function renderBlogPosts() {
  const grid = document.getElementById("blog-grid");
  if (!grid || !Array.isArray(blogPosts)) return;

  grid.innerHTML = "";

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const visiblePosts = blogPosts.slice(start, end);

  visiblePosts.forEach(post => {
    const card = document.createElement("a");
    card.href = `/blog/${post.slug}/`;
    card.className = "blog-card";

    card.innerHTML = `
      <div class="blog-card-content">
        <span class="category-badge">${post.category}</span>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <div class="blog-card-footer">
          <span>${post.date}</span>
          <span>Devamını Oku →</span>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  renderPagination();
}

function renderPagination() {
  const pagination = document.getElementById("pagination");
  if (!pagination) return;

  pagination.innerHTML = "";
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  pagination.appendChild(createBtn("‹", currentPage === 1, () => {
    currentPage--;
    renderBlogPosts();
  }));

  for (let i = 1; i <= totalPages; i++) {
    pagination.appendChild(
      createBtn(i, false, () => {
        currentPage = i;
        renderBlogPosts();
      }, i === currentPage)
    );
  }

  pagination.appendChild(createBtn("›", currentPage === totalPages, () => {
    currentPage++;
    renderBlogPosts();
  }));
}

function createBtn(text, disabled, action, active = false) {
  const li = document.createElement("li");
  const btn = document.createElement("button");

  btn.textContent = text;
  btn.disabled = disabled;
  if (active) btn.classList.add("active");

  btn.addEventListener("click", action);
  li.appendChild(btn);

  return li;
}

document.addEventListener("DOMContentLoaded", renderBlogPosts);

let canonical = document.querySelector("link[rel='canonical']");
if (!canonical) {
  canonical = document.createElement("link");
  canonical.rel = "canonical";
  document.head.appendChild(canonical);
}

const slug = getSlugFromUrl();

if (slug) {
  canonical.href = `https://techwithomer.github.io/blog/${slug}/`;
}
