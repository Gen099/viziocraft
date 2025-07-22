// VizioCraft AI Training Data
export const viziocraftKnowledge = {
  company: {
    name: "VizioCraft Design",
    tagline: "AI & Media Technology Solutions",
    industry: "Artificial Intelligence • Media Production • Automation",
    founded: "2019",
    location: "Hà Nội, Cầu Giấy, Việt Nam",
    contact: {
      email: "contact@viziocraft.design",
      phone: "+848 68 68 99 12",
      website: "https://viziocraft.design"
    }
  },

  services: {
    aiSolutions: {
      name: "AI Solutions",
      description: "Intelligent Agents, Business Process Automation, No-code/Low-code Solutions",
      features: [
        "Intelligent Agents - Tự động hóa quy trình kinh doanh",
        "Process Automation - Tối ưu hóa workflow",
        "AI Analytics - Phân tích dữ liệu thông minh",
        "No-code Solutions - Giải pháp không cần lập trình",
        "ChatBot Development - Phát triển chatbot tùy chỉnh",
        "AI Integration - Tích hợp AI vào hệ thống hiện tại"
      ],
      pricing: "Từ 15-50 triệu VNĐ tùy theo độ phức tạp",
      timeline: "2-6 tháng",
      benefits: [
        "Giảm 60-80% thời gian xử lý công việc thủ công",
        "Tăng độ chính xác lên 95%+",
        "ROI trong 6-12 tháng"
      ]
    },

    videoProduction: {
      name: "Video Production",
      description: "AI-enhanced Video Creation, 3D Animation, Motion Graphics, Post-production Services",
      features: [
        "AI Video Creation - Tạo video bằng AI",
        "3D Animation - Hoạt hình 3D chuyên nghiệp",
        "Motion Graphics - Đồ họa chuyển động",
        "Post-production - Hậu kỳ video",
        "Commercial Video - Video quảng cáo",
        "Explainer Video - Video giải thích sản phẩm"
      ],
      pricing: "Từ 10-100 triệu VNĐ tùy độ phức tạp",
      timeline: "2-8 tuần",
      deliverables: [
        "Video 4K quality",
        "Multiple formats (web, social, TV)",
        "Source files và project files",
        "Revisions không giới hạn"
      ]
    },

    webDevelopment: {
      name: "Web Development",
      description: "Custom Web Applications, E-commerce Solutions, Progressive Web Apps",
      features: [
        "Custom Web Apps - Ứng dụng web tùy chỉnh",
        "E-commerce - Website bán hàng online",
        "Progressive Web Apps - PWA hiện đại",
        "API Development - Phát triển API",
        "CMS Integration - Tích hợp hệ thống quản lý nội dung",
        "SEO Optimization - Tối ưu SEO"
      ],
      pricing: "Từ 20-200 triệu VNĐ",
      timeline: "1-6 tháng",
      technologies: ["React", "Node.js", "Next.js", "TypeScript", "AI Integration"]
    },

    digitalMarketing: {
      name: "Digital Marketing",
      description: "Brand Strategy, Content Creation, Social Media Management, SEO Optimization",
      features: [
        "Brand Strategy - Chiến lược thương hiệu",
        "Content Creation - Sáng tạo nội dung",
        "Social Media - Quản lý mạng xã hội",
        "SEO/SEM - Tối ưu tìm kiếm",
        "AI Marketing - Marketing tự động bằng AI",
        "Performance Analytics - Phân tích hiệu suất"
      ],
      pricing: "Từ 5-30 triệu VNĐ/tháng",
      timeline: "Setup 2-4 tuần, ongoing monthly"
    }
  },

  commonQuestions: {
    pricing: {
      question: "Giá cả như thế nào?",
      answer: "Giá sẽ phụ thuộc vào độ phức tạp và phạm vi dự án. Chúng tôi cung cấp báo giá miễn phí sau khi tìm hiểu yêu cầu cụ thể. Hãy liên hệ qua email contact@viziocraft.design hoặc phone +848 68 68 99 12 để được tư vấn chi tiết."
    },
    timeline: {
      question: "Thời gian hoàn thành bao lâu?",
      answer: "Thời gian phụ thuộc vào dự án: AI Solutions (2-6 tháng), Video Production (2-8 tuần), Web Development (1-6 tháng), Digital Marketing (2-4 tuần setup). Chúng tôi sẽ đưa ra timeline cụ thể sau khi thảo luận yêu cầu."
    },
    consultation: {
      question: "Làm sao để được tư vấn?",
      answer: "Bạn có thể liên hệ ngay qua email: contact@viziocraft.design, phone: +848 68 68 99 12, hoặc điền form liên hệ trên website. Chúng tôi cung cấp tư vấn miễn phí và phản hồi trong 24h."
    },
    portfolio: {
      question: "Có portfolio không?",
      answer: "Có, chúng tôi đã thực hiện 100+ dự án cho 50+ khách hàng. Bạn có thể xem portfolio tại website hoặc chúng tôi sẽ gửi case studies liên quan đến lĩnh vực của bạn khi liên hệ."
    }
  },

  responseTemplates: {
    greeting: [
      "Xin chào! Tôi là Hoàng Anh, trợ lý ảo của VizioCraft Design.",
      "Chào bạn! Rất vui được hỗ trợ bạn về các dịch vụ của VizioCraft.",
      "Hello! Tôi có thể giúp bạn tìm hiểu về dịch vụ AI, Video, Web Development của chúng tôi."
    ],
    serviceInquiry: [
      "VizioCraft chuyên cung cấp 4 dịch vụ chính: AI Solutions, Video Production, Web Development, và Digital Marketing.",
      "Chúng tôi có thể hỗ trợ bạn trong các lĩnh vực: Trí tuệ nhân tạo, Sản xuất video, Phát triển web, và Marketing số."
    ],
    contactPrompt: [
      "Để được báo giá chính xác, bạn có thể liên hệ qua email: contact@viziocraft.design hoặc phone: +848 68 68 99 12",
      "Hãy liên hệ trực tiếp để được tư vấn miễn phí: contact@viziocraft.design, +848 68 68 99 12"
    ]
  }
};

export const getContextualResponse = (userMessage, serviceType = null) => {
  const knowledge = viziocraftKnowledge;
  let context = "";

  // Add specific service context if detected
  if (serviceType) {
    const service = knowledge.services[serviceType];
    if (service) {
      context += `\nThông tin chi tiết về ${service.name}:\n`;
      context += `- Mô tả: ${service.description}\n`;
      context += `- Giá: ${service.pricing}\n`;
      context += `- Thời gian: ${service.timeline}\n`;
      context += `- Tính năng: ${service.features.join(', ')}\n`;
    }
  }

  return context;
};

export const detectServiceIntent = (message) => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('ai') || lowerMessage.includes('automation') || 
      lowerMessage.includes('chatbot') || lowerMessage.includes('tự động')) {
    return 'aiSolutions';
  }
  
  if (lowerMessage.includes('video') || lowerMessage.includes('animation') || 
      lowerMessage.includes('motion') || lowerMessage.includes('sản xuất')) {
    return 'videoProduction';
  }
  
  if (lowerMessage.includes('web') || lowerMessage.includes('website') || 
      lowerMessage.includes('app') || lowerMessage.includes('phát triển')) {
    return 'webDevelopment';
  }
  
  if (lowerMessage.includes('marketing') || lowerMessage.includes('seo') || 
      lowerMessage.includes('social') || lowerMessage.includes('quảng cáo')) {
    return 'digitalMarketing';
  }
  
  return null;
};
