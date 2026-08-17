import { MediaItem, PackageItem, SocialPlatform, Testimonial, BankInfo } from '../types';

export const BANK_CONFIG: BankInfo = {
  bankId: 'MBBANK', // MB Bank
  bankName: 'MB Bank (Ngân Hàng Quân Đội)',
  accountNo: '0988889999',
  accountName: 'LUMINA WEDDING MEDIA STUDIO',
  branch: 'Hội sở TP. Hồ Chí Minh'
};

export const STUDIO_INFO = {
  name: 'LUMINA WEDDING MEDIA',
  slogan: 'Nghệ Thuật Kể Chuyện Tình Yêu Bằng Thước Phim & Phóng Sự Cưới Điện Ảnh',
  shortBio: 'Lumina Studio quy tụ đội ngũ đạo diễn hình ảnh, nhiếp ảnh gia và colorist tâm huyết. Chúng tôi ghi lại trọn vẹn những giọt nước mắt hạnh phúc, nụ cười rạng ngời và những khoảnh khắc vô giá trong ngày trọng đại nhất của bạn.',
  hotline: '0988.889.999',
  email: 'contact@luminawedding.vn',
  address: '188/12 Nguyễn Văn Hưởng, Phường Thảo Điền, TP. Thủ Đức, TP. Hồ Chí Minh',
  hours: '08:30 - 21:00 (Tất cả các ngày trong tuần - Vui lòng hẹn trước khi ghé thăm)',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0558488344686!2d106.7299388748053!3d10.807797789342777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317526210f92416b%3A0x7d018eb586efca26!2zMTg4IE5ndXnhu4VuIFbEg24gSMaw4bufbmcsIFRo4bqjbyDEkGnhu4FuLCBRdeG6rW4gMiwgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s',
  mapsDirectUrl: 'https://maps.google.com/?q=188+Nguyen+Van+Huong+Thao+Dien+Thu+Duc+Ho+Chi+Minh'
};

