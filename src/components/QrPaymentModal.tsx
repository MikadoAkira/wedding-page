import React, { useState } from 'react';
import { X, Check, Copy, ShieldCheck, QrCode, AlertCircle, PhoneCall, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BANK_CONFIG, STUDIO_INFO } from '../data/mockData';
import { BookingFormData } from '../types';
import { useTheme } from '../context/ThemeContext';

interface QrPaymentModalProps {
  isOpen: boolean;
  bookingData: BookingFormData | null;
  packageName: string;
  totalPrice: number;
  onClose: () => void;
  onSuccessDone: () => void;
}

export const QrPaymentModal: React.FC<QrPaymentModalProps> = ({
  isOpen,
  bookingData,
  packageName,
  totalPrice,
  onClose,
  onSuccessDone
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  if (!isOpen || !bookingData) return null;

  const depositAmount = bookingData.depositAmount;
  const paymentContent = `${bookingData.groomName.trim().split(' ').pop() || 'KH'} ${bookingData.phone.slice(-4)} ${bookingData.bookingCode}`;

  // VietQR URL builder
  const vietQrUrl = `https://img.vietqr.io/image/${BANK_CONFIG.bankId}-${BANK_CONFIG.accountNo}-compact2.png?amount=${depositAmount}&addInfo=${encodeURIComponent(
    paymentContent
  )}&accountName=${encodeURIComponent(BANK_CONFIG.accountName)}`;

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleConfirmTransfer = () => {
    setIsConfirmed(true);
    // Fire celebratory confetti
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#FFF1C5', '#FFFFFF', '#E6D5B8']
    });
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
        {/* Modal Top Header */}
        <div className={`flex items-center justify-between px-6 py-4 border-b ${
          isLight ? 'bg-[#FDF6E3] border-[#E8D5A3]' : 'bg-[#161624] border-white/10'
        }`}>
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${
              isLight ? 'bg-[#F0EBE2] border-[#E2DDD5]' : 'bg-gold-400/20 border-transparent'
            }`}>
              <QrCode className={`w-4 h-4 ${isLight ? 'text-[#8B6914]' : 'text-gold-400'}`} />
            </div>
            <div>
              <h3 className={`text-sm sm:text-base font-bold ${
                isLight ? 'text-[#1A1714]' : 'text-white'
              }`}>
                Thanh Toán Đặt Cọc Giữ Lịch Cưới
              </h3>
              <p className={`text-[11px] font-mono ${isLight ? 'text-[#6B635C]' : 'text-gray-400'}`}>
                Mã đơn: <span className={`font-bold ${isLight ? 'text-[#8B6914]' : 'text-gold-400'}`}>{bookingData.bookingCode}</span>
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

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {!isConfirmed ? (
            <div>
              {/* Booking Summary Box */}
              <div className={`p-4 rounded-2xl border mb-6 ${
                isLight ? 'bg-[#FDF6E3]/50 border-[#E8D5A3]' : 'bg-white/5 border-white/10'
              }`}>
                <h4 className={`text-xs uppercase tracking-wider font-semibold mb-3 flex items-center gap-1.5 ${
                  isLight ? 'text-[#8B6914]' : 'text-gold-400'
                }`}>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Tóm tắt đơn đặt lịch</span>
                </h4>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className={`block ${isLight ? 'text-[#6B635C]' : 'text-gray-400'}`}>Cặp đôi:</span>
                    <strong className={`font-medium ${isLight ? 'text-[#1A1714]' : 'text-white'}`}>
                      {bookingData.groomName} & {bookingData.brideName}
                    </strong>
                  </div>
                  <div>
                    <span className={`block ${isLight ? 'text-[#6B635C]' : 'text-gray-400'}`}>Số điện thoại:</span>
                    <strong className={`font-medium ${isLight ? 'text-[#1A1714]' : 'text-white'}`}>{bookingData.phone}</strong>
                  </div>
                  <div>
                    <span className={`block ${isLight ? 'text-[#6B635C]' : 'text-gray-400'}`}>Ngày diễn ra:</span>
                    <strong className={`font-medium ${isLight ? 'text-[#8B6914]' : 'text-gold-300'}`}>{bookingData.weddingDate}</strong>
                  </div>
                  <div>
                    <span className={`block ${isLight ? 'text-[#6B635C]' : 'text-gray-400'}`}>Gói dịch vụ:</span>
                    <strong className={`font-medium ${isLight ? 'text-[#1A1714]' : 'text-white'}`}>{packageName}</strong>
                  </div>
                </div>

                <div className={`mt-4 pt-3 border-t flex items-center justify-between ${
                  isLight ? 'border-[#E8D5A3]' : 'border-white/10'
                }`}>
                  <span className={`text-xs ${isLight ? 'text-[#6B635C]' : 'text-gray-300'}`}>Tổng gói: {formatCurrency(totalPrice)}</span>
                  <div className="text-right">
                    <span className={`text-[11px] block ${isLight ? 'text-[#6B635C]' : 'text-gray-400'}`}>Số tiền cọc 30%:</span>
                    <span className={`text-lg sm:text-xl font-bold ${isLight ? 'text-[#1A1714]' : 'text-gold-400'}`}>
                      {formatCurrency(depositAmount)}
                    </span>
                  </div>
                </div>
              </div>

              {/* QR Code & Bank Transfer Section */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* QR Display */}
                <div className="md:col-span-5 flex flex-col items-center">
                  <div className={`p-3 rounded-2xl shadow-xl border-2 ${
                    isLight ? 'bg-white border-[#C9A227]/40 shadow-[#8B6914]/10' : 'bg-white border-gold-400/50'
                  }`}>
                    <img
                      src={vietQrUrl}
                      alt="Mã VietQR thanh toán đặt cọc Lumina Studio"
                      className="w-48 h-48 object-contain rounded-lg"
                    />
                  </div>
                  <p className={`text-[11px] text-center mt-2 ${isLight ? 'text-[#6B635C]' : 'text-gray-400'}`}>
                    Mở app Ngân hàng bất kỳ để quét mã VietQR tự động
                  </p>
                </div>

                {/* Bank Info Details & Copy Buttons */}
                <div className="md:col-span-7 space-y-3">
                  {/* Account Name */}
                  <div className={`p-3 rounded-xl border ${
                    isLight ? 'bg-[#F0EBE2]/50 border-[#D5CEC4]' : 'bg-black/40 border-white/5'
                  }`}>
                    <span className={`text-[10px] uppercase block ${isLight ? 'text-[#6B635C]' : 'text-gray-400'}`}>Ngân hàng & Chủ TK:</span>
                    <p className={`text-xs font-semibold ${isLight ? 'text-[#1A1714]' : 'text-white'}`}>{BANK_CONFIG.bankName}</p>
                    <p className={`text-xs font-bold ${isLight ? 'text-[#8B6914]' : 'text-gold-400'}`}>{BANK_CONFIG.accountName}</p>
                  </div>

                  {/* Account No */}
                  <div className={`p-3 rounded-xl border flex items-center justify-between ${
                    isLight ? 'bg-[#F0EBE2]/50 border-[#D5CEC4]' : 'bg-black/40 border-white/5'
                  }`}>
                    <div>
                      <span className={`text-[10px] uppercase block ${isLight ? 'text-[#6B635C]' : 'text-gray-400'}`}>Số tài khoản:</span>
                      <p className={`text-sm font-mono font-bold tracking-wider ${isLight ? 'text-[#1A1714]' : 'text-white'}`}>
                        {BANK_CONFIG.accountNo}
                      </p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(BANK_CONFIG.accountNo, 'accNo')}
                      className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg transition-colors ${
                        isLight ? 'bg-white hover:bg-[#8B6914] text-[#3D3630] hover:text-white border border-[#D5CEC4]' : 'bg-white/10 hover:bg-gold-400 hover:text-black'
                      }`}
                    >
                      {copiedField === 'accNo' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-500" />
                          <span className="text-green-500">Đã copy</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Sao chép</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Deposit Amount */}
                  <div className={`p-3 rounded-xl border flex items-center justify-between ${
                    isLight ? 'bg-[#F0EBE2]/50 border-[#D5CEC4]' : 'bg-black/40 border-white/5'
                  }`}>
                    <div>
                      <span className={`text-[10px] uppercase block ${isLight ? 'text-[#6B635C]' : 'text-gray-400'}`}>Số tiền chuyển:</span>
                      <p className={`text-sm font-mono font-bold ${isLight ? 'text-[#8B6914]' : 'text-gold-400'}`}>
                        {formatCurrency(depositAmount)}
                      </p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(depositAmount.toString(), 'amount')}
                      className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg transition-colors ${
                        isLight ? 'bg-white hover:bg-[#8B6914] text-[#3D3630] hover:text-white border border-[#D5CEC4]' : 'bg-white/10 hover:bg-gold-400 hover:text-black'
                      }`}
                    >
                      {copiedField === 'amount' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-500" />
                          <span className="text-green-500">Đã copy</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Sao chép</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Transfer Note Content */}
                  <div className={`p-3 rounded-xl border flex items-center justify-between ${
                    isLight ? 'bg-[#FDF6E3]/50 border-[#C9A227]/40' : 'bg-black/40 border-gold-400/30'
                  }`}>
                    <div>
                      <span className={`text-[10px] uppercase block ${isLight ? 'text-[#8B6914]' : 'text-gold-400'}`}>Nội dung chuyển khoản (bắt buộc):</span>
                      <p className={`text-xs font-mono font-bold tracking-wide ${isLight ? 'text-[#1A1714]' : 'text-white'}`}>
                        {paymentContent}
                      </p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(paymentContent, 'content')}
                      className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg transition-colors ${
                        isLight ? 'bg-white hover:bg-[#8B6914] text-[#8B6914] hover:text-white border border-[#C9A227]/40' : 'bg-gold-400/20 hover:bg-gold-400 text-gold-300 hover:text-black'
                      }`}
                    >
                      {copiedField === 'content' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-500" />
                          <span className="text-green-500">Đã copy</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Sao chép</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Notice */}
              <div className="mt-6 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-2.5 text-xs text-amber-200">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
                <span>
                  Khoản tiền cọc giúp Lumina khóa lịch độc quyền cho ekip của bạn trong ngày cưới. Hợp đồng chính thức có dấu đỏ và hóa đơn điện tử sẽ được gửi qua email sau khi xác nhận.
                </span>
              </div>

              {/* Action Button */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleConfirmTransfer}
                  className="flex-1 btn-gold py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Tôi Đã Chuyển Khoản Thành Công</span>
                </button>

                <button
                  onClick={onClose}
                  className={`px-6 py-3.5 rounded-xl text-xs font-semibold ${
                    isLight ? 'bg-black/5 hover:bg-black/10 text-[#3D3630]' : 'bg-white/5 hover:bg-white/10 text-gray-300'
                  }`}
                >
                  Đóng & Chuyển Sau
                </button>
              </div>
            </div>
          ) : (
            /* Success confirmation screen */
            <div className="py-6 text-center animate-fade-in flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </div>

              <h4 className={`font-heading text-2xl font-bold mb-2 ${isLight ? 'text-[#1A1714]' : 'text-white'}`}>
                Đã Ghi Nhận Yêu Cầu Đặt Lịch!
              </h4>

              <p className={`font-semibold text-sm mb-4 ${isLight ? 'text-[#8B6914]' : 'text-gold-300'}`}>
                Cảm ơn hai bạn {bookingData.groomName} & {bookingData.brideName} đã tin tưởng Lumina!
              </p>

              <div className={`max-w-md p-4 rounded-2xl border text-xs space-y-2 mb-6 text-left ${
                isLight ? 'bg-[#F0EBE2]/50 border-[#D5CEC4] text-[#3D3630]' : 'bg-white/5 border-white/10 text-gray-300'
              }`}>
                <div className="flex items-center justify-between">
                  <span className={isLight ? 'text-[#6B635C]' : 'text-gray-400'}>Mã đặt lịch:</span>
                  <span className={`font-mono font-bold ${isLight ? 'text-[#8B6914]' : 'text-gold-400'}`}>{bookingData.bookingCode}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={isLight ? 'text-[#6B635C]' : 'text-gray-400'}>Trạng thái:</span>
                  <span className="text-amber-500 font-medium">Đang chờ đối soát ngân hàng (5-10 phút)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={isLight ? 'text-[#6B635C]' : 'text-gray-400'}>Chuyên viên hỗ trợ:</span>
                  <span className={isLight ? 'text-[#1A1714] font-medium' : 'text-white'}>Hotline {STUDIO_INFO.hotline}</span>
                </div>
              </div>

              <p className={`text-xs max-w-md leading-relaxed mb-6 font-light ${isLight ? 'text-[#6B635C]' : 'text-gray-400'}`}>
                Ekip Lumina sẽ liên hệ lại trực tiếp qua SĐT <strong className={isLight ? 'text-[#1A1714]' : 'text-white'}>{bookingData.phone}</strong> và gửi hợp đồng dịch vụ đính kèm qua email <strong className={isLight ? 'text-[#1A1714]' : 'text-white'}>{bookingData.email}</strong> ngay khi nhận được biến động số dư.
              </p>

              <button
                onClick={() => {
                  setIsConfirmed(false);
                  onSuccessDone();
                }}
                className="btn-gold px-8 py-3 rounded-full text-xs uppercase font-bold tracking-wider shadow-lg"
              >
                Hoàn Tất & Quay Lại Trang Chủ
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
