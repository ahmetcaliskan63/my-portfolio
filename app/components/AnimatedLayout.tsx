'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { pageVariants } from '../utils/animations';

interface AnimatedLayoutProps {
  children: React.ReactNode;
}

export default function AnimatedLayout({ children }: AnimatedLayoutProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
} 