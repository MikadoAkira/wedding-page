import React, { useState } from 'react';
import { Check, Sparkles, Star, Users, Gift, ShieldCheck, ArrowRight, BookOpen } from 'lucide-react';
import { SERVICE_PACKAGES } from '../data/mockData';
import { PackageItem } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ServicesPricingProps {
  onSelectPackage: (packageId: string) => void;
}

export const ServicesPricing: React.FC<ServicesPricingProps> = ({ onSelectPackage }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [selectedPkgId, setSelectedPkgId] = useState<string | null>(null);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  const handleCardClick = (pkgId: string) => {
    setSelectedPkgId((prev) => (prev === pkgId ? null : pkgId));
  };

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gold-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-widest mb-4 ${
            isLight ? 'bg-[#FDF6E3] border-[#E8D5A3] text-[#8B6914]' : 'bg-gold-400/10 border-gold-400/30 text-gold-500'
          }`}>
            <BookOpen className="w-3.5 h-3.5" />
            <span>Trang Đầu Tư & Bảng Giá • Investment & Packages</span>
          </div>

          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
            isLight ? 'text-[#1A1714]' : 'text-white'
          }`}>
            Dịch Vụ & <span className="text-gold-gradient">Bảng Giá Trọn Gói</span>
          </h2>
          <p className={`text-sm sm:text-base font-light ${
            isLight ? 'text-[#5C554E]' : 'text-gray-400'
          }`}>
            Mọi gói dịch vụ đều cam kết không phát sinh chi phí, bảo toàn quyền lợi tối cao và chất lượng hình ảnh đạt chuẩn điện ảnh 4K.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {SERVICE_PACKAGES.map((pkg) => {
            const depositAmount = (pkg.price * pkg.depositPercent) / 100;
            const isPopular = pkg.isPopular;
            const isSelected = selectedPkgId === pkg.id;

            return (
              <div
                key={pkg.id}
                onClick={() => handleCardClick(pkg.id)}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between cursor-pointer select-none
                  transition-all duration-300 ease-out
                  ${/* Hover: lift + glow */''}
                  hover:-translate-y-2 hover:shadow-2xl
                  ${isLight
                    ? 'hover:shadow-[#8B6914]/10 hover:border-[#C9A227]'
                    : 'hover:shadow-gold-500/15 hover:border-gold-400/70'
                  }
                  ${/* Selected highlight ring */''}
                  ${isSelected
                    ? isLight
                      ? 'ring-2 ring-[#8B6914] ring-offset-2 ring-offset-white bg-[#FDFCFA] border-2 border-[#8B6914] shadow-2xl shadow-[#8B6914]/20 -translate-y-3'
                      : 'ring-2 ring-gold-400 ring-offset-2 ring-offset-[#0A0A0C] bg-[#151520] border-2 border-gold-400 shadow-2xl shadow-gold-400/20 -translate-y-3'
                    : isPopular
                      ? isLight
                        ? 'bg-gradient-to-b from-[#FDF6E3]/70 to-[#FDFCFA] border-2 border-[#C9A227] shadow-2xl shadow-[#8B6914]/10 lg:-translate-y-3'
                        : 'bg-[#151520] border-2 border-gold-400/80 shadow-2xl shadow-gold-500/15 lg:-translate-y-3'
                      : isLight
                        ? 'bg-white border border-[#E2DDD5] shadow-lg shadow-[#C8BFB2]/20'
                        : 'glass-card border border-white/10'
                  }
                `}
              >
                {/* Selected Checkmark */}
                {isSelected && (
                  <div className={`absolute top-4 right-4 z-20 w-7 h-7 rounded-full flex items-center justify-center shadow-lg animate-fade-in ${
                    isLight ? 'bg-[#8B6914]' : 'bg-gold-500'
                  }`}>
                    <Check className={`w-4 h-4 font-bold ${isLight ? 'text-white' : 'text-black'}`} />
                  </div>
                )}

                {/* Popular Badge */}
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
                    <span className="btn-gold text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                      <Star className="w-3 h-3 fill-current text-black shrink-0" />
                      <span className="whitespace-nowrap">{pkg.badge}</span>
                    </span>
                  </div>
                )}

                <div>
                  {/* Package Title & Tagline */}
                  <div className={`pb-6 mb-6 border-b ${
                    isLight ? 'border-[#EBE6DE]' : 'border-white/10'
                  }`}>
                    <h3 className={`font-heading text-2xl font-bold mb-2 ${
                      isLight ? 'text-[#1A1714]' : 'text-white'
                    }`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-xs font-light min-h-[32px] ${
                      isLight ? 'text-[#5C554E]' : 'text-gray-400'
                    }`}>
                      {pkg.tagline}
                    </p>

                    {/* Price Block */}
                    <div className="mt-4">
                      {pkg.originalPrice && (
                        <div className={`text-xs line-through mb-1 ${isLight ? 'text-[#7A726B]' : 'text-gray-400'}`}>
                          {formatCurrency(pkg.originalPrice)}
                        </div>
                      )}
                      <div className="flex items-baseline gap-2">
                        <span className={`font-heading text-3xl sm:text-4xl font-extrabold ${
                          isLight ? 'text-[#8B6914]' : 'text-gold-500'
                        }`}>
                          {formatCurrency(pkg.price)}
                        </span>
                      </div>
                      <div className={`mt-2 inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-md border ${
                        isLight
                          ? 'bg-[#FDF6E3] border-[#E8D5A3] text-[#3D3630]'
                          : 'bg-white/5 border-white/10 text-gray-300'
                      }`}>
                        <ShieldCheck className={`w-3.5 h-3.5 shrink-0 ${isLight ? 'text-[#8B6914]' : 'text-gold-500'}`} />
                        <span>Đặt cọc giữ lịch: <strong className={`font-semibold ${isLight ? 'text-[#7A5C10]' : 'text-gold-300'}`}>{formatCurrency(depositAmount)}</strong> ({pkg.depositPercent}%)</span>
                      </div>
                    </div>
                  </div>

                  {/* Crew Details */}
                  <div className={`mb-6 p-3.5 rounded-xl border ${
                    isLight
                      ? 'bg-[#F5F0E8] border-[#E2DDD5]'
                      : 'bg-black/40 border-white/5'
                  }`}>
                    <div className={`text-[11px] font-semibold uppercase tracking-wider mb-2 flex items-center gap-1.5 ${
                      isLight ? 'text-[#8B6914]' : 'text-gold-500'
                    }`}>
                      <Users className="w-3.5 h-3.5 shrink-0" />
                      <span>Đội ngũ nhân sự chuyên trách:</span>
                    </div>
                    <ul className={`space-y-1.5 text-xs ${
                      isLight ? 'text-[#3D3630]' : 'text-gray-300'
                    }`}>
                      {pkg.crewDetails.map((crew, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className={`font-bold ${isLight ? 'text-[#8B6914]' : 'text-gold-500'}`}>•</span>
                          <span>{crew}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    <div className={`text-xs font-semibold uppercase tracking-wider ${
                      isLight ? 'text-[#1A1714]' : 'text-gray-300'
                    }`}>
                      Quyền lợi & Quy cách thực hiện:
                    </div>
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                        isLight ? 'text-[#3D3630]' : 'text-gray-300'
                      }`}>
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isLight ? 'bg-[#FDF6E3]' : 'bg-gold-400/20'
                        }`}>
                          <Check className={`w-2.5 h-2.5 font-bold ${isLight ? 'text-[#8B6914]' : 'text-gold-500'}`} />
                        </div>
                        <span className="font-light">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Deliverables */}
                  <div className={`space-y-2 mb-8 pt-4 border-t ${
                    isLight ? 'border-[#EBE6DE]' : 'border-white/5'
                  }`}>
                    <div className={`text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 ${
                      isLight ? 'text-[#8B6914]' : 'text-gold-500'
                    }`}>
                      <Gift className="w-3.5 h-3.5 shrink-0" />
                      <span>Sản phẩm bàn giao cao cấp:</span>
                    </div>
                    {pkg.deliverables.map((deliv, idx) => (
                      <div key={idx} className={`flex items-start gap-2 text-xs ${
                        isLight ? 'text-[#5C554E]' : 'text-gray-400'
                      }`}>
                        <span className={`shrink-0 ${isLight ? 'text-[#8B6914]' : 'text-gold-500'}`}>✦</span>
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectPackage(pkg.id);
                  }}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-lg whitespace-nowrap ${
                    isSelected || isPopular
                      ? 'btn-gold shadow-gold-500/30'
                      : isLight
                      ? 'bg-[#2C261F] hover:bg-[#8B6914] text-white'
                      : 'bg-white/10 hover:bg-gold-400 hover:text-black text-white border border-white/20 hover:border-gold-400'
                  }`}
                >
                  <span className="whitespace-nowrap">Chọn Gói Này & Đặt Lịch</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Custom inquiry strip */}
        <div className={`mt-16 p-6 sm:p-8 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-6 ${
          isLight
            ? 'bg-[#FDF6E3]/60 border-[#E8D5A3] shadow-md'
            : 'glass-panel border-gold-400/30'
        }`}>
          <div>
            <h4 className={`font-heading text-lg sm:text-xl font-bold mb-1 ${
              isLight ? 'text-[#1A1714]' : 'text-white'
            }`}>
              Bạn Cần Gói Dịch Vụ Thiết Kế Riêng (Destination / Tiệc Đa Ngày)?
            </h4>
            <p className={`text-xs sm:text-sm font-light ${
              isLight ? 'text-[#5C554E]' : 'text-gray-400'
            }`}>
              Lumina cung cấp giải pháp may đo riêng cho các đám cưới tại Đà Lạt, Phú Quốc, Nha Trang, Đà Nẵng hoặc nước ngoài.
            </p>
          </div>
          <button
            onClick={() => onSelectPackage('pkg-custom')}
            className="shrink-0 btn-gold px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg whitespace-nowrap"
          >
            Tư Vấn Gói May Đo Riêng
          </button>
        </div>

      </div>
    </section>
  );
};
