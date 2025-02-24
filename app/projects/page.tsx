'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';


// Proje verilerini burada tanımlıyoruz
const projects = [
  {
    title: 'Social Campus',
    description: 'Social Campus, Kırklareli Üniversitesi öğrencilerinin kampüs yaşamını kolaylaştıran ve zenginleştiren; yemek menüsü görüntüleme, öğrenci kulüplerine katılma, kampüs gündemi hakkında sohbet etme ve ikinci el eşya satışı gibi özellikler sunar.',
    image: '/resimler/kluCampus/klu1.png',
    technologies: ['React native', 'Node.js', 'Express.js', 'mySQL'],
    githubUrl: 'https://github.com/ahmetcaliskan63/SOCIALCAMPUS1',
    liveUrl: 'https://example.com',
    detailUrl: '/projects/kluCampus'
  },
  {
    title: 'KYK Yemek Menüsü',
    description: 'KYK yurtlarında kalan öğrenciler için geliştirilmiş, günlük ve haftalık yemek & kahvaltı menülerini gösteren, besin değerleri hakkında bilgi veren modern bir web uygulaması.',
    image: '/resimler/kykYemek/kyk1.png',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/kyk-menu',
    liveUrl: 'https://example.com',
    detailUrl: '/projects/kykYemek'
  },
  {
    title: 'Labsis',
    description: 'Laboratuvar derslerinin yönetimi için geliştirilmiş, öğrenci yoklama, deney raporları takibi ve not değerlendirme sistemi sunan kapsamlı bir web uygulaması.',
    image: '/resimler/labsis/lab1.png',
    technologies: ['React.js', 'Firebase', 'Material-UI', 'Node.js'],
    githubUrl: 'https://github.com/yourusername/labsis',
    liveUrl: 'https://example.com',
    detailUrl: '/projects/labsis'
  }
  
];

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
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
            <div key={project.title} className="flex flex-col">
              <Link href={project.detailUrl}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-lg transition-transform transform hover:scale-105 h-full flex flex-col"
                >
                  <div className="relative h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 flex-grow">
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
                  </div>
                </motion.div>
              </Link>

              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => window.open(project.githubUrl, '_blank')}
                  className="flex-1 text-center py-2 rounded-lg bg-[#1a1a1a] text-white border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] hover:border-blue-500/50 transition-all duration-300"
                >
                  GitHub
                </button>
                <button
                  onClick={() => window.open(project.liveUrl, '_blank')}
                  className="flex-1 text-center py-2 rounded-lg bg-[#1a1a1a] text-white border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] hover:border-blue-500/50 transition-all duration-300"
                >
                  Canlı Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}