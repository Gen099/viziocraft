import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Play, 
  Clock, 
  Users, 
  Star, 
  BookOpen, 
  Video, 
  FileText, 
  Download,
  Search,
  Filter,
  ExternalLink
} from 'lucide-react';
import { contentManager, Course, Tutorial, Article } from '../data/contentManager';

const LearningPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'courses' | 'tutorials' | 'articles'>('courses');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  // Get content from content manager
  const [courses, setCourses] = useState<Course[]>([]);
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Load content when component mounts
    setCourses(contentManager.getCourses({ published: true }));
    setTutorials(contentManager.getTutorials({ published: true }));
    setArticles(contentManager.getArticles({ published: true }));
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Filter content based on search and filters
  const getFilteredContent = () => {
    let content: any[] = [];
    
    switch (activeTab) {
      case 'courses':
        content = courses.filter(course => {
          const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                               course.description.toLowerCase().includes(searchQuery.toLowerCase());
          const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
          const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
          return matchesSearch && matchesCategory && matchesLevel;
        });
        break;
      case 'tutorials':
        content = tutorials.filter(tutorial => {
          const matchesSearch = tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                               tutorial.description.toLowerCase().includes(searchQuery.toLowerCase());
          const matchesLevel = selectedLevel === 'all' || tutorial.difficulty === selectedLevel;
          return matchesSearch && matchesLevel;
        });
        break;
      case 'articles':
        content = articles.filter(article => {
          const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                               article.description.toLowerCase().includes(searchQuery.toLowerCase());
          const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
          return matchesSearch && matchesCategory;
        });
        break;
    }
    
    return content;
  };

  const filteredContent = getFilteredContent();

  const renderCourseCard = (course: Course) => (
    <div key={course.id} className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
      <div className="relative">
        <img 
          src={course.thumbnail} 
          alt={course.title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.currentTarget.src = '/images/placeholder-course.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            course.level === 'beginner' ? 'bg-green-500/20 text-green-400' :
            course.level === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
            'bg-red-500/20 text-red-400'
          }`}>
            {course.level}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <Clock size={14} className="mr-1" />
                {course.duration}
              </div>
              <div className="flex items-center">
                <BookOpen size={14} className="mr-1" />
                {course.lessons} lessons
              </div>
            </div>
            {course.videoUrl && (
              <a 
                href={course.videoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-cyan-500 hover:bg-cyan-600 p-2 rounded-full transition-colors"
              >
                <Play size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{course.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center">
              <Users size={14} className="mr-1" />
              {course.students}
            </div>
            <div className="flex items-center">
              <Star size={14} className="mr-1 text-yellow-400" />
              {course.rating}
            </div>
          </div>
          <span className="text-cyan-400 font-semibold">{course.price}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {course.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="text-sm text-gray-400 mb-4">
          Instructor: <span className="text-white">{course.instructor}</span>
        </div>
        
        <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all">
          {t('learning.enrollNow') || 'Enroll Now'}
        </button>
      </div>
    </div>
  );

  const renderTutorialCard = (tutorial: Tutorial) => (
    <div key={tutorial.id} className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
      <div className="relative">
        <img 
          src={tutorial.thumbnail} 
          alt={tutorial.title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.currentTarget.src = '/images/placeholder-tutorial.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center ${
            tutorial.type === 'video' ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'
          }`}>
            {tutorial.type === 'video' ? <Video size={12} className="mr-1" /> : <FileText size={12} className="mr-1" />}
            {tutorial.type}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            tutorial.difficulty === 'beginner' ? 'bg-green-500/20 text-green-400' :
            tutorial.difficulty === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
            'bg-red-500/20 text-red-400'
          }`}>
            {tutorial.difficulty}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center text-sm">
              <Clock size={14} className="mr-1" />
              {tutorial.duration}
            </div>
            <div className="flex space-x-2">
              {tutorial.videoUrl && (
                <a 
                  href={tutorial.videoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-red-500 hover:bg-red-600 p-2 rounded-full transition-colors"
                  title="Watch Video"
                >
                  <Play size={16} />
                </a>
              )}
              {tutorial.downloadUrl && (
                <a 
                  href={tutorial.downloadUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 p-2 rounded-full transition-colors"
                  title="Download Assets"
                >
                  <Download size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {tutorial.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{tutorial.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tutorial.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <span>By: <span className="text-white">{tutorial.author}</span></span>
          <span>{new Date(tutorial.publishDate).toLocaleDateString()}</span>
        </div>
        
        <div className="flex space-x-2">
          {tutorial.documentUrl && (
            <a 
              href={tutorial.documentUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors text-center flex items-center justify-center"
            >
              <ExternalLink size={16} className="mr-2" />
              {t('learning.viewDocument') || 'View Document'}
            </a>
          )}
          {tutorial.videoUrl && (
            <a 
              href={tutorial.videoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors text-center flex items-center justify-center"
            >
              <Play size={16} className="mr-2" />
              {t('learning.watchVideo') || 'Watch Video'}
            </a>
          )}
        </div>
      </div>
    </div>
  );

  const renderArticleCard = (article: Article) => (
    <div key={article.id} className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
      <div className="relative">
        <img 
          src={article.thumbnail} 
          alt={article.title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.currentTarget.src = '/images/placeholder-article.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-medium">
            {article.category}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center justify-between text-white text-sm">
            <span>{article.readTime}</span>
            <span>{new Date(article.publishDate).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {article.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{article.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <span>By: <span className="text-white">{article.author}</span></span>
          <span>{article.readTime}</span>
        </div>
        
        <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-all">
          {t('learning.readArticle') || 'Read Article'}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t('learning.title') || 'Learning Center'}
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('learning.subtitle') || 'Expand your skills with our comprehensive courses, tutorials, and articles'}
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-1 bg-gray-800 p-1 rounded-lg">
            {[
              { id: 'courses', label: 'Courses', icon: BookOpen },
              { id: 'tutorials', label: 'Tutorials', icon: Video },
              { id: 'articles', label: 'Articles', icon: FileText }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center px-6 py-3 rounded-md transition-colors ${
                    activeTab === tab.id
                      ? 'bg-cyan-600 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  <Icon size={20} className="mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={t('learning.searchPlaceholder') || `Search ${activeTab}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
            />
          </div>
          
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
          >
            <option value="all">Tất cả cấp độ</option>
            <option value="beginner">Cơ bản</option>
            <option value="intermediate">Trung cấp</option>
            <option value="advanced">Nâng cao</option>
          </select>

          {(activeTab === 'courses' || activeTab === 'articles') && (
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="all">Tất cả danh mục</option>
              <option value="aiAutomation">AI & Automation</option>
              <option value="videoProduction">Video Production</option>
              <option value="webDevelopment">Web Development</option>
              <option value="digitalMarketing">Digital Marketing</option>
            </select>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map(item => {
            switch (activeTab) {
              case 'courses':
                return renderCourseCard(item as Course);
              case 'tutorials':
                return renderTutorialCard(item as Tutorial);
              case 'articles':
                return renderArticleCard(item as Article);
              default:
                return null;
            }
          })}
        </div>

        {/* Empty State */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <BookOpen size={48} className="mx-auto mb-4 opacity-50" />
              <p>{t('learning.noContent') || `No ${activeTab} found`}</p>
              <p className="text-sm">{t('learning.tryDifferentSearch') || 'Try adjusting your search or filters'}</p>
            </div>
          </div>
        )}

        {/* Admin Link */}
        <div className="text-center mt-12">
          <a 
            href="/admin" 
            className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white rounded-lg transition-colors"
          >
            <Filter size={16} className="mr-2" />
            Content Management
          </a>
        </div>
      </div>
    </div>
  );
};

export default LearningPage;

