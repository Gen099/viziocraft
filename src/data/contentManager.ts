// Content Management System for VizioCraft Design
// This file provides a centralized way to manage all content including courses, tutorials, articles, and services

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
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  videoUrl?: string; // YouTube or Google Drive URL
  syllabus?: string[];
  tags: string[];
  publishDate: string;
  isPublished: boolean;
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'article';
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  thumbnail: string;
  author: string;
  publishDate: string;
  tags: string[];
  videoUrl?: string; // YouTube or Google Drive URL
  documentUrl?: string; // Notion or Larksuite Doc URL
  downloadUrl?: string; // Direct download link
  content?: string; // For article type
  isPublished: boolean;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  publishDate: string;
  lastModified: string;
  tags: string[];
  category: string;
  thumbnail: string;
  readTime: string;
  isPublished: boolean;
  seoTitle?: string;
  seoDescription?: string;
}

export interface ServiceProject {
  id: string;
  title: string;
  description: string;
  serviceId: string; // Links to service category
  thumbnail: string;
  images: string[];
  technologies: string[];
  completionDate: string;
  clientName?: string;
  projectUrl?: string;
  caseStudyUrl?: string;
  isPublished: boolean;
}

// Content Manager Class
export class ContentManager {
  private static instance: ContentManager;
  
  private courses: Course[] = [];
  private tutorials: Tutorial[] = [];
  private articles: Article[] = [];
  private serviceProjects: ServiceProject[] = [];

  private constructor() {
    this.loadInitialData();
  }

  public static getInstance(): ContentManager {
    if (!ContentManager.instance) {
      ContentManager.instance = new ContentManager();
    }
    return ContentManager.instance;
  }

  // Load initial mock data
  private loadInitialData() {
    // This would typically load from a database or API
    // For now, we'll use mock data that can be easily updated
    this.loadMockCourses();
    this.loadMockTutorials();
    this.loadMockArticles();
    this.loadMockServiceProjects();
  }

  // Course Management
  public getCourses(filters?: { category?: string; level?: string; published?: boolean }): Course[] {
    let filtered = this.courses;
    
    if (filters?.category && filters.category !== 'all') {
      filtered = filtered.filter(course => course.category === filters.category);
    }
    
    if (filters?.level) {
      filtered = filtered.filter(course => course.level === filters.level);
    }
    
    if (filters?.published !== undefined) {
      filtered = filtered.filter(course => course.isPublished === filters.published);
    }
    
    return filtered.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  }

  public getCourseById(id: string): Course | undefined {
    return this.courses.find(course => course.id === id);
  }

  public addCourse(course: Course): void {
    this.courses.push(course);
  }

  public updateCourse(id: string, updates: Partial<Course>): boolean {
    const index = this.courses.findIndex(course => course.id === id);
    if (index !== -1) {
      this.courses[index] = { ...this.courses[index], ...updates };
      return true;
    }
    return false;
  }

  public deleteCourse(id: string): boolean {
    const index = this.courses.findIndex(course => course.id === id);
    if (index !== -1) {
      this.courses.splice(index, 1);
      return true;
    }
    return false;
  }

  // Tutorial Management
  public getTutorials(filters?: { type?: string; difficulty?: string; published?: boolean }): Tutorial[] {
    let filtered = this.tutorials;
    
    if (filters?.type) {
      filtered = filtered.filter(tutorial => tutorial.type === filters.type);
    }
    
    if (filters?.difficulty) {
      filtered = filtered.filter(tutorial => tutorial.difficulty === filters.difficulty);
    }
    
    if (filters?.published !== undefined) {
      filtered = filtered.filter(tutorial => tutorial.isPublished === filters.published);
    }
    
    return filtered.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  }

  public getTutorialById(id: string): Tutorial | undefined {
    return this.tutorials.find(tutorial => tutorial.id === id);
  }

  // Article Management
  public getArticles(filters?: { category?: string; published?: boolean }): Article[] {
    let filtered = this.articles;
    
    if (filters?.category) {
      filtered = filtered.filter(article => article.category === filters.category);
    }
    
    if (filters?.published !== undefined) {
      filtered = filtered.filter(article => article.isPublished === filters.published);
    }
    
    return filtered.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  }

  // Service Project Management
  public getServiceProjects(serviceId?: string): ServiceProject[] {
    let filtered = this.serviceProjects.filter(project => project.isPublished);
    
    if (serviceId) {
      filtered = filtered.filter(project => project.serviceId === serviceId);
    }
    
    return filtered.sort((a, b) => new Date(b.completionDate).getTime() - new Date(a.completionDate).getTime());
  }

  // Search functionality
  public searchContent(query: string): {
    courses: Course[];
    tutorials: Tutorial[];
    articles: Article[];
    projects: ServiceProject[];
  } {
    const lowerQuery = query.toLowerCase();
    
    return {
      courses: this.courses.filter(course => 
        course.isPublished && (
          course.title.toLowerCase().includes(lowerQuery) ||
          course.description.toLowerCase().includes(lowerQuery) ||
          course.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
        )
      ),
      tutorials: this.tutorials.filter(tutorial => 
        tutorial.isPublished && (
          tutorial.title.toLowerCase().includes(lowerQuery) ||
          tutorial.description.toLowerCase().includes(lowerQuery) ||
          tutorial.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
        )
      ),
      articles: this.articles.filter(article => 
        article.isPublished && (
          article.title.toLowerCase().includes(lowerQuery) ||
          article.description.toLowerCase().includes(lowerQuery) ||
          article.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
        )
      ),
      projects: this.serviceProjects.filter(project => 
        project.isPublished && (
          project.title.toLowerCase().includes(lowerQuery) ||
          project.description.toLowerCase().includes(lowerQuery) ||
          project.technologies.some(tech => tech.toLowerCase().includes(lowerQuery))
        )
      )
    };
  }

