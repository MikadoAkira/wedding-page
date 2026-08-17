import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, Mail, MapPin, Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { SERVICE_PACKAGES } from '../data/mockData';
import { BookingFormData, PackageItem } from '../types';
import { useTheme } from '../context/ThemeContext';

interface BookingModalProps {
  isOpen: boolean;
  initialPackageId?: string;
  onClose: () => void;
  onSubmitBooking: (data: BookingFormData, selectedPkg: PackageItem) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  initialPackageId,
  onClose,
  onSubmitBooking
}) => {
  const [formData, setFormData] = useState({
    groomName: '',
    brideName: '',
    phone: '',
    email: '',
    weddingDate: '',
    venueCity: '',
    selectedPackageId: initialPackageId || 'pkg-gold',
    notes: ''
  });

  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialPackageId) {
      setFormData((prev) => ({ ...prev, selectedPackageId: initialPackageId }));
    }
  }, [initialPackageId]);

  if (!isOpen) return null;

  const currentPkg = SERVICE_PACKAGES.find((p) => p.id === formData.selectedPackageId) || SERVICE_PACKAGES[1];
  const depositAmount = (currentPkg.price * currentPkg.depositPercent) / 100;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.groomName.trim() && !formData.brideName.trim()) {
      newErrors.names = 'Vui lòng nhập tên Cô dâu hoặc Chú rể';
    }
    if (!formData.phone.trim() || formData.phone.length < 9) {
      newErrors.phone = 'Vui lòng nhập số điện thoại hợp lệ để nhận xác nhận';
    }
    if (!formData.weddingDate) {
      newErrors.weddingDate = 'Vui lòng chọn ngày tổ chức tiệc cưới';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate unique booking code
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const bookingCode = `LM2026-${randomCode}`;

    const submissionData: BookingFormData = {
      ...formData,
      groomName: formData.groomName || 'Chú rể',
      brideName: formData.brideName || 'Cô dâu',
      serviceType: currentPkg.name,
      depositAmount: depositAmount,
      bookingCode: bookingCode,
      createdAt: new Date().toISOString()
    };

    onSubmitBooking(submissionData, currentPkg);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6 overflow-y-auto animate-fade-in">
      <div
        className={`relative w-full max-w-2xl rounded-3xl overflow-hidden border shadow-2xl my-8 transition-colors ${
          isLight ? 'bg-white border-[#C9A227]/40 shadow-[#8B6914]/10 text-[#1A1714]' : 'bg-[#12121A] border-gold-400/40 text-white'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`flex items-center justify-between px-6 py-5 border-b ${
          isLight ? 'bg-[#FDF6E3] border-[#E8D5A3]' : 'bg-[#161624] border-white/10'
        }`}>
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${
              isLight ? 'bg-[#F0EBE2] border-[#E2DDD5]' : 'bg-gold-400/20 border-gold-400/30'
            }`}>
              <Heart className={`w-5 h-5 fill-current ${isLight ? 'text-[#8B6914]' : 'text-gold-400'}`} />
            </div>
            <div>
              <h3 className={`text-base sm:text-lg font-heading font-bold ${
                isLight ? 'text-[#1A1714]' : 'text-white'
              }`}>
                Đặt Lịch Tư Vấn & Giữ Ngày Cưới
              </h3>
              <p className={`text-xs font-light ${
                isLight ? 'text-[#6B635C]' : 'text-gold-400/90'
              }`}>
                Khóa lịch độc quyền cho ekip Lumina trong ngày trọng đại
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-full transition-colors ${
              isLight ? 'bg-black/5 hover:bg-black/10 text-[#3D3630]' : 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
          {/* Couple Names */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                isLight ? 'text-[#3D3630]' : 'text-gray-300'
              }`}>
                Tên Chú Rể <span className={isLight ? 'text-[#8B6914]' : 'text-gold-400'}>*</span>
              </label>
              <div className="relative">
                <User className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${isLight ? 'text-[#6B635C]' : 'text-gray-400'}`} />
                <input
                  type="text"
                  placeholder="Ví dụ: Minh Trí"
                  value={formData.groomName}
                  onChange={(e) => setFormData({ ...formData, groomName: e.target.value })}
                  className={`w-full rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none transition-colors ${
                    isLight 
                      ? 'bg-white border border-[#D5CEC4] text-[#1A1714] placeholder-[#8B837C] focus:border-[#C9A227]' 
                      : 'bg-[#181824] border border-white/10 text-white placeholder-gray-500 focus:border-gold-400'
                  }`}
                />
              </div>
            </div>

            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                isLight ? 'text-[#3D3630]' : 'text-gray-300'
              }`}>
                Tên Cô Dâu <span className={isLight ? 'text-[#8B6914]' : 'text-gold-400'}>*</span>
              </label>
              <div className="relative">
                <User className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${isLight ? 'text-[#6B635C]' : 'text-gray-400'}`} />
                <input
                  type="text"
                  placeholder="Ví dụ: Phương Thảo"
                  value={formData.brideName}
                  onChange={(e) => setFormData({ ...formData, brideName: e.target.value })}
                  className={`w-full rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none transition-colors ${
                    isLight 
                      ? 'bg-white border border-[#D5CEC4] text-[#1A1714] placeholder-[#8B837C] focus:border-[#C9A227]' 
                      : 'bg-[#181824] border border-white/10 text-white placeholder-gray-500 focus:border-gold-400'
                  }`}
                />
              </div>
            </div>
          </div>
          {errors.names && <p className="text-xs text-red-400 -mt-2">{errors.names}</p>}

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                isLight ? 'text-[#3D3630]' : 'text-gray-300'
              }`}>
                Số Điện Thoại / Zalo <span className={isLight ? 'text-[#8B6914]' : 'text-gold-400'}>*</span>
              </label>
              <div className="relative">
                <Phone className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${isLight ? 'text-[#6B635C]' : 'text-gray-400'}`} />
                <input
                  type="tel"
                  placeholder="0988xxxxxx"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none transition-colors ${
                    isLight 
                      ? 'bg-white border border-[#D5CEC4] text-[#1A1714] placeholder-[#8B837C] focus:border-[#C9A227]' 
                      : 'bg-[#181824] border border-white/10 text-white placeholder-gray-500 focus:border-gold-400'
                  }`}
                />
              </div>
              {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                isLight ? 'text-[#3D3630]' : 'text-gray-300'
              }`}>
                Email Nhận Hợp Đồng & Báo Giá
              </label>
              <div className="relative">
                <Mail className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${isLight ? 'text-[#6B635C]' : 'text-gray-400'}`} />
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none transition-colors ${
                    isLight 
                      ? 'bg-white border border-[#D5CEC4] text-[#1A1714] placeholder-[#8B837C] focus:border-[#C9A227]' 
                      : 'bg-[#181824] border border-white/10 text-white placeholder-gray-500 focus:border-gold-400'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Wedding Date & Venue */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                isLight ? 'text-[#3D3630]' : 'text-gray-300'
              }`}>
                Ngày Tổ Chức Tiệc Cưới <span className={isLight ? 'text-[#8B6914]' : 'text-gold-400'}>*</span>
              </label>
              <div className="relative">
                <Calendar className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${isLight ? 'text-[#6B635C]' : 'text-gray-400'}`} />
                <input
                  type="date"
                  required
                  value={formData.weddingDate}
                  onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                  className={`w-full rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none transition-colors ${
                    isLight 
                      ? 'bg-white border border-[#D5CEC4] text-[#1A1714] placeholder-[#8B837C] focus:border-[#C9A227]' 
                      : 'bg-[#181824] border border-white/10 text-white placeholder-gray-500 focus:border-gold-400'
                  }`}
                />
              </div>
              {errors.weddingDate && <p className="text-xs text-red-400 mt-1">{errors.weddingDate}</p>}
            </div>

            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                isLight ? 'text-[#3D3630]' : 'text-gray-300'
              }`}>
                Địa Điểm / Trung Tâm Tiệc Cưới
              </label>
              <div className="relative">
                <MapPin className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${isLight ? 'text-[#6B635C]' : 'text-gray-400'}`} />
                <input
                  type="text"
                  placeholder="VD: Gem Center, TP.HCM"
                  value={formData.venueCity}
                  onChange={(e) => setFormData({ ...formData, venueCity: e.target.value })}
                  className={`w-full rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none transition-colors ${
                    isLight 
                      ? 'bg-white border border-[#D5CEC4] text-[#1A1714] placeholder-[#8B837C] focus:border-[#C9A227]' 
                      : 'bg-[#181824] border border-white/10 text-white placeholder-gray-500 focus:border-gold-400'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Package Selector */}
          <div>
            <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
              isLight ? 'text-[#3D3630]' : 'text-gray-300'
            }`}>
              Gói Dịch Vụ Lựa Chọn
            </label>
            <select
              value={formData.selectedPackageId}
              onChange={(e) => setFormData({ ...formData, selectedPackageId: e.target.value })}
              className={`w-full rounded-xl px-4 py-2.5 text-sm focus:outline-none transition-colors cursor-pointer ${
                isLight 
                  ? 'bg-white border border-[#D5CEC4] text-[#1A1714] focus:border-[#C9A227]' 
                  : 'bg-[#181824] border border-white/10 text-white focus:border-gold-400'
              }`}
            >
              {SERVICE_PACKAGES.map((pkg) => (
                <option key={pkg.id} value={pkg.id} className={isLight ? 'bg-white text-black' : 'bg-[#12121A] text-white'}>
                  {pkg.name} — {formatCurrency(pkg.price)} (Cọc {formatCurrency((pkg.price * pkg.depositPercent) / 100)})
                </option>
              ))}
            </select>
          </div>

          {/* Special Requests */}
          <div>
            <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
              isLight ? 'text-[#3D3630]' : 'text-gray-300'
            }`}>
              Ghi Chú Hoặc Yêu Cầu Đặc Biệt
            </label>
            <textarea
              rows={2}
              placeholder="Yêu cầu flycam, phong cách màu sắc mong muốn, thời gian rước dâu..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className={`w-full rounded-xl px-4 py-2.5 text-sm focus:outline-none transition-colors ${
                isLight 
                  ? 'bg-white border border-[#D5CEC4] text-[#1A1714] placeholder-[#8B837C] focus:border-[#C9A227]' 
                  : 'bg-[#181824] border border-white/10 text-white placeholder-gray-500 focus:border-gold-400'
              }`}
            />
          </div>

          {/* Calculated Deposit Box */}
          <div className={`p-4 rounded-2xl flex items-center justify-between border ${
            isLight ? 'bg-[#FDF6E3]/50 border-[#E8D5A3]' : 'bg-black/40 border-gold-400/30'
          }`}>
            <div>
              <span className={`text-[11px] block uppercase ${isLight ? 'text-[#8B6914]' : 'text-gray-400'}`}>Số tiền cọc giữ ngày (30%):</span>
              <span className={`text-xl font-heading font-bold ${isLight ? 'text-[#1A1714]' : 'text-gold-400'}`}>
                {formatCurrency(depositAmount)}
              </span>
            </div>
            <div className={`text-right text-[11px] ${isLight ? 'text-[#6B635C]' : 'text-gray-400'}`}>
              <span>Tổng gói: {formatCurrency(currentPkg.price)}</span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full btn-gold py-4 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-gold-500/20"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Tiếp Tục: Quét Mã VietQR Đặt Cọc</span>
          </button>
        </form>
      </div>
    </div>
  );
};
