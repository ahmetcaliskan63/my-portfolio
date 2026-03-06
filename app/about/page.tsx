'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCode, FaLanguage, FaTools, FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaRocket, FaLightbulb, FaUserAstronaut } from "react-icons/fa";

export default function About() {
  const skills = [
    {
      category: 'Frontend',
      icon: <FaCode className="text-electric" />,
      items: ['React.js', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      color: 'bg-electric/10'
    },
    {
      category: 'Backend',
      icon: <FaRocket className="text-cyber" />,
      items: ['Node.js', 'Express.js', 'PHP', 'RESTful API', 'MySQL', 'PostgreSQL', 'MongoDB'],
      color: 'bg-cyber/10'
    },
    {
      category: 'Araçlar',
      icon: <FaTools className="text-primary" />,
      items: ['Git', 'Docker', 'VS Code', 'Postman', 'Vercel', 'Firebase'],
      color: 'bg-primary/10'
    },
    {
      category: 'Diller',
      icon: <FaLanguage className="text-cyan-400" />,
      items: ['Türkçe', 'İngilizce', 'Arapça'],
      color: 'bg-cyan-400/10'
    }
  ];

  const education = [
    {
      title: 'Yazılım Mühendisliği',
      institution: 'Kırklareli Üniversitesi',
      period: '2022 - Devam Ediyor',
      description: 'Lisans eğitimi',
      color: 'bg-blue-500'
    },
    {
      title: 'Anadolu Grup Bi’fikir Kap Final Yarışma 4’üncülüğü',
      institution: 'Anadolu Grup',
      period: '18 Eylül 2025 - 19 Eylül 2025',
      description: 'İstanbul',
      color: 'bg-purple-500'
    },
    {
      title: 'TEKNOFEST 2025 Istanbul Final Türkiye 7’ciliği',
      institution: 'TEKNOFEST',
      period: '17 Eylül 2025 - 21 Eylül 2025',
      description: 'Blockchain Kategorisi Üniversite Seviyesi - İstanbul',
      color: 'bg-purple-600'
    },
    {
      title: 'TEKNOFEST 2025 Istanbul Final Türkiye 8’inciliği',
      institution: 'TEKNOFEST',
      period: '17 Eylül 2025 - 21 Eylül 2025',
      description: 'Akıllı Ulaşım Kategorisi Üniversite Seviyesi - İstanbul',
      color: 'bg-indigo-500'
    },
    {
      title: 'TEKNOFEST 2024 Adana Final Türkiye 9’unculuğu',
      institution: 'TEKNOFEST',
      period: '2 Ekim 2024 - 6 Ekim 2024',
      description: 'İnsanlık Yararına Teknoloji Yarışması Afet Yönetimi Kategorisi - Antalya',
      color: 'bg-indigo-600'
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
                      Yazılım geliştirme alanında kendini sürekli geliştirmeye odaklanan bir <span className="text-white font-bold">Full-Stack Developer</span>’ım. Şu anda Kırklareli Üniversitesi Yazılım Mühendisliği bölümünde eğitimime devam ederken aynı zamanda kurumsal ve gerçek dünya projelerinde aktif olarak çalışıyorum.
                    </p>
                    <p>
                      Web ve mobil uygulama geliştirme konusunda özellikle <span className="text-electric font-semibold">React.js, Next.js, React Native ve .NET</span> teknolojileri ile çalışıyorum. Performanslı, kullanıcı odaklı ve ölçeklenebilir uygulamalar geliştirmeye odaklanıyorum.
                    </p>
                    <p className="text-gray-400">
                      <span className="text-white/80 font-medium">Aras Kargo, Yapıdrom Mobility, TÜYAFED ve Kırklareli Üniversitesi</span> gibi kurumlarda edindiğim deneyimlerle kurumsal yazılım geliştirme süreçlerini yakından tanıma fırsatı buldum. Bu süreçte hem teknik becerilerimi hem de ekip çalışması ve problem çözme yetkinliklerimi geliştirdim.
                    </p>
                    <p className="border-l-4 border-cyber/50 pl-6 py-2 bg-white/5 rounded-r-2xl italic text-gray-300">
                      "Aynı zamanda <span className="text-cyber font-semibold">yapay zekânın mobil uygulamalara entegrasyonu ve yeni nesil yazılım mimarileri</span> üzerine araştırmalar yapıyor ve kendimi bu alanlarda geliştirmeye devam ediyorum."
                    </p>
                    <p>
                      Amacım; kullanıcıların gerçek problemlerini çözen, ölçeklenebilir ve yüksek performanslı yazılım ürünleri geliştirmek.
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
                      <p className="text-sm text-gray-500 leading-relaxed italic">{item.description}</p>
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

          {/* Skills Grid (Bento Medium - Now moved below for better flow) */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`col-span-1 ${skill.color} border border-white/10 p-8 rounded-[2rem] hover:scale-[1.02] transition-all relative overflow-hidden group`}
              >
                <div className="text-3xl mb-6 group-hover:scale-110 transition-transform duration-500">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-bold mb-4 tracking-wider uppercase">{skill.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="text-[10px] px-3 py-1.5 rounded-lg bg-black/20 text-gray-300 font-medium whitespace-nowrap">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
