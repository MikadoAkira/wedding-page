import React, { useState } from 'react';
import { QrCode, ExternalLink, X, Smartphone, BookOpen } from 'lucide-react';
import { SOCIAL_PLATFORMS } from '../data/mockData';
import { SocialPlatform } from '../types';
import { useTheme } from '../context/ThemeContext';

export const SocialConnect: React.FC = () => {
  const [activeQrModal, setActiveQrModal] = useState<SocialPlatform | null>(null);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section id="social" className="py-20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gold-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-widest mb-4 ${
            isLight ? 'bg-[#FDF6E3] border-[#E8D5A3] text-[#8B6914]' : 'bg-gold-400/10 border-gold-400/30 text-gold-500'
          }`}>
            <BookOpen className="w-3.5 h-3.5" />
            <span>Trang Kết Nối Đa Kênh • Multi-Channel</span>
          </div>

          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
            isLight ? 'text-[#1A1714]' : 'text-white'
          }`}>
            Kết Nối <span className="text-gold-gradient">Mạng Xã Hội & Mã QR</span>
          </h2>
          <p className={`text-sm sm:text-base font-light ${
            isLight ? 'text-[#5C554E]' : 'text-gray-400'
          }`}>
            Theo dõi những thước phim hậu trường mới nhất hoặc quét mã QR bằng điện thoại để nhắn tin tư vấn trực tiếp cùng Lumina.
          </p>
        </div>

        {/* Social Platforms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOCIAL_PLATFORMS.map((platform) => (
            <div
              key={platform.id}
              className={`rounded-3xl p-6 flex flex-col justify-between border transition-all duration-300 group ${
                isLight
                  ? 'bg-white border-[#E2DDD5] hover:border-[#8B6914] shadow-md hover:shadow-[#8B6914]/10'
                  : 'glass-card border-white/10 hover:border-gold-400/50'
              }`}
            >
              <div>
                {/* Header with badge */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg shrink-0"
                    style={{ backgroundColor: platform.brandColor }}
                  >
                    <span className="font-heading text-lg tracking-tight">
                      {platform.name.charAt(0)}
                    </span>
                  </div>
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border whitespace-nowrap ${
                    isLight
                      ? 'bg-[#FDF6E3] text-[#6B4E0B] border-[#E8D5A3]'
                      : 'bg-white/5 border-white/10 text-gold-300'
                  }`}>
                    {platform.badgeText}
                  </span>
                </div>

                {/* Title & handle */}
                <h3 className={`font-heading text-lg font-bold transition-colors ${
                  isLight ? 'text-[#1A1714] group-hover:text-[#6B4E0B]' : 'text-white group-hover:text-gold-300'
                }`}>
                  {platform.name}
                </h3>
                <p className={`text-xs font-mono mb-3 ${isLight ? 'text-[#8B6914]' : 'text-gold-500'}`}>{platform.handle}</p>

                <p className={`text-xs font-light leading-relaxed mb-6 min-h-[36px] ${
                  isLight ? 'text-[#5C554E]' : 'text-gray-400'
                }`}>
                  {platform.description}
                </p>
              </div>

              {/* Action Buttons - guaranteed single line */}
              <div className={`space-y-2.5 pt-4 border-t ${
                isLight ? 'border-[#EBE6DE]' : 'border-white/5'
              }`}>
                {/* QR Code Popover Button */}
                <button
                  onClick={() => setActiveQrModal(platform)}
                  className={`w-full py-2.5 rounded-xl border text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 whitespace-nowrap ${
                    isLight
                      ? 'bg-[#FDF6E3] hover:bg-[#8B6914] hover:text-white border-[#E8D5A3] text-[#7A5C10]'
                      : 'bg-gold-400/10 hover:bg-gold-400 hover:text-black border-gold-400/30 text-gold-600 dark:text-gold-300'
                  }`}
                >
                  <QrCode className="w-3.5 h-3.5 shrink-0" />
                  <span className="whitespace-nowrap">Quét Mã QR Di Động</span>
                </button>

                {/* Direct Link */}
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap ${
                    isLight
                      ? 'bg-[#F0EBE2] hover:bg-[#E2DDD5] text-[#3D3630]'
                      : 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="whitespace-nowrap">Truy cập kênh</span>
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* QR Code Dialog Modal */}
      {activeQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 animate-fade-in">
          <div
            className={`relative w-full max-w-sm rounded-3xl p-6 sm:p-8 border shadow-2xl text-center flex flex-col items-center ${
              isLight
                ? 'bg-white border-[#C9A227]/60 shadow-[#8B6914]/20'
                : 'bg-[#151520] border-gold-400/50 shadow-black/90'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveQrModal(null)}
              className={`absolute top-4 right-4 p-2 rounded-full ${
                isLight
                  ? 'bg-[#F0EBE2] hover:bg-[#E2DDD5] text-[#5C554E]'
                  : 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white'
              }`}
            >
              <X className="w-5 h-5" />
            </button>

            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold mb-3 shadow-lg shrink-0"
              style={{ backgroundColor: activeQrModal.brandColor }}
            >
              <span className="font-heading text-lg">{activeQrModal.name.charAt(0)}</span>
            </div>

            <h4 className={`font-heading text-xl font-bold mb-1 ${
              isLight ? 'text-[#1A1714]' : 'text-white'
            }`}>
              {activeQrModal.name}
            </h4>
            <p className={`text-xs font-mono mb-4 ${isLight ? 'text-[#8B6914]' : 'text-gold-500'}`}>{activeQrModal.handle}</p>

            {/* QR Image */}
            <div className={`p-3 bg-white rounded-2xl shadow-xl border-2 mb-4 ${
              isLight ? 'border-[#C9A227]/40' : 'border-gold-400/40'
            }`}>
              <img
                src={activeQrModal.qrCodeUrl}
                alt={`Mã QR ${activeQrModal.name}`}
                className="w-44 h-44 object-contain rounded-lg"
              />
            </div>

            <div className={`flex items-center gap-1.5 text-xs mb-6 px-3 py-1.5 rounded-full ${
              isLight ? 'bg-[#FDF6E3] text-[#3D3630]' : 'bg-white/5 text-gray-300'
            }`}>
              <Smartphone className={`w-3.5 h-3.5 shrink-0 ${isLight ? 'text-[#8B6914]' : 'text-gold-500'}`} />
              <span className="whitespace-nowrap">Dùng camera điện thoại quét để mở ngay</span>
            </div>

            <a
              href={activeQrModal.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-gold py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span className="whitespace-nowrap text-black">Mở Trực Tiếp Trên Trình Duyệt</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0 text-black" />
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
