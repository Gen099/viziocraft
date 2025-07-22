import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { GradientText } from '../components/ui/GradientText';
import { servicesData } from '../data/servicesData';

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const service = servicesData.find(s => s.id === serviceId);

  useEffect(() => window.scrollTo(0, 0), []);

  if (!service) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8">
        <h1 className="text-4xl font-bold mb-4">{t('notFound.service.title')}</h1>
        <div className="space-x-4">
          <Link to="/" className="text-cyan-400 hover:underline">{t('notFound.service.backHome')}</Link>
          <button onClick={() => navigate(-1)} className="text-cyan-400 hover:underline">
            {t('notFound.service.backServices')}
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 inline-flex items-center text-cyan-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('notFound.service.backServices')}
        </button>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <GradientText variant="primary">{t(`services.${service.id}.title`, service.name)}</GradientText>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          {t(`services.${service.id}.description`, service.description)}
        </p>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {service.projects.map(p => (
            <article key={p.id} className="bg-gray-800/60 rounded-lg overflow-hidden">
              <img src={p.image} alt={p.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{p.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-cyan-400 hover:underline"
                >
                  {t('services.cta.contact')}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServiceDetailPage;
