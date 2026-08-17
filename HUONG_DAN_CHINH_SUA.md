# 📖 HƯỚNG DẪN TỰ CHỈNH SỬA THÔNG TIN & ASSETS (LUMINA LANDING PAGE)

Tài liệu này hướng dẫn chi tiết cách bạn có thể tự thay đổi tất cả nội dung (văn bản, giá cả, tài khoản ngân hàng, hình ảnh, video Youtube...) trên Landing Page một cách dễ dàng và an toàn nhất.

---

## 🎯 Vị trí file cấu hình chính

Mọi nội dung hiển thị trên Landing Page đã được đưa về một file duy nhất:
📂 **`src/data/mockData.ts`**

Bạn chỉ cần mở file này bằng VS Code hoặc bất kỳ trình soạn thảo code nào, tìm đến mục tương ứng và thay đổi dữ liệu bên trong dấu nháy kép `""` hoặc nháy đơn `''`.

---

## 1. Thông tin Studio & Liên hệ (`STUDIO_INFO`)

Mở `src/data/mockData.ts`, tìm đoạn `export const STUDIO_INFO = { ... }`:

```typescript
export const STUDIO_INFO = {
  name: 'LUMINA WEDDING MEDIA',                                  // Tên thương hiệu
  slogan: 'Nghệ Thuật Kể Chuyện Tình Yêu Bằng Thước Phim...',       // Slogan
  shortBio: 'Lumina Studio quy tụ đội ngũ đạo diễn hình ảnh...',     // Giới thiệu ngắn
  hotline: '0988.889.999',                                       // Hotline hiển thị & gọi điện
  email: 'contact@luminawedding.vn',                             // Email nhận liên hệ
  address: '188/12 Nguyễn Văn Hưởng, Thảo Điền, TP. Thủ Đức...', // Địa chỉ studio
  hours: '08:30 - 21:00 (Tất cả các ngày trong tuần)',           // Giờ mở cửa
  mapsEmbedUrl: 'https://www.google.com/maps/embed?...',         // Link iframe Google Map
  mapsDirectUrl: 'https://maps.google.com/?q=...'               // Link mở app Google Maps
};
```

---

## 2. Thông tin Tài khoản Ngân hàng nhận cọc VietQR (`BANK_CONFIG`)

Đoạn cấu hình tạo mã QR tự động:

```typescript
export const BANK_CONFIG: BankInfo = {
  bankId: 'MBBANK',                           // Mã ngân hàng theo chuẩn Napas (MBBANK, VCB, TCB, ACB, VPB...)
  bankName: 'MB Bank (Ngân Hàng Quân Đội)',   // Tên hiển thị
  accountNo: '0988889999',                   // Số tài khoản nhận tiền
  accountName: 'LUMINA WEDDING MEDIA STUDIO', // Tên chủ tài khoản (viết hoa không dấu)
  branch: 'Hội sở TP. Hồ Chí Minh'
};
```

---

## 3. Banner mở đầu & Video Youtube Showreel (`HERO_CONTENT`)

Nằm ở cuối file `src/data/mockData.ts`:

```typescript
export const HERO_CONTENT = {
  // Ảnh nền chính kích thước lớn (khuyên dùng tỉ lệ ngang 16:9, độ phân giải 2000px)
  backgroundImage: 'https://images.unsplash.com/...',
  
  // Link video nhúng Youtube (Lưu ý: giữ đuôi ?autoplay=1 để tự động chạy khi mở)
  showreelVideoUrl: 'https://www.youtube.com/embed/g0Hh1Wl_jfg?autoplay=1',
  
  // Huy hiệu nhỏ trên cùng
  badgeText: 'Cinematic Wedding Films & Documentary Photography',
  
  // Tiêu đề chính 2 dòng
  mainHeadingLine1: 'Lưu Giữ Trọn Vẹn',
  mainHeadingLine2: 'Cảm Xúc Ngày Chung Đôi',
  
  // Đoạn giới thiệu
  description: 'Lumina Studio mang đến góc nhìn điện ảnh...'
};
```

---

## 4. Cuốn Album Carousel tự động chuyển slide (`ALBUM_PAGES`)

Bạn có thể chỉnh sửa, thêm hoặc bớt các trang album trong mảng `ALBUM_PAGES`:

