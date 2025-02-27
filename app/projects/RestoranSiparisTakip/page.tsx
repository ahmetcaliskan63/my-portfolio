'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiGithub, FiExternalLink } from 'react-icons/fi';

const images = [
  '/resimler/Rsts/rsts1.png',
  '/resimler/Rsts/rsts2.png',
  '/resimler/Rsts/rsts3.png',
  '/resimler/Rsts/rsts4.png',
  '/resimler/Rsts/rsts5.png'
];

export default function RestoranSiparisTakipDetail() {
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
            Restoran Sipariş Takip Sistemi, modern restoranların sipariş yönetimini dijitalleştirerek operasyonel verimliliği ve müşteri memnuniyetini artıran kapsamlı bir web uygulamasıdır. Masa yönetimi, gerçek zamanlı sipariş takibi, mutfak operasyonları, stok kontrolü ve detaylı raporlama gibi gelişmiş özellikler sunarak tüm süreçleri optimize eder. Entegre sipariş takip sistemi sayesinde, mutfak ve servis ekipleri anlık olarak sipariş durumlarını görüntüleyebilir ve siparişlerin zamanında, eksiksiz teslim edilmesini sağlar. Kullanıcı dostu arayüzü ve esnek entegrasyon seçenekleri ile restoranlar, hizmet kalitesini artırırken iş süreçlerini daha hızlı ve verimli bir şekilde yönetebilir.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-400">Proje Özellikleri</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  Gerçek Zamanlı Sipariş Takibi – Siparişlerin mutfağa iletilmesini, hazırlanma sürecini ve teslimat durumunu anlık olarak takip etme imkanı.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  Masa ve Rezervasyon Yönetimi – Restoran içindeki masa durumlarını görüntüleyerek rezervasyon ve müşteri yerleşimini kolayca yönetme.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  Mutfak Yönetimi Entegrasyonu – Şefler ve mutfak ekibi için siparişleri önceliklendiren, hazırlanma sürecini hızlandıran verimli bir sistem.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  Gelişmiş Raporlama ve Analiz – Günlük, haftalık ve aylık satış raporlarıyla restoran performansını analiz etme ve veriye dayalı kararlar alma.
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-blue-400">Teknolojiler</h2>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full">ASP.NET Core </span>
                  <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full">MVC Yapısı</span>
                  <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full">JavaScript </span>
                  <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full">HTML/CSS</span>
                  <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full">PostgreSQL</span>

                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-blue-400">Bağlantılar</h2>
                <div className="flex flex-col gap-4">
                  <a
                    href="https://github.com/ahmetcaliskan63/RestoranSiparisTakipSistemi"
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