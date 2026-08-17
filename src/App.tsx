import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AlbumSection } from './components/AlbumSection';
import { BrandStory } from './components/BrandStory';
import { Gallery } from './components/Gallery';
import { LightboxModal } from './components/LightboxModal';
import { VideoModal } from './components/VideoModal';
import { ServicesPricing } from './components/ServicesPricing';
import { BookingModal } from './components/BookingModal';
import { QrPaymentModal } from './components/QrPaymentModal';
import { Testimonials } from './components/Testimonials';
import { StudioLocation } from './components/StudioLocation';
import { SocialConnect } from './components/SocialConnect';
import { FloatingContact } from './components/FloatingContact';
import { Footer } from './components/Footer';

import { PORTFOLIO_ITEMS } from './data/mockData';
import { BookingFormData, PackageItem } from './types';

function AppContent() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // Modal states
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState<string | undefined>('pkg-gold');

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Video modal state
  const [videoModal, setVideoModal] = useState<{ isOpen: boolean; url: string; title: string }>({
    isOpen: false,
    url: '',
    title: ''
  });

  // QR Payment state
  const [isQrOpen, setIsQrOpen] = useState(false);
  const [activeBooking, setActiveBooking] = useState<{
    formData: BookingFormData | null;
    packageItem: PackageItem | null;
  }>({
    formData: null,
    packageItem: null
  });

  // Handlers
  const handleOpenBooking = (pkgId?: string) => {
    if (pkgId) setSelectedPackageId(pkgId);
    setIsBookingOpen(true);
  };

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleOpenVideo = (url: string, title: string) => {
    setVideoModal({
      isOpen: true,
      url,
      title
    });
  };

  const handleCloseVideo = () => {
    setVideoModal({
      isOpen: false,
      url: '',
      title: ''
    });
  };

  const handleBookingSubmit = (data: BookingFormData, selectedPkg: PackageItem) => {
    setActiveBooking({
      formData: data,
      packageItem: selectedPkg
    });
    setIsBookingOpen(false);
    setIsQrOpen(true);
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-500 ${
      isLight ? 'bg-[#FAF8F5] text-[#1C1917]' : 'bg-[#0A0A0C] text-[#FAF8F5]'
    }`}>
      {/* Navigation Bar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Sections */}
      <main className="flex-grow space-y-4 sm:space-y-8">
        {/* 1. Hero Section (Album Cover & Grand Intro) */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenVideo={handleOpenVideo}
        />

        {/* 2. Brand Story */}
        <BrandStory />

        {/* 3. Album Slideshow */}
        <AlbumSection />

        {/* 4. Portfolio & Media Gallery */}
        <Gallery
          onOpenLightbox={handleOpenLightbox}
          onOpenVideo={handleOpenVideo}
        />

        {/* 5. Services & Pricing Packages */}
        <ServicesPricing onSelectPackage={(pkgId) => handleOpenBooking(pkgId)} />

        {/* 6. Couple Reviews & Testimonials */}
        <Testimonials />

        {/* 7. Studio Tour & Interactive Google Maps */}
        <StudioLocation />

        {/* 8. Social & Multi-Channel Connect */}
        <SocialConnect />
      </main>

      {/* Floating Action Speed Dial Widget */}
      <FloatingContact onOpenBooking={() => handleOpenBooking()} />

      {/* Footer */}
      <Footer />

      {/* --- MODALS --- */}
      {/* 1. Lightbox Photo Modal */}
      <LightboxModal
        items={PORTFOLIO_ITEMS}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />

      {/* 2. Video Player Modal */}
      <VideoModal
        isOpen={videoModal.isOpen}
        videoUrl={videoModal.url}
        title={videoModal.title}
        onClose={handleCloseVideo}
      />

      {/* 3. Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        initialPackageId={selectedPackageId}
        onClose={() => setIsBookingOpen(false)}
        onSubmitBooking={handleBookingSubmit}
      />

      {/* 4. VietQR Deposit Payment Modal */}
      <QrPaymentModal
        isOpen={isQrOpen}
        bookingData={activeBooking.formData}
        packageName={activeBooking.packageItem?.name || 'Gói Dịch Vụ Cưới'}
        totalPrice={activeBooking.packageItem?.price || 0}
        onClose={() => setIsQrOpen(false)}
        onSuccessDone={() => setIsQrOpen(false)}
      />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
