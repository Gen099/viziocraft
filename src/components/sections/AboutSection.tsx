import React from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { GradientText } from '../ui/GradientText';
import { Users, Target, Lightbulb } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useTranslation();

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.desc')
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: t('about.values.quality.title'),
      description: t('about.values.quality.desc')
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('about.values.partnership.title'),
      description: t('about.values.partnership.desc')
    }
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen py-20 bg-gradient-to-br from-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-opacity duration-700
          ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <GradientText variant="primary">{t('about.title')}</GradientText>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Values */}
        <div className="grid gap-8 md:grid-cols-3">
          {values.map(v => (
            <div
              key={v.title}
              className="bg-gray-800 p-8 rounded-lg shadow-lg
              transition-transform duration-500 hover:-translate-y-2"
            >
              <div className="mb-4">{v.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{v.title}</h3>
              <p className="text-gray-400">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
