'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleProjectsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Projelerimi Gör butonuna tıklandı');
    router.push('/projects');
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('İletişime Geç butonuna tıklandı');
    router.push('/contact');
  };

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('CV İndir butonuna tıklandı');
    const link = document.createElement('a');
    link.href = 'Ahmet_Calisan.pdf'; // CV dosyanızın yolu
    link.download = 'Ahmet_Caliskan_CV.pdf'; // İndirilecek dosya adı
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
            FullStack Developer
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

          {/* Butonlar */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              style={{ zIndex: 10 }}
            >
              <Link
                href="/projects"
                onClick={handleProjectsClick}
                className="relative inline-block px-6 py-3 bg-gray-800/50 backdrop-blur-sm text-white rounded-full font-medium transition-colors duration-300 hover:bg-gray-700 hover:shadow-lg hover:shadow-white/50 before:content-[''] before:absolute before:inset-0 before:rounded-full before:border-2 before:border-white/50 before:transition-transform before:animate-border-pulse shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.9)]"
              >
                Projelerimi Gör
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              style={{ zIndex: 10 }}
            >
              <Link
                href="/contact"
                onClick={handleContactClick}
                className="relative inline-block px-6 py-3 bg-gray-800/50 backdrop-blur-sm text-white rounded-full font-medium transition-colors duration-300 hover:bg-gray-700 hover:shadow-lg hover:shadow-white/50 before:content-[''] before:absolute before:inset-0 before:rounded-full before:border-2 before:border-white/50 before:transition-transform before:animate-border-pulse shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.9)]"
              >
                İletişime Geç
              </Link>
            </motion.div>

            {/* CV İndir Butonu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              style={{ zIndex: 10 }}
            >
              <Link
                href="#"
                onClick={handleDownloadCV}
                className="relative inline-block px-6 py-3 bg-gray-800/50 backdrop-blur-sm text-white rounded-full font-medium transition-colors duration-300 hover:bg-gray-700 hover:shadow-lg hover:shadow-white/50 before:content-[''] before:absolute before:inset-0 before:rounded-full before:border-2 before:border-white/50 before:transition-transform before:animate-border-pulse shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.9)]"
              >
                CV İndir
              </Link>
            </motion.div>
          </div>
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
            {/* İkonlar */}
            <div className="flex justify-center gap-4 absolute bottom-[-60px] left-1/2 transform -translate-x-1/2">
              {/* GitHub İkonu */}
              <a
                href="https://github.com/ahmetcaliskan63/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  fill="currentColor"
                  className="h-10 w-10"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.304 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577 0-.287-.011-1.243-.017-2.25-3.338.724-4.042-1.607-4.042-1.607-.546-1.384-1.333-1.754-1.333-1.754-1.089-.743.083-.728.083-.728 1.205.085 1.838 1.237 1.237 1.237 1.07 1.83 2.807 1.301 3.49.995.108-.775.419-1.301.762-1.601-2.665-.303-5.467-1.333-5.467-5.933 0-1.313.469-2.386 1.236-3.227-.124-.303-.535-1.53.117-3.187 0 0 1.008-.322 3.303 1.227.957-.266 1.986-.399 3.006-.404 1.02.005 2.049.138 3.006.404 2.295-1.549 3.303-1.227 3.303-1.227.653 1.657.241 2.884.118 3.187.768.841 1.236 1.914 1.236 3.227 0 4.608-2.805 5.63-5.475 5.925.43.37.815 1.099.815 2.22 0 1.604-.014 2.898-.014 3.287 0 .319.19.694.8.577C20.563 21.8 24 17.304 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn İkonu */}
              <a
                href="https://www.linkedin.com/in/ahmetcaliskann/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  fill="currentColor"
                  className="h-10 w-10"
                >
                  <path d="M19.5 0h-15C2.01 0 0 2.01 0 4.5v15C0 21.99 2.01 24 4.5 24h15c2.49 0 4.5-2.01 4.5-4.5v-15C24 2.01 21.99 0 19.5 0zM7.5 20h-3v-10h3v10zm-1.5-11.5c-.966 0-1.5-.634-1.5-1.5 0-.866.534-1.5 1.5-1.5s1.5.634 1.5 1.5c0 .866-.534 1.5-1.5 1.5zm15 11.5h-3v-5.5c0-1.309-.025-3-1.825-3-1.826 0-2.1 1.425-2.1 2.9v5.6h-3v-10h3v1.4h.042c.42-.793 1.44-1.63 2.96-1.63 3.16 0 3.74 2.08 3.74 4.78v5.46z" />
                </svg>
              </a>

              {/* Mail İkonu */}
              <a
                href="mailto:caliskanahmmet@gmail.com"
                className="h-10 w-10 text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  className="h-10 w-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 30 30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </a>

              {/* LeetCode İkonu */}
              <a
                href="https://leetcode.com/u/ahmet_63/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  className="h-10 w-10"
                  viewBox="0 0 30 30"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
              </a>
            </div>

            {/* Teknoloji ikonları */}
            {/* {technologies.map((tech, index) => (
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
            ))} */}
          </div>
        </motion.div>
      </div>

      {/* Alt Metin */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-300 text-center">
        Ahmet ÇALIŞKAN tarafından tasarlanıp kodlanmıştır. 2025
      </div>
    </div>
  );
}
