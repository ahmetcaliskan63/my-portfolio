'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiGithub, FiExternalLink, FiFileText, FiDatabase, FiLock, FiMonitor } from 'react-icons/fi';

const images = Array.from({ length: 6 }, (_, i) => `/resimler/labsis/lab${i + 1}.png`);

export default function LabsisDetail() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen bg-space-950 text-white pt-20 pb-10 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden -z-10 bg-[#020617]">
        <div className="absolute top-0 right-0 w-full h-full bg-blue-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto max-w-7xl pt-10 pb-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-2xl border border-white/10 transition-all backdrop-blur-md"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold uppercase tracking-widest text-xs md:text-sm text-white">Projelere Dön</span>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16 space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight uppercase">
            LAB<span className="text-blue-500">SIS</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light text-justify max-w-3xl mx-auto">
            Labsis, üniversite laboratuvarlarındaki ders yönetim süreçlerini dijitalleştiren kapsamlı bir akademik platformdur.
            Akademisyenlerin deney içeriklerini paylaşabildiği, öğrencilerin ders materyallerine kolayca erişebildiği ve
            laboratuvar envanterinin yönetilebildiği kurumsal bir çözüm sunar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visuals Section (Slider) */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative group"
            >
              <div className="relative h-[400px] md:h-[650px] w-full bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl backdrop-blur-sm shimmer-dark">
                <Image
                  src={images[currentImageIndex]}
                  alt={`Labsis View ${currentImageIndex + 1}`}
                  fill
                  className="object-contain p-4 md:p-8"
                  priority
                />

                {/* Navigation Arrows */}
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                  <button
                    onClick={prevImage}
                    className="p-4 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-md border border-white/10 transition-all pointer-events-auto active:scale-95"
                  >
                    <FiArrowLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="p-4 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-md border border-white/10 transition-all pointer-events-auto active:scale-95"
                  >
                    <FiArrowRight size={24} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative w-24 h-16 rounded-xl overflow-hidden flex-shrink-0 transition-all border-2 ${index === currentImageIndex
                    ? 'border-blue-500 scale-105 shadow-[0_0_20px_rgba(59,130,246,0.5)]'
                    : 'border-transparent opacity-40 hover:opacity-100'
                    }`}
                >
                  <Image src={img} alt={`Thumb ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Project Info Section */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <FiFileText />, title: 'Document Mgmt' },
                  { icon: <FiDatabase />, title: 'Inventory' },
                  { icon: <FiLock />, title: 'Secure Access' },
                  { icon: <FiMonitor />, title: 'Dashboard' }
                ].map((f, i) => (
                  <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center gap-4 hover:bg-white/10 transition-all group">
                    <div className="text-3xl text-blue-500 group-hover:scale-110 transition-transform">{f.icon}</div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{f.title}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-6 h-1 bg-blue-500 rounded-full" />
                    Teknolojiler
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['CodeIgniter 4', 'PHP', 'JavaScript', 'MySQL', 'Bootstrap', 'HTML/CSS'].map((t) => (
                      <span key={t} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-medium text-gray-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/ahmetcaliskan63"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl border border-white/10 transition-all font-bold text-sm md:text-base"
                >
                  <FiGithub size={20} /> GitHub
                </a>
                <div className="flex items-center justify-center gap-2 py-4 bg-blue-600/50 cursor-not-allowed text-white rounded-2xl shadow-lg transition-all font-bold text-sm md:text-base">
                  <FiExternalLink size={20} /> Demo İsteyin
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Detail */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 space-y-4">
            <h4 className="text-xl font-bold text-white uppercase tracking-tight">🔬 Deney Yönetimi</h4>
            <p className="text-gray-400 text-sm leading-relaxed">Laboratuvar dersleri için gerekli olan tüm deney adımlarının ve raporlama formatlarının dijital takibi.</p>
          </div>
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 space-y-4">
            <h4 className="text-xl font-bold text-white uppercase tracking-tight">📦 Envanter Takibi</h4>
            <p className="text-gray-400 text-sm leading-relaxed">Laboratuvarlarda bulunan cihazların ve sarf malzemelerin anlık stok durumlarının ve kullanım geçmişlerinin izlenmesi.</p>
          </div>
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 space-y-4">
            <h4 className="text-xl font-bold text-white uppercase tracking-tight">🎓 Akademik Arşiv</h4>
            <p className="text-gray-400 text-sm leading-relaxed">Geçmiş yıllardaki deney sonuçlarının ve öğrenci çalışmalarının güvenli bir şekilde saklandığı merkezi veri tabanı.</p>
          </div>
        </div>
      </div>
    </div>
  );
}