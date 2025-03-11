'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiGithub, FiExternalLink } from 'react-icons/fi';

const images = [
  '/resimler/sksBasvuru/b1.png',
  '/resimler/sksBasvuru/b2.png',
  '/resimler/sksBasvuru/b3.png',
  '/resimler/sksBasvuru/b4.png',
  '/resimler/sksBasvuru/b5.png',
  '/resimler/sksBasvuru/b6.png',
  '/resimler/sksBasvuru/b7.png',
  '/resimler/sksBasvuru/b8.png',
  '/resimler/sksBasvuru/b9.png',
  '/resimler/sksBasvuru/b10.png',
  '/resimler/sksBasvuru/b11.png',


];

export default function SksBasvuruSistemiDetail() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pb-12">
      <div className="container mx-auto px-4 pt-16">
        {/* Geri Dön Butonu */}
        <div className="mb-6">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-all duration-300 shadow-lg"
          >
            <FiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Projelere Dön</span>
          </Link>
        </div>

        {/* Görsel Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative max-w-4xl mx-auto mb-12 group"
        >
          <div className="relative h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={images[currentImageIndex]}
              alt={`Screenshot ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <FiArrowLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <FiArrowRight size={24} />
          </button>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-3 mt-4 overflow-x-auto pb-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-16 h-16 relative rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                  index === currentImageIndex ? 'ring-2 ring-blue-500 scale-110' : 'opacity-50 hover:opacity-100'
                }`}
              >
                <Image
                  src={images[index]}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Proje Detayları */}
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Proje Hakkında</h2>
            <p className="text-gray-300 leading-relaxed">
              SKS Başvuru Sistemi, üniversite öğrencilerinin Sağlık, Kültür ve Spor Dairesi Başkanlığı na yapacakları 
              başvuruları dijital ortama taşıyan kapsamlı bir web uygulamasıdır. Bu platform, öğrencilerin burs, 
              yemek yardımı, barınma desteği ve diğer sosyal yardım başvurularını çevrimiçi olarak yapmalarını ve 
              takip etmelerini sağlar. Aynı zamanda SKS personelinin başvuruları değerlendirmesi ve yönetmesi için 
              gelişmiş bir yönetim paneli sunar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-400">Proje Özellikleri</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  Çevrimiçi Başvuru Sistemi – Öğrencilerin tüm SKS hizmetlerine dijital ortamda başvuru yapabilmesi
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  Başvuru Takibi – Öğrencilerin başvuru durumlarını anlık olarak takip edebilmesi
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  Belge Yükleme – Gerekli belgelerin dijital olarak sisteme yüklenebilmesi
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  Yönetim Paneli – SKS personeli için başvuruları değerlendirme ve yönetme arayüzü
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-blue-400">Teknolojiler</h2>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full">PHP</span>
                  <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full">CodeIgniter 4</span>
                  <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full">MySQL</span>
                  <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full">JavaScript</span>
                  <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full">Bootstrap</span>
                  <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full">HTML/CSS</span>

                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-blue-400">Bağlantılar</h2>
                <div className="flex flex-col gap-4">
                  <a
                    href="https://github.com/ahmetcaliskan63/sksBasvuruSistemi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <FiGithub size={20} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                  >
                    <FiExternalLink size={20} />
                    <span>Canlı Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}