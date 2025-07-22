import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { GradientText } from '../ui/GradientText';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const contacts = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: t('contact.info.email'),
      value: 'contact@viziocraft.design',
      link: 'mailto:contact@viziocraft.design'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: t('contact.info.phone'),
      value: '+848 68 68 99 12',
      link: 'tel:+84868689912'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: t('contact.info.address'),
      value: t('contact.info.addressValue'),
      link: undefined
    }
  ];

  return (
    <section ref={ref} id="contact" className="min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700
          ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <GradientText variant="primary">{t('contact.title')}</GradientText>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div
            className={`transition-all duration-1000 delay-200
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                {t('contact.form.title')}
              </h3>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-green-400">
                    {t('contact.form.success')}
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 text-sm mb-2">
                      {t('contact.form.name')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 rounded-md border border-gray-600
                      placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-300 text-sm mb-2">
                      {t('contact.form.email')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 rounded-md border border-gray-600
                      placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-gray-300 text-sm mb-2">
                    {t('contact.form.company')}
                  </label>
                  <input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700/50 rounded-md border border-gray-600
                    placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                    placeholder={t('contact.form.companyPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 text-sm mb-2">
                    {t('contact.form.message')} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 rounded-md border border-gray-600
                    placeholder-gray-400 resize-none focus:border-cyan-400 focus:outline-none"
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center bg-cyan-600 hover:bg-cyan-500
                  text-white font-medium px-6 py-3 rounded-md transition-colors disabled:opacity-60"
                >
                  {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                  <Send className="w-4 h-4 ml-2" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact info */}
          <div
            className={`transition-all duration-1000 delay-300
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                {t('contact.info.title')}
              </h3>

              {contacts.map(c => (
                <div key={c.label} className="flex items-start">
                  {c.icon}
                  <div className="ml-4">
                    <p className="font-medium text-white">{c.label}</p>
                    {c.link ? (
                      <a href={c.link} className="text-cyan-400 hover:underline">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Schedule */}
              <div>
                <p className="font-medium text-white mb-2">
                  {t('contact.info.hours')}
                </p>
                <ul className="text-gray-300 space-y-1">
                  <li>
                    {t('contact.info.schedule.weekdays')}{' '}
                    <span className="ml-1">{t('contact.info.schedule.weekdaysTime')}</span>
                  </li>
                  <li>
                    {t('contact.info.schedule.saturday')}{' '}
                    <span className="ml-1">{t('contact.info.schedule.saturdayTime')}</span>
                  </li>
                  <li>
                    {t('contact.info.schedule.sunday')}{' '}
                    <span className="ml-1">{t('contact.info.schedule.sundayTime')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
