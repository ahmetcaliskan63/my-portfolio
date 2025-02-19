'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  // Burada teknolojileri değiştirebilirsiniz
  const technologies = ['React.js', 'Next.js', 'React Native', 'TypeScript',' Node.js Express.js', 'PHP', 'Bootstrap', 'HTML5/CSS3', 'RESTful API', 'MySQL', 'Postgresql' ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 -z-10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-5">
        <motion.div
          className="absolute h-56 w-56 rounded-full bg-primary/20 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            top: '20%',
            left: '25%',
          }}
        />
        <motion.div
          className="absolute h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            top: '50%',
            right: '25%',
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Sol Taraf - Metin İçeriği */}
        <motion.div 
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
              Merhaba, Ben Ahmet Çalışkan
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl text-primary mb-6">
              Frontend Developer
            </h2>
          </motion.div>
          
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            3 yıllık frontend geliştirme deneyimine sahibim. Modern web teknolojileri
            ve kullanıcı deneyimi konularında uzmanım. Responsive tasarım ve
            performans optimizasyonu konularında başarılı projeler geliştirdim.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link
              href="/projects"
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
            >
              Projelerimi Gör
            </Link>
            <Link
              href="/contact"
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
            >
              İletişime Geç
            </Link>
          </motion.div>
        </motion.div>

        {/* Sağ Taraf - Profil Resmi */}
        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="relative w-72 h-72 mx-auto">
            {/* Arka plan daire */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 rounded-full blur-2xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Profil resmi */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/50">
              <Image
                src="/profil.jpg"
                alt="Profil Fotoğrafı"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Teknoloji ikonları */}
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                className="absolute bg-gray-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                style={{
                  top: `${30 + index * 20}%`,
                  right: index % 2 === 0 ? '-20%' : 'auto',
                  left: index % 2 === 1 ? '-20%' : 'auto',
                }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll İndikatörü */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
