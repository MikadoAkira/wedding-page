import React, { useEffect } from 'react';
import { X, Film, Sparkles } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  videoUrl: string;
  title: string;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  videoUrl,
  title,
  onClose
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !videoUrl) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-6 animate-fade-in">
      <div
        className="relative w-full max-w-5xl bg-[#121218] rounded-2xl overflow-hidden border border-gold-400/30 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161622]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center">
              <Film className="w-4 h-4 text-gold-400" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                {title || 'Wedding Film 4K'}
              </h3>
              <p className="text-[11px] text-gold-400 flex items-center gap-1 font-mono">
                <Sparkles className="w-3 h-3" />
                <span>Cinematic Master 4K • Dolby Atmos Sound</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-red-500/80 hover:text-white text-gray-400 transition-colors"
            title="Đóng (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Frame */}
        <div className="relative w-full aspect-video bg-black">
          <iframe
            src={videoUrl}
            title={title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Footer Note */}
        <div className="px-6 py-3 bg-[#0E0E14] text-center text-xs text-gray-400">
          Tác phẩm được ghi hình và sản xuất độc quyền bởi <span className="text-gold-400 font-semibold">LUMINA WEDDING STUDIO</span>
        </div>
      </div>
    </div>
  );
};
