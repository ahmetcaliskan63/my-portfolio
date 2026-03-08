'use client';

import { motion } from 'framer-motion';
import { projects } from '../constants';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <div className="min-h-screen bg-space-950 text-white pt-32 pb-20 px-4 md:px-8 relative overflow-hidden">
      {/* Refined Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden -z-10 bg-[#020617]">
        <div className="absolute top-0 right-0 w-full h-full bg-blue-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-none uppercase text-white">
            PROJELERİM
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Dijital dünyada <span className="text-blue-400 font-medium">değer yaratan</span>, teknik derinliğe sahip en güncel çalışmalarım.
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