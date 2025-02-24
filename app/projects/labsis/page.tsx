'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiGithub, FiExternalLink } from 'react-icons/fi';

const images = [
  '/resimler/labsis/lab1.png',
  '/resimler/labsis/lab2.png',
  '/resimler/labsis/lab3.png',
  '/resimler/labsis/lab4.png',
  '/resimler/labsis/lab5.png',
   '/resimler/labsis/lab6.png'
];

export default function LabsisDetail() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Labsis
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Laboratuvar dersleri yönetim ve değerlendirme sistemi
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative max-w-5xl mx-auto mb-16 group"
        >
          <div className="relative h-[600px] w-full rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={images[currentImageIndex]}
              alt={`Screenshot ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

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

          <div className="flex justify-center gap-4 mt-6 overflow-x-auto pb-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-20 h-20 relative rounded-lg overflow-hidden transition-all ${
                  index === currentImageIndex ? 'ring-2 ring-purple-500 scale-110' : 'opacity-50 hover:opacity-100'
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

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-12"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6 text-purple-400">Proje Özellikleri</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  Öğrenci yoklama sistemi
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  Deney raporları yönetimi
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  Not değerlendirme sistemi
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  Laboratuvar programı planlaması
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-purple-400">Teknolojiler</h2>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full">React.js</span>
                <span className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full">Firebase</span>
                <span className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full">Material-UI</span>
                <span className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full">Node.js</span>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-6 text-purple-400">Bağlantılar</h2>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/yourusername/labsis"
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
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                  >
                    <FiExternalLink size={20} />
                    <span>Canlı Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}