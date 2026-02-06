---
permalink: /blog
title: Blog - Tekirdağ Web Tasarım ve SEO Eğitimi
description: Tekirdağ web tasarım ve SEO eğitimi blog yazıları. Web tasarım teknikleri, SEO stratejileri ve dijital pazarlama ipuçları.
keywords: web tasarım blog, SEO blog, tekirdağ web tasarım, dijital eğitim blog
author: Tekirdağ Web Tasarım Blogu
robots: index, follow
canonical: https://techwithomer.github.io/blog/
---

<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ page.title }}</title>
    <meta name="description" content="{{ page.description }}">
    <meta name="keywords" content="{{ page.keywords }}">
    <meta name="author" content="{{ page.author }}">
    <meta name="robots" content="{{ page.robots }}">
    <link rel="canonical" href="{{ page.canonical }}">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <div class="container">
            <h1>Tekirdağ Web Tasarım ve SEO Eğitimi</h1>
            <nav>
                <ul>
                    <li><a href="/">Ana Sayfa</a></li>
                    <li><a href="/blog">Blog</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <section class="content">
            <div class="container">
                <h2>Blog Yazıları</h2>
                <p>Web tasarım ve SEO eğitimi ile ilgili güncel yazılarımızı keşfedin. Pratik ipuçları, trend analizleri ve profesyonel tekniklerle dolu içerikler.</p>

                <div id="blog-list" class="blog-list">
                    <!-- Blog posts will be loaded here by JavaScript -->
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <p>&copy; 2024 Tekirdağ Web Tasarım ve SEO Eğitimi Blogu. Tüm hakları saklıdır.</p>
        </div>
    </footer>

    <script src="js/post.js"></script>
    <script src="js/app.js"></script>
</body>
</html>
