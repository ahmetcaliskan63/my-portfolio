'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Proje verilerini burada tanımlıyoruz
const projects = [
  {
    title: 'E-Ticaret Platformu',
    description: 'Modern bir e-ticaret platformu. Kullanıcılar ürünleri görüntüleyebilir, sepete ekleyebilir ve satın alabilir.',
    image: '/project1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/username/e-commerce',
    liveUrl: 'https://example.com'
  },
  {
    title: 'Task Yönetim Uygulaması',
    description: 'Drag-and-drop özellikli, gerçek zamanlı task yönetim uygulaması.',
    image: '/project2.jpg',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com/username/task-manager',
    liveUrl: 'https://example.com'
  },
  {
    title: 'Blog Platformu',
    description: 'SEO dostu, markdown destekli modern blog platformu.',
    image: '/project3.jpg',
    technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/username/blog-platform',
    liveUrl: 'https://example.com'
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 -z-10" />
      
      <div className="container mx-auto px-4 py-12">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projelerim
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 rounded-lg bg-[#1a1a1a] text-white border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] hover:border-blue-500/50 transition-all duration-300"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 rounded-lg bg-[#1a1a1a] text-white border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] hover:border-blue-500/50 transition-all duration-300"
                  >
                    Canlı Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 