export const PORTFOLIO_ITEMS: MediaItem[] = [
  {
    id: 'film-1',
    title: 'The Eternal Vow - Lễ Cưới Hoàng Gia',
    couple: 'Minh Trí & Phương Thảo',
    location: 'Gem Center, TP.HCM',
    date: 'Tháng 12, 2025',
    category: 'video',
    categoryLabel: 'Wedding Film 4K',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/g0Hh1Wl_jfg?autoplay=1',
    duration: '04:25 min',
    cameraInfo: 'Sony FX3 + G Master Cine Lens / Color Graded Cine4K',
    aspect: 'landscape',
    description: 'Thước phim phóng sự ghi lại trọn vẹn những lời thề nguyền xúc động trong không gian tiệc cưới lộng lẫy.'
  },
  {
    id: 'photo-1',
    title: 'Nước Mắt Hạnh Phúc Của Cha',
    couple: 'Hoàng Nam & Khánh Linh',
    location: 'InterContinental Saigon',
    date: 'Tháng 01, 2026',
    category: 'photo',
    categoryLabel: 'Phóng Sự Cưới',
    src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85',
    highResSrc: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2400&q=95',
    cameraInfo: 'Leica SL2-S / Summilux 50mm f/1.4',
    aspect: 'portrait',
    description: 'Khoảnh khắc người cha nghẹn ngào trao tay con gái cho chú rể trước lễ đường.'
  },
  {
    id: 'prewed-1',
    title: 'Sunset Whispers in Da Lat',
    couple: 'Đức Anh & Mai Anh',
    location: 'Đồi Thông & Hồ Tuyền Lâm, Đà Lạt',
    date: 'Tháng 02, 2026',
    category: 'prewedding',
    categoryLabel: 'Pre-Wedding',
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85',
    highResSrc: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2400&q=95',
    cameraInfo: 'Canon R5 + RF 85mm f/1.2L',
    aspect: 'landscape',
    description: 'Bộ ảnh Pre-wedding mang phong cách điện ảnh vintage giữa rừng thông và hoàng hôn Đà Lạt.'
  },
  {
    id: 'ceremony-1',
    title: 'Nghi Lễ Gia Tiên Thuần Việt - Áo Dài Tơ Tằm',
    couple: 'Quốc Bảo & Tú Uyên',
    location: 'Biệt Thự Cổ, Quận 3, TP.HCM',
    date: 'Tháng 01, 2026',
    category: 'ceremony',
    categoryLabel: 'Lễ Gia Tiên & Đính Hôn',
    src: 'https://images.unsplash.com/photo-1594732832278-abd644401426?auto=format&fit=crop&w=1200&q=85',
    highResSrc: 'https://images.unsplash.com/photo-1594732832278-abd644401426?auto=format&fit=crop&w=2400&q=95',
    cameraInfo: 'Sony A7R V + 35mm f/1.4 GM',
    aspect: 'portrait',
    description: 'Trang nghiêm, ấm cúng và gìn giữ trọn vẹn nét văn hóa truyền thống trong lễ rước dâu.'
  },
  {
    id: 'film-2',
    title: 'Ocean Breeze Vows - Tiệc Cưới Bãi Biển',
    couple: 'Thế Vinh & Jessica Lê',
    location: 'Six Senses Ninh Vân Bay, Nha Trang',
    date: 'Tháng 11, 2025',
    category: 'video',
    categoryLabel: 'Wedding Film 4K',
    src: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/fJ9rUzIMcZQ?autoplay=1',
    duration: '05:18 min',
    cameraInfo: 'RED Komodo 6K + DJI Inspire 3 Cine Drone',
    aspect: 'landscape',
    description: 'Bữa tiệc hoàng hôn bên bờ biển cùng những giai điệu acoustic và pháo hoa rực rỡ.'
  },
  {
    id: 'photo-2',
    title: 'First Dance Dưới Ánh Nến Lung Linh',
    couple: 'Tuấn Khang & Bảo Ngọc',
    location: 'Park Hyatt Saigon',
    date: 'Tháng 12, 2025',
    category: 'photo',
    categoryLabel: 'Phóng Sự Cưới',
    src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=85',
    highResSrc: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=2400&q=95',
    cameraInfo: 'Sony A1 + 50mm f/1.2 GM',
    aspect: 'landscape',
    description: 'Vũ điệu đầu tiên của hai tâm hồn đồng điệu trong không gian ngập tràn ánh nến và hoa tươi.'
  },
  {
    id: 'prewed-2',
    title: 'Chic In The City - Sài Gòn Night Lights',
    couple: 'Trọng Hiếu & Thùy Dung',
    location: 'Nhà Hát Thành Phố & Bitexco Sky',
    date: 'Tháng 01, 2026',
    category: 'prewedding',
    categoryLabel: 'Pre-Wedding',
    src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85',
    highResSrc: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=2400&q=95',
    cameraInfo: 'Nikon Z9 + Noct 58mm f/0.95',
    aspect: 'portrait',
    description: 'Phong cách Editorial Haute Couture thời thượng giữa lòng phố thị hoa lệ.'
  },
  {
    id: 'ceremony-2',
    title: 'Lễ Đính Hôn Trong Khu Vườn Bí Mật',
    couple: 'Hải Đăng & Thảo Vy',
    location: 'An Lâm Retreats Saigon River',
    date: 'Tháng 10, 2025',
    category: 'ceremony',
    categoryLabel: 'Lễ Gia Tiên & Đính Hôn',
    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85',
    highResSrc: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2400&q=95',
    cameraInfo: 'Fujifilm GFX 100 II + GF 110mm f/2',
    aspect: 'portrait',
    description: 'Không gian ấm cúng chỉ dành cho gia đình và những người bạn thân thiết nhất.'
  },
  {
    id: 'photo-3',
    title: 'The Unfiltered Joy - Nụ Cười Nâng Ly',
    couple: 'Đăng Khoa & Ngọc Trâm',
    location: 'Vinpearl Landmark 81',
    date: 'Tháng 12, 2025',
    category: 'photo',
    categoryLabel: 'Phóng Sự Cưới',
    src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=85',
    highResSrc: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=2400&q=95',
    cameraInfo: 'Canon R3 + RF 28-70mm f/2L',
    aspect: 'landscape',
    description: 'Những tiếng cười giòn giã và những cái ôm siết chặt mừng ngày đôi bạn về chung một nhà.'
  }
];

