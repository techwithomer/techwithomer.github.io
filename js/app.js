// Blog list loading functionality
document.addEventListener('DOMContentLoaded', function() {
    const blogListContainer = document.getElementById('blog-list');

    if (blogListContainer) {
        loadBlogPosts();
    }
});

function loadBlogPosts() {
    const blogListContainer = document.getElementById('blog-list');

    // Check if posts is available (should be loaded from post.js)
    if (typeof posts === 'undefined' || !posts || posts.length === 0) {
        blogListContainer.innerHTML = '<p>Blog yazıları yüklenirken hata oluştu.</p>';
        console.error('Posts data not available. Make sure post.js is loaded before app.js');
        return;
    }

    // Sort posts by date (newest first)
    const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    const blogHTML = sortedPosts.map(post => `
        <div class="blog-post">
            <h3><a href="${post.slug}/">${post.title}</a></h3>
            <p class="date">${formatDate(post.date)}</p>
            <p>${post.excerpt}</p>
            <a href="${post.slug}/" class="read-more">Devamını Oku</a>
        </div>
    `).join('');

    blogListContainer.innerHTML = blogHTML;
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
}
