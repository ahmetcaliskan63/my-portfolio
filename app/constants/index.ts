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