export const SERVICE_PACKAGES: PackageItem[] = [
  {
    id: 'pkg-silver',
    name: 'Gói Moment (Cơ Bản)',
    tagline: 'Ghi lại chân thực & tinh tế từng khoảnh khắc trọng đại',
    price: 12500000,
    originalPrice: 15000000,
    depositPercent: 30,
    description: 'Phù hợp cho các cặp đôi tổ chức tiệc cưới ấm cúng hoặc 1 buổi lễ chính (Lễ Gia Tiên hoặc Tiệc Tối).',
    crewDetails: [
      '01 Nhiếp ảnh gia chính (Senior Photographer)',
      '01 Trợ lý ánh sáng & hậu cần chuyên nghiệp'
    ],
    features: [
      'Chụp không giới hạn số lượng file trong suốt buổi lễ (3 - 4 tiếng)',
      'Tone màu chuẩn phong cách Cinematic Film & Editorial',
      'Chỉnh sửa chi tiết (Retouch) 60 ảnh xuất sắc nhất',
      'Toàn bộ file gốc JPEG chất lượng cao được bàn giao sau 24h',
      'Hỗ trợ setup ánh sáng flash/strobe chuyên dụng trong hội trường'
    ],
    deliverables: [
      '01 Hộp quà kỷ niệm Lumina Signature',
      '01 USB gỗ khắc laser chứa toàn bộ file gốc & ảnh đã chỉnh sửa',
      '01 Album Photobook cao cấp 30 trang (Size 25x35cm)',
      '01 Ảnh cổng pha lê tráng gương cao cấp (Size 60x90cm)'
    ],
    recommendedFor: 'Tiệc cưới ấm cúng dưới 150 khách hoặc chỉ quay/chụp 1 buổi lễ.'
  },
  {
    id: 'pkg-gold',
    name: 'Gói Royal Vows (VIP Phổ Biến)',
    tagline: 'Sự kết hợp hoàn hảo giữa Phóng Sự Ảnh & Thước Phim Highlight 4K',
    badge: 'Được Đặt Nhiều Nhất',
    isPopular: true,
    price: 26500000,
    originalPrice: 32000000,
    depositPercent: 30,
    description: 'Trọn gói cả ngày (Sáng Lễ Gia Tiên + Tối Tiệc Cưới). Đầy đủ đội ngũ chụp ảnh & quay phim điện ảnh.',
    crewDetails: [
      '02 Nhiếp ảnh gia bắt trọn góc máy toàn cảnh và cận cảnh',
      '02 Quay phim chuyên nghiệp (Đạo diễn hình ảnh & Camera operator)',
      '01 Trợ lý kỹ thuật và thiết bị đèn chuyên nghiệp'
    ],
    features: [
      'Chụp và quay trọn vẹn cả ngày: Lễ Gia Tiên sáng + Tiệc Tối (Full-day coverage)',
      'Trang bị hệ thống máy quay điện ảnh Sony Cinema Line (FX3/FX6)',
      'Flycam 4K quay toàn cảnh không gian tiệc & rước dâu (nếu địa điểm cho phép)',
      'Retouch chi tiết 120 ảnh nghệ thuật xuất sắc nhất',
      '01 Clip Teaser 60s giao trong vòng 48h để đăng Facebook / Instagram / TikTok',
      '01 Phim Wedding Highlight Cinematic 4K dài 4 - 6 phút (kèm lồng tiếng vows & nhạc bản quyền)'
    ],
    deliverables: [
      'Hộp da cao cấp Lumina Luxury Box',
      '01 Photobook Artbook cao cấp bìa vải Canvas / Da Ý 50 trang (Size 30x30cm)',
      '02 Ảnh cổng pha lê tráng gương viền kim loại mạ vàng (Size 60x90cm)',
      'USB Type-C mạ vàng chứa toàn bộ phim 4K Master & ảnh High-Res'
    ],
    recommendedFor: 'Các cặp đôi mong muốn lưu giữ trọn vẹn từng giọt cảm xúc cả ngày cưới.'
  },
  {
    id: 'pkg-diamond',
    name: 'Gói Cinematic Masterpiece (Toàn Diện)',
    tagline: 'Đỉnh cao nghệ thuật điện ảnh cưới đỉnh cao chuẩn rạp chiếu',
    badge: 'Đẳng Cấp Tối Thượng',
    price: 48000000,
    originalPrice: 58000000,
    depositPercent: 30,
    description: 'Đội ngũ Media đạo diễn chuyên biệt, trang bị thiết bị điện ảnh Hollywood, bao trùm từ Pre-wedding đến đại tiệc.',
    crewDetails: [
      '01 Giám đốc Nghệ thuật & Đạo diễn hình ảnh trực tiếp điều phối',
      '03 Nhiếp ảnh gia Master Wedding Photographers',
      '03 Nhà quay phim điện ảnh + Đội ngũ Flycam Chuyên Dụng (DJI Inspire)',
      '02 Trợ lý kỹ thuật, âm thanh đa kênh & ánh sáng Studio di động'
    ],
    features: [
      'Bao gồm 01 buổi chụp Pre-wedding ngoại cảnh cao cấp trước ngày cưới',
      'Quay - Chụp trọn gói toàn bộ chuỗi sự kiện cưới (Đính hôn + Lễ Rước Dâu + Dạ Tiệc Tối)',
      'SAME-DAY EDIT: Dựng và chiếu Clip Highlight ngay tại màn hình LED tiệc tối',
      'Ghi âm âm thanh vows & phát biểu bằng hệ thống Micro Wireless chuyên nghiệp chuẩn rạp phim',
      'Retouch không giới hạn toàn bộ ảnh chọn lọc (200+ ảnh)',
      'Phim tài liệu cưới Cinematic Full Feature Film (15 - 25 phút) + 01 Highlight 5 phút + 03 Teaser Reels/TikTok'
    ],
    deliverables: [
      'Lumina Presidential Wooden Box khắc tên cô dâu chú rể mạ vàng 24K',
      '02 Photobook Luxury khổ lớn bìa Da Bò Ý nhập khẩu (Size 30x45cm)',
      '03 Ảnh cổng nghệ thuật cao cấp khung hợp kim siêu mỏng',
      'Ổ cứng SSD di động 1TB chứa toàn bộ dữ liệu RAW, ProRes 422HQ & Master Film 4K',
      'Tri ân dịch vụ bảo hành lưu trữ dữ liệu vĩnh viễn trên Lumina Cloud'
    ],
    recommendedFor: 'Đại tiệc cưới quy mô lớn, Destination Wedding, tiệc cưới khách sạn 5 sao cao cấp.'
  }
];

