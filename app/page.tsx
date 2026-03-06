'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { SiLeetcode } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FiArrowRight, FiDownload, FiCheck } from 'react-icons/fi';

export default function Home() {
  const router = useRouter();
  const [isCopied, setIsCopied] = useState(false);

  const handleProjectsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/projects');
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/contact');
  };

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/resimler/AhmetCALISKAN.pdf';
    link.download = 'Ahmet_Caliskan_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const email = 'ahmetcaliskan.dev@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-x-hidden bg-space-900 px-6 py-20 md:py-0">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-space-800/40 via-space-900 to-space-900 pointer-events-none" />

      <div className="container mx-auto max-w-4xl flex flex-col items-center text-center relative z-10">

        {/* Main Name Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-4 bg-gradient-to-r from-electric via-cyber to-primary bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent tracking-tighter leading-[1.1] md:leading-none sm:whitespace-nowrap">
          Merhaba, Ben Ahmet Çalışkan
        </h1>

        {/* Job Title */}
        <h2 className="text-sm sm:text-base md:text-xl text-gray-100 font-bold mb-6 md:mb-8 tracking-[0.15em] md:tracking-[0.3em] uppercase px-4">
          Full Stack Developer & Yazılım Mühendisi
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-lg mb-10 md:mb-12 max-w-2xl leading-relaxed font-normal px-2">
          Modern web ve mobil teknolojilerini kullanarak kullanıcı odaklı, yüksek performanslı ve ölçeklenebilir uçtan uca dijital çözümler geliştiriyorum. Karmaşık backend mimarilerinden dinamik frontend arayüzlerine kadar yazılım yaşam döngüsünü profesyonel standartlarda yönetiyorum.
        </p>

        {/* Primary Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-8 w-full sm:w-auto px-4">
          <button
            onClick={handleProjectsClick}
            className="flex items-center justify-center gap-3 px-8 md:px-10 py-3.5 md:py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold transition-all group shadow-[0_0_20px_rgba(0,123,255,0.3)] hover:shadow-[0_0_35px_rgba(0,123,255,0.5)] text-sm md:text-base"
          >
            <span>Projelerimi İncele</span>
            <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={handleContactClick}
            className="px-8 md:px-10 py-3.5 md:py-4 bg-transparent border-2 border-gray-700 hover:border-gray-400 text-gray-200 rounded-xl font-bold transition-all shadow-lg hover:bg-white/5 text-sm md:text-base"
          >
            İletişime Geç
          </button>
        </div>

        {/* Download CV Button */}
        <button
          onClick={handleDownloadCV}
          className="flex items-center justify-center gap-3 px-8 md:px-10 py-3.5 md:py-4 bg-cyber/80 hover:bg-cyber text-white rounded-xl font-bold transition-all mb-12 shadow-[0_0_200px_rgba(188,19,254,0.15)] hover:shadow-[0_0_35px_rgba(188,19,254,0.4)] text-sm md:text-base"
        >
          <span>CV İndir</span>
          <FiDownload className="text-xl animate-bounce" />
        </button>

        {/* Social Icons */}
        <div className="flex gap-6 md:gap-10 items-center relative">
          {[
            { id: 'github', icon: <FaGithub />, link: 'https://github.com/ahmetcaliskan63/' },
            { id: 'linkedin', icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/ahmetcaliskann/' },
            { id: 'leetcode', icon: <SiLeetcode />, link: 'https://leetcode.com/u/ahmet_63/' },
            { id: 'email', icon: <FaEnvelope />, link: '#', isEmail: true }
          ].map((social) => (
            <div key={social.id} className="relative group">
              <a
                href={social.link}
                onClick={social.isEmail ? handleCopyEmail : undefined}
                target={social.link.startsWith('http') ? "_blank" : undefined}
                rel={social.link.startsWith('http') ? "noopener noreferrer" : undefined}
                className="text-2xl md:text-3xl text-gray-500 hover:text-electric transition-all duration-300 hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] flex items-center justify-center"
              >
                {social.icon}
              </a>

              {/* Tooltip for Email */}
              {social.id === 'email' && (
                <AnimatePresence>
                  {isCopied && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ opacity: 1, y: -45, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.8 }}
                      className="absolute left-1/2 -translate-x-1/2 px-4 py-1.5 bg-green-500 text-white text-[11px] font-black rounded-lg shadow-[0_4px_15px_rgba(34,197,94,0.4)] pointer-events-none flex items-center gap-1.5 whitespace-nowrap z-50"
                    >
                      <FiCheck className="text-sm stroke-[3]" /> KOPYALANDI
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* Footer Branded Line */}
      <div className="absolute bottom-8 w-full text-center px-6">
        <div className="flex items-center justify-center gap-4 md:gap-6 opacity-60">
          <div className="hidden sm:block h-[1px] flex-1 max-w-[100px] bg-gradient-to-r from-transparent via-gray-700 to-transparent md:via-gray-800" />
          <p className="text-[8px] md:text-[11px] tracking-[0.2em] md:tracking-[0.4em] uppercase font-bold bg-gradient-to-r from-gray-500 via-white/40 to-gray-500 bg-clip-text text-transparent">
            Ahmet ÇALIŞKAN tarafından tasarlanıp kodlanmıştır. 2025
          </p>
          <div className="hidden sm:block h-[1px] flex-1 max-w-[100px] bg-gradient-to-r from-transparent via-gray-700 to-transparent md:via-gray-800" />
        </div>
      </div>
    </div>
  );
}
