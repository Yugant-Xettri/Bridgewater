"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import galleryData from "../../json/homegallery.json";

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
}

interface GalleryCarouselProps {
  images?: GalleryImage[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const defaultImages: GalleryImage[] = galleryData.gallery;

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

interface LightboxProps {
  image: GalleryImage;
  onClose: () => void;
}

function Lightbox({ image, onClose }: LightboxProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center 
        bg-black/90 backdrop-blur-sm p-4 md:p-8"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full"
      >
        <button
          onClick={onClose}
          aria-label="Close image lightbox"
          className="absolute -top-12 right-0 md:top-4 md:right-4 z-10
            w-10 h-10 bg-white/10 hover:bg-white/20 
            backdrop-blur-sm rounded-full
            flex items-center justify-center
            transition-colors duration-300"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <img
          src={image.src.replace("w=800&h=600", "w=1400&h=900")}
          alt={image.title}
          className="w-full h-auto rounded-2xl shadow-2xl"
        />

        <div className="mt-4 text-center">
          <span className="text-[#c9a227] text-sm font-semibold uppercase tracking-wider">
            {image.category}
          </span>
          <h3 className="text-white text-2xl font-bold mt-1">
            {image.title}
          </h3>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function GalleryCarousel({
  images = defaultImages,
  autoPlay = true,
  autoPlayInterval = 4000,
}: GalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [visibleCount, setVisibleCount] = useState(1);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else if (window.innerWidth < 1280) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, images.length - visibleCount);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return maxIndex;
      if (next > maxIndex) return 0;
      return next;
    });
  }, [maxIndex]);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      paginate(1);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, paginate]);

  const visibleImages = images.slice(currentIndex, currentIndex + visibleCount);
  if (visibleImages.length < visibleCount) {
    visibleImages.push(...images.slice(0, visibleCount - visibleImages.length));
  }

  if (!isClient) {
    return (
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-[#c9a227] font-semibold text-sm md:text-base uppercase tracking-wider mb-3">
              Campus Moments
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4">
              Gallery
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore vibrant moments from our campus life, academic events, 
              and student activities that define the Bridgewater experience.
            </p>
          </div>
          <div className="h-64 flex items-center justify-center">
            <div className="animate-pulse text-gray-400">Loading gallery...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={headerVariants}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block text-[#c9a227] font-semibold text-sm md:text-base uppercase tracking-wider mb-3">
              Campus Moments
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4">
              Gallery
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore vibrant moments from our campus life, academic events, 
              and student activities that define the Bridgewater experience.
            </p>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="grid gap-4 md:gap-5 lg:gap-6"
                style={{
                  gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))`,
                }}
              >
                {visibleImages.map((image, index) => (
                  <motion.div
                    key={`${image.id}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{
                      scale: 1.03,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                    onClick={() => setSelectedImage(image)}
                    className="group relative rounded-2xl overflow-hidden cursor-pointer
                      shadow-[0_4px_20px_rgba(0,0,0,0.08)]
                      hover:shadow-[0_16px_40px_rgba(30,58,95,0.15)]
                      transition-all duration-300 ease-out"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover 
                          group-hover:scale-110 transition-transform duration-500 ease-out"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/90 via-[#1e3a5f]/20 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5
                      translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block text-[#c9a227] text-xs md:text-sm font-semibold uppercase tracking-wider mb-1">
                        {image.category}
                      </span>
                      <h3 className="text-white text-lg md:text-xl font-bold">
                        {image.title}
                      </h3>
                    </div>

                    <div className="absolute top-4 right-4 w-10 h-10 
                      bg-white/20 backdrop-blur-sm rounded-full 
                      flex items-center justify-center
                      opacity-0 group-hover:opacity-100 
                      scale-75 group-hover:scale-100
                      transition-all duration-300">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <button
              onClick={() => paginate(-1)}
              aria-label="View previous gallery images"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6
                w-12 h-12 md:w-14 md:h-14
                bg-white hover:bg-[#1e3a5f] 
                shadow-lg hover:shadow-xl
                rounded-full flex items-center justify-center
                text-[#1e3a5f] hover:text-white
                transition-all duration-300 z-10
                border border-gray-100 hover:border-[#1e3a5f]"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => paginate(1)}
              aria-label="View next gallery images"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6
                w-12 h-12 md:w-14 md:h-14
                bg-white hover:bg-[#1e3a5f] 
                shadow-lg hover:shadow-xl
                rounded-full flex items-center justify-center
                text-[#1e3a5f] hover:text-white
                transition-all duration-300 z-10
                border border-gray-100 hover:border-[#1e3a5f]"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center gap-1 mt-8" role="tablist" aria-label="Gallery navigation">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                aria-label={`Go to gallery slide ${index + 1} of ${maxIndex + 1}`}
                aria-selected={index === currentIndex}
                role="tab"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <span
                  className={`block w-2.5 h-2.5 rounded-full transition-transform duration-300 will-change-transform
                    ${index === currentIndex 
                      ? "bg-[#c9a227] scale-x-[3.2]" 
                      : "bg-gray-300 hover:opacity-70 scale-x-100"
                    }`}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