export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  {
    id: 'facebook',
    name: 'Facebook Fanpage',
    handle: '@luminawedding.media',
    link: 'https://facebook.com',
    qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://facebook.com/luminawedding.media',
    badgeText: '50k+ Followers',
    description: 'Cập nhật các bộ ảnh phóng sự cưới và feedback mới nhất từ các cặp đôi.',
    brandColor: '#1877F2'
  },
  {
    id: 'tiktok',
    name: 'TikTok Channel',
    handle: '@lumina.weddingfilm',
    link: 'https://tiktok.com',
    qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://tiktok.com/@lumina.weddingfilm',
    badgeText: '1.2M+ Likes',
    description: 'Xem những thước phim ngắn xúc động, xu hướng và hậu trường vui nhộn.',
    brandColor: '#FE2C55'
  },
  {
    id: 'zalo',
    name: 'Zalo Official Account',
    handle: 'Lumina Wedding Media',
    link: 'https://zalo.me',
    qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://zalo.me/0988889999',
    badgeText: 'Tư Vấn 24/7',
    description: 'Nhắn tin trực tiếp với chuyên viên tư vấn để nhận báo giá & lịch trống nhanh nhất.',
    brandColor: '#0068FF'
  },
  {
    id: 'instagram',
    name: 'Instagram Portfolio',
    handle: '@lumina.wedding.cinematic',
    link: 'https://instagram.com',
    qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://instagram.com/lumina.wedding.cinematic',
    badgeText: 'Artistic Feed',
    description: 'Không gian trưng bày ảnh nghệ thuật theo tone màu sang trọng & trường tồn.',
    brandColor: '#E1306C'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'review-1',
    coupleName: 'Minh Trí & Phương Thảo',
    weddingDate: '15/12/2025',
    venue: 'Gem Center, Q.1',
    packageUsed: 'Gói Royal Vows',
    rating: 5,
    title: 'Thước phim vượt xa mọi sự kỳ vọng của vợ chồng mình!',
    content: 'Đội ngũ Lumina quá sức nhiệt tình và tinh tế. Các bạn không bắt cô dâu chú rể phải diễn gượng gạo mà luôn kiên nhẫn bắt từng khoảnh khắc tự nhiên nhất. Xem lại video highlight mà cả hai vợ chồng đều rơm rớm nước mắt vì xúc động.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    weddingPhoto: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'review-2',
    coupleName: 'Thế Vinh & Jessica Lê',
    weddingDate: '28/11/2025',
    venue: 'Six Senses Ninh Vân Bay',
    packageUsed: 'Gói Cinematic Masterpiece',
    rating: 5,
    title: 'Chuẩn màu điện ảnh và bắt trọn từng cảm xúc bãi biển',
    content: 'Tụi mình bay từ Úc về tổ chức tiệc cưới bãi biển nên rất khắt khe về chất lượng hình ảnh. Lumina đã làm việc vô cùng chuyên nghiệp, Same-day edit chiếu ngay trong tiệc làm tất cả khách mời ngoại quốc đều trầm trồ vỗ tay!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    weddingPhoto: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'review-3',
    coupleName: 'Hoàng Nam & Khánh Linh',
    weddingDate: '08/01/2026',
    venue: 'InterContinental Saigon',
    packageUsed: 'Gói Moment (Cơ Bản)',
    rating: 5,
    title: 'Giao file cực nhanh, ảnh nước da và màu sắc cực sang',
    content: 'Ảnh phóng sự bắt được góc ba mình khóc trao tay mình cho chồng mà cả đời này mình sẽ không bao giờ quên được. Cảm ơn ekip Lumina rất nhiều vì cái tâm làm nghề!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    weddingPhoto: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80'
  }
];

