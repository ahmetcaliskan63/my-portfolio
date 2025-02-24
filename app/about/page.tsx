import { FaCode, FaLanguage, FaTools } from "react-icons/fa";

export default function About() {
  const skills = [
    { 
      category: 'Frontend', 
      items: ['React.js', 'Next.js', 'React Native', 'TypeScript', 'Bootstrap', 'HTML5/CSS3']
    },
    { 
      category: 'Backend', 
      items: ['Node.js', 'Express.js', 'PHP', 'RESTful API', 'MySQL', 'PostgreSQL']
    },
    { 
      category: 'Araçlar', 
      items: ['Git', 'VS Code', 'Postman']
    },
    { 
      category: 'Dil', 
      items: ['İngilizce', 'Türkçe', 'Arapça']
    }
  ];
  const experiences = [
    {
      title: 'Yazılım Geliştirme',
      company: 'Kırklareli Üniversitesi',
      type: 'Yarı zamanlı',
      period: 'Kasım 2024 - devam ediyor',
      location: 'Kırklareli'
    },
    {
      title: 'Gönüllü Genç Lideri',
      company: 'Kırklareli Gençlik Merkezi',
      type: 'Tam zamanlı',
      period: 'Kasım 2024 - devam ediyor',
      location: 'Kırklareli'
    },
    {
      title: 'Co Lead',
      company: 'Yapay Zeka ve Veri Bilimi Kulübü',
      type: 'Tam zamanlı',
      period: 'Aralık 2023 - devam ediyor',
      location: 'Kırklareli'
    },
    {
      title: 'Core Team',
      company: 'GDSC Kırklareli',
      type: 'Tam zamanlı',
      period: 'Eylül 2023 - Haziran 2024',
      location: 'Kırklareli'
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Kişisel Bilgiler */}
          <section>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              AHMET ÇALIŞKAN
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-300">
              Yazılım Mühendisliği
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
            Merhaba! Ben, Ahmet Çalışkan, Kırklareli Üniversitesi'nde Yazılım Mühendisliği 3. sınıf öğrencisiyim. Yazılım geliştirme alanında kendimi sürekli geliştiriyor, özellikle web ve mobil uygulama geliştirme konularına yoğunlaşıyorum. Etkileşimli ve ölçeklenebilir projeler üretmeye büyük ilgi duyuyorum.

React, React Native ve modern web teknolojileriyle çalışarak hem web hem de mobil platformlarda yenilikçi projeler geliştiriyorum. Çözüm odaklı yaklaşımım sayesinde, kullanıcı deneyimini ön planda tutan ve performansı yüksek uygulamalar geliştirmeye odaklanıyorum. Şu anda Kırklareli Üniversitesi'nde yazılım geliştirme alanında çalışıyor ve farklı projelerde aktif olarak yer alıyorum. Bu süreç, yalnızca teknik becerilerimi geliştirmekle kalmayıp, aynı zamanda yazılım projelerinin her aşamasında karar verme, optimizasyon ve proje yönetimi becerilerimi de güçlendirmemi sağlıyor.

Üniversite hayatım boyunca Google Developer Student Clubs (GDSC) ve Women Techmakers (WTM) gibi uluslararası teknoloji topluluklarında aktif rol aldım. Şu an Kırklareli Üniversitesi Data Science ve Yapay Zeka Kulübü'nün başkan yardımcısı olarak, veri bilimi ve yapay zeka projelerinde çalışıyor ve teknik etkinlikler düzenleyerek bilgi paylaşımına katkıda bulunuyorum.
            </p>
          </section>

          {/* Yetenekler */}
          <section>
            <h2 className="text-2xl font-bold mb-8 text-blue-400">Beceriler</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-300 flex items-center gap-2">
                    {skillGroup.category === 'Frontend' && <FaCode />}
                    {skillGroup.category === 'Backend' && <FaCode />}
                    {skillGroup.category === 'Araçlar' && <FaTools />}
                    {skillGroup.category === 'Dil' && <FaLanguage />}
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Deneyim */}
          <section>
            <h2 className="text-2xl font-bold mb-8 text-blue-400">Deneyim</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-gray-400">{exp.company}</p>
                    </div>
                    <div className="text-sm text-gray-500 mt-2 md:mt-0">
                      <p>{exp.period}</p>
                      <p className="text-right">{exp.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">{exp.type}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}