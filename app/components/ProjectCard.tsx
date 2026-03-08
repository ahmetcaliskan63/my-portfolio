'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../constants';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface ProjectCardProps {
    project: Project;
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative flex flex-col h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden hover:border-blue-400/30 transition-all duration-500 shadow-2xl"
        >
            {/* Image Container */}
            <div className="relative h-56 md:h-64 overflow-hidden shimmer-dark">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={index < 3}
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    onLoadingComplete={(img) => {
                        img.parentElement?.classList.remove('shimmer-dark');
                    }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Floating Tags */}
                <div className="absolute top-4 right-4 flex flex-wrap justify-end gap-2 max-w-[70%]">
                    {project.technologies.slice(0, 2).map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] uppercase tracking-wider font-bold text-blue-400">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col flex-1 relative z-10">
                <div className="flex-1 space-y-4">
                    <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                        {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3">
                        {project.description}
                    </p>

                    {/* Detailed Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.technologies.map((tech) => (
                            <span key={tech} className="text-[11px] text-gray-500 bg-white/5 px-2 py-1 rounded-md border border-white/5">
                                #{tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Actions */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                    <Link
                        href={project.detailUrl}
                        className="col-span-2 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-center transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 group/btn"
                    >
                        Detayları Gör
                        <FiExternalLink className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </Link>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white rounded-xl border border-white/10 text-sm font-semibold flex items-center justify-center gap-2 transition-all"
                    >
                        <FiGithub /> GitHub
                    </a>
                    <a
                        href={project.liveUrl || project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white rounded-xl border border-white/10 text-sm font-semibold flex items-center justify-center gap-2 transition-all"
                    >
                        <FiExternalLink /> Demo
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
