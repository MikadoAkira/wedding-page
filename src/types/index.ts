export type MediaCategory = 'all' | 'photo' | 'video' | 'prewedding' | 'ceremony';

export interface MediaItem {
  id: string;
  title: string;
  couple: string;
  location: string;
  date: string;
  category: 'photo' | 'video' | 'prewedding' | 'ceremony';
  categoryLabel: string;
  src: string;
  highResSrc?: string;
  videoUrl?: string; // YouTube embed or MP4
  duration?: string;
  cameraInfo?: string;
  aspect?: 'portrait' | 'landscape' | 'square';
  description?: string;
}

export interface PackageItem {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  isPopular?: boolean;
  price: number;
  originalPrice?: number;
  depositPercent: number;
  description: string;
  crewDetails: string[];
  features: string[];
  deliverables: string[];
  recommendedFor: string;
}

export interface BookingFormData {
  groomName: string;
  brideName: string;
  phone: string;
  email: string;
  weddingDate: string;
  venueCity: string;
  selectedPackageId: string;
  serviceType: string;
  notes: string;
  depositAmount: number;
  bookingCode: string;
  createdAt: string;
}

export interface SocialPlatform {
  id: string;
  name: string;
  handle: string;
  link: string;
  qrCodeUrl: string;
  badgeText: string;
  description: string;
  brandColor: string;
}

export interface Testimonial {
  id: string;
  coupleName: string;
  weddingDate: string;
  venue: string;
  packageUsed: string;
  rating: number;
  title: string;
  content: string;
  avatar: string;
  weddingPhoto: string;
}

export interface BankInfo {
  bankId: string;
  bankName: string;
  accountNo: string;
  accountName: string;
  branch: string;
}
