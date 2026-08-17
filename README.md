# 💍 LUMINA WEDDING MEDIA STUDIO - LANDING PAGE

Website Landing Page cao cấp dành cho Studio Chụp ảnh & Quay phim Phóng sự cưới điện ảnh (Cinematic Wedding Film & Documentary Photography).

---

## ✨ Điểm nổi bật & Tính năng (Key Features)

- **🎨 Thiết kế Sang trọng & Tương phản chuẩn WCAG 2.1:**
  - Hỗ trợ **Dark Theme** (Đen huyền bí & Vàng Gold sang trọng) và **Light Theme** (Trắng ngà Warm Ivory `#FDFCFA` nhã nhặn).
  - Đảm bảo độ tương phản chữ rõ nét, thẩm mỹ chuẩn tạp chí cưới cao cấp.
- **🎞️ Portfolio & Media Grid:**
  - Bộ lọc tác phẩm phân chia rõ ràng (Tất cả, Phóng sự cưới, Highlight 4K, Pre-Wedding, Gia Tiên).
  - Hiệu ứng chuyển cảnh chuyển động tinh tế (Smooth Fade Transition).
- **📖 Cuốn Album 2D Lật Tự Động (Carousel):**
  - Tự động chuyển đổi trang sau mỗi 15 giây.
  - Cảm ứng thông minh: Tự động dừng khi người dùng hover chuột vào để đọc nội dung và xem ảnh.
- **💎 Bảng giá dịch vụ linh hoạt (Pricing Packages):**
  - Hiệu ứng tương tác hover và highlight khi chọn gói.
  - Tự động tính toán mức cọc 30% nhanh chóng.
- **📋 Modal Đặt lịch tư vấn & Tích hợp VietQR:**
  - Form đặt lịch giữ ngày cưới thiết kế đồng bộ theo Light/Dark theme.
  - Tạo mã QR thanh toán VietQR động theo đúng thông tin gói và thông điệp chuyển khoản.
- **💬 Cảm nhận khách hàng (Testimonials):**
  - Trích dẫn thực tế từ các cặp đôi uy tín, hiển thị ảnh cưới thực tế và đánh giá 5 sao.
- **📱 Kết nối Đa nền tảng (Social Connect):**
  - Tích hợp QR Code quét nhanh Facebook, TikTok, Zalo, Instagram.
- **🗺️ Bản đồ & Thông tin Studio:**
  - Tích hợp Google Maps trực tiếp giúp khách hàng tìm đường dễ dàng.

---

## 🛠️ Công nghệ sử dụng (Tech Stack)

- **Frontend Core:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/) (Khởi động cực nhanh, tối ưu hóa bundle)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + Custom CSS Tokens
- **Animation & Motion:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Hiệu ứng chúc mừng:** [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **QR Payment API:** [VietQR API](https://vietqr.io/)

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

## 📝 Hướng dẫn chỉnh sửa nội dung & hình ảnh

Toàn bộ thông tin chữ, bảng giá, ngân hàng, hình ảnh và video đều được gom lại tại file:
👉 **[`src/data/mockData.ts`](src/data/mockData.ts)**

Chi tiết hướng dẫn từng phần vui lòng xem tại file:
👉 **[`HUONG_DAN_CHINH_SUA.md`](HUONG_DAN_CHINH_SUA.md)**

---

## 🌐 Triển khai lên Vercel (CI/CD Khuyên Dùng)

Dự án đã sẵn sàng 100% để deploy trực tiếp lên [Vercel](https://vercel.com/):
1. Đăng nhập Vercel bằng tài khoản GitHub `MikadoAkira`.
2. Bấm **Add New** > **Project** > Chọn repository `wedding-page`.
3. Bấm **Deploy**. Sau đó mỗi khi bạn `git push`, Vercel sẽ tự động build và cập nhật phiên bản mới nhất!

---
© 2026 Lumina Wedding Media Studio. Designed with elegance.
