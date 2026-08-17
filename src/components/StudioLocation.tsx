import React from 'react';
import { MapPin, Clock, Phone, Mail, Navigation, Coffee, Film, BookOpen } from 'lucide-react';
import { STUDIO_INFO } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

export const StudioLocation: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const highlights = [
    {
      icon: Coffee,
      title: 'Phòng Lounge Đón Khách',
      desc: 'Không gian ấm cúng, trà hoa và cà phê phục vụ trong buổi tư vấn concept.'
    },
    {
      icon: Film,
      title: 'Phòng Color Grading 4K',
      desc: 'Hệ thống màn hình chuẩn màu điện ảnh để khách hàng trực tiếp xem duyệt master film.'
    }
  ];

  return (
    <section id="location" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-widest mb-4 ${
            isLight ? 'bg-[#FDF6E3] border-[#E8D5A3] text-[#8B6914]' : 'bg-gold-400/10 border-gold-400/30 text-gold-500'
          }`}>
            <BookOpen className="w-3.5 h-3.5" />
            <span>Trang Studio & Bản Đồ • Location & Tour</span>
          </div>

          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
            isLight ? 'text-[#1A1714]' : 'text-white'
          }`}>
            Ghé Thăm <span className="text-gold-gradient">Không Gian Sáng Tạo</span>
          </h2>
          <p className={`text-sm sm:text-base font-light ${
            isLight ? 'text-[#5C554E]' : 'text-gray-400'
          }`}>
            Chào đón bạn đến với Lumina Studio tại Thảo Điền để trực tiếp xem các mẫu Album Photobook cao cấp và trao đổi ý tưởng đám cưới trong mơ.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Studio Information & Directions */}
          <div className={`lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl border transition-colors ${
            isLight
              ? 'bg-white border-[#E2DDD5] shadow-xl shadow-[#C8BFB2]/20'
              : 'glass-panel border-white/10'
          }`}>
            <div>
              <h3 className={`font-heading text-2xl font-bold mb-6 ${
                isLight ? 'text-[#1A1714]' : 'text-white'
              }`}>
                Thông Tin Trụ Sở Studio
              </h3>

              <div className="space-y-5 mb-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 border ${
                    isLight ? 'bg-[#FDF6E3] border-[#E8D5A3]' : 'bg-gold-400/10 border-gold-400/30'
                  }`}>
                    <MapPin className={`w-5 h-5 ${isLight ? 'text-[#8B6914]' : 'text-gold-500'}`} />
                  </div>
                  <div>
                    <span className={`text-xs uppercase block font-medium ${isLight ? 'text-[#6B635C]' : 'text-gray-400'}`}>
                      Địa chỉ trụ sở chính:
                    </span>
                    <p className={`text-sm font-semibold mt-0.5 ${isLight ? 'text-[#1A1714]' : 'text-white'}`}>
                      {STUDIO_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Working hours */}
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 border ${
                    isLight ? 'bg-[#FDF6E3] border-[#E8D5A3]' : 'bg-gold-400/10 border-gold-400/30'
                  }`}>
                    <Clock className={`w-5 h-5 ${isLight ? 'text-[#8B6914]' : 'text-gold-500'}`} />
                  </div>
                  <div>
                    <span className={`text-xs uppercase block font-medium ${isLight ? 'text-[#6B635C]' : 'text-gray-400'}`}>
                      Khung giờ hoạt động:
                    </span>
                    <p className={`text-sm font-semibold mt-0.5 ${isLight ? 'text-[#1A1714]' : 'text-white'}`}>
                      {STUDIO_INFO.hours}
                    </p>
                  </div>
                </div>

                {/* Hotline */}
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 border ${
                    isLight ? 'bg-[#FDF6E3] border-[#E8D5A3]' : 'bg-gold-400/10 border-gold-400/30'
                  }`}>
                    <Phone className={`w-5 h-5 ${isLight ? 'text-[#8B6914]' : 'text-gold-500'}`} />
                  </div>
                  <div>
                    <span className={`text-xs uppercase block font-medium ${isLight ? 'text-[#6B635C]' : 'text-gray-400'}`}>
                      Hotline tư vấn 24/7:
                    </span>
                    <a
                      href={`tel:${STUDIO_INFO.hotline.replace(/\./g, '')}`}
                      className={`text-sm font-bold hover:underline mt-0.5 inline-block whitespace-nowrap ${
                        isLight ? 'text-[#8B6914]' : 'text-gold-500'
                      }`}
                    >
                      {STUDIO_INFO.hotline}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 border ${
                    isLight ? 'bg-[#FDF6E3] border-[#E8D5A3]' : 'bg-gold-400/10 border-gold-400/30'
                  }`}>
                    <Mail className={`w-5 h-5 ${isLight ? 'text-[#8B6914]' : 'text-gold-500'}`} />
                  </div>
                  <div>
                    <span className={`text-xs uppercase block font-medium ${isLight ? 'text-[#6B635C]' : 'text-gray-400'}`}>
                      Hòm thư điện tử:
                    </span>
                    <p className={`text-sm mt-0.5 ${isLight ? 'text-[#3D3630]' : 'text-gray-200'}`}>
                      {STUDIO_INFO.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className={`space-y-3 pt-6 border-t mb-8 ${isLight ? 'border-[#EBE6DE]' : 'border-white/10'}`}>
                {highlights.map((h, i) => {
                  const Icon = h.icon;
                  return (
                    <div key={i} className={`flex items-start gap-3 p-3 rounded-xl border ${
                      isLight
                        ? 'bg-[#F5F0E8] border-[#E2DDD5]'
                        : 'bg-black/40 border-white/5'
                    }`}>
                      <Icon className={`w-4 h-4 shrink-0 mt-0.5 ${isLight ? 'text-[#8B6914]' : 'text-gold-500'}`} />
                      <div>
                        <h5 className={`text-xs font-semibold ${isLight ? 'text-[#1A1714]' : 'text-white'}`}>{h.title}</h5>
                        <p className={`text-[11px] font-light ${isLight ? 'text-[#5C554E]' : 'text-gray-400'}`}>{h.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Direct Google Maps Direction CTA */}
            <a
              href={STUDIO_INFO.mapsDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-gold py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg whitespace-nowrap"
            >
              <Navigation className="w-4 h-4 shrink-0 text-black" />
              <span className="whitespace-nowrap">Chỉ Đường Đến Studio Bằng Google Maps</span>
            </a>
          </div>

          {/* Right Column: Google Maps Interactive Embed */}
          <div className={`lg:col-span-7 rounded-3xl overflow-hidden border shadow-2xl relative min-h-[420px] ${
            isLight ? 'border-[#E2DDD5] bg-[#F0EBE2]' : 'border-white/10 bg-[#15151C]'
          }`}>
            <iframe
              src={STUDIO_INFO.mapsEmbedUrl}
              title="Google Maps Location - Lumina Wedding Studio"
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: '420px',
                filter: isLight ? 'none' : 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)'
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Custom map pin badge */}
            <div className={`absolute top-4 left-4 z-10 px-4 py-2 rounded-xl backdrop-blur-md text-xs shadow-xl flex items-center gap-2 border ${
              isLight
                ? 'bg-white/90 border-[#C9A227]/50 text-[#1A1714]'
                : 'bg-black/80 border-gold-400/40 text-white'
            }`}>
              <span className={`w-2.5 h-2.5 rounded-full animate-ping ${isLight ? 'bg-[#8B6914]' : 'bg-gold-500'}`} />
              <span className={`font-semibold whitespace-nowrap ${isLight ? 'text-[#8B6914]' : 'text-gold-300'}`}>
                LUMINA STUDIO • Thảo Điền
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
