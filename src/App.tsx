import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import LearningPage from './pages/LearningPage';
import AdminPage from './pages/AdminPage';
import ThreeBackground from './components/ThreeBackground';
import P5Background from './components/P5Background';
import AIAssistant from './components/AIAssistant';
import { useAIAssistant } from './hooks/useAIAssistant';
import { useCompanyData } from './hooks/useCompanyData';
import './i18n';
import './App.css';
import './mobile-fix.css';

function App() {
  const { data, loading, error } = useCompanyData();
  const { isOpen, toggleAssistant } = useAIAssistant();

  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        {/* P5.js Background */}
        <P5Background />
        
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
            <Route path="/service/:serviceId" element={<ServiceDetailPage />} />
            <Route path="/learning" element={<LearningPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-900 border-t border-gray-800 py-8 relative z-10">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/images/logo-transparent.png" 
                alt="VizioCraft Design" 
                className="h-8 w-8 mr-3 rounded-lg"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                VizioCraft Design
              </span>
            </div>
            <p className="text-gray-400">
              © 2024 VizioCraft Design. Empowering Digital Innovation with AI & Media Technology.
            </p>
          </div>
        </footer>

        {/* AI Assistant */}
        {!isOpen && (
          <button
            onClick={toggleAssistant}
            className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-indigo-800 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        )}
        {isOpen && <AIAssistant isOpen={isOpen} onToggle={toggleAssistant} />}
      </div>
    </Router>
  );
}

export default App;

