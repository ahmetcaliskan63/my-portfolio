export interface Role {
    title: string;
    period: string;
    duration: string;
    location?: string;
}

export interface Experience {
    company: string;
    location: string;
    logo: string;
    roles: Role[];
}

export const skills = [
    {
        category: 'Frontend 💻',
        items: ['React.js', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'SPA / PWA / Spabeyz'],
        color: 'bg-electric/10'
    },
    {
        category: 'Backend 🚀',
        items: ['.NET Core / ASP.NET MVC', 'Node.js / Express.js', 'RESTful API', 'MySQL / MSSQL / PostgreSQL', 'MongoDB'],
        color: 'bg-cyber/10'
    },
    {
        category: 'Araçlar 🛠',
        items: ['Git / GitHub', 'Docker', 'VS Code', 'Postman', 'Vercel / Firebase'],
        color: 'bg-primary/10'
    },
    {
        category: 'Diller 🌐',
        items: ['Türkçe', 'İngilizce', 'Arapça'],
        color: 'bg-cyan-400/10'
    }
];

export const education = [
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

export const experiences: Experience[] = [
    {
        company: 'Aras Kargo',
        location: 'Beykoz, İstanbul · Ofiste',
        logo: '/resimler/kluCampus/aras_kargo_logo.jpg',
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
        roles: [
            {
                title: 'Full-stack Developer Intern',
                period: 'Nisan 2025 - Eylül 2025',
                duration: '6 ay',
            }
        ]
    }
];

export const volunteering: Experience[] = [
    {
        company: 'Gençlik ve Spor Bakanlığı',
        location: 'Kırklareli, Türkiye',
        logo: '/resimler/kluCampus/gsb_logo.jpg',
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

export interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl: string;
    liveUrl: string;
    detailUrl: string;
}

export const projects: Project[] = [
    {
        title: 'Dershane Takip Sistemi',
        description: 'Eğitim kurumları için modern, oyunlaştırılmış ve veri odaklı yönetim platformu. Aktivite ağacı, performans grafikleri ve rol bazlı yönetim sistemi ile eğitim süreçlerini dijitalleştirir.',
        image: '/resimler/dershaneTakip/1.png',
        technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'P5.js', 'Framer Motion'],
        githubUrl: '#',
        liveUrl: '',
        detailUrl: '/projects/dershaneTakip'
    },
    {
        title: 'Social Campus',
        description: 'Social Campus, Kırklareli Üniversitesi öğrencilerinin kampüs yaşamını kolaylaştıran ve zenginleştiren; yemek menüsü görüntüleme, öğrenci kulüplerine katılma, kampüs gündemi hakkında sohbet etme ve ikinci el eşya satışı gibi özellikler sunar.',
        image: '/resimler/kluCampus/klu1.png',
        technologies: ['React native', 'Node.js', 'Express.js', 'mySQL'],
        githubUrl: 'https://github.com/ahmetcaliskan63/SOCIALCAMPUS1',
        liveUrl: '',
        detailUrl: '/projects/kluCampus'
    },
    {
        title: 'KYK Yemek Menüsü',
        description: 'Kırklarelindeki university öğrencilerinin yurt yemek menülerine kolayca erişebilmesini sağlamak için React ile geliştirdiğimiz bu uygulama, kullanıcıların günlük ve geçmiş menüleri görüntülemesine olanak tanırken, Firebase entegrasyonu sayesinde performans ve etkileşimleri analiz ederek daha verimli bir deneyim sunuyor.',
        image: '/resimler/kykYemek/kyk1.png',
        technologies: ['React.js', 'Firebase', 'JavaScript'],
        githubUrl: 'https://github.com/yourusername/kyk-menu',
        liveUrl: 'https://kykmenu.vercel.app/',
        detailUrl: '/projects/kykYemek'
    },
    {
        title: 'Labsis',
        description: 'Labsis, üniversitelerde laboratuvar derslerinin yönetimini kolaylaştıran, akademisyenlerin deneylerini paylaşmasını ve öğrencilerin ders içeriklerine erişimini sağlayan kapsamlı bir web uygulamasıdır.',
        image: '/resimler/labsis/lab1.png',
        technologies: ['CodeIgniter 4', 'PHP', 'JavaScript', 'HTML/CSS'],
        githubUrl: 'https://github.com/yourusername/labsis',
        liveUrl: '',
        detailUrl: '/projects/labsis'
    },
    {
        title: 'Restoran Sipariş Takip Sistemi',
        description: 'Restoran işletmelerinin sipariş süreçlerini dijitalleştiren ve yöneten kapsamlı bir web uygulaması. Masaların durumu, siparişlerin takibi, mutfak yönetimi ve raporlama gibi temel özellikleri içerir.',
        image: '/resimler/Rsts/rsts1.png',
        technologies: ['ASP.NET Core', 'MVC Yapısı', 'JavaScript', 'HTML/CSS', "PostgreSQL"],
        githubUrl: 'https://github.com/ahmetcaliskan63/RestoranSiparisTakip',
        liveUrl: '',
        detailUrl: '/projects/RestoranSiparisTakip'
    },
    {
        title: 'E-Commerce Side',
        description: 'Modern ve kullanıcı dostu bir e-ticaret platformu. Ürün yönetimi, sepet işlemleri, ödeme entegrasyonu ve admin paneli gibi kapsamlı özelliklere sahip full-stack bir web uygulaması.',
        image: '/resimler/e-commerce-side/eco1.png',
        technologies: ['React', 'JavaScript', 'TailwindCSS'],
        githubUrl: 'https://github.com/ahmetcaliskan63/e-commerce-side',
        liveUrl: '',
        detailUrl: '/projects/e-commerce-side'
    },
    {
        title: 'AssignmentHelper',
        description: 'Öğrencilerin ödev ve proje yönetimini kolaylaştıran bir web uygulaması. Ödevlerin takibi, teslim tarihleri hatırlatması, dosya yönetimi ve grup çalışması özellikleri ile akademik başarıyı destekler.',
        image: '/resimler/AssignmentHelper/A1.jpg',
        technologies: ['React native', 'Node.js', 'Express.js', 'mySQL'],
        githubUrl: 'https://github.com/ahmetcaliskan63/AssignmentHelper',
        liveUrl: '',
        detailUrl: '/projects/AssignmentHelper'
    },
    {
        title: 'SKS Başvuru Sistemi',
        description: 'Üniversite öğrencilerinin Sağlık, Kültür ve Spor Dairesi Başkanlığı\'na yapacakları başvuruları dijital ortama taşıyan, başvuru süreçlerini kolaylaştıran ve yönetim paneli sunan kapsamlı bir web uygulaması.',
        image: '/resimler/sksBasvuru/b1.png',
        technologies: ['PHP', 'CodeIgniter 4', 'MySQL', 'JavaScript', 'Bootstrap', "HTML/CSS"],
        githubUrl: 'https://github.com/ahmetcaliskan63/sksBasvuruSistemi',
        liveUrl: '',
        detailUrl: '/projects/sksBasvuruSistemi'
    }
];
