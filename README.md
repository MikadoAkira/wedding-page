# 💍 LUMINA WEDDING MEDIA STUDIO - LANDING PAGE

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-FF0055?logo=framer&logoColor=white)](https://www.framer.com/motion/)

Website Landing Page cao cấp, sang trọng dành riêng cho Studio Chụp ảnh & Quay phim Phóng sự cưới điện ảnh (**Cinematic Wedding Film & Documentary Photography**).

---

## ✨ Điểm nổi bật & Tính năng (Key Features)

- **🎨 Thiết kế Sang trọng & Chuẩn WCAG 2.1:**
  - Hỗ trợ **Dark Theme** (Đen huyền bí & Vàng Gold sang trọng) và **Light Theme** (Trắng ngà Warm Ivory `#FDFCFA` nhã nhặn).
  - Độ tương phản chữ và icon rõ nét, bố cục chuẩn tạp chí cưới cao cấp.
- **🎞️ Portfolio & Media Showcase:**
  - Bộ lọc tác phẩm phân chia mượt mà (*Tất cả, Phóng sự cưới, Highlight 4K, Pre-Wedding, Gia Tiên*).
  - Hiệu ứng chuyển động mượt mà với Framer Motion.
- **📖 Cuốn Album 2D Lật Tự Động (Story Album Carousel):**
  - Tự động chuyển đổi trang sau mỗi 15 giây.
  - Cảm ứng thông minh: Tự động tạm dừng khi người dùng hover chuột vào để đọc nội dung và xem ảnh cưới.
- **💎 Bảng giá dịch vụ linh hoạt (Pricing Packages):**
  - Hiệu ứng hover tương tác, làm nổi bật gói được chọn.
  - Tự động tính toán mức cọc 30% nhanh chóng, minh bạch.
- **📋 Modal Đặt lịch tư vấn & Tích hợp VietQR:**
  - Form đặt lịch giữ ngày cưới thiết kế đồng bộ theo Light/Dark theme.
  - Tích hợp tạo mã QR thanh toán VietQR động theo đúng thông tin gói cọc và thông điệp chuyển khoản.
  - Hiệu ứng pháo hoa Confetti chúc mừng khi gửi thông tin thành công.
- **💬 Cảm nhận khách hàng (Testimonials):**
  - Trích dẫn thực tế từ các cặp đôi uy tín, hiển thị ảnh cưới thực tế và đánh giá 5 sao.
- **📱 Kết nối Đa nền tảng (Social Connect):**
  - Tích hợp QR Code quét nhanh kết nối Facebook, TikTok, Zalo, Instagram.
- **🗺️ Bản đồ & Thông tin Studio:**
  - Tích hợp Google Maps trực tiếp giúp khách hàng tìm đường đến studio dễ dàng.

---

## 🛠️ Công nghệ sử dụng (Tech Stack)

| Công nghệ | Mục đích |
| :--- | :--- |
| **React 18** | Thư viện UI Core |
| **TypeScript** | Định kiểu an toàn, dễ bảo trì và mở rộng |
| **Vite** | Công cụ build & dev server siêu tốc |
| **Tailwind CSS** | Thiết kế giao diện phản hồi (Responsive) & Hệ màu sắc tuỳ biến |
| **Framer Motion** | Hiệu ứng chuyển động & hoạt ảnh mượt mà |
| **Lucide React** | Bộ icon vector sắc nét, hiện đại |
| **Canvas Confetti** | Hiệu ứng pháo hoa chúc mừng |
| **VietQR API** | Sinh mã QR thanh toán ngân hàng tự động |

---

## 📁 Cấu trúc thư mục (Project Structure)

```text
lumina-wedding-studio/
├── public/                     # Tài nguyên tĩnh
├── src/
│   ├── components/             # Các Component giao diện
│   │   ├── AlbumCarousel.tsx   # Cuốn Album 2D lật tự động
│   │   ├── BookingModal.tsx    # Modal đặt lịch & VietQR
│   │   ├── BrandStory.tsx      # Câu chuyện thương hiệu
│   │   ├── Footer.tsx          # Chân trang & Thông tin bản quyền
│   │   ├── Hero.tsx            # Phần mở đầu nổi bật
│   │   ├── Navbar.tsx          # Thanh điều hướng & nút Đổi Theme
│   │   ├── PortfolioGrid.tsx   # Bộ sưu tập & Bộ lọc tác phẩm
│   │   ├── ServicesPricing.tsx # Bảng giá dịch vụ
│   │   ├── SocialConnect.tsx   # QR kết nối Mạng xã hội & Maps
│   │   └── Testimonials.tsx    # Cảm nhận khách hàng
│   ├── data/
│   │   └── mockData.ts         # ⭐ Toàn bộ dữ liệu, bảng giá, ngân hàng, ảnh/video
│   ├── App.tsx                 # Component chính
│   ├── index.css               # Tùy biến Tailwind & CSS Utilities
│   └── main.tsx                # Entry point của React
├── HUONG_DAN_CHINH_SUA.md      # Tài liệu hướng dẫn sửa nội dung chi tiết
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Hướng dẫn cài đặt & Chạy trên máy tính khác (Quickstart)

### Yêu cầu môi trường
- Đã cài đặt [Node.js](https://nodejs.org/) (Khuyên dùng bản LTS từ v18 trở lên).
- Đã cài đặt [Git](https://git-scm.com/).

### Các bước thực hiện:

1. **Clone mã nguồn về máy:**
   ```bash
   git clone https://github.com/MikadoAkira/wedding-page.git
   cd wedding-page
   ```

2. **Cài đặt thư viện dependencies:**
   ```bash
   npm install
   ```

3. **Chạy môi trường phát triển (Dev Server):**
   ```bash
   npm run dev
   ```
   *Mở trình duyệt truy cập: `http://localhost:5173`*

4. **Build đóng gói sản phẩm khi muốn triển khai:**
   ```bash
   npm run build
   ```

---

## 📝 Hướng dẫn tùy chỉnh nội dung & hình ảnh

Toàn bộ thông tin chữ, bảng giá, ngân hàng VietQR, hình ảnh và video đều được gom lại tại một file duy nhất:
👉 **[`src/data/mockData.ts`](src/data/mockData.ts)**

Chi tiết hướng dẫn từng bước thay đổi nội dung, màu sắc, font chữ:
👉 Xem tại file: **[`HUONG_DAN_CHINH_SUA.md`](HUONG_DAN_CHINH_SUA.md)**

---

## 🌐 Triển khai lên Vercel (CI/CD Khuyên Dùng)

Dự án đã sẵn sàng 100% để deploy trực tiếp lên [Vercel](https://vercel.com/):
1. Đăng nhập Vercel bằng tài khoản GitHub `MikadoAkira`.
2. Bấm **Add New** > **Project** > Chọn repository `wedding-page`.
3. Bấm **Deploy**. Sau đó mỗi khi bạn `git push`, Vercel sẽ tự động build và cập nhật phiên bản mới nhất!

---

© 2026 Lumina Wedding Media Studio. Designed with elegance.

