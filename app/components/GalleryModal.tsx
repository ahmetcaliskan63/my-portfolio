'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface GalleryModalProps {
    isOpen: boolean;
    images: string[];
    currentIndex: number;
    onClose: () => void;
    onNext: (e: React.MouseEvent) => void;
    onPrev: (e: React.MouseEvent) => void;
    onSelect: (index: number) => void;
}

const GalleryModal = ({
    isOpen,
    images,
    currentIndex,
    onClose,
    onNext,
    onPrev
}: GalleryModalProps) => {
    if (!isOpen || images.length === 0) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110] p-4"
                >
                    <FiX className="text-4xl" />
                </button>

                <div
                    className="relative w-full max-w-6xl h-full flex flex-col items-center justify-center p-2 md:p-12"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="absolute inset-0 flex items-center justify-between px-2 md:-mx-16 pointer-events-none z-50">
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={onPrev}
                                    className="pointer-events-auto text-white/30 hover:text-white transition-all bg-white/5 hover:bg-white/10 p-3 md:p-4 rounded-full backdrop-blur-md"
                                >
                                    <FiChevronLeft className="text-3xl md:text-4xl" />
                                </button>
                                <button
                                    onClick={onNext}
                                    className="pointer-events-auto text-white/30 hover:text-white transition-all bg-white/5 hover:bg-white/10 p-3 md:p-4 rounded-full backdrop-blur-md"
                                >
                                    <FiChevronRight className="text-3xl md:text-4xl" />
                                </button>
                            </>
                        )}
                    </div>

                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.9, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.9, x: -20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={(_, info) => {
                            if (info.offset.x > 100) onPrev({ stopPropagation: () => { } } as any);
                            else if (info.offset.x < -100) onNext({ stopPropagation: () => { } } as any);
                        }}
                        className="relative w-full h-[70vh] md:h-full cursor-grab active:cursor-grabbing"
                    >
                        <Image
                            src={images[currentIndex]}
                            alt="Achievement detail"
                            fill
                            className="object-contain pointer-events-none select-none"
                            priority
                        />
                    </motion.div>

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 font-black tracking-[0.4em] text-[10px] md:text-xs uppercase bg-white/5 px-6 py-2 rounded-full backdrop-blur-md border border-white/5 whitespace-nowrap">
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default GalleryModal;
