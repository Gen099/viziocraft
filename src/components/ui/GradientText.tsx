import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({ 
  children, 
  variant = 'primary', 
  className = '' 
}) => {
  const getGradientClass = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent';
      case 'secondary':
        return 'bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent';
      case 'accent':
        return 'bg-gradient-to-r from-green-400 to-teal-600 bg-clip-text text-transparent';
      default:
        return 'bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent';
    }
  };

  return (
    <span className={`${getGradientClass()} ${className}`}>
      {children}
    </span>
  );
};
