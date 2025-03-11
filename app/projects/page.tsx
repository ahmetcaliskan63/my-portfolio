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
    description: 'Kırklarelindeki üniversite öğrencilerinin yurt yemek menülerine kolayca erişebilmesini sağlamak için React ile geliştirdiğimiz bu uygulama, kullanıcıların günlük ve geçmiş menüleri görüntülemesine olanak tanırken, Firebase entegrasyonu sayesinde performans ve etkileşimleri analiz ederek daha verimli bir deneyim sunuyor.',
    image: '/resimler/kykYemek/kyk1.png',
    technologies: ['React.js', 'Firebase', 'JavaScript'],
    githubUrl: 'https://github.com/yourusername/kyk-menu',
    liveUrl: 'https://kykmenu.vercel.app/',
    detailUrl: '/projects/kykYemek'
  },
  {
    title: 'Labsis',
    description: 'Labsis, üniversitelerde laboratuvar derslerinin yönetimini kolaylaştıran, akademisyenlerin deneylerini paylaşmasını ve öğrencilerin ders içeriklerine erişimini sağlayan kapsamlı bir web uygulamasıdır.',
    image: '/resimler/labsis/lab1.png',
    technologies: ['CodeIgniter 4', 'PHP', 'JavaScript', 'HTML/CSS'],
    githubUrl: 'https://github.com/yourusername/labsis',
    liveUrl: 'https://example.com',
    detailUrl: '/projects/labsis'
  },
  {
    title: 'Restoran Sipariş Takip Sistemi',
    description: 'Restoran işletmelerinin sipariş süreçlerini dijitalleştiren ve yöneten kapsamlı bir web uygulaması. Masaların durumu, siparişlerin takibi, mutfak yönetimi ve raporlama gibi temel özellikleri içerir.',
    image: '/resimler/Rsts/rsts1.png',
    technologies: ['ASP.NET Core', 'MVC Yapısı', 'JavaScript', 'HTML/CSS',"PostgreSQL"],
    githubUrl: 'https://github.com/ahmetcaliskan63/RestoranSiparisTakip',
    liveUrl: 'https://example.com',
    detailUrl: '/projects/RestoranSiparisTakip'
  },
  {
    title: 'E-Commerce Side',
    description: 'Modern ve kullanıcı dostu bir e-ticaret platformu. Ürün yönetimi, sepet işlemleri, ödeme entegrasyonu ve admin paneli gibi kapsamlı özelliklere sahip full-stack bir web uygulaması.',
    image: '/resimler/e-commerce-side/eco1.png',
    technologies: ['React', 'JavaScript', 'TailwindCSS'],
    githubUrl: 'https://github.com/ahmetcaliskan63/e-commerce-side',
    liveUrl: 'https://example.com',
    detailUrl: '/projects/e-commerce-side'
  },
  {
    title: 'AssignmentHelper',
    description: 'Öğrencilerin ödev ve proje yönetimini kolaylaştıran bir web uygulaması. Ödevlerin takibi, teslim tarihleri hatırlatması, dosya yönetimi ve grup çalışması özellikleri ile akademik başarıyı destekler.',
    image: '/resimler/AssignmentHelper/A1.jpg',
    technologies: ['React native', 'Node.js', 'Express.js', 'mySQL'],
    githubUrl: 'https://github.com/ahmetcaliskan63/AssignmentHelper',
    liveUrl: 'https://example.com',
    detailUrl: '/projects/AssignmentHelper'
  },
  {
    title: 'SKS Başvuru Sistemi',
    description: 'Üniversite öğrencilerinin Sağlık, Kültür ve Spor Dairesi Başkanlığı\'na yapacakları başvuruları dijital ortama taşıyan, başvuru süreçlerini kolaylaştıran ve yönetim paneli sunan kapsamlı bir web uygulaması.',
    image: '/resimler/sksBasvuru/b1.png',
    technologies: ['PHP', 'CodeIgniter 4', 'MySQL', 'JavaScript', 'Bootstrap',"HTML/CSS"],
    githubUrl: 'https://github.com/ahmetcaliskan63/sksBasvuruSistemi',
    liveUrl: 'https://example.com',
    detailUrl: '/projects/sksBasvuruSistemi'
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 -z-10" />
      
      <div className="container mx-auto px-8 md:px-12 lg:px-16 max-w-7xl">
        <motion.h1 
          className="text-3xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projelerim
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div key={project.title} className="flex flex-col h-full">
              <Link href={project.detailUrl} className="flex-1 block">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 shadow-lg transition-transform transform hover:scale-105 h-full"
                >
                  <div className="relative h-48 md:h-56">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  <div className="p-5 md:p-6 flex flex-col h-full">
                    <h3 className="text-lg md:text-xl font-semibold mb-3 text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-400 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies && project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm bg-[#242424] text-gray-300 rounded-md border border-gray-700/50"
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