export const BRAND_STATS = [
  { value: '850+', label: 'Cặp Đôi Đồng Hành', subtext: 'Trong suốt 8 năm qua' },
  { value: '100%', label: 'Cảm Xúc Tự Nhiên', subtext: 'Không tạo dáng gượng ép' },
  { value: '4K/6K', label: 'Chuẩn Điện Ảnh Cinema', subtext: 'Sony Cine & RED Cam' },
  { value: '48h', label: 'Bàn Giao File Teaser', subtext: 'Kịp thời chia sẻ mạng xã hội' },
];

// ============================================================================
// HƯỚNG DẪN THAY ĐỔI NỘI DUNG (CONTENT & ASSETS) CHO LANDING PAGE
// ============================================================================
// File này chứa toàn bộ nội dung hiển thị trên Landing Page. 
// Bạn chỉ cần thay đổi text, link ảnh (src), link video (videoUrl) ở dưới đây 
// thì giao diện sẽ tự động cập nhật mà không cần sửa code bên trong component.

// 1. NỘI DUNG PHẦN HERO (TRANG CHỦ ĐẦU TIÊN)
export const HERO_CONTENT = {
  // Ảnh nền chính của màn hình đầu tiên
  backgroundImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=90',
  // Link video Youtube (Lưu ý: giữ nguyên tham số ?autoplay=1 nếu muốn tự động chạy)
  showreelVideoUrl: 'https://www.youtube.com/embed/g0Hh1Wl_jfg?autoplay=1',
  // Huy hiệu nhỏ ở trên cùng
  badgeText: 'Cinematic Wedding Films & Documentary Photography',
  // Tiêu đề chính
  mainHeadingLine1: 'Lưu Giữ Trọn Vẹn',
  mainHeadingLine2: 'Cảm Xúc Ngày Chung Đôi',
  // Đoạn mô tả dưới tiêu đề
  description: 'Lumina Studio mang đến góc nhìn điện ảnh và phóng sự chân thực, biến mỗi khoảnh khắc trong ngày cưới của bạn thành một tác phẩm nghệ thuật vượt thời gian.',
};

