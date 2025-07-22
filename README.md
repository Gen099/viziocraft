# VizioCraft Design Website - Phiên bản đã sửa lỗi

## ✨ Các lỗi đã khắc phục

### 🖥️ **Desktop Fixes**
- ✅ **Logo cuối trang**: Đã sửa path từ `/logo.png` thành `/images/logo-transparent.png`
- ✅ **Z-index conflicts**: Đã fix các conflicts giữa background và main content
- ✅ **Component rendering**: Đảm bảo tất cả sections render đúng cách
- ✅ **Navigation issues**: Sửa lỗi navigation không hoạt động đúng

### 📱 **Mobile Optimizations**
- ✅ **Responsive layout**: Chuyển từ multi-column sang single-column trên mobile
- ✅ **Text size optimization**: Giảm kích thước text cho phù hợp với mobile
- ✅ **Component sizing**: Điều chỉnh kích thước các thành phần nhỏ gọn hơn
- ✅ **Performance optimization**: Tắt P5.js trên mobile, sử dụng CSS animations
- ✅ **Touch optimization**: Cải thiện navigation và interaction cho touch devices

### 🎨 **UI/UX Improvements**
- ✅ **AI Assistant**: Tối ưu hiển thị và tương tác trên mobile
- ✅ **Button sizes**: Điều chỉnh kích thước buttons phù hợp với mobile
- ✅ **Spacing optimization**: Giảm padding/margin cho mobile
- ✅ **Form optimization**: Cải thiện form layouts trên mobile

## 🚀 Cách sử dụng

### Yêu cầu hệ thống
- Node.js 18+ 
- npm hoặc yarn

### Cài đặt
```bash
# Clone hoặc giải nén project
cd viziocraft-website

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build
```

### Cấu trúc project
```
src/
├── components/           # React components
│   ├── sections/        # Page sections
│   ├── ui/             # UI components
│   ├── Navigation.tsx   # Main navigation
│   ├── AIAssistant.tsx  # AI chat assistant
│   └── P5Background.tsx # Animated background
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── data/               # Static data và constants
├── i18n/               # Internationalization
├── App.tsx             # Main App component
├── main.tsx            # Entry point
├── index.css           # Global styles
├── mobile-fix.css      # Mobile optimizations
└── App.css             # App-specific styles
```

## 📱 Mobile Optimizations

### Performance Features
- **Conditional P5.js loading**: Tự động tắt trên mobile devices
- **Reduced animations**: Tối ưu animations cho mobile performance
- **Optimized images**: Responsive image loading
- **Touch-friendly UI**: Buttons và navigation tối ưu cho touch

### Responsive Design
- **Breakpoints**: Responsive design với mobile-first approach
- **Typography**: Font sizes tự động điều chỉnh theo screen size
- **Layout**: Grid layouts chuyển thành single-column trên mobile
- **Navigation**: Mobile hamburger menu với touch optimization

## 🛠️ Customization

### Thay đổi colors
Chỉnh sửa trong `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Thêm/sửa content
- **Company info**: Chỉnh sửa trong `src/data/constants.ts`
- **Hero section**: `src/components/sections/HeroSection.tsx`
- **Services**: `src/components/sections/ServicesSection.tsx`

### AI Assistant customization
Chỉnh sửa trong `src/components/AIAssistant.tsx`:
- Messages và responses
- UI styling
- Backend API integration

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm run build
# Upload dist/ folder to Vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Manual deployment
```bash
npm run build
# Copy dist/ folder to your web server
```

## 📞 Support

Nếu gặp vấn đề, vui lòng liên hệ:
- Email: contact@viziocraft.design
- Website: https://viziocraft.design

## 📄 License

© 2024 VizioCraft Design. All rights reserved.
