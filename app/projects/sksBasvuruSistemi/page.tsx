'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiGithub, FiExternalLink, FiClipboard, FiCheckSquare, FiPieChart, FiShield } from 'react-icons/fi';

const images = Array.from({ length: 11 }, (_, i) => `/resimler/sksBasvuru/b${i + 1}.png`);

export default function SKSBasvuruDetail() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen bg-space-950 text-white pt-32 pb-20 px-4 md:px-8 relative overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/20 blur-[150px] rounded-full animate-pulse opacity-30" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-600/20 blur-[150px] rounded-full animate-pulse opacity-30" />
      </div>

      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-2xl border border-white/10 transition-all backdrop-blur-md"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold uppercase tracking-widest text-xs md:text-sm">Projelere Dön</span>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16 space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight italic select-none uppercase tracking-tighter">
            SKS BAŞVURU <span className="text-blue-500">SİSTEMİ</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
            SKS Başvuru Sistemi, üniversite bünyesindeki Sağlık, Kültür ve Spor Daire Başkanlığı süreçlerini
            tamamen dijital ortama taşıyan kurumsal bir platformdur. Öğrencilerin yemek bursu,
            kısmi zamanlı çalışma ve kulüp faaliyetleri gibi başvurularını şeffaf bir şekilde yönetmelerine olanak tanır.
            Kağıtsız ofis vizyonuyla bürokrasiyi azaltır ve başvuru süreçlerini hızlandırır.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Visuals Section (Slider) */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative group"
            >
              <div className="relative h-[400px] md:h-[550px] w-full bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl backdrop-blur-sm shimmer-dark">
                <Image
                  src={images[currentImageIndex]}
                  alt={`SKS Başvuru View ${currentImageIndex + 1}`}
                  fill
                  className="object-contain p-4 md:p-8"
                  priority
                  onLoadingComplete={(img) => {
                    img.parentElement?.classList.remove('shimmer-dark');
                  }}
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
              <div className="grid grid-cols-4 gap-3">
                {[
                  { icon: <FiClipboard />, title: 'Online' },
                  { icon: <FiCheckSquare />, title: 'Süreç' },
                  { icon: <FiPieChart />, title: 'Analiz' },
                  { icon: <FiShield />, title: 'Güvenli' }
                ].map((f, i) => (
                  <div key={i} className="bg-white/5 p-3 rounded-xl border border-white/5 flex flex-col items-center text-center gap-2">
                    <div className="text-xl text-blue-500">{f.icon}</div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter leading-none">{f.title}</span>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-6 h-1 bg-purple-500 rounded-full" />
                  Teknolojiler
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['PHP', 'CodeIgniter 4', 'MySQL', 'JavaScript', 'Bootstrap'].map((t) => (
                    <span key={t} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-medium text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/ahmetcaliskan63/sksBasvuruSistemi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl border border-white/10 transition-all font-bold"
                >
                  <FiGithub size={20} /> GitHub
                </a>
                <a
                  href="https://github.com/ahmetcaliskan63/sksBasvuruSistemi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl shadow-lg hover:shadow-blue-500/25 transition-all font-bold"
                >
                  <FiExternalLink size={20} /> Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}