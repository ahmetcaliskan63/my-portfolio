'use client';

import { motion } from 'framer-motion';
import { projects } from '../constants';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <div className="min-h-screen bg-space-950 text-white pt-32 pb-20 px-4 md:px-8 relative overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/20 blur-[150px] rounded-full animate-pulse opacity-30" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-600/20 blur-[150px] rounded-full animate-pulse opacity-30" />
        <div className="absolute top-[30%] left-[10%] w-[10%] h-[10%] bg-white/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 px-4"
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6 md:mb-8 tracking-[-0.05em] leading-none uppercase relative">
            <span className="bg-gradient-to-b from-white via-white/90 to-white/20 bg-clip-text text-transparent italic select-none">
              PROJELERİM
            </span>
            <div className="absolute -inset-x-20 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent -z-10" />
          </h1>
          <p className="text-lg md:text-2xl font-extralight text-gray-400 max-w-4xl mx-auto leading-relaxed tracking-wide">
            Fikirleri <span className="text-blue-400 font-bold drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">gerçeğe</span>, kodları <span className="text-purple-400 font-bold drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">etkiye</span> dönüştüren projelerim.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}