import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NAVIGATION_ITEMS } from '../data/constants';
import { useSmoothScroll } from '../hooks/useScrollAnimation';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'home', label: t('nav.home'), path: '/' },
    { id: 'services', label: t('nav.services'), path: '/#services' },
    { id: 'learning', label: t('nav.learning'), path: '/learning' },
    { id: 'about', label: t('nav.about'), path: '/#about' },
  ];

  const handleNavClick = (item: typeof navigationItems[0]) => {
    if (item.path.startsWith('/#')) {
      // If we're not on home page, navigate to home first
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          scrollToSection(item.id);
        }, 100);
      } else {
        scrollToSection(item.id);
      }
    } else {
      navigate(item.path);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-cyan-400/20' 
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Company Logo */}
          <Link 
            to="/"
            className="flex items-center cursor-pointer flex-shrink-0"
          >
            <img 
              src="/images/logo-transparent.png" 
              alt="VizioCraft Design" 
              className="h-8 w-8 sm:h-10 sm:w-10 mr-2 sm:mr-3 rounded-lg flex-shrink-0"
            />
            <span className="text-lg sm:text-xl font-bold text-white truncate">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                VizioCraft Design
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className="
                  text-gray-300 hover:text-cyan-400 transition-all duration-300
                  relative group py-2 px-3 font-medium
                "
              >
                {item.label}
                <span className="
                  absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500
                  group-hover:w-full transition-all duration-300
                " />
              </button>
            ))}
          </div>

          {/* Language Switcher & CTA - Desktop Only */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={() => {
                if (location.pathname !== '/') {
                  navigate('/');
                  setTimeout(() => {
                    scrollToSection('contact');
                  }, 100);
                } else {
                  scrollToSection('contact');
                }
              }}
              className="
                bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 sm:px-6 py-2 rounded-full
                hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300
                hover:scale-105 font-medium text-sm sm:text-base
              "
            >
              {t('nav.contactNow')}
            </button>
          </div>

          {/* Mobile Menu Button Only */}
          <div className="flex items-center md:hidden">
            <button
              className="text-white hover:text-cyan-400 transition-colors flex-shrink-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-cyan-400/20">
            <div className="px-4 pt-4 pb-4 space-y-3">
              {/* Language Switcher in Mobile Menu */}
              <div className="flex justify-center mb-4">
                <LanguageSwitcher />
              </div>
              
              {/* Navigation Items */}
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className="
                    block w-full text-center px-4 py-3 text-gray-300
                    hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg
                    transition-all duration-300 font-medium
                  "
                >
                  {item.label}
                </button>
              ))}
              
              {/* Contact CTA in Mobile Menu */}
              <button
                onClick={() => {
                  if (location.pathname !== '/') {
                    navigate('/');
                    setTimeout(() => {
                      scrollToSection('contact');
                    }, 100);
                  } else {
                    scrollToSection('contact');
                  }
                  setIsMobileMenuOpen(false);
                }}
                className="
                  block w-full text-center px-4 py-3 mt-4
                  bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg
                  hover:shadow-lg transition-all duration-300 font-medium
                "
              >
                {t('nav.contactNow')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;