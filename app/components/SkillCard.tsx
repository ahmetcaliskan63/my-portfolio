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
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
        >
            {/* Glowing Background Effect - Softened intensity */}
            <div className={`absolute -inset-2 bg-gradient-to-r from-electric/15 via-cyber/15 to-primary/15 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-700`} />

            <div className="relative h-full bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-7 flex flex-col transition-all duration-300 group-hover:border-white/20 group-hover:translate-y-[-4px] overflow-hidden">
                {/* Modern Glowing Border Effect - Softened */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-50 transition-opacity" />

                <div className="relative z-10 flex flex-col">
                    <div className="flex items-center justify-between mb-5">
                        <div className="text-3xl p-3 bg-white/5 rounded-2xl border border-white/5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                            {icon}
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent ml-4" />
                    </div>

                    <h4 className="text-xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors mb-5">
                        {category}
                    </h4>

                    <div className="flex flex-wrap gap-2">
                        {items.map((item, i) => (
                            <span
                                key={i}
                                className="text-[11px] font-semibold px-4 py-2 rounded-full bg-slate-800/40 text-slate-300 border border-white/5 backdrop-blur-md group-hover:bg-slate-700/60 group-hover:text-white transition-all duration-300"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Subtle corner light */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[40px] rounded-full -mr-16 -mt-16" />
            </div>
        </motion.div>
    );
};

export default SkillCard;
