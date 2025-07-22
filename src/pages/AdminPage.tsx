import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  EyeOff, 
  Upload, 
  Download,
  Search,
  Filter,
  BookOpen,
  Video,
  FileText,
  Briefcase
} from 'lucide-react';
import { contentManager, Course, Tutorial, Article, ServiceProject } from '../data/contentManager';

type ContentType = 'courses' | 'tutorials' | 'articles' | 'projects';

const AdminPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<ContentType>('courses');
  const [searchQuery, setSearchQuery] = useState('');
  const [showPublishedOnly, setShowPublishedOnly] = useState(false);

  // Get content based on active tab
  const getContent = () => {
    switch (activeTab) {
      case 'courses':
        return contentManager.getCourses({ published: showPublishedOnly || undefined });
      case 'tutorials':
        return contentManager.getTutorials({ published: showPublishedOnly || undefined });
      case 'articles':
        return contentManager.getArticles({ published: showPublishedOnly || undefined });
      case 'projects':
        return contentManager.getServiceProjects();
      default:
        return [];
    }
  };

  const filteredContent = getContent().filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTogglePublish = (id: string) => {
    // This would typically make an API call to update the publish status
    console.log(`Toggle publish status for ${activeTab} with id: ${id}`);
  };

  const handleEdit = (id: string) => {
    // This would open an edit modal or navigate to edit page
    console.log(`Edit ${activeTab} with id: ${id}`);
  };

  const handleDelete = (id: string) => {
    // This would show a confirmation dialog and then delete
    if (window.confirm(`Are you sure you want to delete this ${activeTab.slice(0, -1)}?`)) {
      console.log(`Delete ${activeTab} with id: ${id}`);
    }
  };

  const handleAddNew = () => {
    // This would open a create modal or navigate to create page
    console.log(`Add new ${activeTab.slice(0, -1)}`);
  };

  const handleImport = () => {
    // This would handle importing content from external sources
    console.log(`Import ${activeTab}`);
  };

  const handleExport = () => {
    // This would handle exporting content
    console.log(`Export ${activeTab}`);
  };

  const renderContentCard = (item: any) => {
    const isPublished = item.isPublished;
    
    return (
      <div key={item.id} className={`bg-gray-800 rounded-lg p-6 border ${isPublished ? 'border-green-500/20' : 'border-gray-700'}`}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm mb-3 line-clamp-2">{item.description}</p>
            
            {/* Metadata */}
            <div className="flex flex-wrap gap-2 text-xs text-gray-500">
              {item.author && <span>By: {item.author}</span>}
              {item.instructor && <span>Instructor: {item.instructor}</span>}
              {item.publishDate && <span>Published: {new Date(item.publishDate).toLocaleDateString()}</span>}
              {item.duration && <span>Duration: {item.duration}</span>}
              {item.students && <span>Students: {item.students}</span>}
              {item.rating && <span>Rating: {item.rating}/5</span>}
            </div>
          </div>
          
          <div className="flex items-center space-x-2 ml-4">
            <button
              onClick={() => handleTogglePublish(item.id)}
              className={`p-2 rounded-lg transition-colors ${
                isPublished 
                  ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' 
                  : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
              }`}
              title={isPublished ? 'Published' : 'Draft'}
            >
              {isPublished ? <Eye size={16} /> : <EyeOff size={16} />}
            </button>
            
            <button
              onClick={() => handleEdit(item.id)}
              className="p-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors"
              title="Edit"
            >
              <Edit size={16} />
            </button>
            
            <button
              onClick={() => handleDelete(item.id)}
              className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
              title="Delete"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
        
        {/* Tags */}
        {item.tags && (
          <div className="flex flex-wrap gap-1">
            {item.tags.slice(0, 3).map((tag: string, index: number) => (
              <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                {tag}
              </span>
            ))}
            {item.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                +{item.tags.length - 3} more
              </span>
            )}
          </div>
        )}
        
        {/* External Links */}
        <div className="mt-3 flex flex-wrap gap-2">
          {item.videoUrl && (
            <a 
              href={item.videoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-cyan-400 hover:text-cyan-300 underline"
            >
              Video Link
            </a>
          )}
          {item.documentUrl && (
            <a 
              href={item.documentUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-green-400 hover:text-green-300 underline"
            >
              Document Link
            </a>
          )}
          {item.downloadUrl && (
            <a 
              href={item.downloadUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-purple-400 hover:text-purple-300 underline"
            >
              Download Assets
            </a>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Content Management</h1>
            <p className="text-gray-400">Manage courses, tutorials, articles, and service projects</p>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={handleImport}
              className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
            >
              <Upload size={16} className="mr-2" />
              Import
            </button>
            <button
              onClick={handleExport}
              className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <Download size={16} className="mr-2" />
              Export
            </button>
            <button
              onClick={handleAddNew}
              className="flex items-center px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors"
            >
              <Plus size={16} className="mr-2" />
              Add New
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-6 bg-gray-800 p-1 rounded-lg">
          {[
            { id: 'courses', label: 'Courses', icon: BookOpen },
            { id: 'tutorials', label: 'Tutorials', icon: Video },
            { id: 'articles', label: 'Articles', icon: FileText },
            { id: 'projects', label: 'Projects', icon: Briefcase }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as ContentType)}
                className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                  activeTab === tab.id
                    ? 'bg-cyan-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                <Icon size={16} className="mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Filters and Search */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={`Search ${activeTab}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
              />
            </div>
            
            <label className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                checked={showPublishedOnly}
                onChange={(e) => setShowPublishedOnly(e.target.checked)}
                className="rounded border-gray-600 bg-gray-800 text-cyan-600 focus:ring-cyan-500"
              />
              <span>Published only</span>
            </label>
          </div>
          
          <div className="text-sm text-gray-400">
            {filteredContent.length} {activeTab} found
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map(renderContentCard)}
        </div>

        {/* Empty State */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <BookOpen size={48} className="mx-auto mb-4 opacity-50" />
              <p>No {activeTab} found</p>
              <p className="text-sm">Try adjusting your search or filters</p>
            </div>
            <button
              onClick={handleAddNew}
              className="mt-4 px-6 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors"
            >
              Create your first {activeTab.slice(0, -1)}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;

