'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaCode, FaLanguage, FaTools, FaBriefcase, FaMapMarkerAlt, FaRocket, FaLightbulb } from "react-icons/fa";
import { education, experiences, skills, Role, volunteering } from '../constants';
import GalleryModal from '../components/GalleryModal';
import SkillCard from '../components/SkillCard';

export default function About() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeGalleryImages, setActiveGalleryImages] = useState<string[]>([]);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const skillIcons: { [key: string]: React.ReactNode } = {
    'Frontend 💻': <FaCode className="text-electric" />,
    'Backend 🚀': <FaRocket className="text-cyber" />,
    'Araçlar 🛠': <FaTools className="text-primary" />,
    'Diller 🌐': <FaLanguage className="text-cyan-400" />
  };

  const openGallery = (images: string[], index: number = 0) => {
    setActiveGalleryImages(images);
    setCurrentGalleryIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => setIsGalleryOpen(false);

  const nextGalleryImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentGalleryIndex((prev) => (prev + 1) % activeGalleryImages.length);
  };

  const prevGalleryImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentGalleryIndex((prev) => (prev - 1 + activeGalleryImages.length) % activeGalleryImages.length);
  };

  return (
    <div className="min-h-screen bg-space-950 text-white pt-32 pb-20 px-4 md:px-8 relative overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-electric/20 blur-[150px] rounded-full animate-pulse opacity-30" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-cyber/20 blur-[150px] rounded-full animate-pulse opacity-30" />
        <div className="absolute top-[30%] right-[10%] w-[10%] h-[10%] bg-white/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 px-4"
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6 md:mb-8 tracking-[-0.05em] leading-none uppercase relative">
            <span className="bg-gradient-to-b from-white via-white/90 to-white/20 bg-clip-text text-transparent italic select-none">
              HAKKIMDA
            </span>
            <div className="absolute -inset-x-20 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent -z-10" />
          </h1>
          <p className="text-lg md:text-2xl font-extralight text-gray-400 max-w-4xl mx-auto leading-relaxed tracking-wide">
            Modern teknolojilerle <span className="text-electric font-bold drop-shadow-[0_0_15px_rgba(0,243,255,0.3)]">hızlı</span>, <span className="text-cyber font-bold drop-shadow-[0_0_15px_rgba(255,0,229,0.3)] text-transparent bg-clip-text bg-gradient-to-r from-cyber to-primary">ölçeklenebilir</span> ve kullanıcı odaklı uygulamalar geliştiriyorum.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-24">

          {/* Main Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-12 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-6 md:p-12 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-electric/20 blur-[80px] rounded-full opacity-30" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-shrink-0 flex flex-col items-center gap-6 group">
                <div className="relative w-40 h-40 md:w-60 md:h-60">
                  <div className="absolute inset-0 bg-gradient-to-tr from-electric via-cyber to-primary rounded-3xl rotate-12 group-hover:rotate-0 transition-transform duration-700 opacity-20" />
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl shadow-electric/20 backdrop-blur-md shimmer">
                    <Image
                      src="/profil.jpg"
                      alt="Ahmet Çalışkan"
                      fill
                      priority
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      onLoadingComplete={(img) => {
                        img.parentElement?.classList.remove('shimmer');
                      }}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-black tracking-widest uppercase group-hover:text-electric transition-colors duration-500">
                    Ahmet <span className="text-electric group-hover:text-white transition-colors duration-500">Çalışkan</span>
                  </h3>
                  <p className="text-[10px] text-gray-400 tracking-[0.4em] mt-1 font-bold">FULL STACK DEVELOPER</p>
                </div>
              </div>

              <div className="flex-1 space-y-8">
                <div className="space-y-6">
                  <h4 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                    <span className="w-8 h-1 bg-electric rounded-full" />
                    Hikayem & Vizyonum
                  </h4>
                  <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                    <p>
                      Yazılım mühendisliği disipliniyle modern teknolojileri harmanlayarak ölçeklenebilir ve yüksek performanslı dijital çözümler üreten bir <span className="text-white font-bold">Full-Stack Developer</span>’ım. Şu anda Kırklareli Üniversitesi’nde eğitimime devam ederken, kurumsal projelerde uçtan uca yazılım geliştirme süreçlerini profesyonel standartlarda yönetiyorum.
                    </p>
                    <p>
                      Teknik uzmanlığım, modern web mimarilerinden mobil uygulama ekosistemlerine kadar geniş bir yelpazeyi kapsamaktadır. Özellikle <span className="text-electric font-semibold">React.js, Next.js, .NET Core ve React Native</span> teknolojileri ile karmaşık iş mantıklarını, kullanıcı dostu ve optimize edilmiş arayüzlere dönüştürüyorum.
                    </p>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                      <span className="text-white/80 font-medium">Aras Kargo, Yapıdrom Mobility ve Kırklareli Üniversitesi</span> gibi prestijli kurumlarda yer aldığım projelerde, yüksek trafikli sistemlerin mimari tasarımı ve veritabanı optimizasyonu konularında kritik deneyimler edindim. Stratejik problem çözme yaklaşımım ve ekip içindeki sinerjimle projelere değer katmaya odaklanıyorum.
                    </p>
                    <p className="border-l-4 border-cyber/50 pl-6 py-2 bg-white/5 rounded-r-2xl italic text-gray-300">
                      "Yalnızca kod yazmıyor; <span className="text-cyber font-semibold">yapay zeka entegrasyonları, blockchain teknolojileri ve modern yazılım paternleri</span> ile geleceğin inovatif ürünlerini bugünden inşa ediyorum."
                    </p>
                    <p>
                      Vizyonum, yenilikçi yaklaşımlarla küresel standartlarda yazılım deneyimleri sunmaktır.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-12 space-y-8 mt-6">
            {/* Üst Sıra: Eğitim ve Deneyim Yan Yana */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* Eğitim Bölümü */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-[2.5rem] p-6 md:p-10 h-full"
              >
                <h4 className="text-xl md:text-2xl font-bold text-blue-400 mb-8 flex items-center gap-3">
                  <FaLightbulb className="text-yellow-400/80" /> Eğitim & Başarılar
                </h4>
                <div className="space-y-6 relative before:absolute before:inset-0 before:left-[7px] before:w-px before:bg-white/10">
                  {education.map((item, i) => (
                    <div key={i} className="relative pl-8 group">
                      <div className={`absolute left-0 top-1.5 w-3 h-3 rounded-full ${item.color} z-10 shadow-[0_0_10px_rgba(59,130,246,0.3)]`} />
                      <div className="space-y-0.5">
                        <h5 className="text-base md:text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{item.title}</h5>
                        <p className="text-xs md:text-sm text-gray-400 font-medium">{item.institution}</p>
                        <p className="text-[10px] text-gray-500">{item.period}</p>
                        <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed italic mb-3 line-clamp-2 hover:line-clamp-none transition-all">{item.description}</p>

                        {item.images && (item.images as string[]).length > 0 && (
                          <div className="flex flex-wrap gap-1.5">
                            {(item.images as string[]).slice(0, 4).map((img, idx) => (
                              <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05, y: -1 }}
                                onClick={() => openGallery(item.images as string[], idx)}
                                className="relative w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden cursor-zoom-in border border-white/5 hover:border-blue-400/30 transition-colors bg-white/5 shimmer-dark"
                              >
                                <Image
                                  src={img}
                                  alt={`${item.title} ${idx + 1}`}
                                  fill
                                  className="object-cover"
                                  onLoadingComplete={(img) => {
                                    img.parentElement?.classList.remove('shimmer-dark');
                                  }}
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover/img:bg-transparent transition-colors" />
                                {idx === 3 && item.images.length > 4 && (
                                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-[1px]">
                                    <span className="text-white text-[10px] font-bold">+{item.images.length - 4}</span>
                                  </div>
                                )}
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Deneyim Bölümü */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-[2.5rem] p-6 md:p-10 h-full flex flex-col"
              >
                <h4 className="text-xl md:text-2xl font-bold text-blue-400 mb-10 flex items-center gap-3">
                  <FaBriefcase className="text-blue-400/80" /> Deneyim
                </h4>
                <div className="space-y-10 md:space-y-12 flex-1">
                  {experiences.map((exp, i) => (
                    <div key={i} className="flex items-start gap-4 md:gap-6 group">
                      <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-2xl md:rounded-[1.25rem] border border-white/5 overflow-hidden flex items-center justify-center group-hover:bg-white/20 transition-all shadow-xl">
                        {exp.logo ? (
                          <div className="w-full h-full shimmer-dark">
                            <Image
                              src={exp.logo}
                              alt={exp.company}
                              width={48}
                              height={48}
                              className="object-contain w-full h-full p-1 rounded-2xl md:rounded-[1.25rem]"
                              onLoadingComplete={(img) => {
                                img.parentElement?.classList.remove('shimmer-dark');
                              }}
                            />
                          </div>
                        ) : (
                          <div className="text-xl md:text-2xl text-blue-400 opacity-80 group-hover:scale-110 transition-transform">
                            <FaBriefcase />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 space-y-4">
                        <div>
                          <h5 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-wider">{exp.company}</h5>
                          <p className="text-xs text-gray-500 font-medium mt-1 uppercase tracking-widest">{exp.location}</p>
                        </div>

                        <div className="relative space-y-8 before:absolute before:inset-0 before:left-[11px] before:w-[2px] before:bg-white/5 before:top-2 before:bottom-2">
                          {exp.roles.map((role: Role, ri: number) => (
                            <div key={ri} className="relative pl-8 group/role">
                              <div className="absolute left-0 top-2 w-[24px] h-[24px] -translate-x-1/2 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-blue-500/40 group-hover/role:bg-blue-400 group-hover/role:scale-150 transition-all shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                              </div>
                              <div className="space-y-1">
                                <h6 className="text-lg font-bold text-white group-hover/role:text-blue-300 transition-colors leading-none">{role.title}</h6>
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                  <span className="font-semibold">{role.period}</span>
                                  <span className="opacity-30">·</span>
                                  <span>{role.duration}</span>
                                  {role.location && (
                                    <>
                                      <span className="opacity-30">·</span>
                                      <span className="text-blue-400/60 italic">{role.location}</span>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Alt Sıra: Yatay Gönüllülükler (Tam Genişlik) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-[2.5rem] p-6 md:p-12 w-full shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 blur-[100px] rounded-full -z-10" />

              <h4 className="text-2xl md:text-3xl font-black text-blue-400 mb-8 md:mb-12 flex items-center justify-center gap-4 text-center">
                <FaRocket className="animate-pulse" />
                Gönüllülükler
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {volunteering.map((exp, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="bg-white/5 border border-white/10 rounded-3xl p-5 md:p-6 hover:border-blue-400/30 transition-all duration-500 group"
                  >
                    <div className="flex flex-col gap-4 md:gap-6">
                      <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-[1rem] md:rounded-[1.25rem] border border-white/5 overflow-hidden flex items-center justify-center group-hover:bg-white/20 transition-all shadow-xl">
                        {exp.logo ? (
                          <div className="w-full h-full shimmer-dark">
                            <Image
                              src={exp.logo}
                              alt={exp.company}
                              width={48}
                              height={48}
                              className="object-contain w-full h-full p-1 rounded-2xl md:rounded-[1.25rem]"
                              onLoadingComplete={(img) => {
                                img.parentElement?.classList.remove('shimmer-dark');
                              }}
                            />
                          </div>
                        ) : (
                          <div className="text-2xl text-blue-400 opacity-80 group-hover:scale-110 transition-transform">
                            <FaBriefcase />
                          </div>
                        )}
                      </div>

                      <div className="space-y-4">
                        <h5 className="text-base md:text-lg font-bold text-white group-hover:text-blue-400 transition-colors uppercase leading-tight min-h-[2.5rem] md:min-h-[3rem] flex items-center">
                          {exp.company}
                        </h5>

                        <div className="space-y-3">
                          {exp.roles.map((role: Role, ri: number) => (
                            <div key={ri} className="space-y-1 border-l-2 border-white/5 pl-4 group-hover:border-blue-400/30 transition-colors">
                              <h6 className="text-sm md:text-base font-bold text-gray-200 leading-tight">{role.title}</h6>
                              <div className="text-[10px] text-gray-500 space-y-0.5 font-medium">
                                <p className="uppercase">{role.period}</p>
                                <p className="text-blue-400/60 lowercase italic">{role.duration}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Yetenekler Bölümü */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                category={skill.category}
                icon={skillIcons[skill.category]}
                items={skill.items}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      <GalleryModal
        isOpen={isGalleryOpen}
        images={activeGalleryImages}
        currentIndex={currentGalleryIndex}
        onClose={closeGallery}
        onNext={nextGalleryImage}
        onPrev={prevGalleryImage}
        onSelect={setCurrentGalleryIndex}
      />
    </div>
  );
}
