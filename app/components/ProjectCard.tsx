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
            className="group relative flex flex-col h-full bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.04] transition-all duration-300 shadow-xl"
        >
            {/* Image Container */}
            <div className="relative h-56 md:h-60 overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={index < 3}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-40" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
                <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight">
                        {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 font-light">
                        {project.description}
                    </p>
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-col gap-3">
                    <Link
                        href={project.detailUrl}
                        className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-semibold text-center transition-all flex items-center justify-center gap-2"
                    >
                        Proje Detayı
                        <FiExternalLink size={14} />
                    </Link>
                    <div className="grid grid-cols-2 gap-3">
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-2 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-lg border border-white/5 text-xs font-medium flex items-center justify-center gap-2 transition-all"
                        >
                            <FiGithub size={14} /> Code
                        </a>
                        <a
                            href={project.liveUrl || project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-2 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-lg border border-white/5 text-xs font-medium flex items-center justify-center gap-2 transition-all"
                        >
                            <FiExternalLink size={14} /> Demo
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
