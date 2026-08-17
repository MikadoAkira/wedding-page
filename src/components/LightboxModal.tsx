import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2, Camera, Calendar, MapPin } from 'lucide-react';
import { MediaItem } from '../types';

interface LightboxModalProps {
  items: MediaItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  const currentItem = items[currentIndex];

  useEffect(() => {
    setZoomLevel(1);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items.length]);

  if (!isOpen || !currentItem) return null;

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(nextIndex);
  };

  const toggleZoom = () => {
    setZoomLevel((prev) => (prev === 1 ? 1.75 : 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-fade-in select-none">
      {/* Top Bar Controls */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold px-2.5 py-1 rounded bg-gold-400/10 border border-gold-400/30">
            {currentItem.categoryLabel}
          </span>
          <span className="text-xs text-gray-400">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Zoom Button */}
          <button
            onClick={toggleZoom}
            className="p-2.5 rounded-full bg-white/10 hover:bg-gold-400 hover:text-black text-gray-200 transition-colors"
            title="Phóng to / Thu nhỏ"
          >
            {zoomLevel > 1 ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
          </button>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-red-500/80 hover:text-white text-gray-200 transition-colors"
            title="Đóng (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 border border-white/10 hover:border-gold-400 hover:bg-gold-400 hover:text-black text-white transition-all group"
        aria-label="Ảnh trước"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 border border-white/10 hover:border-gold-400 hover:bg-gold-400 hover:text-black text-white transition-all group"
        aria-label="Ảnh kế tiếp"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div
        className="relative max-w-7xl max-h-[82vh] w-full h-full flex items-center justify-center p-4 overflow-hidden"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <img
          src={currentItem.highResSrc || currentItem.src}
          alt={currentItem.title}
          style={{
            transform: `scale(${zoomLevel})`,
            transition: 'transform 0.3s ease-out'
          }}
          className={`max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl ${
            zoomLevel > 1 ? 'cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          onClick={toggleZoom}
        />
      </div>

      {/* Bottom Info Sheet */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-6 py-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-1">
            {currentItem.title}
          </h3>
          <p className="text-gold-300 text-xs sm:text-sm font-medium mb-2">
            Cô dâu & Chú rể: {currentItem.couple}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              {currentItem.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-gold-400" />
              {currentItem.date}
            </span>
            {currentItem.cameraInfo && (
              <span className="flex items-center gap-1 text-gray-300">
                <Camera className="w-3.5 h-3.5 text-gold-400" />
                {currentItem.cameraInfo}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
