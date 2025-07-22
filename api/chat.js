const { GoogleGenerativeAI } = require('@google/generative-ai');

// Inline training data to avoid module import issues
const viziocraftKnowledge = {
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
      pricing: "Từ 10-100 triệu VNĐ tùy độ phức tạp",
      timeline: "2-8 tuần"
    },
    webDevelopment: {
      name: "Web Development",
      description: "Custom Web Applications, E-commerce Solutions, Progressive Web Apps",
      pricing: "Từ 20-200 triệu VNĐ",
      timeline: "1-6 tháng"
    },
    digitalMarketing: {
      name: "Digital Marketing",
      description: "Brand Strategy, Content Creation, Social Media Management, SEO Optimization",
      pricing: "Từ 5-30 triệu VNĐ/tháng",
      timeline: "Setup 2-4 tuần, ongoing monthly"
    }
  }
};

const detectServiceIntent = (message) => {
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

const getContextualResponse = (message, serviceType) => {
  if (!serviceType) return "";
  
  const service = viziocraftKnowledge.services[serviceType];
  if (!service) return "";
  
  return `\nThông tin chi tiết về ${service.name}:\n- Mô tả: ${service.description}\n- Giá: ${service.pricing}\n- Thời gian: ${service.timeline}`;
};

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

module.exports = async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, sessionId } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Check if API key exists
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ 
        error: 'API key not configured',
        response: 'Xin lỗi, hệ thống AI đang bảo trì. Vui lòng liên hệ trực tiếp qua email: contact@viziocraft.design để được hỗ trợ ngay lập tức.'
      });
    }

    // Get the generative model
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // Detect service intent and get contextual information
    const serviceIntent = detectServiceIntent(message);
    const additionalContext = getContextualResponse(message, serviceIntent);

    // Create enhanced system prompt with training data
    const systemPrompt = `Bạn là Hoàng Anh, trợ lý ảo chuyên nghiệp của VizioCraft Design - công ty hàng đầu về AI Solutions, Video Production, Web Development và Digital Marketing tại Việt Nam.

## THÔNG TIN CÔNG TY:
- Tên: ${viziocraftKnowledge.company.name}
- Slogan: ${viziocraftKnowledge.company.tagline}
- Ngành: ${viziocraftKnowledge.company.industry}
- Thành lập: ${viziocraftKnowledge.company.founded}
- Địa chỉ: ${viziocraftKnowledge.company.location}
- Email: ${viziocraftKnowledge.company.contact.email}
- Phone: ${viziocraftKnowledge.company.contact.phone}

## DỊCH VỤ CHÍNH:

### 1. AI Solutions (Giải pháp AI)
- Mô tả: ${viziocraftKnowledge.services.aiSolutions.description}
- Giá: ${viziocraftKnowledge.services.aiSolutions.pricing}
- Thời gian: ${viziocraftKnowledge.services.aiSolutions.timeline}
- Lợi ích: ${viziocraftKnowledge.services.aiSolutions.benefits.join(', ')}

### 2. Video Production (Sản xuất Video)
- Mô tả: ${viziocraftKnowledge.services.videoProduction.description}
- Giá: ${viziocraftKnowledge.services.videoProduction.pricing}
- Thời gian: ${viziocraftKnowledge.services.videoProduction.timeline}

### 3. Web Development (Phát triển Web)
- Mô tả: ${viziocraftKnowledge.services.webDevelopment.description}
- Giá: ${viziocraftKnowledge.services.webDevelopment.pricing}
- Thời gian: ${viziocraftKnowledge.services.webDevelopment.timeline}

### 4. Digital Marketing (Marketing Số)
- Mô tả: ${viziocraftKnowledge.services.digitalMarketing.description}
- Giá: ${viziocraftKnowledge.services.digitalMarketing.pricing}
- Thời gian: ${viziocraftKnowledge.services.digitalMarketing.timeline}

## THÀNH TÍCH:
- 100+ dự án hoàn thành
- 50+ khách hàng hài lòng
- 5+ năm kinh nghiệm
- Hỗ trợ 24/7

## NHIỆM VỤ CỦA BẠN:
1. Tư vấn dịch vụ chuyên nghiệp với thông tin chi tiết về giá cả, thời gian
2. Trả lời mọi câu hỏi về AI, công nghệ, media production, marketing
3. Cung cấp case studies và examples cụ thể khi phù hợp
4. Hướng dẫn khách hàng quy trình làm việc và next steps
5. Luôn thân thiện, chuyên nghiệp và solution-oriented

## QUY TẮC TRẢ LỜI:
- Sử dụng tiếng Việt tự nhiên, chuyên nghiệp
- Cung cấp thông tin cụ thể về giá cả và timeline khi có thể
- Đề xuất giải pháp phù hợp với nhu cầu khách hàng
- Luôn kết thúc với call-to-action để liên hệ
- Nếu không chắc chắn, hướng dẫn liên hệ trực tiếp${additionalContext}`;

    // Combine system prompt with user message
    const fullPrompt = `${systemPrompt}\n\n---\n\nKhách hàng hỏi: "${message}"\n\nHãy trả lời một cách chuyên nghiệp, cụ thể và hữu ích:`;

    // Generate response
    const result = await model.generateContent(fullPrompt);
    const response = result.response;
    const text = response.text();

    // Return response
    return res.status(200).json({
      response: text,
      sessionId: sessionId || Date.now().toString(),
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Gemini API Error:', error);
    
    // Return friendly error message
    return res.status(500).json({
      error: 'AI service temporarily unavailable',
      response: 'Xin lỗi, tôi gặp sự cố kỹ thuật. Vui lòng thử lại sau hoặc liên hệ trực tiếp với team qua email: contact@viziocraft.design hoặc phone: +848 68 68 99 12 để được hỗ trợ ngay lập tức.',
      sessionId: req.body.sessionId || Date.now().toString(),
      timestamp: new Date().toISOString()
    });
  }
}
