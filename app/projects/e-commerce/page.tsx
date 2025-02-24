'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ECommerce() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 -z-10" />
      
      <div className="container mx-auto px-4 py-12">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-8 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          E-Ticaret Platformu
        </motion.h1>
        
        <div className="relative h-48 mb-8">
          <Image
            src="/project1.jpg" // Proje resmini buraya ekle
            alt="E-Ticaret Platformu"
            fill
            className="object-cover"
          />
        </div>

        <p className="text-lg text-gray-300 mb-4">
          Modern bir e-ticaret platformu. Kullanıcılar ürünleri görüntüleyebilir, sepete ekleyebilir ve satın alabilir.
        </p>

        <h2 className="text-xl font-semibold text-white mb-2">Teknolojiler:</h2>
        <ul className="list-disc list-inside text-gray-400">
          <li>React</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Stripe</li>
        </ul>
      </div>
    </div>
  );
} 