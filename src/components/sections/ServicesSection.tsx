import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { GradientText } from '../ui/GradientText';
import { Brain, Video, Code, Megaphone, ArrowRight } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      id: 'ai-solutions',
      icon: <Brain className="w-8 h-8" />,
      title: t('services.aiSolutions.title'),
      description: t('services.aiSolutions.description'),
      features: t('services.aiSolutions.features', { returnObjects: true }) as string[],
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'video-production',
      icon: <Video className="w-8 h-8" />,
      title: t('services.videoProduction.title'),
      description: t('services.videoProduction.description'),
      features: t('services.videoProduction.features', { returnObjects: true }) as string[],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 'web-development',
      icon: <Code className="w-8 h-8" />,
      title: t('services.webDevelopment.title'),
      description: t('services.webDevelopment.description'),
      features: t('services.webDevelopment.features', { returnObjects: true }) as string[],
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 'digital-marketing',
      icon: <Megaphone className="w-8 h-8" />,
      title: t('services.digitalMarketing.title'),
      description: t('services.digitalMarketing.description'),
      features: t('services.digitalMarketing.features', { returnObjects: true }) as string[],
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section
      ref={ref}
      id="services"
      className="min-h-screen py-20 bg-gradient-to-br from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <GradientText variant="primary">{t('services.title')}</GradientText>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map(s => (
            <div
              key={s.id}
              className={`p-8 rounded-lg shadow-lg transition-transform
              duration-500 hover:-translate-y-2 bg-gradient-to-br ${s.gradient}`}
            >
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-200 mb-4">{s.description}</p>
              <ul className="text-gray-100 space-y-1 text-sm mb-6">
                {s.features.map(f => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <Link
                to={`/services/${s.id}`}
                className="inline-flex items-center text-white hover:underline"
              >
                {t('services.cta.learnMore')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
