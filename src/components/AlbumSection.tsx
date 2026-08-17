import React, { useState, useEffect } from 'react';
import { BookOpen, Sparkles, Image as ImageIcon, Video, Heart, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ALBUM_PAGES } from '../data/mockData';

export const AlbumSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % ALBUM_PAGES.length);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? ALBUM_PAGES.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % ALBUM_PAGES.length);
    }, 15000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const CurrentIcon = ALBUM_PAGES[currentPage].icon;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gold-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-widest mb-4 ${
            isLight ? 'bg-[#FDF6E3] border-[#E8D5A3] text-[#8B6914]' : 'bg-gold-400/10 border-gold-400/30 text-gold-500'
          }`}>
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Album Cao Cấp Trực Tuyến • Digital Photobook</span>
          </div>

          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
            isLight ? 'text-[#1A1714]' : 'text-white'
          }`}>
            Lật Mở <span className="text-gold-gradient">Từng Khung Hình</span>
          </h2>
          <p className={`text-sm sm:text-base font-light ${
            isLight ? 'text-[#5C554E]' : 'text-gray-400'
          }`}>
            Khám phá các góc nhìn nghệ thuật của Lumina thông qua cuốn Album Photobook kỹ thuật số được thiết kế độc quyền.
          </p>
        </div>

        {/* 2D Slideshow Album Container */}
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Display Area */}
          <div className={`relative aspect-[4/5] sm:aspect-[16/9] lg:aspect-[2/1] rounded-2xl overflow-hidden border shadow-2xl ${
            isLight ? 'bg-[#F0EBE2] border-[#E2DDD5] shadow-[#C8BFB2]/30' : 'bg-[#0A0A0C] border-white/10 shadow-black/80'
          }`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                {/* Full Background Image */}
                <img 
                  src={ALBUM_PAGES[currentPage].image} 
                  alt={ALBUM_PAGES[currentPage].title}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlays for Text Readability */}
                <div className={`absolute inset-0 ${
                  isLight 
                    ? 'bg-gradient-to-t from-white/95 via-white/40 to-transparent sm:bg-gradient-to-r sm:from-white/95 sm:via-white/50 sm:to-transparent' 
                    : 'bg-gradient-to-t from-black/95 via-black/50 to-transparent sm:bg-gradient-to-r sm:from-black/95 sm:via-black/60 sm:to-transparent'
                }`} />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end sm:justify-center p-6 sm:p-12 lg:p-16 max-w-2xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 backdrop-blur-md border ${
                      isLight ? 'bg-white/60 border-[#C9A227]/40 shadow-sm' : 'bg-black/40 border-gold-400/30'
                    }`}>
                      <CurrentIcon className={`w-6 h-6 ${isLight ? 'text-[#8B6914]' : 'text-gold-400'}`} />
                    </div>
                    
                    <h4 className={`text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-2 ${
                      isLight ? 'text-[#8B6914]' : 'text-gold-400'
                    }`}>
                      {ALBUM_PAGES[currentPage].subtitle}
                    </h4>
                    
                    <h3 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight ${
                      isLight ? 'text-[#1A1714]' : 'text-white'
                    }`}>
                      {ALBUM_PAGES[currentPage].title}
                    </h3>
                    
                    <p className={`text-sm sm:text-base font-light leading-relaxed mb-8 max-w-xl ${
                      isLight ? 'text-[#3D3630]' : 'text-gray-300'
                    }`}>
                      {ALBUM_PAGES[currentPage].description}
                    </p>

                    {/* Stats/Tags Display */}
                    <div className="flex items-center gap-4">
                      {Object.entries(ALBUM_PAGES[currentPage].stats).map(([key, value], idx) => (
                        <div key={key} className={`flex flex-col px-4 py-2 rounded-lg border backdrop-blur-sm ${
                          isLight ? 'bg-white/60 border-[#E2DDD5]' : 'bg-white/5 border-white/10'
                        }`}>
                          <span className={`text-[10px] uppercase tracking-wider font-semibold ${
                            isLight ? 'text-[#6B635C]' : 'text-gray-400'
                          }`}>{key}</span>
                          <span className={`text-lg font-bold font-heading ${
                            isLight ? 'text-[#1A1714]' : 'text-white'
                          }`}>{value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Custom Navigation Controls Overlay (Moved Outside Image Frame) */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 -right-4 sm:-left-6 sm:-right-6 md:-left-16 md:-right-16 flex justify-between pointer-events-none z-20">
            <button 
              onClick={handlePrevPage}
              className={`pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:scale-110 border shadow-lg ${
                isLight 
                  ? 'bg-white/90 border-[#E2DDD5] text-[#1A1714] hover:bg-white hover:border-[#8B6914] hover:text-[#8B6914]' 
                  : 'bg-black/70 border-white/20 text-white hover:bg-black hover:text-gold-400 hover:border-gold-400'
              }`}
              aria-label="Previous image"
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
            </button>
            
            <button 
              onClick={handleNextPage}
              className={`pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:scale-110 border shadow-lg ${
                isLight 
                  ? 'bg-white/90 border-[#E2DDD5] text-[#1A1714] hover:bg-white hover:border-[#8B6914] hover:text-[#8B6914]' 
                  : 'bg-black/70 border-white/20 text-white hover:bg-black hover:text-gold-400 hover:border-gold-400'
              }`}
              aria-label="Next image"
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {ALBUM_PAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentPage === idx
                    ? isLight ? 'w-8 h-2 bg-[#8B6914]' : 'w-8 h-2 bg-gold-400'
                    : isLight ? 'w-2 h-2 bg-[#D5CEC4] hover:bg-[#C9A227]' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
