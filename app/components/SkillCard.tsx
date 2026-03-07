'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SkillCardProps {
    category: string;
    icon: ReactNode;
    items: string[];
    index: number;
}

const SkillCard = ({ category, icon, items, index }: SkillCardProps) => {
    const themes: { [key: string]: { border: string; text: string } } = {
        'Frontend 💻': { border: 'border-electric/30', text: 'text-electric' },
        'Backend 🚀': { border: 'border-cyber/30', text: 'text-cyber' },
        'Araçlar 🛠': { border: 'border-primary/30', text: 'text-primary' },
        'Diller 🌐': { border: 'border-cyan-400/30', text: 'text-cyan-400' }
    };

    const theme = themes[category] || themes['Frontend 💻'];

    return (
        <motion.div
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
            className="relative group h-full"
        >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-white/10 group-hover:to-transparent rounded-[2.5rem] blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

            <div className={`relative h-full flex flex-col bg-slate-900/40 backdrop-blur-3xl border ${theme.border} p-8 rounded-[2.5rem] shadow-2xl transition-all duration-500 overflow-hidden`}>
                <div className={`absolute -right-10 -top-10 w-32 h-32 bg-current opacity-5 blur-[50px] rounded-full transition-transform duration-700 group-hover:scale-150 ${theme.text}`} />

                <div className="relative z-10 flex-1 flex flex-col">
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                        {icon}
                    </div>

                    <h4 className="text-2xl font-black mb-2 tracking-widest uppercase bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all">
                        {category.split(' ')[0]}
                        <span className="ml-2 opacity-50 text-2xl inline-block group-hover:animate-bounce">
                            {category.split(' ')[1]}
                        </span>
                    </h4>

                    <div className="flex flex-wrap gap-2.5 mt-auto">
                        {items.map((item, i) => (
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

                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </div>
        </motion.div>
    );
};

export default SkillCard;
