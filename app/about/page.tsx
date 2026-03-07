'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaCode, FaLanguage, FaTools, FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaRocket, FaLightbulb, FaUserAstronaut, FaImage } from "react-icons/fa";
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function About() {
  const skills = [
    {
      category: 'Frontend 💻',
      icon: <FaCode className="text-electric" />,
      items: ['React.js', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'SPA / PWA / Spabeyz'],
      color: 'bg-electric/10'
    },
    {
      category: 'Backend 🚀',
      icon: <FaRocket className="text-cyber" />,
      items: ['.NET Core / ASP.NET MVC', 'Node.js / Express.js', 'RESTful API', 'MySQL / MSSQL / PostgreSQL', 'MongoDB'],
      color: 'bg-cyber/10'
    },
    {
      category: 'Araçlar 🛠',
      icon: <FaTools className="text-primary" />,
      items: ['Git / GitHub', 'Docker', 'VS Code', 'Postman', 'Vercel / Firebase'],
      color: 'bg-primary/10'
    },
    {
      category: 'Diller 🌐',
      icon: <FaLanguage className="text-cyan-400" />,
      items: ['Türkçe', 'İngilizce', 'Arapça'],
      color: 'bg-cyan-400/10'
    }
  ];

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeGalleryImages, setActiveGalleryImages] = useState<string[]>([]);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

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

  const education = [
    {
      title: 'Yazılım Mühendisliği',
      institution: 'Kırklareli Üniversitesi',
      period: '2022 - Devam Ediyor',
      description: 'Lisans eğitimi',
      color: 'bg-blue-500',
      images: [
        '/resimler/klu/9.jpg',
        '/resimler/klu/6.jpg',
        '/resimler/klu/3.webp',
        '/resimler/klu/4.jpg',
        '/resimler/klu/8.jpg',
        '/resimler/klu/7.jpg'
      ]
    },
    {
      title: 'Anadolu Grup Bi’fikir Kap Final Yarışma 4’üncülüğü',
      institution: 'Anadolu Grup',
      period: '18 Eylül 2025 - 19 Eylül 2025',
      description: 'İstanbul',
      color: 'bg-purple-500',
      images: Array.from({ length: 9 }, (_, i) => `/resimler/AnadoluGrup/${i + 1}.jpg`)
    },
    {
      title: 'TEKNOFEST 2025 Istanbul Final Türkiye 7’ciliği',
      institution: 'TEKNOFEST',
      period: '17 Eylül 2025 - 21 Eylül 2025',
      description: 'Blockchain Kategorisi Üniversite Seviyesi - İstanbul',
      color: 'bg-purple-600',
      images: Array.from({ length: 5 }, (_, i) => `/resimler/Blockchain/${i + 1}.jpg`)
    },
    {
      title: 'TEKNOFEST 2025 Istanbul Final Türkiye 8’inciliği',
      institution: 'TEKNOFEST',
      period: '17 Eylül 2025 - 21 Eylül 2025',
      description: 'Akıllı Ulaşım Kategorisi Üniversite Seviyesi - İstanbul',
      color: 'bg-indigo-500',
      images: Array.from({ length: 5 }, (_, i) => `/resimler/AkılıUlaşım/${i + 1}.jpg`)
    },
    {
      title: 'TEKNOFEST 2024 Adana Final Türkiye 9’unculuğu',
      institution: 'TEKNOFEST',
      period: '2 Ekim 2024 - 6 Ekim 2024',
      description: 'İnsanlık Yararına Teknoloji Yarışması Afet Yönetimi Kategorisi - Antalya',
      color: 'bg-indigo-600',
      images: Array.from({ length: 4 }, (_, i) => `/resimler/2024teknofest/${i + 1}.jpg`)
    }
  ];

  const experiences = [
    {
      company: 'Aras Kargo',
      location: 'Beykoz, İstanbul · Ofiste',
      logo: '/resimler/kluCampus/aras_kargo_logo.jpg',
      icon: <FaBriefcase />,
      roles: [
        {
          title: 'Full-stack Developer Intern',
          period: 'Haziran 2025 - Eylül 2025',
          duration: '4 ay',
        }
      ]
    },
    {
      company: 'Yapıdrom Mobility',
      location: 'İstanbul, Türkiye · Hibrit',
      logo: '/resimler/kluCampus/yapidrom_logo.jpg',
      icon: <FaRocket />,
      roles: [
        {
          title: 'Full-stack Developer Intern',
          period: 'Nisan 2025 - Haziran 2025',
          duration: '3 ay',
        }
      ]
    },
    {
      company: 'T3 Vakfı',
      location: 'Kırklareli, Türkiye · Hibrit',
      logo: '/resimler/kluCampus/t3_vakfi_logo.jpg',
      icon: <FaLightbulb />,
      roles: [
        {
          title: 'Sen Geleceksin Bursiyeri',
          period: 'Ocak 2026 - Devam ediyor',
          duration: '3 ay',
        },
        {
          title: 'Mentör',
          period: 'Aralık 2024 - Mayıs 2025',
          duration: '6 ay',
        }
      ]
    },
    {
      company: 'Kırklareli Üniversitesi',
      location: 'Kırklareli, Türkiye',
      logo: '/resimler/kluCampus/krklareliuniversity_logo.jpg',
      icon: <FaCode />,
      roles: [
        {
          title: 'Full-stack Developer',
          period: 'Kasım 2025 - Devam ediyor',
          duration: '5 ay',
          location: 'Ofiste'
        },
        {
          title: 'Full-stack Developer Intern',
          period: 'Kasım 2024 - Mayıs 2025',
          duration: '7 ay',
          location: 'Hibrit'
        }
      ]
    },
    {
      company: 'TÜYAFED Yazılımcılar Federasyonu',
      location: 'Yeniköy, İstanbul · Uzaktan',
      logo: '/resimler/kluCampus/tuyafed_logo.jpg',
      icon: <FaTools />,
      roles: [
        {
          title: 'Full-stack Developer Intern',
          period: 'Nisan 2025 - Eylül 2025',
          duration: '6 ay',
        }
      ]
    },
    {
      company: 'Gençlik ve Spor Bakanlığı',
      location: 'Kırklareli, Türkiye',
      logo: '/resimler/kluCampus/gsb_logo.jpg',
      icon: <FaMapMarkerAlt />,
      roles: [
        {
          title: 'Gençlik Lideri',
          period: 'Kasım 2024 - Devam ediyor',
          duration: '1 yıl 5 ay',
        }
      ]
    },
    {
      company: 'Yapay Zeka ve Veri Bilimi Kulübü',
      location: 'Kırklareli, Türkiye',
      logo: '/resimler/kluCampus/yapayZeka_logo.jpg',
      icon: <FaLightbulb />,
      roles: [
        {
          title: 'Co-Lead',
          period: 'Aralık 2023 - Mayıs 2025',
          duration: '1 yıl 6 ay',
          location: 'Bilim ve Teknoloji'
        }
      ]
    },
    {
      company: 'GDSC Kırklareli',
      location: 'Kırklareli, Türkiye',
      logo: '/resimler/kluCampus/GDSC_logo.jpg',
      icon: <FaCode />,
      roles: [
        {
          title: 'Core Team Member',
          period: 'Eylül 2023 - Haziran 2024',
          duration: '10 ay',
          location: 'Bilim ve Teknoloji'
        }
      ]
    },
    {
      company: 'Women Techmakers Kırklareli',
      location: 'Kırklareli, Türkiye',
      logo: '/resimler/kluCampus/women_techmakers_krklarel_logo.jpg',
      icon: <FaTools />,
      roles: [
        {
          title: 'Core Team Member',
          period: 'Aralık 2022 - Haziran 2023',
          duration: '7 ay',
          location: 'Bilim ve Teknoloji'
        }
      ]
    }
  ];

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
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-[ -0.05em] leading-none uppercase relative">
            <span className="bg-gradient-to-b from-white via-white/90 to-white/20 bg-clip-text text-transparent italic select-none">
              HAKKIMDA
            </span>
            <div className="absolute -inset-x-20 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent -z-10" />
          </h1>
          <p className="text-lg md:text-2xl font-extralight text-gray-400 max-w-4xl mx-auto leading-relaxed tracking-wide">
            <span className="text-electric font-bold drop-shadow-[0_0_15px_rgba(0,243,255,0.3)]">Modern Teknolojilerle</span> Geleceğin <span className="text-cyber font-bold drop-shadow-[0_0_15px_rgba(255,0,229,0.3)] text-transparent bg-clip-text bg-gradient-to-r from-cyber to-primary">Çözümlerini</span> İnşa Ediyorum.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-24">

          {/* Main Profile Card (Bento Large - Full Width) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-12 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-electric/20 blur-[80px] rounded-full opacity-30" />

            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-center gap-12">
              <div className="flex-shrink-0 flex flex-col items-center gap-6 group">
                <div className="relative w-48 h-48 md:w-60 md:h-60">
                  <div className="absolute inset-0 bg-gradient-to-tr from-electric via-cyber to-primary rounded-3xl rotate-12 group-hover:rotate-0 transition-transform duration-700 opacity-20" />
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl shadow-electric/20 backdrop-blur-md">
                    <Image
                      src="/profil.jpg"
                      alt="Ahmet Çalışkan"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
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
                    <p className="text-gray-400">
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

          {/* Education and Experience Sections (Görsele Uygun Tasarım) */}
          <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">

            {/* Eğitim & Başarılar (Timeline Style) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-10"
            >
              <h4 className="text-2xl font-bold text-blue-400 mb-10">Eğitim & Başarılar</h4>
              <div className="space-y-8 relative before:absolute before:inset-0 before:left-[7px] before:w-px before:bg-white/10">
                {education.map((item, i) => (
                  <div key={i} className="relative pl-8 group">
                    <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full ${item.color} z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]`} />
                    <div className="space-y-1">
                      <h5 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{item.title}</h5>
                      <p className="text-gray-400 font-medium">{item.institution}</p>
                      <p className="text-sm text-gray-500">{item.period}</p>
                      <p className="text-sm text-gray-500 leading-relaxed italic mb-4">{item.description}</p>

                      {/* Gallery Preview Thumbnails */}
                      {(item as any).images && (item as any).images.length > 0 && (
                        <div className="grid grid-cols-4 sm:flex sm:flex-wrap gap-2 pt-2">
                          {(item as any).images.slice(0, 4).map((img: string, idx: number) => (
                            <motion.div
                              key={idx}
                              whileHover={{ scale: 1.05, y: -2 }}
                              onClick={() => openGallery((item as any).images, idx)}
                              className="relative aspect-[4/3] sm:w-24 sm:h-16 rounded-xl overflow-hidden cursor-zoom-in border border-white/10 hover:border-blue-400/50 transition-colors shadow-lg group/img bg-white/5"
                            >
                              <Image src={img} alt={`${item.title} ${idx + 1}`} fill className="object-cover" />
                              <div className="absolute inset-0 bg-black/20 group-hover/img:bg-transparent transition-colors" />
                              {idx === 3 && (item as any).images.length > 4 && (
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-[2px]">
                                  <span className="text-white text-xs font-bold">+{(item as any).images.length - 4}</span>
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

            {/* Deneyim (Logo List Style) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-10"
            >
              <h4 className="text-2xl font-bold text-blue-400 mb-10">Deneyim</h4>
              <div className="space-y-10">
                {experiences.map((exp, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <div className="flex-shrink-0 w-16 h-16 bg-white/10 rounded-[1.25rem] border border-white/5 overflow-hidden flex items-center justify-center group-hover:bg-white/20 transition-all shadow-xl">
                      {exp.logo ? (
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          width={48}
                          height={48}
                          className="object-contain w-full h-full p-1 rounded-[1.25rem]"
                        />
                      ) : (
                        <div className="text-2xl text-blue-400 opacity-80 group-hover:scale-110 transition-transform">
                          {exp.icon}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h5 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-wider">{exp.company}</h5>
                        <p className="text-xs text-gray-500 font-medium mt-1 uppercase tracking-widest">{exp.location}</p>
                      </div>

                      <div className="relative space-y-6 before:absolute before:inset-0 before:left-[11px] before:w-[2px] before:bg-white/5 before:top-2 before:bottom-2">
                        {exp.roles.map((role, ri) => (
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
                                {(role as any).location && (
                                  <>
                                    <span className="opacity-30">·</span>
                                    <span className="text-blue-400/60 italic">{(role as any).location}</span>
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

          {/* Skills Grid (Premium Redesign Optimized) */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              // Kategoriye özel renk paletleri
              const themes: { [key: string]: { border: string, glow: string, text: string } } = {
                'Frontend 💻': { border: 'border-electric/30', glow: 'shadow-electric/20', text: 'text-electric' },
                'Backend 🚀': { border: 'border-cyber/30', glow: 'shadow-cyber/20', text: 'text-cyber' },
                'Araçlar 🛠': { border: 'border-primary/30', glow: 'shadow-primary/20', text: 'text-primary' },
                'Diller 🌐': { border: 'border-cyan-400/30', glow: 'shadow-cyan-400/20', text: 'text-cyan-400' }
              };
              const theme = themes[skill.category] || themes['Frontend 💻'];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300
                  }}
                  className={`relative group h-full`}
                >
                  {/* Outer Glow Effect on Hover */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-white/10 group-hover:to-transparent rounded-[2.5rem] blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100`} />

                  <div className={`relative h-full flex flex-col bg-slate-900/40 backdrop-blur-3xl border ${theme.border} p-8 rounded-[2.5rem] shadow-2xl transition-all duration-500 overflow-hidden`}>
                    {/* Background Decorative Gradient */}
                    <div className={`absolute -right-10 -top-10 w-32 h-32 bg-current opacity-5 blur-[50px] rounded-full transition-transform duration-700 group-hover:scale-150 ${theme.text}`} />

                    <div className="relative z-10 flex-1 flex flex-col">
                      <div className={`text-5xl mb-6 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]`}>
                        {skill.icon}
                      </div>

                      <h4 className="text-2xl font-black mb-2 tracking-widest uppercase bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all">
                        {skill.category.split(' ')[0]}
                        <span className="ml-2 opacity-50 text-2xl inline-block group-hover:animate-bounce">
                          {skill.category.split(' ')[1]}
                        </span>
                      </h4>

                      <p className="text-sm text-gray-400 mb-8 leading-relaxed font-medium">
                        {(skill as any).description}
                      </p>

                      <div className="flex flex-wrap gap-2.5">
                        {skill.items.map((item, i) => (
                          <motion.span
                            key={i}
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                            className="text-[11px] px-4 py-2 rounded-xl bg-white/5 text-gray-300 font-bold border border-white/5 whitespace-nowrap backdrop-blur-sm transition-all cursor-default shadow-sm hover:text-white"
                          >
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Content Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Image Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeGallery}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          >
            <button
              onClick={closeGallery}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110] p-4"
            >
              <FiX className="text-4xl" />
            </button>

            <div
              className="relative w-full max-w-6xl h-full flex flex-col items-center justify-center p-2 md:p-12"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex items-center justify-between px-2 md:-mx-16 pointer-events-none z-50">
                {activeGalleryImages.length > 1 && (
                  <>
                    <button
                      onClick={prevGalleryImage}
                      className="pointer-events-auto text-white/30 hover:text-white transition-all bg-white/5 hover:bg-white/10 p-3 md:p-4 rounded-full backdrop-blur-md"
                    >
                      <FiChevronLeft className="text-3xl md:text-4xl" />
                    </button>
                    <button
                      onClick={nextGalleryImage}
                      className="pointer-events-auto text-white/30 hover:text-white transition-all bg-white/5 hover:bg-white/10 p-3 md:p-4 rounded-full backdrop-blur-md"
                    >
                      <FiChevronRight className="text-3xl md:text-4xl" />
                    </button>
                  </>
                )}
              </div>

              <motion.div
                key={currentGalleryIndex}
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: -20 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 100) prevGalleryImage({ stopPropagation: () => { } } as any);
                  else if (info.offset.x < -100) nextGalleryImage({ stopPropagation: () => { } } as any);
                }}
                className="relative w-full h-[70vh] md:h-full cursor-grab active:cursor-grabbing"
              >
                <Image
                  src={activeGalleryImages[currentGalleryIndex]}
                  alt="Achievement detail"
                  fill
                  className="object-contain pointer-events-none select-none"
                  priority
                />
              </motion.div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 font-black tracking-[0.4em] text-[10px] md:text-xs uppercase bg-white/5 px-6 py-2 rounded-full backdrop-blur-md border border-white/5 whitespace-nowrap">
                {currentGalleryIndex + 1} / {activeGalleryImages.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
