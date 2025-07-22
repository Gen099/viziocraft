import React from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { GradientText } from '../ui/GradientText';
import { ArrowDown, Play, Zap, Users, Award } from 'lucide-react';
import { useSmoothScroll } from '../../hooks/useScrollAnimation';
import ThreeBackground from '../ThreeBackground';

interface HeroSectionProps {
  data: any;
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();
  const { scrollToSection } = useSmoothScroll();

  if (!data?.company) return null;

  const { company } = data;

  return (
    <section 
      ref={ref}
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      {/* Three.js Background */}
      <ThreeBackground />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-green-500/10" />
      
      {/* Additional animated particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      <div className={`
        relative z-10 text-center max-w-6xl mx-auto px-4
        transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}>


        {/* Company Name */}
        <h1 className={`
          text-5xl md:text-7xl lg:text-8xl font-bold mb-4
          transition-all duration-1000 delay-400
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <GradientText variant="primary" className="block">
            VizioCraft Design
          </GradientText>
        </h1>

        {/* Tagline */}
        <h2 className={`
          text-2xl md:text-3xl lg:text-4xl text-purple-400 mb-8 font-light
          transition-all duration-1000 delay-600
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          {t('hero.tagline')}
        </h2>

        {/* Description */}
        <p className={`
          text-gray-300 text-lg md:text-xl max-w-4xl mx-auto mb-12 leading-relaxed
          transition-all duration-1000 delay-1000
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          {t('hero.description')}
        </p>

        {/* Stats */}
        <div className={`
          grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto
          transition-all duration-1000 delay-1200
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">
              100+
            </div>
            <div className="text-sm text-gray-400">
              {t('hero.stats.projectsCompleted')}
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">
              50+
            </div>
            <div className="text-sm text-gray-400">
              {t('hero.stats.clientsServed')}
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">
              5+
            </div>
            <div className="text-sm text-gray-400">
              {t('hero.stats.yearsExperience')}
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">
              24/7
            </div>
            <div className="text-sm text-gray-400">
              {t('hero.stats.teamMembers')}
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`
          flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6
          transition-all duration-1000 delay-1400
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <button
            onClick={() => scrollToSection('services')}
            className="
              group relative inline-flex items-center px-8 py-4 text-lg font-semibold
              text-white bg-gradient-to-r from-cyan-500 to-blue-600
              rounded-full shadow-2xl shadow-cyan-500/25
              hover:shadow-cyan-500/40 transition-all duration-300
              hover:scale-105 transform
            "
          >
            <Zap className="mr-2" size={20} />
            {t('hero.cta.exploreServices')}
          </button>
          
          <button
            onClick={() => scrollToSection('about')}
            className="
              group relative inline-flex items-center px-8 py-4 text-lg font-semibold
              text-cyan-400 border-2 border-cyan-400 rounded-full
              hover:bg-cyan-400 hover:text-gray-900
              transition-all duration-300 hover:scale-105 transform
            "
          >
            <Users className="mr-2" size={20} />
            {t('hero.cta.aboutUs')}
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`
        absolute bottom-8 left-1/2 transform -translate-x-1/2
        transition-all duration-1000 delay-1600
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}>
        <div className="animate-bounce">
          <ArrowDown className="text-cyan-400" size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;