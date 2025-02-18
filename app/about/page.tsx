export default function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
    { category: 'Araçlar', items: ['Git', 'Docker', 'VS Code', 'Figma'] },
  ];

  return (
    <div className="py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
        Hakkımda
      </h1>
      
      <div className="space-y-12">
        {/* Kişisel Bilgiler */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Merhaba, Ben [Adınız]
          </h2>
          <p className="text-secondary text-lg leading-relaxed mb-6">
            5 yıllık deneyime sahip bir Full Stack geliştiriciyim. Modern web teknolojileri
            ve kullanıcı deneyimi odaklı geliştirme konularında uzmanım. Sürekli öğrenmeye
            ve kendimi geliştirmeye odaklanıyorum.
          </p>
        </section>

        {/* Yetenekler */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-primary">
            Yeteneklerim
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-secondary p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary text-white text-sm rounded-full"
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
          <h2 className="text-2xl font-semibold mb-6 text-primary">
            Deneyim
          </h2>
          <div className="space-y-6">
            <div className="bg-secondary p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary">
                    Kıdemli Yazılım Geliştirici
                  </h3>
                  <p className="text-secondary">Örnek Şirket A.Ş.</p>
                </div>
                <span className="text-sm text-secondary">2020 - Günümüz</span>
              </div>
              <p className="text-secondary">
                Modern web uygulamaları geliştirme, teknik liderlik ve
                mentorluk konularında aktif rol aldım.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 