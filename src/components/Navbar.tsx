import React, { useState, useEffect } from 'react';
import { Camera, Phone, Calendar, Menu, X, Sparkles, Sun, Moon } from 'lucide-react';
import { STUDIO_INFO } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenBooking: (packageId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Trang Chủ', href: '#hero' },
    { label: 'Portfolio', href: '#gallery' },
    { label: 'Bảng Giá', href: '#pricing' },
    { label: 'Câu Chuyện', href: '#story' },
    { label: 'Đánh Giá', href: '#testimonials' },
    { label: 'Studio', href: '#location' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isLight = theme === 'light';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? isLight
            ? 'bg-[#FDFCFA]/92 backdrop-blur-md py-2 border-b border-[#E2DDD5] shadow-md shadow-[#8B6914]/5'
            : 'bg-[#0D0D11]/92 backdrop-blur-md py-2 border-b border-[#D4AF37]/20 shadow-2xl shadow-black/60'
          : isLight
          ? 'bg-gradient-to-b from-white/90 via-white/50 to-transparent py-3.5'
          : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-3.5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 shrink-0 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full border border-gold-400/40 flex items-center justify-center bg-gold-400/10 group-hover:border-gold-400 group-hover:bg-gold-400/20 transition-all duration-300 shrink-0">
              <Camera className="w-3.5 h-3.5 text-gold-400" />
            </div>
            <div className="hidden sm:block">
              <span className={`font-brand text-sm font-bold tracking-[0.15em] transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                isLight ? 'text-[#1A1714] group-hover:text-[#8B6914]' : 'text-white group-hover:text-gold-300'
              }`}>
                LUMINA <span className={`text-[9px] tracking-normal font-sans border px-1 rounded font-semibold ${
                  isLight ? 'text-[#8B6914] border-[#C9A227]/50' : 'text-gold-500 border-gold-400/50'
                }`}>STUDIO</span>
              </span>
              <span className={`block text-[8px] uppercase tracking-widest font-sans font-light whitespace-nowrap ${
                isLight ? 'text-[#6B635C]' : 'text-gray-400'
              }`}>
                Wedding & Cinematic Media
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-[11px] xl:text-xs uppercase tracking-wider font-semibold transition-colors py-1 relative group whitespace-nowrap ${
                  isLight
                    ? 'text-[#3D3630] hover:text-[#8B6914]'
                    : 'text-gray-300 hover:text-gold-400'
                }`}
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Right Side: Theme Toggle + Action Buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            
            {/* Prominent Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`relative flex items-center gap-2 px-3 py-1.5 rounded-full border-2 transition-all duration-400 group overflow-hidden ${
                isLight
                  ? 'bg-[#FDF6E3] border-[#C9A227]/60 hover:border-[#A07A18] hover:bg-[#F5F0E8] shadow-md shadow-[#8B6914]/10'
                  : 'bg-gold-400/10 border-gold-400/40 hover:border-gold-400 hover:bg-gold-400/20 shadow-md shadow-gold-500/10'
              }`}
              title={isLight ? 'Chuyển sang giao diện Tối' : 'Chuyển sang giao diện Sáng'}
              aria-label="Toggle theme"
            >
              <div className={`flex items-center justify-center w-5 h-5 rounded-full transition-all duration-300 ${
                isLight 
                  ? 'bg-[#1A1714] text-[#FDF6E3]' 
                  : 'bg-gold-400 text-black'
              }`}>
                {isLight ? (
                  <Moon className="w-3 h-3" />
                ) : (
                  <Sun className="w-3 h-3" />
                )}
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-wider whitespace-nowrap ${
                isLight ? 'text-[#3D3630]' : 'text-gold-400'
              }`}>
                {isLight ? 'Dark' : 'Light'}
              </span>
            </button>

            {/* Hotline Button */}
            <a
              href={`tel:${STUDIO_INFO.hotline.replace(/\./g, '')}`}
              className={`flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full border transition-colors whitespace-nowrap ${
                isLight
                  ? 'bg-[#F5F0E8] text-[#2C261F] border-[#E2DDD5] hover:border-[#C9A227] hover:text-[#8B6914] shadow-sm'
                  : 'bg-white/5 text-gray-200 border-white/10 hover:border-gold-400/50 hover:text-white'
              }`}
            >
              <Phone className={`w-3 h-3 animate-pulse shrink-0 ${isLight ? 'text-[#8B6914]' : 'text-gold-500'}`} />
              <span>{STUDIO_INFO.hotline}</span>
            </a>

            {/* Main Booking Button */}
            <button
              onClick={() => onOpenBooking()}
              className="btn-gold text-[11px] uppercase tracking-wider px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-md shadow-gold-500/20 whitespace-nowrap shrink-0"
            >
              <Calendar className="w-3 h-3 shrink-0" />
              <span>Đặt Lịch Tư Vấn</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-2">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className={`flex items-center gap-1 px-2 py-1 rounded-full border-2 transition-all ${
                isLight
                  ? 'bg-[#FDF6E3] border-[#C9A227]/60 shadow-sm'
                  : 'bg-gold-400/10 border-gold-400/40 shadow-sm shadow-gold-500/10'
              }`}
              aria-label="Toggle Theme"
            >
              <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                isLight ? 'bg-[#1A1714] text-[#FDF6E3]' : 'bg-gold-400 text-black'
              }`}>
                {isLight ? <Moon className="w-2.5 h-2.5" /> : <Sun className="w-2.5 h-2.5" />}
              </div>
              <span className={`text-[9px] font-bold uppercase ${isLight ? 'text-[#3D3630]' : 'text-gold-400'}`}>
                {isLight ? 'Dark' : 'Light'}
              </span>
            </button>

            <button
              onClick={() => onOpenBooking()}
              className="btn-gold text-[10px] font-bold px-2.5 py-1.5 rounded-full flex items-center gap-1 whitespace-nowrap"
            >
              <Sparkles className="w-3 h-3" />
              <span>Đặt Lịch</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-1.5 rounded-lg focus:outline-none ${isLight ? 'text-[#1A1714]' : 'text-gray-200'}`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`sm:hidden border-b backdrop-blur-xl px-5 py-5 transition-all duration-300 animate-fade-in ${
          isLight
            ? 'bg-[#FDFCFA]/98 border-[#E2DDD5] shadow-xl'
            : 'bg-[#0F0F14]/98 border-gold-400/20 shadow-2xl'
        }`}>
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-left text-xs uppercase tracking-wider font-semibold py-2 border-b flex items-center justify-between ${
                  isLight
                    ? 'text-[#1A1714] border-[#EBE6DE] hover:text-[#8B6914]'
                    : 'text-gray-200 border-white/5 hover:text-gold-400'
                }`}
              >
                <span>{link.label}</span>
                <span className={`text-xs ${isLight ? 'text-[#8B6914]' : 'text-gold-500'}`}>→</span>
              </button>
            ))}

            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href={`tel:${STUDIO_INFO.hotline.replace(/\./g, '')}`}
                className={`flex items-center justify-center gap-2 text-xs py-2.5 rounded-xl font-semibold border ${
                  isLight
                    ? 'bg-[#F5F0E8] text-[#2C261F] border-[#E2DDD5]'
                    : 'bg-white/5 text-gray-200 border-white/10'
                }`}
              >
                <Phone className={`w-3.5 h-3.5 ${isLight ? 'text-[#8B6914]' : 'text-gold-500'}`} />
                <span>Hotline: {STUDIO_INFO.hotline}</span>
              </a>
              
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="btn-gold text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-gold-400/20"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Đặt Lịch Tư Vấn & Nhận Ưu Đãi</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
