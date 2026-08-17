import React, { useState, useEffect } from 'react';
import { Phone, Calendar, ArrowUp, Sparkles } from 'lucide-react';
import { STUDIO_INFO } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

interface FloatingContactProps {
  onOpenBooking: () => void;
}

export const FloatingContact: React.FC<FloatingContactProps> = ({ onOpenBooking }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none">
      
      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={`w-10 h-10 rounded-full border flex items-center justify-center shadow-xl backdrop-blur-md transition-all duration-300 animate-fade-in ${
            isLight
              ? 'bg-white/90 text-[#3D3630] border-[#E2DDD5] hover:bg-[#8B6914] hover:text-white hover:border-[#8B6914]'
              : 'bg-white/10 text-gray-200 border-white/20 hover:bg-gold-400 hover:text-black hover:border-gold-400'
          }`}
          title="Lên đầu trang"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating Speed Dial Actions */}
      <div className="flex flex-col gap-2.5 items-end">
        
        {/* Zalo Chat Floating Action - guaranteed single line */}
        <a
          href="https://zalo.me"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-[#0068FF] text-white shadow-xl shadow-blue-500/25 hover:scale-105 transition-all duration-300 whitespace-nowrap"
          title="Chat Zalo Tư Vấn"
        >
          <span className="hidden sm:inline text-xs font-semibold tracking-wide pr-1 whitespace-nowrap">
            Chat Zalo 24/7
          </span>
          <div className="w-5 h-5 rounded-full bg-white text-[#0068FF] flex items-center justify-center font-bold text-xs shrink-0">
            Z
          </div>
        </a>

        {/* Call Hotline Floating Action - guaranteed single line */}
        <a
          href={`tel:${STUDIO_INFO.hotline.replace(/\./g, '')}`}
          className="group flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 hover:scale-105 transition-all duration-300 whitespace-nowrap"
          title={`Gọi Hotline: ${STUDIO_INFO.hotline}`}
        >
          <span className="hidden sm:inline text-xs font-semibold tracking-wide pr-1 whitespace-nowrap">
            Hotline: {STUDIO_INFO.hotline}
          </span>
          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <Phone className="w-3.5 h-3.5 animate-bounce" />
          </div>
        </a>

        {/* Quick Booking Floating Action - guaranteed single line */}
        <button
          onClick={onOpenBooking}
          className={`flex items-center gap-2.5 px-4 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-2xl transition-all duration-300 whitespace-nowrap hover:scale-105 ${
            isLight
              ? 'btn-gold shadow-[#8B6914]/30'
              : 'btn-gold shadow-gold-500/40'
          }`}
        >
          <Sparkles className="w-4 h-4 text-black animate-spin shrink-0" style={{ animationDuration: '6s' }} />
          <span className="whitespace-nowrap text-black">Đặt Lịch Giữ Ngày</span>
          <Calendar className="w-4 h-4 text-black shrink-0" />
        </button>

      </div>
    </div>
  );
};
