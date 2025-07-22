import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { servicesData } from '../data/servicesData';
import { GradientText } from '../components/ui/GradientText';

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <GradientText variant="primary">{t('services.title')}</GradientText>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map(s => (
            <article
              key={s.id}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900
              rounded-xl border border-transparent hover:border-cyan-400/50
              transition-all duration-500 hover:scale-105"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {t(`services.${s.id}.title`, s.name)}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {t(`services.${s.id}.description`, s.description)}
                </p>
                <Link
                  to={`/services/${s.id}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {t('services.cta.learnMore')}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
