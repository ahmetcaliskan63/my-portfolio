'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { containerVariants, cardVariants } from '../utils/animations';

// Proje verilerini burada tanımlıyoruz
const projects = [
  {
    title: 'E-Ticaret Platformu',
    description: 'Modern bir e-ticaret platformu. Kullanıcılar ürünleri görüntüleyebilir, sepete ekleyebilir ve satın alabilir.',
    image: '/project1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/username/e-commerce',
    liveUrl: 'https://example.com',
    features: [
      'Kullanıcı kimlik doğrulama',
      'Ödeme entegrasyonu',
      'Ürün filtreleme',
      'Sepet yönetimi'
    ]
  },
  {
    title: 'Task Yönetim Uygulaması',
    description: 'Drag-and-drop özellikli, gerçek zamanlı task yönetim uygulaması.',
    image: '/project2.jpg',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com/username/task-manager',
    liveUrl: 'https://example.com',
    features: [
      'Gerçek zamanlı güncelleme',
      'Drag-and-drop',
      'Ekip yönetimi',
      'İlerleme takibi'
    ]
  },
  {
    title: 'Blog Platformu',
    description: 'SEO dostu, markdown destekli modern blog platformu.',
    image: '/project3.jpg',
    technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/username/blog-platform',
    liveUrl: 'https://example.com',
    features: [
      'Markdown desteği',
      'SEO optimizasyonu',
      'Yorum sistemi',
      'Sosyal medya paylaşımı'
    ]
  },
  // Daha fazla proje ekleyebilirsiniz
];

export default function Projects() {
  return (
    <div className="py-12">
      {/* Başlık */}
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate="animate"
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
          Projelerim
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Modern web teknolojileri kullanarak geliştirdiğim projeler.
          Her projede kullanıcı deneyimini ve performansı ön planda tutuyorum.
        </p>
      </motion.div>

      {/* Projeler Grid */}
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            whileHover="hover"
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            {/* Proje Resmi */}
            <div className="relative h-48 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-10" />
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Teknoloji Etiketleri */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.1
                    }}
                    className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary backdrop-blur-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Proje Detayları */}
            <div className="p-6">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-semibold mb-2 text-white"
              >
                {project.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-400 mb-4 line-clamp-2"
              >
                {project.description}
              </motion.p>

              {/* Özellik Listesi */}
              <motion.ul
                initial="initial"
                animate="animate"
                variants={containerVariants}
                className="mb-6 space-y-2"
              >
                {project.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    variants={cardVariants}
                    className="text-sm text-gray-400 flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>

              {/* Butonlar */}
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
                >
                  GitHub
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  Canlı Demo
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 