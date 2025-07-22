// Mock data for services and learning content

export interface ServiceProject {
  id: string;
  title: string;
  description: string;
  category: string;
  client: string;
  duration: string;
  technologies: string[];
  images: string[];
  videoUrl?: string;
  results: string[];
  testimonial?: {
    text: string;
    author: string;
    position: string;
    company: string;
  };
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'article';
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  thumbnail: string;
  author: string;
  publishDate: string;
  tags: string[];
  content?: string;
  videoUrl?: string;
  views: number;
  likes: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  lessons: number;
  students: number;
  rating: number;
  price: string;
  thumbnail: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  syllabus: {
    module: string;
    lessons: string[];
  }[];
  prerequisites: string[];
  learningOutcomes: string[];
}

// AI Solutions & Automation Projects
export const aiSolutionsProjects: ServiceProject[] = [
  {
    id: 'ai-chatbot-ecommerce',
    title: 'AI Chatbot for E-commerce Platform',
    description: 'Intelligent customer service chatbot with natural language processing and order management integration.',
    category: 'AI Solutions & Automation',
    client: 'TechMart Vietnam',
    duration: '3 months',
    technologies: ['OpenAI GPT-4', 'Python', 'FastAPI', 'PostgreSQL', 'React'],
    images: ['/images/projects/ai-chatbot-1.jpg', '/images/projects/ai-chatbot-2.jpg'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    results: [
      '40% reduction in customer service response time',
      '85% customer satisfaction rate',
      '60% decrease in support ticket volume',
      '24/7 automated customer support'
    ],
    testimonial: {
      text: 'The AI chatbot has revolutionized our customer service. Our customers love the instant responses and accurate information.',
      author: 'Nguyen Van A',
      position: 'CEO',
      company: 'TechMart Vietnam'
    }
  },
  {
    id: 'business-process-automation',
    title: 'Business Process Automation Suite',
    description: 'Complete workflow automation system for manufacturing company including inventory management and quality control.',
    category: 'AI Solutions & Automation',
    client: 'VinaTech Manufacturing',
    duration: '6 months',
    technologies: ['Python', 'RPA', 'Machine Learning', 'PostgreSQL', 'Docker'],
    images: ['/images/projects/bpa-1.jpg', '/images/projects/bpa-2.jpg'],
    results: [
      '70% reduction in manual processing time',
      '95% accuracy in inventory tracking',
      '$50,000 annual cost savings',
      'Zero-error quality control system'
    ],
    testimonial: {
      text: 'This automation suite has transformed our operations. We can now focus on strategic growth instead of repetitive tasks.',
      author: 'Tran Thi B',
      position: 'Operations Director',
      company: 'VinaTech Manufacturing'
    }
  },
  {
    id: 'ai-analytics-dashboard',
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time business intelligence dashboard with predictive analytics and automated reporting.',
    category: 'AI Solutions & Automation',
    client: 'DataFlow Solutions',
    duration: '4 months',
    technologies: ['Python', 'TensorFlow', 'React', 'D3.js', 'AWS'],
    images: ['/images/projects/analytics-1.jpg', '/images/projects/analytics-2.jpg'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    results: [
      '90% improvement in decision-making speed',
      'Real-time data visualization',
      'Predictive accuracy of 87%',
      'Automated monthly reports'
    ]
  },
  {
    id: 'intelligent-document-processing',
    title: 'Intelligent Document Processing System',
    description: 'OCR and NLP-powered system for automated document classification and data extraction.',
    category: 'AI Solutions & Automation',
    client: 'Legal Partners LLC',
    duration: '5 months',
    technologies: ['Python', 'Tesseract OCR', 'spaCy', 'MongoDB', 'FastAPI'],
    images: ['/images/projects/document-ai-1.jpg', '/images/projects/document-ai-2.jpg'],
    results: [
      '80% reduction in document processing time',
      '95% accuracy in data extraction',
      'Support for 15+ document types',
      'Automated compliance checking'
    ]
  },
  {
    id: 'ai-recommendation-engine',
    title: 'AI Recommendation Engine',
    description: 'Machine learning-based recommendation system for personalized content and product suggestions.',
    category: 'AI Solutions & Automation',
    client: 'StreamVN Media',
    duration: '4 months',
    technologies: ['Python', 'Scikit-learn', 'Apache Spark', 'Redis', 'Kafka'],
    images: ['/images/projects/recommendation-1.jpg', '/images/projects/recommendation-2.jpg'],
    results: [
      '45% increase in user engagement',
      '30% boost in conversion rates',
      'Real-time personalization',
      '2M+ recommendations served daily'
    ]
  }
];

// Video Production & Animation Projects
export const videoProductionProjects: ServiceProject[] = [
  {
    id: 'corporate-brand-video',
    title: 'Corporate Brand Video Campaign',
    description: 'High-end corporate video production with 3D animations and motion graphics for brand storytelling.',
    category: 'Video Production & Animation',
    client: 'Viettel Group',
    duration: '2 months',
    technologies: ['After Effects', 'Cinema 4D', 'Premiere Pro', 'DaVinci Resolve'],
    images: ['/images/projects/corporate-video-1.jpg', '/images/projects/corporate-video-2.jpg'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    results: [
      '5M+ views across platforms',
      '200% increase in brand awareness',
      'Award-winning creative execution',
      '15+ international markets reached'
    ],
    testimonial: {
      text: 'The video perfectly captured our brand essence and helped us connect with customers on an emotional level.',
      author: 'Le Van C',
      position: 'Marketing Director',
      company: 'Viettel Group'
    }
  },
  {
    id: 'product-launch-animation',
    title: '3D Product Launch Animation',
    description: 'Photorealistic 3D animation showcasing new smartphone features with dynamic camera movements.',
    category: 'Video Production & Animation',
    client: 'BKAV Technology',
    duration: '6 weeks',
    technologies: ['Blender', 'Substance Painter', 'After Effects', 'Octane Render'],
    images: ['/images/projects/product-animation-1.jpg', '/images/projects/product-animation-2.jpg'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    results: [
      'Photorealistic product visualization',
      '50% increase in pre-orders',
      'Featured in tech conferences',
      '1M+ social media impressions'
    ]
  },
  {
    id: 'educational-explainer-series',
    title: 'Educational Explainer Video Series',
    description: 'Animated explainer videos for online learning platform covering complex technical concepts.',
    category: 'Video Production & Animation',
    client: 'EduTech Vietnam',
    duration: '3 months',
    technologies: ['After Effects', 'Illustrator', 'Character Animator', 'Audition'],
    images: ['/images/projects/explainer-1.jpg', '/images/projects/explainer-2.jpg'],
    results: [
      '12 episodes completed',
      '90% student comprehension rate',
      'Engaging visual storytelling',
      'Multi-language support'
    ]
  },
  {
    id: 'music-video-production',
    title: 'Music Video Production',
    description: 'Creative music video with visual effects, color grading, and artistic cinematography.',
    category: 'Video Production & Animation',
    client: 'Independent Artist',
    duration: '1 month',
    technologies: ['RED Camera', 'DaVinci Resolve', 'After Effects', 'Pro Tools'],
    images: ['/images/projects/music-video-1.jpg', '/images/projects/music-video-2.jpg'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    results: [
      'Cinematic visual quality',
      '500K+ YouTube views',
      'Featured on music channels',
      'Artist brand enhancement'
    ]
  },
  {
    id: 'architectural-visualization',
    title: 'Architectural Visualization',
    description: 'Photorealistic 3D architectural renderings and walkthrough animations for real estate project.',
    category: 'Video Production & Animation',
    client: 'Vingroup Real Estate',
    duration: '2 months',
    technologies: ['3ds Max', 'V-Ray', 'Photoshop', 'After Effects'],
    images: ['/images/projects/arch-viz-1.jpg', '/images/projects/arch-viz-2.jpg'],
    results: [
      'Photorealistic renderings',
      '80% faster sales process',
      'Virtual property tours',
      'International client attraction'
    ]
  }
];

// Visual Effects & Design Projects
export const visualEffectsProjects: ServiceProject[] = [
  {
    id: 'film-vfx-sequences',
    title: 'Film VFX Sequences',
    description: 'Complex visual effects sequences for Vietnamese feature film including CGI environments and creatures.',
    category: 'Visual Effects & Design',
    client: 'Galaxy Studios',
    duration: '8 months',
    technologies: ['Nuke', 'Houdini', 'Maya', 'Substance Designer', 'Unreal Engine'],
    images: ['/images/projects/film-vfx-1.jpg', '/images/projects/film-vfx-2.jpg'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    results: [
      '150+ VFX shots completed',
      'Seamless CGI integration',
      'Award nomination for VFX',
      'International film festival selection'
    ],
    testimonial: {
      text: 'The VFX work elevated our film to international standards. The attention to detail was exceptional.',
      author: 'Pham Van D',
      position: 'Director',
      company: 'Galaxy Studios'
    }
  },
  {
    id: 'brand-identity-design',
    title: 'Complete Brand Identity Design',
    description: 'Comprehensive brand identity including logo, visual guidelines, and marketing materials.',
    category: 'Visual Effects & Design',
    client: 'GreenTech Startup',
    duration: '6 weeks',
    technologies: ['Illustrator', 'Photoshop', 'InDesign', 'Figma'],
    images: ['/images/projects/brand-identity-1.jpg', '/images/projects/brand-identity-2.jpg'],
    results: [
      'Complete brand guideline',
      'Logo and visual identity',
      'Marketing material templates',
      '300% brand recognition increase'
    ]
  },
  {
    id: 'ui-ux-mobile-app',
    title: 'Mobile App UI/UX Design',
    description: 'User-centered design for fintech mobile application with focus on accessibility and usability.',
    category: 'Visual Effects & Design',
    client: 'FinanceVN App',
    duration: '3 months',
    technologies: ['Figma', 'Principle', 'Sketch', 'InVision'],
    images: ['/images/projects/mobile-ui-1.jpg', '/images/projects/mobile-ui-2.jpg'],
    results: [
      'Intuitive user interface',
      '95% user satisfaction score',
      'Accessibility compliance',
      '40% increase in user retention'
    ]
  },
  {
    id: 'digital-art-collection',
    title: 'Digital Art Collection',
    description: 'Original digital artwork series combining traditional Vietnamese culture with modern digital techniques.',
    category: 'Visual Effects & Design',
    client: 'Cultural Heritage Foundation',
    duration: '4 months',
    technologies: ['Photoshop', 'Procreate', 'Blender', 'ZBrush'],
    images: ['/images/projects/digital-art-1.jpg', '/images/projects/digital-art-2.jpg'],
    results: [
      '20 unique artworks created',
      'Cultural preservation through art',
      'Exhibition in 5 galleries',
      'International recognition'
    ]
  },
  {
    id: 'game-environment-design',
    title: 'Game Environment Design',
    description: '3D environment design and texturing for indie game project with fantasy theme.',
    category: 'Visual Effects & Design',
    client: 'Indie Game Studio',
    duration: '5 months',
    technologies: ['Unreal Engine', 'Blender', 'Substance Suite', 'World Machine'],
    images: ['/images/projects/game-env-1.jpg', '/images/projects/game-env-2.jpg'],
    results: [
      '15 game environments',
      'Optimized for mobile gaming',
      'Immersive visual experience',
      'Steam featured game'
    ]
  }
];

// Media Production Projects
export const mediaProductionProjects: ServiceProject[] = [
  {
    id: 'social-media-campaign',
    title: 'Social Media Content Campaign',
    description: 'Multi-platform social media content creation including photography, videography, and graphics.',
    category: 'Media Production',
    client: 'Fashion Brand VN',
    duration: '3 months',
    technologies: ['DSLR Photography', 'Lightroom', 'Premiere Pro', 'Photoshop'],
    images: ['/images/projects/social-media-1.jpg', '/images/projects/social-media-2.jpg'],
    results: [
      '200+ content pieces created',
      '500% increase in engagement',
      '50K new followers gained',
      'Brand awareness boost'
    ],
    testimonial: {
      text: 'Our social media presence transformed completely. The content quality and engagement rates exceeded all expectations.',
      author: 'Nguyen Thi E',
      position: 'Marketing Manager',
      company: 'Fashion Brand VN'
    }
  },
  {
    id: 'event-documentation',
    title: 'Corporate Event Documentation',
    description: 'Complete event coverage including live streaming, photography, and post-event video production.',
    category: 'Media Production',
    client: 'Tech Conference Asia',
    duration: '1 week',
    technologies: ['Multi-camera Setup', 'Live Streaming', 'Drone Photography', 'Audio Recording'],
    images: ['/images/projects/event-doc-1.jpg', '/images/projects/event-doc-2.jpg'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    results: [
      '3-day event coverage',
      '10K+ live stream viewers',
      '500+ professional photos',
      'Same-day highlight reel'
    ]
  },
  {
    id: 'product-photography',
    title: 'E-commerce Product Photography',
    description: 'Professional product photography for online store with 360-degree views and lifestyle shots.',
    category: 'Media Production',
    client: 'HomeDecor Vietnam',
    duration: '2 months',
    technologies: ['Studio Lighting', 'Product Photography', 'Photoshop', '360 Photography'],
    images: ['/images/projects/product-photo-1.jpg', '/images/projects/product-photo-2.jpg'],
    results: [
      '500+ products photographed',
      '360-degree product views',
      '30% increase in online sales',
      'Professional catalog creation'
    ]
  },
  {
    id: 'documentary-production',
    title: 'Documentary Film Production',
    description: 'Short documentary about Vietnamese traditional crafts with interviews and cultural storytelling.',
    category: 'Media Production',
    client: 'Cultural Ministry',
    duration: '6 months',
    technologies: ['Cinema Camera', 'Interview Setup', 'Documentary Editing', 'Color Grading'],
    images: ['/images/projects/documentary-1.jpg', '/images/projects/documentary-2.jpg'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    results: [
      '45-minute documentary',
      'Cultural preservation',
      'Film festival submissions',
      'Educational distribution'
    ]
  },
  {
    id: 'podcast-production',
    title: 'Podcast Series Production',
    description: 'Complete podcast production including recording, editing, and distribution for business podcast.',
    category: 'Media Production',
    client: 'Business Leaders VN',
    duration: '4 months',
    technologies: ['Audio Recording', 'Audition', 'Podcast Hosting', 'Sound Design'],
    images: ['/images/projects/podcast-1.jpg', '/images/projects/podcast-2.jpg'],
    results: [
      '24 episodes produced',
      'Professional audio quality',
      '50K+ downloads',
      'Top business podcast ranking'
    ]
  }
];

// SaaS Solutions Projects
export const saasSolutionsProjects: ServiceProject[] = [
  {
    id: 'crm-platform-development',
    title: 'Custom CRM Platform Development',
    description: 'Full-stack CRM solution with customer management, sales tracking, and analytics dashboard.',
    category: 'SaaS Solutions',
    client: 'SalesForce Vietnam',
    duration: '8 months',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    images: ['/images/projects/crm-platform-1.jpg', '/images/projects/crm-platform-2.jpg'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    results: [
      'Scalable cloud architecture',
      '10,000+ users supported',
      '99.9% uptime achieved',
      '50% improvement in sales efficiency'
    ],
    testimonial: {
      text: 'This CRM platform has revolutionized how we manage our customer relationships. The ROI was evident within the first quarter.',
      author: 'Tran Van F',
      position: 'Sales Director',
      company: 'SalesForce Vietnam'
    }
  },
  {
    id: 'elearning-platform',
    title: 'E-Learning Platform Development',
    description: 'Comprehensive online learning management system with video streaming and progress tracking.',
    category: 'SaaS Solutions',
    client: 'EduVN Online',
    duration: '10 months',
    technologies: ['React', 'Python Django', 'PostgreSQL', 'Redis', 'AWS S3'],
    images: ['/images/projects/elearning-1.jpg', '/images/projects/elearning-2.jpg'],
    results: [
      '50,000+ students enrolled',
      'HD video streaming',
      'Interactive learning modules',
      'Mobile-responsive design'
    ]
  },
  {
    id: 'inventory-management-system',
    title: 'Inventory Management System',
    description: 'Real-time inventory tracking system with barcode scanning and automated reordering.',
    category: 'SaaS Solutions',
    client: 'RetailChain Vietnam',
    duration: '6 months',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Barcode API', 'Mobile App'],
    images: ['/images/projects/inventory-1.jpg', '/images/projects/inventory-2.jpg'],
    results: [
      'Real-time inventory tracking',
      '90% reduction in stockouts',
      'Automated reordering system',
      'Multi-location support'
    ]
  },
  {
    id: 'fintech-payment-gateway',
    title: 'FinTech Payment Gateway',
    description: 'Secure payment processing system with multiple payment methods and fraud detection.',
    category: 'SaaS Solutions',
    client: 'PayVN Solutions',
    duration: '12 months',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Stripe API', 'Security Protocols'],
    images: ['/images/projects/payment-gateway-1.jpg', '/images/projects/payment-gateway-2.jpg'],
    results: [
      'PCI DSS compliance',
      '$10M+ transactions processed',
      '99.99% uptime',
      'Advanced fraud detection'
    ]
  },
  {
    id: 'hr-management-platform',
    title: 'HR Management Platform',
    description: 'Complete HR solution with employee management, payroll, and performance tracking.',
    category: 'SaaS Solutions',
    client: 'HRTech Vietnam',
    duration: '9 months',
    technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Microservices', 'Docker'],
    images: ['/images/projects/hr-platform-1.jpg', '/images/projects/hr-platform-2.jpg'],
    results: [
      '1,000+ companies using',
      'Automated payroll processing',
      'Performance analytics',
      'Employee self-service portal'
    ]
  }
];

// Enhanced Tutorials Data
export const tutorialsData: Tutorial[] = [
  {
    id: '1',
    title: 'Getting Started with AI Automation',
    description: 'Learn the basics of implementing AI automation in your business workflow. This comprehensive guide covers the fundamentals of AI integration.',
    type: 'video',
    duration: '15 min',
    difficulty: 'Beginner',
    thumbnail: '/images/tutorial-ai-basics.jpg',
    author: 'Son Pham',
    publishDate: '2024-01-15',
    tags: ['AI', 'Automation', 'Business'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    views: 12500,
    likes: 890
  },
  {
    id: '2',
    title: 'Advanced Video Editing Techniques',
    description: 'Master professional video editing with advanced techniques and tools. Learn color grading, motion graphics, and audio synchronization.',
    type: 'video',
    duration: '25 min',
    difficulty: 'Advanced',
    thumbnail: '/images/tutorial-video-editing.jpg',
    author: 'Creative Team',
    publishDate: '2024-01-10',
    tags: ['Video', 'Editing', 'Production'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    views: 8750,
    likes: 654
  },
  {
    id: '3',
    title: '3D Animation Fundamentals',
    description: 'Complete guide to 3D animation principles and best practices. Covers modeling, rigging, animation, and rendering workflows.',
    type: 'article',
    duration: '10 min read',
    difficulty: 'Intermediate',
    thumbnail: '/images/tutorial-3d-animation.jpg',
    author: '3D Team',
    publishDate: '2024-01-08',
    tags: ['3D', 'Animation', 'Design'],
    content: 'Detailed article content about 3D animation fundamentals...',
    views: 15200,
    likes: 1120
  },
  {
    id: '4',
    title: 'Building Responsive Web Applications',
    description: 'Learn how to create modern, responsive web applications from scratch using React and modern CSS techniques.',
    type: 'video',
    duration: '30 min',
    difficulty: 'Intermediate',
    thumbnail: '/images/tutorial-web-dev.jpg',
    author: 'Dev Team',
    publishDate: '2024-01-05',
    tags: ['Web Development', 'React', 'CSS'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    views: 9800,
    likes: 720
  },
  {
    id: '5',
    title: 'Visual Effects Compositing',
    description: 'Master the art of compositing visual effects for film and video. Learn advanced techniques in Nuke and After Effects.',
    type: 'video',
    duration: '20 min',
    difficulty: 'Advanced',
    thumbnail: '/images/tutorial-vfx.jpg',
    author: 'VFX Team',
    publishDate: '2024-01-03',
    tags: ['VFX', 'Compositing', 'Post-production'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    views: 6500,
    likes: 480
  },
  {
    id: '6',
    title: 'Machine Learning for Business',
    description: 'Practical guide to implementing machine learning solutions in business environments. No coding experience required.',
    type: 'article',
    duration: '12 min read',
    difficulty: 'Beginner',
    thumbnail: '/images/tutorial-ml-business.jpg',
    author: 'AI Team',
    publishDate: '2024-01-01',
    tags: ['Machine Learning', 'Business', 'AI'],
    content: 'Comprehensive article about ML applications in business...',
    views: 11200,
    likes: 850
  },
  {
    id: '7',
    title: 'Color Theory in Digital Design',
    description: 'Understanding color theory and its application in digital design projects. Learn about color harmony and psychology.',
    type: 'video',
    duration: '18 min',
    difficulty: 'Intermediate',
    thumbnail: '/images/tutorial-color-theory.jpg',
    author: 'Design Team',
    publishDate: '2023-12-28',
    tags: ['Design', 'Color Theory', 'Digital Art'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    views: 7800,
    likes: 590
  },
  {
    id: '8',
    title: 'API Integration Best Practices',
    description: 'Learn how to integrate third-party APIs effectively and securely in your applications.',
    type: 'article',
    duration: '8 min read',
    difficulty: 'Advanced',
    thumbnail: '/images/tutorial-api-integration.jpg',
    author: 'Backend Team',
    publishDate: '2023-12-25',
    tags: ['API', 'Integration', 'Backend'],
    content: 'Detailed guide on API integration best practices...',
    views: 5400,
    likes: 420
  }
];

// Enhanced Courses Data
export const coursesData: Course[] = [
  {
    id: '1',
    title: 'Complete AI Solutions Mastery',
    description: 'Comprehensive course covering AI implementation, automation, and business integration. From basics to advanced deployment strategies.',
    instructor: 'Son Pham',
    duration: '12 hours',
    lessons: 24,
    students: 1250,
    rating: 4.8,
    price: '$199',
    thumbnail: '/images/course-ai-mastery.jpg',
    level: 'Intermediate',
    category: 'AI & Automation',
    syllabus: [
      {
        module: 'AI Fundamentals',
        lessons: ['Introduction to AI', 'Machine Learning Basics', 'Neural Networks', 'Deep Learning Overview']
      },
      {
        module: 'Business Applications',
        lessons: ['AI in Business', 'Process Automation', 'ROI Analysis', 'Implementation Strategy']
      },
      {
        module: 'Practical Implementation',
        lessons: ['Tool Selection', 'Integration Patterns', 'Testing & Validation', 'Deployment']
      }
    ],
    prerequisites: ['Basic programming knowledge', 'Understanding of business processes'],
    learningOutcomes: [
      'Implement AI solutions in business environments',
      'Design automation workflows',
      'Evaluate AI tools and platforms',
      'Measure and optimize AI performance'
    ]
  },
  {
    id: '2',
    title: 'Professional Video Production',
    description: 'Learn professional video production from pre-production to final delivery. Covers cinematography, editing, and post-production.',
    instructor: 'Creative Director',
    duration: '18 hours',
    lessons: 36,
    students: 890,
    rating: 4.9,
    price: '$299',
    thumbnail: '/images/course-video-production.jpg',
    level: 'Beginner',
    category: 'Video Production',
    syllabus: [
      {
        module: 'Pre-Production',
        lessons: ['Script Writing', 'Storyboarding', 'Planning & Scheduling', 'Equipment Setup']
      },
      {
        module: 'Production',
        lessons: ['Camera Techniques', 'Lighting', 'Audio Recording', 'Directing']
      },
      {
        module: 'Post-Production',
        lessons: ['Video Editing', 'Color Grading', 'Audio Mixing', 'Final Delivery']
      }
    ],
    prerequisites: ['No prior experience required'],
    learningOutcomes: [
      'Plan and execute video productions',
      'Master camera and lighting techniques',
      'Edit videos professionally',
      'Deliver broadcast-quality content'
    ]
  },
  {
    id: '3',
    title: 'Advanced 3D Animation & VFX',
    description: 'Master advanced 3D animation techniques and visual effects creation. Industry-standard workflows and tools.',
    instructor: '3D Specialist',
    duration: '25 hours',
    lessons: 45,
    students: 650,
    rating: 4.7,
    price: '$399',
    thumbnail: '/images/course-3d-vfx.jpg',
    level: 'Advanced',
    category: 'Animation & VFX',
    syllabus: [
      {
        module: '3D Modeling & Texturing',
        lessons: ['Advanced Modeling', 'UV Mapping', 'Texturing', 'Material Creation']
      },
      {
        module: 'Animation Techniques',
        lessons: ['Character Rigging', 'Keyframe Animation', 'Motion Capture', 'Facial Animation']
      },
      {
        module: 'Visual Effects',
        lessons: ['Particle Systems', 'Fluid Simulation', 'Compositing', 'Rendering']
      }
    ],
    prerequisites: ['Basic 3D software knowledge', 'Understanding of animation principles'],
    learningOutcomes: [
      'Create professional 3D animations',
      'Develop complex visual effects',
      'Master industry-standard tools',
      'Build a professional portfolio'
    ]
  },
  {
    id: '4',
    title: 'Full-Stack Web Development',
    description: 'Complete web development course covering frontend and backend technologies. Build modern, scalable web applications.',
    instructor: 'Lead Developer',
    duration: '30 hours',
    lessons: 60,
    students: 2100,
    rating: 4.6,
    price: '$249',
    thumbnail: '/images/course-web-dev.jpg',
    level: 'Intermediate',
    category: 'Web Development',
    syllabus: [
      {
        module: 'Frontend Development',
        lessons: ['HTML5 & CSS3', 'JavaScript ES6+', 'React.js', 'State Management']
      },
      {
        module: 'Backend Development',
        lessons: ['Node.js', 'Express.js', 'Database Design', 'API Development']
      },
      {
        module: 'Deployment & DevOps',
        lessons: ['Cloud Deployment', 'CI/CD', 'Monitoring', 'Security']
      }
    ],
    prerequisites: ['Basic programming knowledge', 'HTML/CSS fundamentals'],
    learningOutcomes: [
      'Build full-stack web applications',
      'Master modern development tools',
      'Deploy applications to production',
      'Implement security best practices'
    ]
  },
  {
    id: '5',
    title: 'Digital Marketing & Content Strategy',
    description: 'Learn effective digital marketing strategies and content creation techniques. From social media to SEO optimization.',
    instructor: 'Marketing Expert',
    duration: '15 hours',
    lessons: 30,
    students: 1800,
    rating: 4.5,
    price: '$149',
    thumbnail: '/images/course-marketing.jpg',
    level: 'Beginner',
    category: 'Marketing',
    syllabus: [
      {
        module: 'Digital Marketing Fundamentals',
        lessons: ['Marketing Strategy', 'Target Audience', 'Brand Positioning', 'Campaign Planning']
      },
      {
        module: 'Content Creation',
        lessons: ['Content Strategy', 'Visual Design', 'Video Marketing', 'Copywriting']
      },
      {
        module: 'Analytics & Optimization',
        lessons: ['Performance Metrics', 'A/B Testing', 'ROI Analysis', 'Growth Hacking']
      }
    ],
    prerequisites: ['No prior experience required'],
    learningOutcomes: [
      'Develop comprehensive marketing strategies',
      'Create engaging content',
      'Analyze marketing performance',
      'Optimize campaigns for better results'
    ]
  }
];

// Export all mock data
export const mockData = {
  projects: {
    'ai-solutions': aiSolutionsProjects,
    'video-production': videoProductionProjects,
    'visual-effects': visualEffectsProjects,
    'media-production': mediaProductionProjects,
    'saas-solutions': saasSolutionsProjects
  },
  tutorials: tutorialsData,
  courses: coursesData
};

