import React, { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setActiveIndex((current) => (current === 0 ? TESTIMONIALS.length - 1 : current - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className={`py-20 relative transition-colors ${
      isLight ? 'bg-[#FDFCFA]' : 'bg-[#050508]'
    }`}>
      {/* Decorative top/bottom borders */}
      <div className={`absolute top-0 left-0 right-0 h-px ${isLight ? 'bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent' : 'bg-gradient-to-r from-transparent via-gold-400/20 to-transparent'}`} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-widest mb-4 ${
            isLight ? 'bg-[#FDF6E3] border-[#E8D5A3] text-[#8B6914]' : 'bg-gold-400/10 border-gold-400/30 text-gold-500'
          }`}>
            <BookOpen className="w-3.5 h-3.5" />
            <span>Trang Phản Hồi Khách Hàng • Client Love</span>
          </div>

          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
            isLight ? 'text-[#1A1714]' : 'text-white'
          }`}>
            Hàng Ngàn Cặp Đôi Đã <span className="text-gold-gradient">Tin Tưởng</span>
          </h2>
          <p className={`text-sm sm:text-base font-light ${
            isLight ? 'text-[#5C554E]' : 'text-gray-400'
          }`}>
            Đọc những dòng cảm nhận chân thực nhất từ các cô dâu chú rể đã đồng hành cùng Lumina trong ngày trọng đại của cuộc đời.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative overflow-hidden min-h-[450px] sm:min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`absolute inset-0 flex flex-col md:flex-row rounded-3xl overflow-hidden border shadow-2xl ${
                  isLight
                    ? 'bg-white border-[#E2DDD5] shadow-[#C8BFB2]/30'
                    : 'glass-card border-white/10 shadow-black/80'
                }`}
              >
                {/* Left side: Image + Names */}
                <div className="w-full md:w-2/5 relative min-h-[200px] md:min-h-full">
                  <img
                    src={TESTIMONIALS[activeIndex].weddingPhoto}
                    alt={`${TESTIMONIALS[activeIndex].coupleName} Wedding`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                  {/* Absolute positioning for couple name on top of the image */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-1 shadow-black drop-shadow-md">
                      {TESTIMONIALS[activeIndex].coupleName}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-gold-400 drop-shadow">
                      <span className="uppercase tracking-widest">{TESTIMONIALS[activeIndex].packageUsed}</span>
                      <span>•</span>
                      <span>{TESTIMONIALS[activeIndex].weddingDate}</span>
                    </div>
                  </div>
                </div>

                {/* Right side: Quote Content */}
                <div className="w-full md:w-3/5 p-8 sm:p-10 flex flex-col justify-center relative">
                  <Quote className={`absolute top-6 right-6 w-12 h-12 opacity-10 ${
                    isLight ? 'text-[#8B6914]' : 'text-gold-500'
                  }`} />
                  
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 fill-current ${
                        isLight ? 'text-[#C9A227]' : 'text-gold-500'
                      }`} />
                    ))}
                  </div>
                  
                  <p className={`text-base sm:text-lg font-light leading-relaxed italic relative z-10 ${
                    isLight ? 'text-[#3D3630]' : 'text-gray-200'
                  }`}>
                    "{TESTIMONIALS[activeIndex].content}"
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={handlePrevious}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                isLight
                  ? 'bg-white border-[#E2DDD5] text-[#3D3630] hover:border-[#C9A227] hover:text-[#8B6914] shadow-sm'
                  : 'bg-white/5 border-white/10 text-gray-300 hover:border-gold-400 hover:text-white'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setActiveIndex(idx);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    activeIndex === idx
                      ? isLight ? 'w-6 h-2 bg-[#8B6914]' : 'w-6 h-2 bg-gold-400'
                      : isLight ? 'w-2 h-2 bg-[#D5CEC4] hover:bg-[#C9A227]' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                isLight
                  ? 'bg-white border-[#E2DDD5] text-[#3D3630] hover:border-[#C9A227] hover:text-[#8B6914] shadow-sm'
                  : 'bg-white/5 border-white/10 text-gray-300 hover:border-gold-400 hover:text-white'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