// 2. NỘI DUNG PHẦN CÂU CHUYỆN THƯƠNG HIỆU (BRAND STORY)
export const BRAND_STORY_CONTENT = {
  // Ảnh chính (to) bên trái
  mainImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85',
  // Câu quote đè lên ảnh chính
  quoteText: '"Mỗi đám cưới là một tác phẩm điện ảnh độc bản không thể sao chép."',
  // Ảnh phụ (nhỏ) nằm đè góc phải
  subImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=85',
  
  // Tiêu đề chính của phần giới thiệu
  badge: 'Triết Lý Nghệ Thuật • Brand Story',
  title: 'Hơn Cả Một Bức Ảnh, Đó Là Tác Phẩm Điện Ảnh Của Cuộc Đời Bạn',
  description: 'Thành lập từ 2016, Lumina Studio tiên phong mang phong cách Cinematic Documentary vào nhiếp ảnh và phim cưới tại Việt Nam. Thay vì những góc máy dàn dựng khuôn mẫu, chúng tôi đi tìm vẻ đẹp từ những khoảnh khắc vô giá nhất.',
};

// 3. NỘI DUNG PHẦN ALBUM ẢNH LƯỚT (ALBUM SECTION)
import { Heart, Sparkles, Video } from 'lucide-react';
export const ALBUM_PAGES = [
  {
    title: "Khoảnh Khắc Cảm Xúc",
    subtitle: "Phóng sự cưới / Journalism",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80",
    description: "Không dàn dựng, không kịch bản. Chúng tôi ghi lại những nụ cười, giọt nước mắt và những cái ôm chân thật nhất bằng ngôn ngữ của ánh sáng tự nhiên.",
    stats: { photos: "800+", hours: "12h" },
    icon: Heart
  },
  {
    title: "Không Gian & Chi Tiết",
    subtitle: "Nghệ thuật sắp đặt / Details",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
    description: "Từ chiếc váy cưới lộng lẫy, đôi nhẫn cưới lấp lánh đến không gian tiệc trang hoàng lãng mạn - mọi chi tiết đều xứng đáng được tôn vinh.",
    stats: { photos: "200+", hours: "Decor" },
    icon: Sparkles
  },
  {
    title: "Điện Ảnh Tình Yêu",
    subtitle: "Phim phóng sự cưới 4K / Wedding Film",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80",
    description: "Tái hiện ngày trọng đại qua lăng kính điện ảnh 4K. Kịch bản cảm xúc kết hợp màu sắc điện ảnh (Color Grading) vượt thời gian.",
    stats: { type: "4K / 6K", length: "5-7 mins" },
    icon: Video
  }
];