```typescript
export const ALBUM_PAGES = [
  {
    title: "Khoảnh Khắc Cảm Xúc",                // Tiêu đề lớn
    subtitle: "Phóng sự cưới / Journalism",     // Tiêu đề phụ
    image: "https://images.unsplash.com/...",   // Link ảnh chính
    description: "Không dàn dựng, không kịch bản...", // Lời dẫn
    stats: { photos: "800+", hours: "12h" },    // Thông số hiển thị góc dưới
    icon: Heart                                 // Icon (Heart, Sparkles, Video...)
  },
  // Các trang tiếp theo...
];
```
> ⏱️ *Mặc định Carousel tự chuyển trang sau 15 giây. Nếu muốn đổi thời gian, vào `src/components/AlbumSection.tsx` tìm số `15000` (15000ms = 15s) và đổi thành số mong muốn.*

---

## 5. Bộ sưu tập Ảnh & Video (`PORTFOLIO_ITEMS`)

Dùng để hiển thị các thẻ trong mục Portfolio/Gallery:

```typescript
export const PORTFOLIO_ITEMS: MediaItem[] = [
  {
    id: 'film-1',
    title: 'The Eternal Vow - Lễ Cưới Hoàng Gia',
    couple: 'Minh Trí & Phương Thảo',
    location: 'Gem Center, TP.HCM',
    date: 'Tháng 12, 2025',
    category: 'video', // 'video' | 'photo' | 'prewedding' | 'ceremony'
    categoryLabel: 'Wedding Film 4K',
    src: 'https://images.unsplash.com/...', // Ảnh thumbnail hiển thị
    videoUrl: 'https://www.youtube.com/embed/...', // Link video (nếu là category: 'video')
    duration: '04:25 min',
    cameraInfo: 'Sony FX3 + G Master Cine Lens',
    aspect: 'landscape', // 'landscape' (ngang) hoặc 'portrait' (dọc)
    description: 'Thước phim phóng sự ghi lại trọn vẹn...'
  },
  // ...
];
```

---

## 6. Bảng giá Dịch vụ (`SERVICE_PACKAGES`)

Quản lý giá, mức cọc, danh sách thiết bị và quyền lợi của từng gói:

```typescript
export const SERVICE_PACKAGES: PackageItem[] = [
  {
    id: 'pkg-gold',
    name: 'Gói Royal Vows (VIP Phổ Biến)',
    tagline: 'Sự kết hợp hoàn hảo giữa Phóng Sự Ảnh & Thước Phim Highlight 4K',
    badge: 'Được Đặt Nhiều Nhất',
    isPopular: true,             // Đánh dấu gói nổi bật
    price: 26500000,             // Giá gói (VNĐ - chỉ điền số)
    originalPrice: 32000000,     // Giá gốc trước giảm
    depositPercent: 30,          // Phần trăm đặt cọc giữ chỗ (mặc định 30%)
    description: 'Trọn gói cả ngày...',
    crewDetails: [               // Thành phần ekip
      '02 Nhiếp ảnh gia...',
      '02 Quay phim chuyên nghiệp...'
    ],
    features: [                  // Chi tiết dịch vụ
      'Chụp và quay trọn vẹn cả ngày...',
      'Flycam 4K quay toàn cảnh...'
    ],
    deliverables: [              // Sản phẩm bàn giao
      'Hộp da cao cấp Lumina Luxury Box',
      '01 Photobook Artbook...'
    ],
    recommendedFor: 'Các cặp đôi mong muốn lưu giữ trọn vẹn...'
  }
];
```

---

## 7. Mạng xã hội & Mã QR Quét nhanh (`SOCIAL_PLATFORMS`)

Chỉnh sửa đường link fanpage và kênh của studio:

```typescript
export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  {
    id: 'facebook',
    name: 'Facebook Fanpage',
    handle: '@luminawedding.media',
    link: 'https://facebook.com/your-fanpage',
    qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://facebook.com/your-fanpage',
    badgeText: '50k+ Followers',
    description: 'Cập nhật các bộ ảnh phóng sự cưới mới nhất.',
    brandColor: '#1877F2'
  },
  // ...
];
```

---

## 💡 Mẹo khi thay thế ảnh:
1. **Lấy ảnh từ Unsplash/Pexels:** Sử dụng định dạng URL có đuôi `?auto=format&fit=crop&w=1200&q=80` để tối ưu hóa tốc độ tải trang.
2. **Sử dụng ảnh của riêng bạn:** Bạn có thể copy ảnh vào thư mục `public/images/` trong dự án, sau đó điền đường dẫn ảnh dạng `src: '/images/anh-cuoi-1.jpg'`.

---
Chúc bạn quản lý và phát triển Landing Page thành công! 🎉
