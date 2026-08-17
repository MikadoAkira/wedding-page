import React, { useState } from 'react';
import { Camera, Film, Play, Eye, Sparkles, MapPin, Calendar, Layers, BookOpen } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/mockData';
import { MediaCategory, MediaItem } from '../types';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryProps {
  onOpenLightbox: (index: number) => void;
  onOpenVideo: (url: string, title: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenLightbox, onOpenVideo }) => {
  const [activeCategory, setActiveCategory] = useState<MediaCategory>('all');
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const categories: { key: MediaCategory; label: string; icon: React.FC<{ className?: string }> }[] = [
    { key: 'all', label: 'Tất Cả Tác Phẩm', icon: Layers },
    { key: 'photo', label: 'Phóng Sự Cưới', icon: Camera },
    { key: 'video', label: 'Highlight Video (4K Film)', icon: Film },
    { key: 'prewedding', label: 'Pre-Wedding', icon: Sparkles },
    { key: 'ceremony', label: 'Tiệc Đính Hôn & Gia Tiên', icon: Camera },
  ];

  const filteredItems = activeCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const handleCardClick = (item: MediaItem) => {
    if (item.category === 'video' && item.videoUrl) {
      onOpenVideo(item.videoUrl, `${item.title} - ${item.couple}`);
    } else {
      const originalIndex = PORTFOLIO_ITEMS.findIndex((p) => p.id === item.id);
      onOpenLightbox(originalIndex >= 0 ? originalIndex : 0);
    }
  };

  return (
    <section id="gallery" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-widest mb-4 ${
            isLight ? 'bg-[#FDF6E3] border-[#E8D5A3] text-[#8B6914]' : 'bg-gold-400/10 border-gold-400/30 text-gold-500'
          }`}>
            <BookOpen className="w-3.5 h-3.5" />
            <span>Trang Album Kỷ Niệm • Featured Portfolio</span>
          </div>

          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
            isLight ? 'text-[#1A1714]' : 'text-white'
          }`}>
            Tuyệt Tác <span className="text-gold-gradient">Phóng Sự & Thước Phim Cưới</span>
          </h2>
          <p className={`text-sm sm:text-base font-light ${
            isLight ? 'text-[#5C554E]' : 'text-gray-400'
          }`}>
            Mỗi bộ ảnh và thước phim là một câu chuyện tình yêu độc bản, được chạm khắc bằng ánh sáng tự nhiên và cảm xúc chân thật nhất.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const IconComp = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'btn-gold shadow-lg shadow-gold-500/20'
                    : isLight
                    ? 'bg-[#F0EBE2] text-[#3D3630] border border-[#E2DDD5] hover:border-[#C9A227] hover:text-[#8B6914] shadow-sm'
                    : 'bg-[#15151C] text-gray-300 border border-white/10 hover:border-gold-400/40 hover:text-white'
                }`}
              >
                <IconComp className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-black' : (isLight ? 'text-[#8B6914]' : 'text-gold-500')}`} />
                <span className="whitespace-nowrap">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Media Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0, transition: { duration: 0.3 } },
              visible: { 
                opacity: 1, 
                transition: { staggerChildren: 0.1, delayChildren: 0.1 } 
              }
            }}
          >
            {filteredItems.map((item) => {
              const isVideo = item.category === 'video';

              return (
                <motion.div
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } }
                  }}
                  key={item.id}
                  onClick={() => handleCardClick(item)}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-2 border ${
                    isLight
                      ? 'bg-white border-[#E2DDD5] hover:border-[#C9A227] shadow-[#C8BFB2]/30'
                      : 'bg-[#121218] border-white/10 hover:border-gold-400/60 shadow-black/60'
                  }`}
                >
                  {/* Media Image with Photobook Matte Frame */}
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-stone-900">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    {/* Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-gold-300 border border-gold-400/30 whitespace-nowrap">
                        {item.categoryLabel}
                      </span>

                      {isVideo ? (
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-red-600/90 text-white tracking-widest flex items-center gap-1 whitespace-nowrap">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          4K CINEMA
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-gray-300 border border-white/10 whitespace-nowrap">
                          PHOTOBOOK HD
                        </span>
                      )}
                    </div>

                    {/* Center Action Badge */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      {isVideo ? (
                        <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gold-400 text-black flex items-center justify-center shadow-xl shadow-gold-500/40 group-hover:scale-115 transition-all duration-300">
                          <Play className="w-6 h-6 fill-current ml-0.5 text-black" />
                        </div>
                      ) : (
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/60 group-hover:bg-gold-400 text-white group-hover:text-black border border-white/20 group-hover:border-gold-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                          <Eye className="w-5 h-5" />
                        </div>
                      )}
                    </div>

                    {/* Video Duration Badge */}
                    {isVideo && item.duration && (
                      <div className="absolute bottom-3 right-3 z-10 text-[11px] font-mono bg-black/80 px-2 py-0.5 rounded text-gray-200 whitespace-nowrap">
                        {item.duration}
                      </div>
                    )}
                  </div>

                  {/* Card Content Information */}
                  <div className={`p-5 relative z-10 transition-colors ${
                    isLight ? 'bg-white' : 'bg-[#121218]'
                  }`}>
                    <h3 className={`font-heading text-lg font-bold transition-colors mb-1 line-clamp-1 ${
                      isLight ? 'text-[#1A1714] group-hover:text-[#8B6914]' : 'text-white group-hover:text-gold-300'
                    }`}>
                      {item.title}
                    </h3>

                    <p className={`text-xs font-semibold mb-2.5 ${isLight ? 'text-[#8B6914]' : 'text-gold-500'}`}>
                      {item.couple}
                    </p>

                    <p className={`text-xs line-clamp-2 mb-4 font-light leading-relaxed ${
                      isLight ? 'text-[#5C554E]' : 'text-gray-400'
                    }`}>
                      {item.description}
                    </p>

                    {/* Footer metadata */}
                    <div className={`pt-3 border-t flex items-center justify-between text-[11px] ${
                      isLight ? 'border-[#EBE6DE] text-[#6B635C]' : 'border-white/5 text-gray-400'
                    }`}>
                      <span className="flex items-center gap-1 whitespace-nowrap">
                        <MapPin className={`w-3 h-3 shrink-0 ${isLight ? 'text-[#8B6914]' : 'text-gold-500'}`} />
                        <span>{item.location}</span>
                      </span>
                      <span className="flex items-center gap-1 whitespace-nowrap">
                        <Calendar className={`w-3 h-3 shrink-0 ${isLight ? 'text-[#8B6914]' : 'text-gold-500'}`} />
                        <span>{item.date}</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA note */}
        <div className="mt-14 text-center">
          <p className={`text-xs ${isLight ? 'text-[#5C554E]' : 'text-gray-400'}`}>
            Bạn có mong muốn một concept hoặc địa điểm chụp ảnh cưới riêng biệt?
          </p>
          <a
            href="#pricing"
            className={`inline-block mt-2 text-xs font-semibold uppercase tracking-widest hover:underline underline-offset-4 whitespace-nowrap ${
              isLight ? 'text-[#8B6914] hover:text-[#6B4E0B]' : 'text-gold-500 hover:text-gold-600'
            }`}
          >
            Khám phá các gói dịch vụ & bảng giá chi tiết →
          </a>
        </div>

      </div>
    </section>
  );
};
