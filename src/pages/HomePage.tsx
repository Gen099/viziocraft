import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';
import { useCompanyData } from '../hooks/useCompanyData';

const HomePage: React.FC = () => {
  const { data, loading, error } = useCompanyData();

  // Always render content with fallback data if needed
  const fallbackData = {
    company: {
      name: 'VizioCraft Design',
      tagline: 'AI & Media Technology Solutions',
      industry: 'Artificial Intelligence • Media Production • Automation',
      description: 'Chúng tôi cung cấp giải pháp AI tiên tiến, sản xuất media chuyên nghiệp và automation thông minh. Đối tác công nghệ đáng tin cậy giúp doanh nghiệp chuyển đổi số và tối ưu hóa quy trình kinh doanh.',
      stats: {
        projects_completed: '100+',
        satisfied_clients: '50+',
        years_experience: '5+',
        support_hours: '24/7'
      }
    }
  };

  const displayData = data || fallbackData;

  return (
    <div 
      className="relative z-10"
      style={{
        position: 'relative',
        zIndex: 10,
        display: 'block',
        visibility: 'visible',
        opacity: 1,
        minHeight: '100vh'
      }}
    >
      {/* Always render sections with data or fallback */}
      <HeroSection data={displayData} />
      <ServicesSection data={displayData} />
      <AboutSection data={displayData} />
      <ContactSection data={displayData} />
    </div>
  );
};

export default HomePage;