  // Mock data loaders (these would be replaced with API calls in production)
  private loadMockCourses() {
    this.courses = [
      {
        id: 'ai-mastery',
        title: 'Complete AI Solutions Mastery',
        description: 'Comprehensive course covering AI implementation, automation, and business integration.',
        instructor: 'Son Pham',
        duration: '12 hours',
        lessons: 24,
        students: 1250,
        rating: 4.8,
        price: '$199',
        thumbnail: '/images/course-ai-mastery.jpg',
        level: 'intermediate',
        category: 'aiAutomation',
        videoUrl: 'https://youtube.com/playlist?list=example1',
        syllabus: ['AI Fundamentals', 'Business Process Automation', 'No-code Solutions', 'Advanced AI Integration'],
        tags: ['AI', 'Automation', 'Business', 'No-code'],
        publishDate: '2024-01-15',
        isPublished: true
      },
      {
        id: 'video-production',
        title: 'Professional Video Production',
        description: 'Learn professional video production from pre-production to final delivery.',
        instructor: 'Creative Director',
        duration: '18 hours',
        lessons: 36,
        students: 890,
        rating: 4.9,
        price: '$299',
        thumbnail: '/images/course-video-production.jpg',
        level: 'beginner',
        category: 'videoProduction',
        videoUrl: 'https://drive.google.com/drive/folders/example2',
        tags: ['Video', 'Production', 'Editing', 'Creative'],
        publishDate: '2024-01-10',
        isPublished: true
      }
    ];
  }

  private loadMockTutorials() {
    this.tutorials = [
      {
        id: 'ai-automation-basics',
        title: 'Getting Started with AI Automation',
        description: 'Learn the basics of implementing AI automation in your business workflow.',
        type: 'video',
        duration: '15 min',
        difficulty: 'beginner',
        thumbnail: '/images/tutorial-ai-basics.jpg',
        author: 'Son Pham',
        publishDate: '2024-01-15',
        tags: ['AI', 'Automation', 'Business'],
        videoUrl: 'https://youtube.com/watch?v=example1',
        documentUrl: 'https://notion.so/ai-automation-guide',
        isPublished: true
      },
      {
        id: 'video-editing-advanced',
        title: 'Advanced Video Editing Techniques',
        description: 'Master professional video editing with advanced techniques and tools.',
        type: 'video',
        duration: '25 min',
        difficulty: 'advanced',
        thumbnail: '/images/tutorial-video-editing.jpg',
        author: 'Creative Team',
        publishDate: '2024-01-10',
        tags: ['Video', 'Editing', 'Production'],
        videoUrl: 'https://drive.google.com/file/d/example2',
        downloadUrl: 'https://example.com/video-editing-assets.zip',
        isPublished: true
      }
    ];
  }

  private loadMockArticles() {
    this.articles = [
      {
        id: 'ai-trends-2024',
        title: 'AI Trends to Watch in 2024',
        description: 'Explore the latest trends in artificial intelligence and their impact on business.',
        content: 'Full article content here...',
        author: 'Son Pham',
        publishDate: '2024-01-20',
        lastModified: '2024-01-20',
        tags: ['AI', 'Trends', 'Technology'],
        category: 'Technology',
        thumbnail: '/images/article-ai-trends.jpg',
        readTime: '5 min read',
        isPublished: true,
        seoTitle: 'AI Trends 2024 - VizioCraft Design',
        seoDescription: 'Discover the latest AI trends that will shape business in 2024.'
      }
    ];
  }

  private loadMockServiceProjects() {
    this.serviceProjects = [
      {
        id: 'ai-chatbot-ecommerce',
        title: 'AI Chatbot for E-commerce Platform',
        description: 'Intelligent customer service chatbot with natural language processing.',
        serviceId: 'ai-solutions',
        thumbnail: '/images/project-ai-chatbot.jpg',
        images: ['/images/project-ai-chatbot-1.jpg', '/images/project-ai-chatbot-2.jpg'],
        technologies: ['OpenAI GPT', 'Node.js', 'React', 'MongoDB'],
        completionDate: '2024-01-15',
        clientName: 'TechStore Vietnam',
        isPublished: true
      },
      {
        id: 'corporate-video-series',
        title: 'Corporate Training Video Series',
        description: 'Professional video production for employee training and onboarding.',
        serviceId: 'video-production',
        thumbnail: '/images/project-corporate-video.jpg',
        images: ['/images/project-corporate-1.jpg', '/images/project-corporate-2.jpg'],
        technologies: ['Adobe Premiere Pro', 'After Effects', '4K Recording'],
        completionDate: '2024-01-10',
        clientName: 'Global Corp',
        isPublished: true
      }
    ];
  }
}

// Export singleton instance
export const contentManager = ContentManager.getInstance();

