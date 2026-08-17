import React from 'react';
import { Camera, MapPin, Phone, Mail, Clock, Heart, ShieldCheck } from 'lucide-react';
import { STUDIO_INFO } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <footer className={`border-t pt-16 pb-12 transition-colors ${
      isLight
        ? 'bg-[#F2EDE4] border-[#E2DDD5] text-[#5C554E]'
        : 'bg-[#070709] border-white/10 text-gray-400'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Content */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b ${
          isLight ? 'border-[#D5CEC4]' : 'border-white/5'
        }`}>
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 ${
                isLight ? 'border-[#C9A227]/40 bg-[#FDF6E3]' : 'border-gold-400/40 bg-gold-400/10'
              }`}>
                <Camera className={`w-5 h-5 ${isLight ? 'text-[#8B6914]' : 'text-gold-500'}`} />
              </div>
              <div>
                <span className={`font-brand text-lg font-bold tracking-[0.2em] whitespace-nowrap ${
                  isLight ? 'text-[#1A1714]' : 'text-white'
                }`}>
                  LUMINA STUDIO
                </span>
                <span className={`block text-[10px] uppercase tracking-widest whitespace-nowrap ${
                  isLight ? 'text-[#8B6914]' : 'text-gold-500'
                }`}>
                  Wedding & Cinematic Media
                </span>
              </div>
            </div>

            <p className={`text-xs leading-relaxed font-light ${
              isLight ? 'text-[#5C554E]' : 'text-gray-400'
            }`}>
              {STUDIO_INFO.shortBio}
            </p>

            <div className={`pt-2 flex items-center gap-2 text-xs font-medium ${
              isLight ? 'text-[#7A5C10]' : 'text-gold-400'
            }`}>
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Bảo hiểm dữ liệu & Cam kết màu sắc điện ảnh 4K</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className={`text-xs font-bold uppercase tracking-wider ${
              isLight ? 'text-[#1A1714]' : 'text-white'
            }`}>
              Khám Phá Album
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className={`transition-colors whitespace-nowrap ${isLight ? 'hover:text-[#8B6914]' : 'hover:text-gold-500'}`}>Trang Chủ</a>
              </li>
              <li>
                <a href="#gallery" className={`transition-colors whitespace-nowrap ${isLight ? 'hover:text-[#8B6914]' : 'hover:text-gold-500'}`}>Portfolio Ảnh & Film</a>
              </li>
              <li>
                <a href="#pricing" className={`transition-colors whitespace-nowrap ${isLight ? 'hover:text-[#8B6914]' : 'hover:text-gold-500'}`}>Bảng Giá & Gói Dịch Vụ</a>
              </li>
              <li>
                <a href="#story" className={`transition-colors whitespace-nowrap ${isLight ? 'hover:text-[#8B6914]' : 'hover:text-gold-500'}`}>Triết Lý Sáng Tạo</a>
              </li>
              <li>
                <a href="#testimonials" className={`transition-colors whitespace-nowrap ${isLight ? 'hover:text-[#8B6914]' : 'hover:text-gold-500'}`}>Đánh Giá Cặp Đôi</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className={`text-xs font-bold uppercase tracking-wider ${
              isLight ? 'text-[#1A1714]' : 'text-white'
            }`}>
              Dịch Vụ Nổi Bật
            </h4>
            <ul className="space-y-2 text-xs">
              <li><span className={`${isLight ? 'text-[#3D3630]' : 'text-gray-300'} whitespace-nowrap`}>Phóng Sự Cưới Full-day</span></li>
              <li><span className={`${isLight ? 'text-[#3D3630]' : 'text-gray-300'} whitespace-nowrap`}>Wedding Film 4K / 6K</span></li>
              <li><span className={`${isLight ? 'text-[#3D3630]' : 'text-gray-300'} whitespace-nowrap`}>Same-Day Edit Video</span></li>
              <li><span className={`${isLight ? 'text-[#3D3630]' : 'text-gray-300'} whitespace-nowrap`}>Pre-Wedding Ngoại Cảnh</span></li>
              <li><span className={`${isLight ? 'text-[#3D3630]' : 'text-gray-300'} whitespace-nowrap`}>Lễ Đính Hôn & Gia Tiên</span></li>
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className={`text-xs font-bold uppercase tracking-wider ${
              isLight ? 'text-[#1A1714]' : 'text-white'
            }`}>
              Liên Hệ Trực Tiếp
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className={`w-4 h-4 shrink-0 mt-0.5 ${isLight ? 'text-[#8B6914]' : 'text-gold-500'}`} />
                <span>{STUDIO_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className={`w-4 h-4 shrink-0 ${isLight ? 'text-[#8B6914]' : 'text-gold-500'}`} />
                <a href={`tel:${STUDIO_INFO.hotline.replace(/\./g, '')}`} className={`font-semibold whitespace-nowrap ${
                  isLight ? 'text-[#1A1714] hover:text-[#8B6914]' : 'text-white hover:text-gold-500'
                }`}>
                  {STUDIO_INFO.hotline}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className={`w-4 h-4 shrink-0 ${isLight ? 'text-[#8B6914]' : 'text-gold-500'}`} />
                <span>{STUDIO_INFO.email}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className={`w-4 h-4 shrink-0 ${isLight ? 'text-[#8B6914]' : 'text-gold-500'}`} />
                <span>{STUDIO_INFO.hours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & terms */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} LUMINA WEDDING MEDIA STUDIO. Mọi quyền được bảo lưu.</p>
          <div className="flex items-center gap-6">
            <span className={`cursor-pointer ${isLight ? 'hover:text-[#8B6914]' : 'hover:text-gold-500'}`}>Chính sách bảo mật</span>
            <span className={`cursor-pointer ${isLight ? 'hover:text-[#8B6914]' : 'hover:text-gold-500'}`}>Điều khoản dịch vụ</span>
            <span className={`flex items-center gap-1 ${isLight ? 'text-[#7A5C10]' : 'text-gold-400'}`}>
              Made with <Heart className="w-3.5 h-3.5 fill-current text-red-500" /> for your big day
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
