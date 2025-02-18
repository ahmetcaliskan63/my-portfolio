'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Medium RSS feed'ini JSON'a çeviren bir servis kullanıyoruz
const MEDIUM_RSS_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@YOUR_MEDIUM_USERNAME';

interface BlogPost {
  title: string;
  thumbnail: string;
  pubDate: string;
  link: string;
  description: string;
  categories: string[];
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(MEDIUM_RSS_URL);
        const data = await response.json();
        setPosts(data.items || []);
      } catch (error) {
        console.error('Blog yazıları yüklenirken hata oluştu:', error);
        // Hata durumunda örnek veriler gösterelim
        setPosts(samplePosts);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Örnek blog yazıları (API çalışmadığında gösterilecek)
  const samplePosts = [
    {
      title: 'Modern Web Geliştirme: Next.js ve React',
      thumbnail: '/blog1.jpg',
      pubDate: '2024-02-18',
      link: 'https://medium.com/@username/article-1',
      description: 'Modern web geliştirme dünyasında Next.js ve React kullanarak nasıl daha iyi uygulamalar geliştirebileceğinizi öğrenin.',
      categories: ['Web Development', 'React', 'Next.js']
    },
    {
      title: 'TypeScript ile Güvenli Kod Yazımı',
      thumbnail: '/blog2.jpg',
      pubDate: '2024-02-15',
      link: 'https://medium.com/@username/article-2',
      description: 'TypeScript kullanarak nasıl daha güvenli ve sürdürülebilir kod yazabileceğinizi keşfedin.',
      categories: ['TypeScript', 'JavaScript', 'Programming']
    },
    {
      title: 'Frontend Performans Optimizasyonu',
      thumbnail: '/blog3.jpg',
      pubDate: '2024-02-10',
      link: 'https://medium.com/@username/article-3',
      description: 'Web uygulamalarınızı nasıl optimize edebilir ve daha iyi performans elde edebilirsiniz?',
      categories: ['Performance', 'Web Development', 'Optimization']
    }
  ];

  return (
    <div className="py-12">
      {/* Başlık */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
          Blog Yazılarım
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Web geliştirme, teknoloji ve yazılım dünyasından deneyimlerimi ve öğrendiklerimi paylaşıyorum.
        </p>
      </motion.div>

      {/* Loading Durumu */}
      {isLoading && (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}

      {/* Blog Yazıları Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.article
            key={post.link}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Blog Görseli */}
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-10" />
              {post.thumbnail && (
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              )}
              {/* Kategoriler */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap gap-2">
                {post.categories?.slice(0, 3).map((category) => (
                  <span
                    key={category}
                    className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary backdrop-blur-sm"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>

            {/* Blog İçeriği */}
            <div className="p-6">
              <div className="text-sm text-gray-400 mb-2">
                {new Date(post.pubDate).toLocaleDateString('tr-TR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <h2 className="text-xl font-semibold mb-3 text-white line-clamp-2">
                {post.title}
              </h2>
              <p className="text-gray-400 mb-4 line-clamp-3">
                {post.description}
              </p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-white transition-colors"
              >
                <span>Devamını Oku</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
} 