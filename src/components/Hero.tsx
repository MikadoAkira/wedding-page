import React from 'react';
import { Play, Sparkles, ArrowRight, Calendar, BookOpen, ChevronDown } from 'lucide-react';
import { BRAND_STATS, HERO_CONTENT } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenVideo: (url: string, title: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenVideo }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden select-none">
      {/* Background Media with dynamic overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-10000 ease-out"
          style={{
            backgroundImage: `url('${HERO_CONTENT.backgroundImage}')`,
            animation: 'float 20s infinite alternate'
          }}
        />
        {/* Cinematic Gradient Overlays */}
        <div className={`absolute inset-0 transition-colors duration-500 ${
          isLight
            ? 'bg-gradient-to-t from-[#FDFCFA] via-[#FDFCFA]/80 to-[#1A1714]/60'
            : 'bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/80 to-black/70'
        }`} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-400/15 via-transparent to-black/60" />
        
        {/* Subtle decorative grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Luxury Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase mb-8 backdrop-blur-md shadow-lg transition-colors whitespace-nowrap ${
            isLight
              ? 'bg-white/85 border border-[#C9A227]/50 text-[#2C261F] shadow-[#8B6914]/8'
              : 'bg-black/60 border border-gold-400/40 text-gold-300 shadow-gold-500/10'
          }`}
        >
          <Sparkles className={`w-3.5 h-3.5 animate-spin ${isLight ? 'text-[#8B6914]' : 'text-gold-500'}`} style={{ animationDuration: '8s' }} />
          <span className="whitespace-nowrap">{HERO_CONTENT.badgeText}</span>
          <Sparkles className={`w-3.5 h-3.5 animate-spin ${isLight ? 'text-[#8B6914]' : 'text-gold-500'}`} style={{ animationDuration: '8s' }} />
        </motion.div>

        {/* Main Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className={`font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl leading-[1.18] mb-6 ${
            isLight ? 'text-[#1A1714]' : 'text-white'
          }`}
        >
          {HERO_CONTENT.mainHeadingLine1} <br className="hidden sm:block" />
          <span className="text-gold-gradient font-normal italic">{HERO_CONTENT.mainHeadingLine2}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`max-w-2xl text-base sm:text-lg md:text-xl font-light leading-relaxed mb-10 ${
            isLight ? 'text-[#3D3630]' : 'text-gray-300'
          }`}
        >
          {HERO_CONTENT.description}
        </motion.p>

        {/* CTA Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto mb-14"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto btn-gold px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl shadow-gold-500/25 group whitespace-nowrap shrink-0"
          >
            <Calendar className="w-4 h-4 text-black shrink-0" />
            <span className="whitespace-nowrap">Đặt Lịch Tư Vấn & Giữ Ngày</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-black shrink-0" />
          </button>

          <button
            onClick={() => onOpenVideo(HERO_CONTENT.showreelVideoUrl, 'Lumina Wedding Cinematic Showreel')}
            className={`w-full sm:w-auto px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center gap-2.5 transition-all duration-300 group whitespace-nowrap shrink-0 border ${
              isLight
                ? 'bg-white/90 text-[#1A1714] border-[#D5CEC4] hover:border-[#C9A227] hover:bg-white shadow-md shadow-[#8B6914]/5'
                : 'glass-card hover:bg-white/10 text-white border-white/20 hover:border-gold-400/60'
            }`}
          >
            <div className={`w-7 h-7 rounded-full flex items-center justify-center group-hover:scale-110 transition-all shrink-0 ${
              isLight ? 'bg-[#8B6914]/15 group-hover:bg-[#C9A227]' : 'bg-gold-400/20 group-hover:bg-gold-400'
            }`}>
              <Play className={`w-3.5 h-3.5 fill-current ml-0.5 ${
                isLight ? 'text-[#8B6914] group-hover:text-black' : 'text-gold-500 group-hover:text-black'
              }`} />
            </div>
            <span className="whitespace-nowrap">Xem Showreel 4K (2026)</span>
          </button>
        </motion.div>

        {/* Highlight Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`w-full max-w-4xl rounded-2xl border transition-all duration-300 p-4 sm:p-6 ${
            isLight
              ? 'bg-white/92 border-[#E2DDD5] shadow-xl shadow-[#8B6914]/5'
              : 'glass-panel border-white/10'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-2">
            {BRAND_STATS.map((stat, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center justify-between text-center px-2 py-1 border-r last:border-r-0 md:border-r md:last:border-r-0 ${
                  isLight ? 'border-[#EBE6DE]' : 'border-white/10'
                }`}
              >
                {/* Row 1: Number */}
                <div className="h-11 sm:h-12 flex items-center justify-center">
                  <span className={`font-heading stat-number text-3xl sm:text-4xl font-extrabold tracking-tight leading-none ${
                    isLight ? 'text-[#8B6914]' : 'text-gold-500'
                  }`}>
                    {stat.value}
                  </span>
                </div>

                {/* Row 2: Title */}
                <div className="h-10 sm:h-11 flex items-center justify-center">
                  <span className={`text-xs sm:text-sm font-bold tracking-wide leading-snug ${
                    isLight ? 'text-[#1A1714]' : 'text-gray-100'
                  }`}>
                    {stat.label}
                  </span>
                </div>

                {/* Row 3: Subtitle */}
                <div className="h-5 flex items-center justify-center">
                  <span className={`text-[11px] font-light leading-none ${
                    isLight ? 'text-[#6B635C]' : 'text-gray-400'
                  }`}>
                    {stat.subtext}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Album Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
        onClick={() => {
          document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div className={`flex items-center gap-1 text-[11px] uppercase tracking-widest font-semibold whitespace-nowrap ${
          isLight ? 'text-[#8B6914]' : 'text-gold-500'
        }`}>
          <BookOpen className="w-3.5 h-3.5" />
          <span>Cuộn Mở Trang Album Cưới</span>
        </div>
        <div className={`w-5 h-8 rounded-full border flex items-start justify-center p-1 backdrop-blur-sm ${
          isLight ? 'border-[#C9A227]/50' : 'border-gold-400/50'
        }`}>
          <div className={`w-1.5 h-2.5 rounded-full animate-bounce ${isLight ? 'bg-[#8B6914]' : 'bg-gold-500'}`} />
        </div>
      </motion.div>
    </section>
  );
};
