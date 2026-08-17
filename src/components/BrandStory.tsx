import React from 'react';
import { Camera, Film, Heart, Sparkles, CheckCircle2, BookOpen } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { BRAND_STORY_CONTENT } from '../data/mockData';

export const BrandStory: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const pillars = [
    {
      icon: Heart,
      title: 'Cảm Xúc Tự Nhiên & Chân Thật',
      desc: 'Chúng tôi tin rằng bức ảnh đẹp nhất là bức ảnh ghi lại cảm xúc không sắp đặt: ánh mắt rạng rỡ của chú rể, nụ cười nghẹn ngào của mẹ hay tiếng cười thả ga của bè bạn.'
    },
    {
      icon: Film,
      title: 'Màu Sắc Điện Ảnh Vượt Thời Gian',
      desc: 'Sử dụng hệ thống máy quay chuẩn Cinema (Sony Cinema Line FX3/FX6 & RED) kết hợp quy trình Color Grading độc quyền, mang lại tone màu ấm áp và sang trọng.'
    },
    {
      icon: Camera,
      title: 'Đồng Hành & Tận Tâm Từng Giây',
      desc: 'Không chỉ là người bấm máy, đội ngũ Lumina lắng nghe từng câu chuyện tình yêu, hỗ trợ sắp xếp timeline và đồng hành cùng bạn như những người bạn thân thiết.'
    }
  ];

  return (
    <section id="story" className="py-20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Photobook Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`rounded-2xl overflow-hidden border shadow-2xl relative z-10 aspect-[4/5] group transition-all duration-300 ${
                  isLight
                    ? 'border-[#C9A227]/40 bg-[#F5F0E8] shadow-[#8B6914]/8'
                    : 'border-gold-400/20 bg-black/40 shadow-black/80'
                }`}
              >
                <img
                  src={BRAND_STORY_CONTENT.mainImage}
                  alt="Lumina Wedding Studio Behind The Lens"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10">
                  <p className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-1 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Trang Kỷ Niệm 01 • Behind The Lens</span>
                  </p>
                  <p className="text-xs sm:text-sm text-gray-200 italic font-serif">
                    {BRAND_STORY_CONTENT.quoteText}
                  </p>
                </div>
              </motion.div>

              {/* Floating Sub Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden sm:block absolute -bottom-8 -right-8 w-52 h-64 rounded-xl overflow-hidden border-2 border-gold-400/50 shadow-2xl z-20"
              >
                <img
                  src={BRAND_STORY_CONTENT.subImage}
                  alt="Wedding moment"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20" />
              </motion.div>

              {/* Decorative Glow Ring */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-gold-400/30 rounded-full animate-spin" style={{ animationDuration: '25s' }} />
            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-7">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-widest mb-6 ${
              isLight ? 'bg-[#FDF6E3] border-[#E8D5A3] text-[#8B6914]' : 'bg-gold-400/10 border-gold-400/30 text-gold-500'
            }`}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>{BRAND_STORY_CONTENT.badge}</span>
            </div>

            <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight ${
              isLight ? 'text-[#1A1714]' : 'text-white'
            }`}>
              {BRAND_STORY_CONTENT.title}
            </h2>

            <p className={`text-base font-light leading-relaxed mb-10 ${
              isLight ? 'text-[#5C554E]' : 'text-gray-400'
            }`}>
              {BRAND_STORY_CONTENT.description}
            </p>

            {/* 3 Value Pillars */}
            <div className="space-y-4 mb-8">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className={`flex items-start gap-4 p-4 rounded-xl transition-all border ${
                      isLight
                        ? 'bg-[#F5F0E8] border-[#E2DDD5] hover:border-[#C9A227]/60 shadow-sm'
                        : 'glass-card border-white/5 hover:border-gold-400/30'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                      isLight ? 'bg-[#FDF6E3] border border-[#E8D5A3]' : 'bg-gold-400/10 border border-gold-400/30'
                    }`}>
                      <IconComponent className={`w-5 h-5 ${isLight ? 'text-[#8B6914]' : 'text-gold-500'}`} />
                    </div>
                    <div>
                      <h3 className={`text-base font-semibold mb-1 font-sans ${
                        isLight ? 'text-[#1A1714]' : 'text-white'
                      }`}>
                        {pillar.title}
                      </h3>
                      <p className={`text-xs sm:text-sm font-light leading-relaxed ${
                        isLight ? 'text-[#5C554E]' : 'text-gray-400'
                      }`}>
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Commitments list */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm ${
              isLight ? 'text-[#3D3630]' : 'text-gray-300'
            }`}>
              <div className="flex items-center gap-2">
                <CheckCircle2 className={`w-4 h-4 shrink-0 ${isLight ? 'text-[#8B6914]' : 'text-gold-500'}`} />
                <span>Không phát sinh chi phí ẩn ngoài hợp đồng</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className={`w-4 h-4 shrink-0 ${isLight ? 'text-[#8B6914]' : 'text-gold-500'}`} />
                <span>Lưu trữ file an toàn trên Cloud trọn đời</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className={`w-4 h-4 shrink-0 ${isLight ? 'text-[#8B6914]' : 'text-gold-500'}`} />
                <span>Tư vấn kịch bản & timeline ngày cưới tận tâm</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className={`w-4 h-4 shrink-0 ${isLight ? 'text-[#8B6914]' : 'text-gold-500'}`} />
                <span>Bàn giao sản phẩm đúng cam kết thời gian</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
